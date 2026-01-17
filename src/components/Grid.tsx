import type { CSSProperties } from 'react';
import type {
  AlignContent,
  AlignItems,
  Gap,
  GridAutoFlow,
  GridColumns,
  GridDisplay,
  GridRows,
  GridTemplateAreas,
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
  mapGap,
  mapGridAutoFlow,
  mapGridColumns,
  mapGridRows,
  mapJustifyContent,
  mapJustifyItems,
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
  rows?: Responsive<GridRows> | string;
  columns?: Responsive<GridColumns> | string;
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
  // Check if columns/rows are custom strings (not preset values)
  const isCustomColumns =
    typeof columns === 'string' &&
    !['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'none', 'subgrid'].includes(
      columns,
    );
  const isCustomRows =
    typeof rows === 'string' &&
    !['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'none', 'subgrid'].includes(
      rows,
    );

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
    !isCustomColumns && mapGridColumns(columns as Responsive<string>),
    !isCustomRows && mapGridRows(rows as Responsive<string>),
    className,
  );

  // Custom template values and areas need inline styles
  const inlineStyles: CSSProperties = {
    ...style,
    ...(isCustomColumns && { gridTemplateColumns: columns as string }),
    ...(isCustomRows && { gridTemplateRows: rows as string }),
    ...(areas && { gridTemplateAreas: areas }),
  };

  const hasInlineStyles =
    isCustomColumns || isCustomRows || areas || (style && Object.keys(style).length > 0);

  return (
    <Box {...props} className={classes} style={hasInlineStyles ? inlineStyles : undefined}>
      {children}
    </Box>
  );
}
