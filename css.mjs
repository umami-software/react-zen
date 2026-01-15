import fs from 'node:fs/promises';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

async function buildCSS() {
  // Process Tailwind CSS
  const tailwindInput = await fs.readFile('./src/styles/tailwind.css', 'utf-8');
  const result = await postcss([tailwindcss, autoprefixer]).process(tailwindInput, {
    from: './src/styles/tailwind.css',
  });

  await fs.writeFile('./styles.css', result.css, 'utf-8');
  console.log('CSS build complete: styles.css');
}

buildCSS().catch(err => {
  console.error('CSS build failed:', err);
  process.exit(1);
});
