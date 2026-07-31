/** @type {import('next').NextConfig} */
const repoBasePath = '/nxt-pax-packs'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
