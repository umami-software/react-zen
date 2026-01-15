import { HTMLAttributes } from 'react';
import { FontWeight, Responsive, TextWrap } from '@/lib/types';
import { Slot } from './Slot';
import { cn } from './lib/tailwind';

export interface BlockquoteProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  weight?: Responsive<FontWeight>;
  wrap?: Responsive<TextWrap>;
  className?: string;
}

export function Blockquote({ asChild, className, children }: BlockquoteProps) {
  const Component = asChild ? Slot : 'blockquote';

  return (
    <Component className={cn('border-l-2 border-gray-900 dark:border-gray-100 pl-5', className)}>
      {children}
    </Component>
  );
}
