import { MDXRemote } from 'next-mdx-remote/rsc';
import * as Zen from '@/components';
import { Demo } from './docs/Demo';
import Logo from '../assets/logo.svg';
import { ReactNode } from 'react';

const components = {
  ...Zen,
  Demo,
  Logo,
  h1: ({ children }: { children: ReactNode }) => <Zen.Heading size={6}>{children}</Zen.Heading>,
  h2: ({ children }: { children: ReactNode }) => <Zen.Heading size={5}>{children}</Zen.Heading>,
  h3: ({ children }: { children: ReactNode }) => <Zen.Heading size={4}>{children}</Zen.Heading>,
  h4: ({ children }: { children: ReactNode }) => <Zen.Heading size={3}>{children}</Zen.Heading>,
  h5: ({ children }: { children: ReactNode }) => <Zen.Heading size={2}>{children}</Zen.Heading>,
  h6: ({ children }: { children: ReactNode }) => <Zen.Heading size={1}>{children}</Zen.Heading>,
};

export default function Markdown({ children }: { children: any }) {
  return <MDXRemote source={children} components={components as any} />;
}
