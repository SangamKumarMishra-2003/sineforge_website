import type { NextConfig } from "next";


const nextConfig: NextConfig = {

  reactStrictMode: true,


  images: {

    remotePatterns: [

      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },

      {
        protocol: "https",
        hostname: "github.com",
      },

    ],

  },


  typedRoutes: true,


  eslint: {

    ignoreDuringBuilds: true,

  },


  typescript: {

    ignoreBuildErrors: false,

  },


};


export default nextConfig;