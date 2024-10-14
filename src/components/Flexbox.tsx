import { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import { Box, BoxProps } from './Box';
import styles from './Flexbox.module.css';

export interface FlexboxProps extends BoxProps {
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
  grow?: number;
  shrink?: number;
  basis?: string | number;
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
  grow,
  shrink,
  basis,
  spacing,
  style,
  className,
  children,
  ...props
}: FlexboxProps) {
  return (
    <Box
      {...props}
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
      )}
      style={{ flexBasis: basis, flexGrow: grow, flexShrink: shrink, ...style }}
    >
      {children}
    </Box>
  );
}

function replace(s: string) {
  return s.replace(' ', '-');
}
