import type { Config } from 'tailwindcss';
import rootConfig from '../tailwind.config';

const config: Config = {
  ...rootConfig,
  content: ['./app/**/*.{ts,tsx}', '../src/components/**/*.{ts,tsx}'],
};

export default config;
