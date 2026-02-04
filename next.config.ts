import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/prsnl",
  assetPrefix: "/prsnl/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
