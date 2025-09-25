import classNames from 'classnames';
import {
  Spacing,
  Responsive,
  FlexDisplay,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  JustifyItems,
  AlignContent,
  AlignItems,
  Gap,
} from '@/lib/types';
import { useDesignProps } from './hooks/useDesignProps';
import { Box, BoxProps } from './Box';

export interface FlexboxProps extends Omit<BoxProps, 'display' | 'gap'> {
  display?: Responsive<FlexDisplay>;
  direction?: Responsive<FlexDirection>;
  wrap?: Responsive<FlexWrap>;
  justifyContent?: Responsive<JustifyContent>;
  justifyItems?: Responsive<JustifyItems>;
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  gap?: Responsive<Gap>;
  gapX?: Responsive<Gap>;
  gapY?: Responsive<Gap>;
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
  gapX,
  gapY,
  className,
  style,
  children,
  ...props
}: FlexboxProps) {
  const [classes, styleProps] = useDesignProps({
    display,
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent,
    justifyItems,
    alignContent,
    alignItems,
    gap,
    gapX,
    gapY,
  });

  return (
    <Box {...props} className={classNames(className, classes)} style={{ ...styleProps, ...style }}>
      {children}
    </Box>
  );
}
