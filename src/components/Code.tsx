import { HTMLAttributes } from 'react';
import { FontWeight, Responsive, TextWrap } from '@/lib/types';
import { Slot } from './Slot';
import { cn } from './lib/tailwind';

export interface CodeProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  weight?: Responsive<FontWeight>;
  wrap?: Responsive<TextWrap>;
  className?: string;
}

export function Code({ asChild, className, children }: CodeProps) {
  const Component = asChild ? Slot : 'code';

  return (
    <Component
      className={cn(
        'font-mono text-sm font-medium bg-gray-100 dark:bg-gray-800 rounded p-1',
        className,
      )}
    >
      {children}
    </Component>
  );
}
