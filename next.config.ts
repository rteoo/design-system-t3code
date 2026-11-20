import type { NextConfig } from 'next'

const config: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.T3CODE_BASE_PATH || '',
}

export default config
