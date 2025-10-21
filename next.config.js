/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/portafolio',
  assetPrefix: '/portafolio/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
