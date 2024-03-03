import { create, props } from '@stylexjs/stylex';
import { theme } from '@/styles/vars.stylex';
import { ReactNode } from 'react';

export interface FlexboxProps {
  display?: 'flex' | 'inline-flex';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  justifyContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'left'
    | 'right'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center';
  alignContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center';
  alignItems?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'self-start'
    | 'self-end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center';
  gap?: number;
  order?: number;
  flex?: number;
  style?: any;
  children?: ReactNode;
}

export function Flexbox({
  display = 'flex',
  direction = 'row',
  wrap,
  justifyContent,
  alignContent,
  alignItems,
  gap,
  order,
  flex,
  style,
  children,
  ...attributes
}: FlexboxProps) {
  return (
    <div {...attributes} {...props(styles.box, styles[direction], style)}>
      {children}
    </div>
  );
}

export const styles = create({
  box: {
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
  },
  'row-reverse': {
    flexDirection: 'row-reverse',
  },
  column: {
    flexDirection: 'column',
  },
  'column-reverse': {
    flexDirection: 'column-reverse',
  },
});

export default Flexbox;
