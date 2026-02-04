import fs from 'node:fs/promises';
import { execSync } from 'node:child_process';

// CSS files to concatenate for minimal build (theme + component animations)
const cssFiles = [
  './src/styles/theme.css',
  './src/components/Dots.css',
  './src/components/Modal.css',
  './src/components/Popover.css',
  './src/components/Spinner.css',
];

async function buildMinimalCSS() {
  const contents = await Promise.all(
    cssFiles.map(async file => {
      const content = await fs.readFile(file, 'utf-8');
      return `/* ${file} */\n${content}`;
    })
  );

  const output = contents.join('\n\n');
  await fs.writeFile('./styles.css', output, 'utf-8');
  console.log('CSS build complete: styles.css (minimal - for Tailwind users)');
}

async function buildFullCSS() {
  // Run Tailwind CLI to generate full CSS with all utilities
  execSync('npx @tailwindcss/cli -i ./src/styles/tailwind.css -o ./styles.full.css --minify', {
    stdio: 'inherit',
  });
  console.log('CSS build complete: styles.full.css (full - for non-Tailwind users)');
}

async function buildCSS() {
  await Promise.all([buildMinimalCSS(), buildFullCSS()]);
}

buildCSS().catch(err => {
  console.error('CSS build failed:', err);
  process.exit(1);
});
