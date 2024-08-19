import path from 'path';
import crypto from 'crypto';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import svgr from '@svgr/rollup';

const md5 = str => crypto.createHash('md5').update(str).digest('hex');

const external = ['react', 'react-dom', 'react/jsx-runtime'];

const customResolver = resolve({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
});

const jsBundle = {
  input: 'src/components/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.mjs',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    del({ targets: 'dist/*', runOnce: true }),
    postcss({
      extract: 'styles.css',
      sourceMap: true,
      minimize: true,
      modules: {
        generateScopedName: function (name, filename, css) {
          const file = path.basename(filename, '.css').replace('.module', '');
          const hash = Buffer.from(md5(`${name}:${filename}:${css}`))
            .toString('base64')
            .substring(0, 5);

          return `${file}-${name}--${hash}`;
        },
      },
    }),
    svgr({ icon: true }),
    alias({
      entries: [
        { find: /^@/, replacement: path.resolve('./src') },
      ],
      customResolver,
    }),
    resolve(),
    commonjs(),
    esbuild(),
  ],
  external,
};

const dtsBundle = {
  input: 'src/components/index.ts',
  output: {
    file: 'dist/index.d.ts',
    format: 'es',
  },
  plugins: [
    alias({
      entries: [
        { find: /^@/, replacement: path.resolve('./src') },
      ],
      customResolver,
    }),
    resolve(),
    commonjs(),
    dts(),
  ],
  external: [/\.css/, ...external],
};

export default [jsBundle, dtsBundle];
