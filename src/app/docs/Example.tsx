import { Flexbox } from '@/components';
import { FlexboxProps } from '@/components/Flexbox';

export function Example({
  direction = 'column',
  alignItems = 'center',
  justifyContent = 'center',
  gap = '3',
  padding = '8',
  marginY = '8',
  borderSize = 'thin',
  borderRadius = '3',
  minHeight = '300px',
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
      }}
    >
      {children}
    </Flexbox>
  );
}
