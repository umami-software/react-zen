import type { NextConfig } from 'next';
import nextra from 'nextra';

const withNextra = nextra({});

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [{ source: '/z.js', destination: 'https://cloud.umami.is/script.js' }];
  },
};

export default withNextra(nextConfig);
