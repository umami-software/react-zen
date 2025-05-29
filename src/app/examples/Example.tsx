import { Flexbox, FlexboxProps } from '@/components';

export function Example({
  direction = 'column',
  alignItems = 'center',
  justifyContent = 'center',
  gap = '3',
  padding = '8',
  marginY = '6',
  border = true,
  borderRadius = '3',
  minHeight = '300px',
  wrap = 'wrap',
  position = 'relative',
  overflow = 'hidden',
  children,
  ...props
}: FlexboxProps) {
  return (
    <Flexbox
      {...props}
      {...{
        direction,
        alignItems,
        justifyContent,
        gap,
        padding,
        border,
        borderRadius,
        marginY,
        minHeight,
        wrap,
        position,
        overflow,
      }}
    >
      {children}
    </Flexbox>
  );
}
