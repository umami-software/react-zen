import type {
  AlignContent,
  AlignItems,
  FlexDirection,
  FlexDisplay,
  FlexWrap,
  Gap,
  JustifyContent,
  JustifyItems,
  Responsive,
} from '@/lib/types';
import { Box, type BoxProps } from './Box';
import {
  cn,
  mapAlignContent,
  mapAlignItems,
  mapDisplay,
  mapFlexDirection,
  mapFlexWrap,
  mapGap,
  mapJustifyContent,
  mapJustifyItems,
} from './lib/tailwind';

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
  children,
  ...props
}: FlexboxProps) {
  const classes = cn(
    mapDisplay(display),
    mapFlexDirection(direction),
    mapFlexWrap(wrap),
    mapJustifyContent(justifyContent),
    mapJustifyItems(justifyItems),
    mapAlignContent(alignContent),
    mapAlignItems(alignItems),
    mapGap(gap as Responsive<string>),
    mapGap(gapX as Responsive<string>, 'x'),
    mapGap(gapY as Responsive<string>, 'y'),
    className,
  );

  return (
    <Box {...props} className={classes}>
      {children}
    </Box>
  );
}
