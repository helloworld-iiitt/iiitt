import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import nextConfig from "../../../next.config";
import "./MainCarousel.css";

interface ImageData {
  path: string;
  name: string;
}

interface CarouselProps {
  images: ImageData[];
}

const MainCarousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <Carousel infiniteLoop showThumbs={false} autoPlay stopOnHover={false} interval={4000}>
      {images.map((image, index) => {
        const imageUrl = `${nextConfig.env?.IMAGE}/${(image.path)}`;
        //console.log(`Image URL [${index}]:`, imageUrl);

        return (
          <div key={index}>
            <Image
              src={imageUrl}
              alt={image.name}
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <p className="legend">{image.name}</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default MainCarousel;
