import Image from "next/image";
import nextConfig from "../../../next.config";

const Header: React.FC = () => {
  return (
    <div className="head-banner hidden-sm hidden-xs hidden-md">
      <center>
        <div className="w-[80%] max-w-[600px] min-w-[200px]">
          <Image
            src={`${nextConfig.env?.IMAGE}/logo-iiit-new.png`}
            alt="IIITT Logo"
            width={1080} // Set max width
            height={150}
            layout="responsive"
            className="w-full h-auto"
            priority
          />
        </div>
      </center>
    </div>
  );
};

export default Header;
