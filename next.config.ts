import type { NextConfig } from 'next'

/** Project Pages live at https://ternuraa.github.io/PersonalSite/ */
const repo = 'PersonalSite'
const useGhPagesBase = process.env.GITHUB_PAGES === 'true'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: useGhPagesBase ? `/${repo}` : '',
  assetPrefix: useGhPagesBase ? `/${repo}/` : undefined,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
