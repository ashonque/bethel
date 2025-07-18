/** @type {import('next').NextConfig} */
const nextConfig = {
  // Increase static generation timeout
  staticPageGenerationTimeout: 300, // 5 minutes instead of default 60 seconds

  // Optimize build performance
  experimental: {
    // Reduce memory usage during build
    workerThreads: false,
    // Enable build cache
    isrMemoryCacheSize: 0,
  },

  // Disable source maps in production to speed up builds
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
