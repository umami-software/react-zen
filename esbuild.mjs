import esbuild from 'esbuild';
import fs from 'node:fs';

const config = {
  entryPoints: ['src/components/index.ts'],
  bundle: true,
  external: ['react', 'react-dom', 'react-jsx/runtime'],
};

esbuild
  .build({
    ...config,
    outfile: 'dist/index.js',
    format: 'cjs',
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
  })
  .then(() => {
    // Some modules use require so we need to polyfill for it
    const output = fs.readFileSync('dist/index.mjs', 'utf-8');

    fs.writeFileSync(
      'dist/index.mjs',
      [
        'import __React from "react";const require = () => __React;',
        output.replaceAll('"use client";', ''),
      ].join('\n'),
    );

    fs.renameSync('dist/index.css', 'dist/styles.css');

    // Include styles
    fs.copyFileSync('src/styles/zen.css', 'dist/zen.css');
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
