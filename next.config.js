/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ZingShareFile',
  assetPrefix: '/ZingShareFile/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
