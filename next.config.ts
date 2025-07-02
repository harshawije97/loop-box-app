import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/./extension/' : '',
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
