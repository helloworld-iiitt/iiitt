"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import nextConfig from "../../../next.config";
import "./MainCarousel.css";
import { useState, useMemo } from "react";
import { CircularProgress } from "@mui/material";

interface ImageData {
  path: string;
  name: string;
}

interface CarouselProps {
  images: ImageData[];
  height?: number;
  imageFit?: any;
  repeat?: boolean;
}

const MainCarousel: React.FC<CarouselProps> = ({
  images,
  height,
  imageFit,
  repeat = true,
}) => {
  const [fallbackIndexes, setFallbackIndexes] = useState<number[]>([]);

  const handleImageError = (index: number) => {
    if (!fallbackIndexes.includes(index)) {
      setFallbackIndexes((prev) => [...prev, index]);
    }
  };

  const Images = useMemo(() => {
    if (!images || images.length === 0) return [];

    const firstFive = images.slice(0, 5);
    const rest = images.slice(5);
    return [...firstFive, ...(repeat ? firstFive : []), ...rest];
  }, [images, repeat]);

  return (
    <>
      {Images.length > 0 ? (
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          stopOnHover={false}
          interval={5000}
        >
          {Images.map((image, index) => {
            const imageUrl = `${nextConfig.env?.IMAGE}/${image.path}`;

            return (
              <div key={index}>
                <Image
                  src={imageUrl}
                  alt={image.name || "carousel image"}
                  width={800}
                  height={height ? height : 600}
                  className="w-full h-auto"
                  priority
                  onError={() => handleImageError(index)}
                  style={{ objectFit: imageFit ? imageFit : "fill" }}
                />
                <p className="legend">{image.name}</p>
              </div>
            );
          })}
        </Carousel>
      ) : (
        <div className="text-center">
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default MainCarousel;
