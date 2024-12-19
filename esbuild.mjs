import esbuild from 'esbuild';
import { commonjs } from '@hyrious/esbuild-plugin-commonjs';
import cssModules from '@umami/esbuild-plugin-css-modules';

const config = {
  entryPoints: ['src/components/index.ts'],
  bundle: true,
  external: ['react', 'react-dom', 'react-jsx/runtime'],
  jsx: 'automatic',
};

esbuild
  .build({
    ...config,
    outfile: 'dist/index.js',
    format: 'cjs',
    plugins: [commonjs(), cssModules()],
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });

esbuild
  .build({
    ...config,
    outfile: 'dist/index.mjs',
    format: 'esm',
    plugins: [commonjs(), cssModules()],
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
