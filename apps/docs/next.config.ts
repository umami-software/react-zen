import type { NextConfig } from 'next';
import nextra from 'nextra';

const withNextra = nextra({
  defaultShowCopyCode: true,
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs',
        permanent: false,
      },
      // Legacy /patterns URLs (direct, no chains)
      {
        source: '/patterns/data-display/empty-state',
        destination: '/docs/components/empty',
        permanent: true,
      },
      {
        source: '/patterns/feedback/skeleton-loader',
        destination: '/docs/components/skeleton',
        permanent: true,
      },
      {
        source: '/patterns/layout/page-header',
        destination: '/docs/layout/page-header',
        permanent: true,
      },
      // Renamed pages — must precede the category wildcards to avoid redirect chains
      {
        source: '/docs/typography/kbd',
        destination: '/docs/components/kbd',
        permanent: true,
      },
      {
        source: '/docs/feedback-status/alert-banner',
        destination: '/docs/components/alert',
        permanent: true,
      },
      {
        source: '/docs/feedback-status/empty-state',
        destination: '/docs/components/empty',
        permanent: true,
      },
      // Old category URLs -> canonical /docs/components/*
      {
        source: '/docs/form-inputs/:slug',
        destination: '/docs/components/:slug',
        permanent: true,
      },
      {
        source: '/docs/actions-navigation/:slug',
        destination: '/docs/components/:slug',
        permanent: true,
      },
      {
        source: '/docs/feedback-status/:slug',
        destination: '/docs/components/:slug',
        permanent: true,
      },
      {
        source: '/docs/data-display/:slug',
        destination: '/docs/components/:slug',
        permanent: true,
      },
      // page-header stays under /docs/layout (was previously a rewrite)
      {
        source: '/docs/components/page-header',
        destination: '/docs/layout/page-header',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [{ source: '/z.js', destination: 'https://cloud.umami.is/script.js' }];
  },
};

export default withNextra(nextConfig);
