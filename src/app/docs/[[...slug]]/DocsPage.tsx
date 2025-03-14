'use client';
import { Shiso } from '@umami/shiso';
import * as ExampleIcons from 'lucide-react';
import * as Components from '@/components';
import * as Examples from '@/app/examples';

const components = {
  ...Components,
  ...Examples,
  ExampleIcons,
};

export function DocsPage({ config, content }: any) {
  return <Shiso type={'docs'} content={content} config={config} components={components} />;
}
