import type { ReactNode } from 'react';
import { cn } from './lib/tailwind';
import { Text, type TextProps } from './Text';

interface CodeProps extends Omit<TextProps, 'as'> {
  children?: ReactNode;
}

function Code({ className, children, ...props }: CodeProps) {
  return (
    <Text
      {...props}
      as="code"
      size="base"
      weight="medium"
      className={cn('font-mono bg-surface-sunken rounded p-1', className)}
    >
      {children}
    </Text>
  );
}

export { Code };
export type { CodeProps };
