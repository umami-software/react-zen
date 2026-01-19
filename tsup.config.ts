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
  ],
  esbuildPlugins: [
    {
      name: 'ignore-css',
      setup(build) {
        // Mark CSS imports as external with empty content to strip them from bundle
        build.onResolve({ filter: /\.css$/ }, args => ({
          path: args.path,
          external: true,
          sideEffects: false,
        }));
      },
    },
  ],
  // Ignore CSS import warnings since we handle CSS separately via styles.css
  onSuccess: async () => {
    const fs = await import('node:fs/promises');
    // Remove CSS imports from the built files
    const files = ['dist/index.js', 'dist/index.mjs'];
    for (const file of files) {
      try {
        let content = await fs.readFile(file, 'utf-8');
        content = content.replace(/^import\s+['"]\.\/[^'"]+\.css['"];?\s*$/gm, '');
        content = content.replace(/^require\(['"]\.\/[^'"]+\.css['"]\);?\s*$/gm, '');
        await fs.writeFile(file, content);
      } catch (e) {
        // File might not exist yet
      }
    }
  },
  esbuildOptions(options) {
    options.sourceRoot = '/';
    options.sourcesContent = false;
  },
  outDir: 'dist',
});
