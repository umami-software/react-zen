import { MDXRemote } from 'next-mdx-remote/rsc';
import { HiMiniWifi } from 'react-icons/hi2';
import { IoRocketSharp } from 'react-icons/io5';
import { MdFormatAlignCenter, MdFormatAlignLeft, MdFormatAlignRight } from 'react-icons/md';
import * as Components from '@/components';
import { CodeBlock } from '@/components/CodeBlock';
import { Code } from '@/components';
import * as Examples from './examples';
import { Example } from './docs/Example';

const components = {
  ...Components,
  ...Examples,
  Example,
  WifiIcon: HiMiniWifi,
  RocketIcon: IoRocketSharp,
  AlignCenter: MdFormatAlignCenter,
  AlignLeft: MdFormatAlignLeft,
  AlignRight: MdFormatAlignRight,
  pre: CodeBlock,
  code: Code,
};

export function Markdown({ children }: { children: any }) {
  return <MDXRemote source={children} components={components as any} />;
}
