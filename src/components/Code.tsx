import type { HTMLAttributes } from 'react';
import type { FontWeight, Responsive, TextWrap } from '@/lib/types';
import { cn } from './lib/tailwind';
import { Slot } from './Slot';

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
        'font-mono text-base font-medium bg-surface-sunken rounded p-1',
        className,
      )}
    >
      {children}
    </Component>
  );
}
