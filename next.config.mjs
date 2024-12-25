export default {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    turbo: true,
  },
  async rewrites() {
    return [{ source: '/a/script.js', destination: 'https://tracker-script.umami.dev/' }];
  },
};
