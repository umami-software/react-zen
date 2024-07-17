import { ReactNode } from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import * as Components from '@/components';
import * as Examples from './examples';
import { Example } from './docs/Example';
import { HiMiniWifi } from 'react-icons/hi2';

const { Heading } = Components;

const components = {
  ...Components,
  ...Examples,
  Example,
  ExampleIcon: HiMiniWifi,
  h1: ({ children }: { children: ReactNode }) => <Heading size={8}>{children}</Heading>,
  h2: ({ children }: { children: ReactNode }) => <Heading size={5}>{children}</Heading>,
  h3: ({ children }: { children: ReactNode }) => <Heading size={4}>{children}</Heading>,
  h4: ({ children }: { children: ReactNode }) => <Heading size={3}>{children}</Heading>,
  h5: ({ children }: { children: ReactNode }) => <Heading size={2}>{children}</Heading>,
  h6: ({ children }: { children: ReactNode }) => <Heading size={1}>{children}</Heading>,
};

export default function Markdown({ children }: { children: any }) {
  return <MDXRemote source={children} components={components as any} />;
}
