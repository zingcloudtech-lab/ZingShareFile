/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ZingShareFile',
  assetPrefix: '/ZingShareFile/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
