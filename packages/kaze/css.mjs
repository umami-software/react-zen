import fs from 'node:fs/promises';
import { execSync } from 'node:child_process';

async function buildMinimalCSS() {
  const content = await fs.readFile('./src/styles/theme.css', 'utf-8');
  await fs.writeFile('./styles.css', `/* theme.css */\n${content}`, 'utf-8');
  console.log('CSS build complete: styles.css (minimal - for Tailwind users)');
}

async function buildFullCSS() {
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
