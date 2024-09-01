import { ReactNode } from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { HiMiniWifi } from 'react-icons/hi2';
import { IoRocketSharp } from 'react-icons/io5';
import { MdFormatAlignCenter, MdFormatAlignLeft, MdFormatAlignRight } from 'react-icons/md';
import * as Components from '@/components';
import * as Examples from './examples';
import { Example } from './docs/Example';

const { Heading } = Components;

const components = {
  ...Components,
  ...Examples,
  Example,
  WifiIcon: HiMiniWifi,
  RocketIcon: IoRocketSharp,
  AlignCenter: MdFormatAlignCenter,
  AlignLeft: MdFormatAlignLeft,
  AlignRight: MdFormatAlignRight,
  h1: ({ children }: { children: ReactNode }) => <Heading size={6}>{children}</Heading>,
  h2: ({ children }: { children: ReactNode }) => <Heading size={5}>{children}</Heading>,
  h3: ({ children }: { children: ReactNode }) => <Heading size={4}>{children}</Heading>,
  h4: ({ children }: { children: ReactNode }) => <Heading size={3}>{children}</Heading>,
  h5: ({ children }: { children: ReactNode }) => <Heading size={2}>{children}</Heading>,
  h6: ({ children }: { children: ReactNode }) => <Heading size={1}>{children}</Heading>,
};

export function Markdown({ children }: { children: any }) {
  return <MDXRemote source={children} components={components as any} />;
}
