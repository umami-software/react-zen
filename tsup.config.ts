// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/components/index.ts'], // Your entry points
  format: ['cjs', 'esm'], // Output formats
  dts: { only: true }, // Generate declaration files (.d.ts)
  splitting: false,
  sourcemap: true,
  clean: true,
  // You might need to adjust external based on your package's dependencies
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  esbuildOptions(options) {
    options.sourceRoot = '/';
    options.sourcesContent = false;
  },
});
