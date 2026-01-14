import fs from 'node:fs/promises';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

async function buildCSS() {
  // Process Tailwind CSS
  const tailwindInput = await fs.readFile('./src/styles/tailwind.css', 'utf-8');
  const result = await postcss([tailwindcss, autoprefixer]).process(tailwindInput, {
    from: './src/styles/tailwind.css',
  });

  // For now, keep zen.css for components not yet migrated
  const zenCSS = await fs.readFile('./src/styles/zen.css', 'utf-8');

  // Combine: zen.css variables + Tailwind output
  const output = zenCSS + '\n' + result.css;

  await fs.writeFile('./styles.css', output, 'utf-8');
  console.log('CSS build complete: styles.css');
}

buildCSS().catch(err => {
  console.error('CSS build failed:', err);
  process.exit(1);
});
