export default {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [{ source: '/a/script.js', destination: 'https://tracker-script.umami.dev/' }];
  },
};
