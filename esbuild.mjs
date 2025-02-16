import esbuild from 'esbuild';
import { commonjs } from '@hyrious/esbuild-plugin-commonjs';
import cssModules from '@umami/esbuild-plugin-css-modules';
import svgr from 'esbuild-plugin-svgr';

const nullImportPlugin = ({ matches = [] }) => ({
  name: 'null-import',
  setup(build) {
    // Handle imports during resolution
    build.onResolve({ filter: /.*/ }, args => {
      if (matches.some(match => match.test(args.path))) {
        return {
          path: args.path,
          namespace: 'null-import',
        };
      }
      return null;
    });

    // Replace matched imports with undefined
    build.onLoad({ filter: /.*/, namespace: 'null-import' }, () => ({
      contents: `export default {};`,
      loader: 'js',
    }));
  },
});

const config = {
  entryPoints: ['src/components/index.ts'],
  bundle: true,
  external: ['react', 'react-dom', 'react-jsx/runtime'],
  jsx: 'automatic',
  plugins: [
    commonjs(),
    cssModules(),
    svgr(),
    //nullImportPlugin({ matches: [/[a-z]{2}-[A-Z]{2}/] }),
  ],
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
