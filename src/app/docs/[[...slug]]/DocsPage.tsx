'use client';
import { Shiso } from '@umami/shiso';
import * as ExampleIcons from 'lucide-react';
import * as Components from '@/components';
import { CodeBlock } from '@/components/CodeBlock';
import { Code } from '@/components';
import * as Examples from '@/app/examples';

const components = {
  ...Components,
  ...Examples,
  ExampleIcons,
  pre: CodeBlock,
  code: Code,
};

export function DocsPage({ config, content }: any) {
  return <Shiso type={'docs'} content={content} config={config} components={components} />;
}
