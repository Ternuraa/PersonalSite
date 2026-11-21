import type { NextConfig } from 'next'

/** Custom domain www.lisavel.ru serves from site root — no /PersonalSite prefix */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  // VPN / open via 127.0.0.1 while Next prints localhost — allow HMR assets
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
  images: {
    unoptimized: true,
  },
}

export default nextConfig
