import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  skipNodeModulesBundle: true,
  external: ['react', 'react-dom', 'react/jsx-runtime', 'tailwind-merge'],
  esbuildPlugins: [
    {
      name: 'ignore-css',
      setup(build) {
        build.onResolve({ filter: /\.css$/ }, args => ({
          path: args.path,
          external: true,
          sideEffects: false,
        }));
      },
    },
  ],
  onSuccess: async () => {
    const fs = await import('node:fs/promises');
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
