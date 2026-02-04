import * as Lucide from 'lucide-react';
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';
import * as zenComponents from '@/components';
import * as examples from './app/examples';
import * as patterns from './app/patterns';

export function useMDXComponents(components: Record<string, unknown> = {}) {
  return getThemeComponents({
    ...components,
    ...zenComponents,
    ...examples,
    ...patterns,
    Lucide,
  });
}
