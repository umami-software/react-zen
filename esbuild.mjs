import fs from 'node:fs';
import esbuild from 'esbuild';
import { commonjs } from '@hyrious/esbuild-plugin-commonjs';

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
    loader: {
      '.css': 'empty'
    },
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
    plugins: [commonjs()],
  })
  .then(() => {
    // Include styles
    fs.copyFileSync('src/styles/zen.css', 'dist/zen.css');
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
