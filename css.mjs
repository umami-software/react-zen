import fs from 'node:fs/promises';

// CSS files to concatenate (theme + component animations)
const cssFiles = [
  './src/styles/theme.css',
  './src/components/Dots.css',
  './src/components/Modal.css',
  './src/components/Popover.css',
  './src/components/Spinner.css',
];

async function buildCSS() {
  const contents = await Promise.all(
    cssFiles.map(async file => {
      const content = await fs.readFile(file, 'utf-8');
      return `/* ${file} */\n${content}`;
    })
  );

  const output = contents.join('\n\n');
  await fs.writeFile('./styles.css', output, 'utf-8');
  console.log('CSS build complete: styles.css');
}

buildCSS().catch(err => {
  console.error('CSS build failed:', err);
  process.exit(1);
});
