import classNames from 'classnames';
import { Spacing, Responsive } from '@/lib/types';
import { Box, BoxProps } from './Box';
import globalStyles from './global.module.css';
import styles from './Flexbox.module.css';

export type FlexDisplay = 'none' | 'flex' | 'inline-flex';
export type FlexDirection = 'column' | 'row' | 'row-reverse' | 'column-reverse';
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
export type JustifyContent =
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

export type JustifyItems =
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

export type AlignContent =
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

export type AlignItemns =
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

export interface FlexboxProps extends Omit<BoxProps, 'display'> {
  display?: Responsive<FlexDisplay>;
  direction?: Responsive<FlexDirection>;
  wrap?: Responsive<FlexWrap>;
  justifyContent?: Responsive<JustifyContent>;
  justifyItems?: Responsive<JustifyItems>;
  alignContent?: AlignContent;
  alignItems?: AlignItemns;
  gap?: Responsive<Spacing>;
}

export function Flexbox({
  display = 'flex',
  direction,
  wrap,
  justifyContent,
  justifyItems,
  alignContent,
  alignItems,
  gap,
  className,
  children,
  ...props
}: FlexboxProps) {
  return (
    <Box
      {...props}
      className={classNames(
        className,
        typeof display === 'string' && styles[`display-${display}`],
        typeof direction === 'string' && styles[direction],
        typeof wrap === 'string' && styles[wrap],
        typeof justifyContent === 'string' && styles[`justify-content-${replace(justifyContent)}`],
        typeof justifyItems === 'string' && styles[`justify-items-${replace(justifyItems)}`],
        alignContent && styles[`align-content-${replace(alignContent)}`],
        alignItems && styles[`align-items-${replace(alignItems)}`],
        typeof gap === 'string' && globalStyles[`gap-${gap}`],
      )}
    >
      {children}
    </Box>
  );
}

function replace(s: string) {
  return s.replace(' ', '-');
}
