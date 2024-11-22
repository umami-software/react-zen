import fs from 'node:fs/promises';
import path from 'node:path';
import esbuild from 'esbuild';
import { commonjs } from '@hyrious/esbuild-plugin-commonjs';

const config = {
  entryPoints: ['src/components/index.ts'],
  bundle: true,
  external: ['react', 'react-dom', 'react-jsx/runtime'],
  jsx: 'automatic',
};

async function concatFiles(filePaths, destFile) {
  const output = [];

  for (const filePath of filePaths) {
    const content = await fs.readFile(filePath, 'utf-8');
    output.push(content);
  }

  const dir = path.dirname(destFile);
  await fs.mkdir(dir, { recursive: true });

  await fs.writeFile(destFile, output.join('\n'), 'utf-8');
}

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
    plugins: [commonjs()],
  })
  .then(async () => {
    await concatFiles(
      [
        './src/styles/zen.css',
        './src/styles/reset.css',
        './src/styles/global.css',
        './dist/index.css',
      ],
      './dist/styles.css',
    );
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
