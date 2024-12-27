import { Flexbox } from '@/components';
import { FlexboxProps } from '@/components/Flexbox';

export function Example({
  direction = 'column',
  alignItems = 'center',
  justifyContent = 'center',
  gap = '3',
  padding = '8',
  marginY = '6',
  borderSize = '1',
  borderRadius = '3',
  minHeight = '300px',
  wrap = 'wrap',
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
        borderSize,
        borderRadius,
        marginY,
        minHeight,
        wrap,
      }}
    >
      {children}
    </Flexbox>
  );
}
