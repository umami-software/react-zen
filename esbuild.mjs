import esbuild from 'esbuild';
import { commonjs } from '@hyrious/esbuild-plugin-commonjs';

// Plugin to ignore CSS imports (they're handled separately in styles.css)
const ignoreCssPlugin = {
  name: 'ignore-css',
  setup(build) {
    build.onResolve({ filter: /\.css$/ }, args => ({
      path: args.path,
      namespace: 'ignore-css',
    }));
    build.onLoad({ filter: /.*/, namespace: 'ignore-css' }, () => ({
      contents: '',
    }));
  },
};

const config = {
  entryPoints: ['src/components/index.ts'],
  bundle: true,
  external: ['react', 'react-dom', 'react-jsx/runtime'],
  jsx: 'automatic',
  plugins: [commonjs(), ignoreCssPlugin],
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
