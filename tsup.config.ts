// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/components/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  skipNodeModulesBundle: true,
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    'react-aria-components',
    'react-hook-form',
    'zustand',
    '@react-spring/web',
    '@internationalized/date',
    '@react-aria/focus',
    'tailwind-merge',
    'tailwind-variants',
    'lucide-react',
    /\.css$/,
  ],
  esbuildPlugins: [
    {
      name: 'ignore-css',
      setup(build) {
        build.onResolve({ filter: /\.css$/ }, () => ({
          path: 'noop.css',
          namespace: 'ignore-css',
        }));
        build.onLoad({ filter: /.*/, namespace: 'ignore-css' }, () => ({
          contents: '',
        }));
      },
    },
  ],
  esbuildOptions(options) {
    options.sourceRoot = '/';
    options.sourcesContent = false;
  },
  outDir: 'dist',
});
