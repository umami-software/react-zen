import fs from 'node:fs/promises';
import path from 'node:path';
import esbuild from 'esbuild';
import { commonjs } from '@hyrious/esbuild-plugin-commonjs';
import postcssModules from 'postcss-modules';
import postcss from 'postcss';
import crypto from 'node:crypto';

const md5 = str => crypto.createHash('md5').update(str).digest('hex');

const config = {
  entryPoints: ['src/components/index.ts'],
  bundle: true,
  external: ['react', 'react-dom', 'react-jsx/runtime'],
  jsx: 'automatic',
};

// Helper function to process CSS Modules
async function processCSSModules(css, filename) {
  let cssModulesJSON = {};

  const result = await postcss([
    postcssModules({
      generateScopedName: '[name]_[local]__[hash:base64:5]',
      getJSON: (cssFileName, json) => {
        cssModulesJSON = json;
      },
    }),
  ]).process(css, { from: filename });

  return {
    css: result.css,
    cssModulesJSON,
  };
}

// ESBuild plugin for CSS Modules
const cssModulesPlugin = {
  name: 'css-modules',
  setup(build) {
    // Store processed CSS content in memory
    const cssContents = new Map();

    build.onResolve({ filter: /\.module\.css$/ }, args => {
      return {
        path: path.resolve(args.resolveDir, args.path),
        namespace: 'css-modules',
      };
    });

    build.onLoad({ filter: /.*/, namespace: 'css-modules' }, async args => {
      const css = await fs.readFile(args.path, 'utf8');
      const { css: processedCSS, cssModulesJSON } = await processCSSModules(css, args.path);
      const key = `css:${md5(args.path)}`;

      // Store the processed CSS in memory
      cssContents.set(key, processedCSS);

      // Create a virtual module that exports the class names
      const virtualModule = `
        import "${key}";
        export default ${JSON.stringify(cssModulesJSON)};
      `;

      return {
        contents: virtualModule,
        loader: 'js',
        watchFiles: [args.path],
      };
    });

    // Handle the virtual CSS files
    build.onResolve({ filter: /^css:/ }, args => {
      return { path: args.path, namespace: 'virtual-css' };
    });

    build.onLoad({ filter: /.*/, namespace: 'virtual-css' }, args => {
      const css = cssContents.get(args.path);
      return {
        contents: css || '',
        loader: 'css',
      };
    });
  },
};

esbuild
  .build({
    ...config,
    outfile: 'dist/index.js',
    format: 'cjs',
    loader: {
      '.css': 'empty',
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
    plugins: [commonjs(), cssModulesPlugin],
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
