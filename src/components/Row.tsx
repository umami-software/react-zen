import { Flexbox, FlexboxProps } from './Flexbox';

interface RowProps extends FlexboxProps {
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
