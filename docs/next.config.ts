import type { NextConfig } from 'next';
import nextra from 'nextra'

const withNextra = nextra({})

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withNextra(nextConfig);
