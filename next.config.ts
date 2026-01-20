import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: '/Portfolio', // ← ADD THIS LINE
  trailingSlash: true,    // ← Optional but helps
};

export default nextConfig;
