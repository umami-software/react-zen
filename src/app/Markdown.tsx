import { MDXRemote } from 'next-mdx-remote/rsc';
import * as components from '@/components';

export default function Markdown({ children }: { children: any }) {
  return <MDXRemote source={children} components={components} />;
}
