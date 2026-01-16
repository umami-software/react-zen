import { cn } from './lib/tailwind';
import { Text, type TextProps } from './Text';

interface BlockquoteProps extends Omit<TextProps, 'as'> {}

function Blockquote({ className, children, ...props }: BlockquoteProps) {
  return (
    <Text
      {...props}
      as="blockquote"
      className={cn('border-l-2 border-edge-inverted pl-5', className)}
    >
      {children}
    </Text>
  );
}

export { Blockquote };
export type { BlockquoteProps };
