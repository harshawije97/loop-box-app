import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/./out' : '',
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
