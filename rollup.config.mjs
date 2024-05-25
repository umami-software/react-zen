import path from 'node:path';
import stylexPlugin from '@stylexjs/rollup-plugin';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import svgr from '@svgr/rollup';

const config = {
  input: './src/components/index.ts',
  output: {
    file: './dist/bundle.js',
    format: 'es',
  },
  // Ensure that the stylex plugin is used before Babel
  plugins: [
    stylexPlugin({
      // Required. File path for the generated CSS file.
      fileName: './dist/stylex.css',
      // default: false
      dev: false,
      // prefix for all generated classNames
      classNamePrefix: 'zen',
      // Required for CSS variable support
      unstable_moduleResolution: {
        // type: 'commonJS' | 'haste'
        // default: 'commonJS'
        type: 'commonJS',
        // The absolute path to the root directory of your project
        rootDir: path.resolve('.'),
      },
      aliases: {
        '@/*': './src/*',
      },
    }),
    svgr({ icon: true }),
    alias({
      entries: [
        { find: /^@/, replacement: path.resolve('./src') },
      ],
    }),
    resolve(),
    commonjs(),
    esbuild(),
  ],
};

export default config;
