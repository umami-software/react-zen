import { MDXRemote } from 'next-mdx-remote/rsc';
import * as zen from '@/components';
import { Demo } from './docs/Demo';
import Logo from '../assets/logo.svg';

const components = { ...zen, Demo, Logo };

export default function Markdown({ children }: { children: any }) {
  return <MDXRemote source={children} components={components} />;
}
