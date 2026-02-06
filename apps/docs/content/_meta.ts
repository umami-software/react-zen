export default {
  '*': {
    theme: {
      timestamp: false,
    },
  },
  index: {
    title: 'Home',
    type: 'page',
    theme: {
      layout: 'full',
      breadcrumb: false,
      sidebar: false,
      toc: false,
      timestamp: false,
      copyPage: false,
    },
  },
  docs: {
    title: 'Documentation',
    type: 'page',
  },
  playground: {
    title: 'Playground',
    type: 'page',
    theme: {
      layout: 'full',
      breadcrumb: false,
      sidebar: false,
      toc: false,
      timestamp: false,
    },
  },
  patterns: {
    title: 'Patterns',
    type: 'page',
  },
};
