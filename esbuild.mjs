import esbuild from 'esbuild';
import { commonjs } from '@hyrious/esbuild-plugin-commonjs';
import cssModules from '@umami/esbuild-plugin-css-modules';
import svgr from 'esbuild-plugin-svgr'

const config = {
  entryPoints: ['src/components/index.ts'],
  bundle: true,
  external: ['react', 'react-dom', 'react-jsx/runtime'],
  jsx: 'automatic',
  plugins: [commonjs(), cssModules(), svgr()],
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
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
