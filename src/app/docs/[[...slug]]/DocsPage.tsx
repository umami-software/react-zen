'use client';
import { HiMiniWifi } from 'react-icons/hi2';
import { IoRocketSharp } from 'react-icons/io5';
import { MdFormatAlignCenter, MdFormatAlignLeft, MdFormatAlignRight } from 'react-icons/md';
import * as Components from '@/components';
import { CodeBlock } from '@/components/CodeBlock';
import { Code } from '@/components';
import * as Examples from '@/app/examples';
import { Shiso } from '@umami/shiso';

const components = {
  ...Components,
  ...Examples,
  WifiIcon: HiMiniWifi,
  RocketIcon: IoRocketSharp,
  AlignCenter: MdFormatAlignCenter,
  AlignLeft: MdFormatAlignLeft,
  AlignRight: MdFormatAlignRight,
  pre: CodeBlock,
  code: Code,
};

export function DocsPage({ config, content }: any) {
  return <Shiso type={'docs'} content={content} config={config} components={components} />;
}
