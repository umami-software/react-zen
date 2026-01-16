import { Flexbox, type FlexboxProps } from '@/components';

export function Example({
  direction = 'column',
  alignItems = 'center',
  justifyContent = 'center',
  gap = '3',
  padding = '8',
  marginY = '6',
  border = true,
  borderRadius = 'lg',
  minHeight = '300px',
  wrap = 'wrap',
  position = 'relative',
  overflow = 'hidden',
  backgroundColor = 'surface-base',
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
        backgroundColor,
      }}
    >
      {children}
    </Flexbox>
  );
}
