import type { ReactNode } from 'react';
import { Flexbox, type FlexboxProps } from './Flexbox';

export interface ColumnProps extends FlexboxProps {
  children?: ReactNode;
  reverse?: boolean;
}

export function Column({ reverse, children, ...props }: ColumnProps) {
  return (
    <Flexbox {...props} direction={reverse ? 'column-reverse' : 'column'}>
      {children}
    </Flexbox>
  );
}
