import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.doggy.market",
        port: "",
        pathname: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
