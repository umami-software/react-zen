import { Flexbox, FlexboxProps } from './Flexbox';

interface ColumnProps extends FlexboxProps {
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

export default Column;
