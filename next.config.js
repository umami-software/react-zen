const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  output: 'export',
  basePath: '/react-zen',
  images: {
    unoptimized: true,
  },
};

module.exports = withMDX(nextConfig);
