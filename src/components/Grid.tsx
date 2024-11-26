import classNames from 'classnames';
import {
  GridDisplay,
  GridAutoFlow,
  Responsive,
  Spacing,
  GridTemplateRows,
  GridTemplateColumns,
  GridTemplateAreas,
  AlignContent,
  AlignItems,
  JustifyContent,
  JustifyItems,
} from '@/lib/types';
import { mapProps } from '@/lib/utils';
import { Box, BoxProps } from './Box';

export interface GridProps extends Omit<BoxProps, 'display'> {
  display?: Responsive<GridDisplay>;
  justifyContent?: Responsive<JustifyContent>;
  justifyItems?: Responsive<JustifyItems>;
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  gap?: Responsive<Spacing>;
  gapX?: Responsive<Spacing>;
  gapY?: Responsive<Spacing>;
  autoFlow?: Responsive<GridAutoFlow>;
  rows?: Responsive<GridTemplateRows>;
  columns?: Responsive<GridTemplateColumns>;
  areas?: Responsive<GridTemplateAreas>;
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
  const [classes, styleProps] = mapProps({
    display,
    justifyContent,
    justifyItems,
    alignContent,
    alignItems,
    gap,
    gapX,
    gapY,
    gridTemplateRows: rows,
    gridTemplateColumns: columns,
    gridTemplateAreas: areas,
    gridAutoFlow: autoFlow,
  });

  return (
    <Box {...props} className={classNames(className, classes)} style={{ ...styleProps, ...style }}>
      {children}
    </Box>
  );
}
