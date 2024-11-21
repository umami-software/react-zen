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
  try {
    let combinedContent = '';

    // Read each file and concatenate its content
    for (const filePath of filePaths) {
      const content = await fs.readFile(filePath, 'utf-8');
      combinedContent += content + '\n'; // Add a newline between files
    }

    // Ensure the destination directory exists
    const dir = path.dirname(destFile);
    await fs.mkdir(dir, { recursive: true });

    // Write the combined content to the destination file
    await fs.writeFile(destFile, combinedContent, 'utf-8');
    console.log(`Files concatenated into ${destFile}`);
  } catch (err) {
    console.error('Error concatenating files:', err);
  }
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
      ['./src/styles/zen.css', './src/styles/reset.css', './src/styles/global.css', './dist/index.css'],
      './styles/zen.css',
    );
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
