import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Multiple lockfiles exist above this app, so pin Turbopack to the app root.
    root: process.cwd(),
  },
};

export default nextConfig;
