import { type CSSProperties, useId } from 'react';
import type {
  AlignContent,
  AlignItems,
  Breakpoint,
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

const PRESET_VALUES = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  'none',
  'subgrid',
];

const BREAKPOINT_QUERIES: Record<Breakpoint, string> = {
  base: '',
  sm: '@media (min-width: 640px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 1024px)',
  xl: '@media (min-width: 1280px)',
  '2xl': '@media (min-width: 1536px)',
};

type ResponsiveGridValue = Responsive<GridColumns | GridRows | string> | undefined;

function isPresetValue(value: string): boolean {
  return PRESET_VALUES.includes(value);
}

function isResponsiveObject(
  value: ResponsiveGridValue,
): value is Partial<Record<Breakpoint, string>> {
  return value !== undefined && typeof value !== 'string' && typeof value === 'object';
}

function hasCustomResponsiveValues(value: ResponsiveGridValue): boolean {
  if (!isResponsiveObject(value)) return false;
  return Object.values(value).some(v => typeof v === 'string' && !isPresetValue(v));
}

function generateResponsiveStyles(
  id: string,
  columns: ResponsiveGridValue,
  rows: ResponsiveGridValue,
): string {
  const styles: string[] = [];
  const breakpoints: Breakpoint[] = ['base', 'sm', 'md', 'lg', 'xl', '2xl'];

  for (const bp of breakpoints) {
    const rules: string[] = [];

    if (isResponsiveObject(columns)) {
      const colValue = columns[bp];
      if (colValue && !isPresetValue(colValue)) {
        rules.push(`grid-template-columns: ${colValue}`);
      }
    }

    if (isResponsiveObject(rows)) {
      const rowValue = rows[bp];
      if (rowValue && !isPresetValue(rowValue)) {
        rules.push(`grid-template-rows: ${rowValue}`);
      }
    }

    if (rules.length > 0) {
      const query = BREAKPOINT_QUERIES[bp];
      const ruleBlock = `.${id} { ${rules.join('; ')}; }`;
      styles.push(query ? `${query} { ${ruleBlock} }` : ruleBlock);
    }
  }

  return styles.join(' ');
}

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
  rows?: Responsive<GridRows | string>;
  columns?: Responsive<GridColumns | string>;
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
  const reactId = useId();
  const id = `zen-grid-${reactId.replace(/:/g, '')}`;

  // Check for custom values (non-preset strings)
  const isCustomColumns = typeof columns === 'string' && !isPresetValue(columns);
  const isCustomRows = typeof rows === 'string' && !isPresetValue(rows);
  const hasResponsiveCustomColumns = hasCustomResponsiveValues(columns);
  const hasResponsiveCustomRows = hasCustomResponsiveValues(rows);
  const needsStyleTag = hasResponsiveCustomColumns || hasResponsiveCustomRows;

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
    !isCustomColumns &&
      !hasResponsiveCustomColumns &&
      mapGridColumns(columns as Responsive<string>),
    !isCustomRows && !hasResponsiveCustomRows && mapGridRows(rows as Responsive<string>),
    needsStyleTag && id,
    className,
  );

  // Custom template values and areas need inline styles (for non-responsive custom values)
  const inlineStyles: CSSProperties = {
    ...style,
    ...(isCustomColumns && { gridTemplateColumns: columns as string }),
    ...(isCustomRows && { gridTemplateRows: rows as string }),
    ...(areas && { gridTemplateAreas: areas }),
  };

  const hasInlineStyles =
    isCustomColumns || isCustomRows || areas || (style && Object.keys(style).length > 0);

  return (
    <>
      {needsStyleTag && <style>{generateResponsiveStyles(id, columns, rows)}</style>}
      <Box {...props} className={classes} style={hasInlineStyles ? inlineStyles : undefined}>
        {children}
      </Box>
    </>
  );
}
