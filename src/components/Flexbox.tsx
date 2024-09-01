import { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Flexbox.module.css';

export interface FlexboxProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  justifyContent?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'safe center'
    | 'unsafe center';
  justifyItems?:
    | 'stretch'
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'left'
    | 'right'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center';
  alignContent?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'safe center'
    | 'unsafe center';
  alignItems?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'stretch'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center';
  alignSelf?:
    | 'center'
    | 'start'
    | 'end'
    | 'self-start'
    | 'self-end'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'stretch'
    | 'safe center'
    | 'unsafe center';
  inline?: boolean;
  gap?: string | number;
  order?: number;
  grow?: number;
  shrink?: number;
  basis?: string | number;
  spacing?: number;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

export function Flexbox({
  inline,
  direction,
  wrap,
  justifyContent,
  justifyItems,
  alignContent,
  alignItems,
  alignSelf,
  gap,
  order,
  grow,
  shrink,
  basis,
  spacing,
  style,
  className,
  children,
  ...attributes
}: FlexboxProps) {
  return (
    <div
      {...attributes}
      className={classNames(
        styles.flexbox,
        className,
        direction && styles[direction],
        wrap && styles[wrap],
        justifyContent && styles[`justify-content-${replace(justifyContent)}`],
        justifyItems && styles[`justify-items-${replace(justifyItems)}`],
        alignContent && styles[`align-content-${replace(alignContent)}`],
        alignItems && styles[`align-items-${replace(alignItems)}`],
        alignSelf && styles[`align-self-${replace(alignSelf)}`],
        inline && styles.inline,
        spacing && styles[`spacing${spacing}`],
      )}
      style={{ order, gap, flexBasis: basis, flexGrow: grow, flexShrink: shrink, ...style }}
    >
      {children}
    </div>
  );
}

function replace(s: string) {
  return s.replace(' ', '-');
}
