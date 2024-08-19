import esbuild from 'esbuild';

const config = {
  entryPoints: ['src/components/index.ts'],
  bundle: true,
  external: ['react', 'react-dom', 'react-jsx/runtime']
}

esbuild.build({
  ...config,
  outfile: 'dist/index.js',
  format: 'cjs',
}).catch(() => process.exit(1));

esbuild.build({
  ...config,
  outfile: 'dist/index.mjs',
  format: 'esm',
}).catch(() => process.exit(1));;