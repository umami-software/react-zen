import classNames from 'classnames';
import {
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
import { useDesignProps } from './hooks/useDesignProps';
import { Box, BoxProps } from './Box';

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
  const [classes, styleProps] = useDesignProps({
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
