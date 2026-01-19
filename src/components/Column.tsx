import type { ReactNode } from 'react';
import { Flexbox, FlexboxProps } from './Flexbox';

interface ColumnProps extends FlexboxProps {
  children?: ReactNode;
  reverse?: boolean;
}

function Column({ reverse, children, ...props }: ColumnProps) {
  return (
    <Flexbox {...props} direction={reverse ? 'column-reverse' : 'column'}>
      {children}
    </Flexbox>
  );
}

export { Column };
export type { ColumnProps };
