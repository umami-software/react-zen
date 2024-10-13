const dts = require('dts-bundle');

dts.bundle({
  name: '@umami/react-zen',
  main: 'types/index.d.ts',
  out: '../dist/index.d.ts',
});
