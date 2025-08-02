"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import nextConfig from "../../../next.config";
import "./MainCarousel.css";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

interface ImageData {
  path: string;
  name: string;
}

interface CarouselProps {
  images: ImageData[];
}

const MainCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [fallbackIndexes, setFallbackIndexes] = useState<number[]>([]);
  const handleImageError = (index: number) => {
    if (!fallbackIndexes.includes(index)) {
      setFallbackIndexes((prev) => [...prev, index]);
    }
  };

  return (
    <>
      {images?.length > 0 ? (
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          stopOnHover={false}
          interval={5000}
        >
          {images.map((image, index) => {
            const imageUrl =`${nextConfig.env?.IMAGE}/${image.path}`;

            return (
              <div key={index}>
                <Image
                  src={imageUrl}
                  alt={image.name || "carousel image"}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                  onError={() => handleImageError(index)}
                />
                <p className="legend">{image.name}</p>
              </div>
            );
          })}
        </Carousel>
      ) : (
        <div style={{"textAlign":"center"}}>
          <CircularProgress/>
        </div>
      )}
    </>
  );
};

export default MainCarousel;
