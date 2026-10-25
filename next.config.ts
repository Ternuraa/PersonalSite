import type { NextConfig } from 'next'

/** Custom domain www.lisavel.ru serves from site root — no /PersonalSite prefix */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
