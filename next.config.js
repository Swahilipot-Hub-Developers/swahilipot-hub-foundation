const path = require('path')
const dotenv = require('dotenv')
dotenv.config({ path: './.env.local' })

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com']
    // path: '/images',
    // loader: 'cloudinary',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig

// Injected content via Sentry wizard below

const { withSentryConfig } = require('@sentry/nextjs')

module.exports = withSentryConfig(
  module.exports,
  {
    silent: true,
    org: 'swahilipot-hub-foundation',
    project: 'swahilipot-web',
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    tunnelRoute: '/monitoring',
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  }
)
