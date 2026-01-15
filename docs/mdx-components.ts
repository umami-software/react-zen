import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme
import * as zenComponents from '../src/components';
import * as examples from './app/examples';
import * as ExampleIcons from 'lucide-react';

// Get the default MDX components
const themeComponents = getThemeComponents()

// Merge components
export function useMDXComponents(components: any) {
  return {
    ...themeComponents,
    ...components,
    ...zenComponents,
    ...examples,
    ExampleIcons
  }
}
