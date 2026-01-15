import type { HTMLAttributes, ReactNode } from 'react';
import type { FontWeight, Responsive, TextWrap } from '@/lib/types';
import { type RenderProp, resolveRender } from './lib/render';
import { cn } from './lib/tailwind';

export interface CodeProps extends HTMLAttributes<HTMLElement> {
  render?: RenderProp<CodeRenderProps>;
  weight?: Responsive<FontWeight>;
  wrap?: Responsive<TextWrap>;
  className?: string;
}

export interface CodeRenderProps {
  className: string;
  children?: ReactNode;
  [key: string]: unknown;
}

export function Code({ render, className, children, ...props }: CodeProps) {
  const classes = cn('font-mono text-base font-medium bg-surface-sunken rounded p-1', className);

  const renderProps: CodeRenderProps = {
    ...props,
    className: classes,
    children,
  };

  const defaultElement = (
    <code {...props} className={classes}>
      {children}
    </code>
  );

  return resolveRender(render, renderProps, defaultElement);
}
