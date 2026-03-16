import type { ReactNode } from 'react';
import { Flexbox, type FlexboxProps } from './Flexbox';

export interface RowProps extends FlexboxProps {
  children?: ReactNode;
  reverse?: boolean;
}

export function Row({ reverse, children, ...props }: RowProps) {
  return (
    <Flexbox {...props} direction={reverse ? 'row-reverse' : 'row'}>
      {children}
    </Flexbox>
  );
}
