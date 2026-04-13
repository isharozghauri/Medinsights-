import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Medinsights-",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
