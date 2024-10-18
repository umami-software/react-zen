const dts = require('dts-bundle');
const path = require('node:path');

dts.bundle({
  name: '@umami/react-zen',
  main: path.resolve(__dirname, 'types/components/index.d.ts'),
  out: path.resolve(__dirname, 'dist/index.d.ts'),
});
