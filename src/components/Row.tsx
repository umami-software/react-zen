import type { ReactNode } from 'react';
import { Flexbox, FlexboxProps } from './Flexbox';

interface RowProps extends FlexboxProps {
  children?: ReactNode;
  reverse?: boolean;
}

function Row({ reverse, children, ...props }: RowProps) {
  return (
    <Flexbox {...props} direction={reverse ? 'row-reverse' : 'row'}>
      {children}
    </Flexbox>
  );
}

export { Row };
export type { RowProps };
