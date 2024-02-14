const path = require('node:path');
const stylexPlugin = require('@stylexjs/nextjs-plugin');
const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

module.exports = stylexPlugin({
  aliases: {
    '@/*': [path.join(__dirname, 'src/*')],
  },
  rootDir: __dirname,
})(withMDX(nextConfig));
