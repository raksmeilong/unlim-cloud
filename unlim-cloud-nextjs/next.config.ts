import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopack: {
      root: __dirname,
    },
  },
  images: {
    domains: ['az743702.vo.msecnd.net'],
    unoptimized: true,
  },
};

export default nextConfig;
