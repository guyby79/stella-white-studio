const basePath = "/stella-white-studio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages: the site is served from /stella-white-studio/
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  reactStrictMode: true,
  // Lets plain <img> tags (the logo) find files in /public under the base path
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
