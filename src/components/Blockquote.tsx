import type { HTMLAttributes, ReactNode } from 'react';
import type { FontWeight, Responsive, TextWrap } from '@/lib/types';
import { type RenderProp, resolveRender } from './lib/render';
import { cn } from './lib/tailwind';

export interface BlockquoteProps extends HTMLAttributes<HTMLElement> {
  render?: RenderProp<BlockquoteRenderProps>;
  weight?: Responsive<FontWeight>;
  wrap?: Responsive<TextWrap>;
  className?: string;
}

export interface BlockquoteRenderProps {
  className: string;
  children?: ReactNode;
  [key: string]: unknown;
}

export function Blockquote({ render, className, children, ...props }: BlockquoteProps) {
  const classes = cn('border-l-2 border-edge-inverted pl-5', className);

  const renderProps: BlockquoteRenderProps = {
    ...props,
    className: classes,
    children,
  };

  const defaultElement = (
    <blockquote {...props} className={classes}>
      {children}
    </blockquote>
  );

  return resolveRender(render, renderProps, defaultElement);
}
