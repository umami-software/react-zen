import type { CSSProperties } from 'react';
import type {
  GridDisplay,
  GridAutoFlow,
  Responsive,
  GridTemplateRows,
  GridTemplateColumns,
  GridTemplateAreas,
  AlignContent,
  AlignItems,
  JustifyContent,
  JustifyItems,
  Gap,
} from '@/lib/types';
import { Box, BoxProps } from './Box';
import {
  cn,
  mapDisplay,
  mapJustifyContent,
  mapJustifyItems,
  mapAlignContent,
  mapAlignItems,
  mapGap,
  mapGridAutoFlow,
} from './lib/tailwind';

export interface GridProps extends Omit<BoxProps, 'display'> {
  display?: Responsive<GridDisplay>;
  justifyContent?: Responsive<JustifyContent>;
  justifyItems?: Responsive<JustifyItems>;
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  gap?: Responsive<Gap>;
  gapX?: Responsive<Gap>;
  gapY?: Responsive<Gap>;
  autoFlow?: Responsive<GridAutoFlow>;
  rows?: GridTemplateRows;
  columns?: GridTemplateColumns;
  areas?: GridTemplateAreas;
}

export function Grid({
  display = 'grid',
  justifyContent,
  justifyItems,
  alignContent,
  alignItems,
  gap,
  gapX,
  gapY,
  autoFlow,
  rows,
  columns,
  areas,
  className,
  style,
  children,
  ...props
}: GridProps) {
  const classes = cn(
    mapDisplay(display),
    mapJustifyContent(justifyContent),
    mapJustifyItems(justifyItems),
    mapAlignContent(alignContent),
    mapAlignItems(alignItems),
    mapGap(gap as Responsive<string>),
    mapGap(gapX as Responsive<string>, 'x'),
    mapGap(gapY as Responsive<string>, 'y'),
    mapGridAutoFlow(autoFlow),
    className
  );

  // Grid template values need inline styles since they're dynamic
  const inlineStyles: CSSProperties = {
    ...style,
    ...(rows && { gridTemplateRows: rows }),
    ...(columns && { gridTemplateColumns: columns }),
    ...(areas && { gridTemplateAreas: areas }),
  };

  const hasInlineStyles = Object.keys(inlineStyles).length > (style ? Object.keys(style).length : 0);

  return (
    <Box {...props} className={classes} style={hasInlineStyles || style ? inlineStyles : undefined}>
      {children}
    </Box>
  );
}
