import dts from 'dts-bundle';
import path from 'node:path';

dts.bundle({
  name: '@umami/react-zen',
  main: path.resolve('./types/components/index.d.ts'),
  out: path.resolve('./dist/index.d.ts'),
});
