const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    images: false,
  },
};

module.exports = nextConfig;
