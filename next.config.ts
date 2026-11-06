import type { NextConfig } from "next";

// GitHub Pages serves the site from /<repo-name>; CI sets this. Empty locally.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // GitHub Pages has no image optimization server.
  images: { unoptimized: true },
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
