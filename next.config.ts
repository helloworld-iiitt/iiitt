import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.NEXT_PUBLIC_IIITT_DOMAIN as string,
        port:'',
        pathname:'/images/**',
        search:''
      },
      {
        protocol: "http",
        hostname: process.env.NEXT_PUBLIC_IIITT_DOMAIN as string,
        port: '',
        pathname: '/downloads/**',
      },
    ],
    minimumCacheTTL: 60,
    formats: ["image/webp"],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  env: {
    OPEN_API_WEATHER: process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY,
    IMAGE: `${process.env.NEXT_PUBLIC_CDN_IIITT}${process.env.NEXT_PUBLIC_IMAGE_URL}`,
    DOCUMENT: `${process.env.NEXT_PUBLIC_CDN_IIITT}${process.env.NEXT_PUBLIC_DOCUMENT_URL}`,
  },
  productionBrowserSourceMaps: false,
compress: true,
output:"standalone"
};


export default nextConfig;
