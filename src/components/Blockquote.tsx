import type { ReactNode } from 'react';
import { cn } from './lib/tailwind';
import { Text, type TextProps } from './Text';

interface BlockquoteProps extends Omit<TextProps, 'as'> {
  children?: ReactNode;
}

function Blockquote({ className, children, ...props }: BlockquoteProps) {
  return (
    <Text {...props} as="blockquote" className={cn('border-l-2 border-primary pl-5', className)}>
      {children}
    </Text>
  );
}

export { Blockquote };
export type { BlockquoteProps };
