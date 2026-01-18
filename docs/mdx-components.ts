import * as Lucide from 'lucide-react';
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';
import * as zenComponents from '../src/components';
import * as examples from './app/examples';

export function useMDXComponents(components: Record<string, unknown> = {}) {
  return getThemeComponents({
    ...components,
    ...zenComponents,
    ...examples,
    Lucide,
  });
}
