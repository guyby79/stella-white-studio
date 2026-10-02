/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages: the site is served from /stella-white-studio/
  output: "export",
  images: { unoptimized: true },
  basePath: "/stella-white-studio",
  assetPrefix: "/stella-white-studio",
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
