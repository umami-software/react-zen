import path from 'path';
import crypto from 'crypto';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import esbuild from 'rollup-plugin-esbuild';
import svgr from '@svgr/rollup';

const md5 = str => crypto.createHash('md5').update(str).digest('hex');

const external = ['react', 'react-dom', 'react/jsx-runtime'];

const customResolver = resolve({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
});

const convertCase = str => {
  return str
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();
};

export default {
  input: 'src/components/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.mjs',
      format: 'es',
    },
  ],
  plugins: [
    del({ targets: 'dist/*', runOnce: true }),
    copy({ targets: [{ src: 'src/styles/zen.css', dest: 'dist' }] }),
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

          return `zen-${convertCase(file)}-${name}--${hash}`;
        },
      },
    }),
    svgr({ icon: true }),
    alias({
      entries: [{ find: /^@/, replacement: path.resolve('./src') }],
      customResolver,
    }),
    resolve(),
    commonjs(),
    esbuild(),
  ],
  external,
  onwarn(warning, warn) {
    // Ignore all warnings
    return;
  },
};
