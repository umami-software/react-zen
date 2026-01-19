import type { ReactNode } from 'react';
import type { HeadingSize, Responsive } from '@/lib/types';
import { cn, mapHeadingSize } from './lib/tailwind';
import { Text, type TextProps } from './Text';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps extends Omit<TextProps, 'as' | 'size'> {
  children?: ReactNode;
  size?: Responsive<HeadingSize>;
  as?: HeadingElement;
}

function Heading({
  size = '2xl',
  spacing = 'tight',
  as = 'h2',
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Text
      {...props}
      as={as}
      spacing={spacing}
      weight="semibold"
      className={cn(mapHeadingSize(size), className)}
    >
      {children}
    </Text>
  );
}

export { Heading };
export type { HeadingProps };
