import type { CSSProperties, ElementType, HTMLAttributes, ReactElement, ReactNode } from 'react';
import type {
  AlignSelf,
  BackgroundColor,
  Border,
  BorderColor,
  BorderRadius,
  BorderWidth,
  BoxShadow,
  Cursor,
  Display,
  FlexGrow,
  FlexShrink,
  FontColor,
  FontSize,
  FontWeight,
  JustifySelf,
  Opacity,
  Overflow,
  Padding,
  PointerEvents,
  Position,
  Responsive,
  Spacing,
  TextAlign,
} from '@/lib/types';
import { type RenderProp, resolveRender } from './lib/render';
import {
  cn,
  mapAlignSelf,
  mapBackgroundColor,
  mapBorder,
  mapBorderColor,
  mapBorderRadius,
  mapCursor,
  mapDisplay,
  mapFontSize,
  mapFontWeight,
  mapMargin,
  mapOpacity,
  mapOverflow,
  mapPadding,
  mapPointerEvents,
  mapPosition,
  mapShadow,
  mapTextAlign,
  mapTextColor,
} from './lib/tailwind';

export interface BoxProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  display?: Responsive<Display>;
  color?: FontColor;
  backgroundColor?: BackgroundColor;
  fontSize?: Responsive<FontSize>;
  fontWeight?: Responsive<FontWeight>;
  border?: Responsive<Border>;
  borderWidth?: Responsive<BorderWidth>;
  borderColor?: BorderColor;
  borderRadius?: Responsive<BorderRadius>;
  shadow?: Responsive<BoxShadow>;

  padding?: Responsive<Padding>;
  paddingX?: Responsive<Padding>;
  paddingY?: Responsive<Padding>;
  paddingTop?: Responsive<Padding>;
  paddingRight?: Responsive<Padding>;
  paddingBottom?: Responsive<Padding>;
  paddingLeft?: Responsive<Padding>;

  margin?: Responsive<Spacing>;
  marginX?: Responsive<Spacing>;
  marginY?: Responsive<Spacing>;
  marginTop?: Responsive<Spacing>;
  marginRight?: Responsive<Spacing>;
  marginBottom?: Responsive<Spacing>;
  marginLeft?: Responsive<Spacing>;

  width?: string;
  minWidth?: string;
  maxWidth?: string;

  height?: string;
  minHeight?: string;
  maxHeight?: string;

  position?: Responsive<Position>;
  textAlign?: Responsive<TextAlign>;

  top?: string;
  right?: string;
  bottom?: string;
  left?: string;

  overflow?: Responsive<Overflow>;
  overflowX?: Responsive<Overflow>;
  overflowY?: Responsive<Overflow>;

  cursor?: Responsive<Cursor>;
  opacity?: Responsive<Opacity>;
  pointerEvents?: Responsive<PointerEvents>;

  alignSelf?: Responsive<AlignSelf>;
  justifySelf?: Responsive<JustifySelf>;

  flexBasis?: string;
  flexGrow?: FlexGrow;
  flexShrink?: FlexShrink;

  gridArea?: string;
  gridRow?: string;
  gridColumn?: string;

  order?: number;
  zIndex?: number;

  theme?: string;

  as?: string;
  render?: RenderProp<BoxRenderProps>;
}

export interface BoxRenderProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  [key: string]: unknown;
}

// Helper to convert value to string for mapping functions
function toStringValue(value: string | number | boolean | undefined): string | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value === 'boolean') return value ? 'true' : undefined;
  return String(value);
}

export function Box({
  display,
  color,
  backgroundColor,
  fontSize,
  fontWeight,
  border,
  borderWidth,
  borderColor,
  borderRadius,
  shadow,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  position,
  textAlign,
  top,
  right,
  bottom,
  left,
  overflow,
  overflowX,
  overflowY,
  cursor,
  opacity,
  pointerEvents,
  alignSelf,
  justifySelf,
  flexBasis,
  flexGrow,
  flexShrink,
  gridArea,
  gridRow,
  gridColumn,
  order,
  zIndex,
  theme,
  as = 'div',
  render,
  className,
  style,
  children,
  ...props
}: BoxProps) {
  const Component = as as ElementType;

  // Build Tailwind classes
  const classes = cn(
    mapDisplay(display),
    mapTextColor(toStringValue(color)),
    mapBackgroundColor(toStringValue(backgroundColor)),
    mapFontSize(fontSize),
    mapFontWeight(fontWeight),
    mapBorder(border),
    mapBorderColor(toStringValue(borderColor)),
    mapBorderRadius(borderRadius as Responsive<string>),
    mapShadow(shadow as Responsive<string>),
    mapPadding(padding as Responsive<string>),
    mapPadding(paddingX as Responsive<string>, 'x'),
    mapPadding(paddingY as Responsive<string>, 'y'),
    mapPadding(paddingTop as Responsive<string>, 't'),
    mapPadding(paddingRight as Responsive<string>, 'r'),
    mapPadding(paddingBottom as Responsive<string>, 'b'),
    mapPadding(paddingLeft as Responsive<string>, 'l'),
    mapMargin(margin),
    mapMargin(marginX, 'x'),
    mapMargin(marginY, 'y'),
    mapMargin(marginTop, 't'),
    mapMargin(marginRight, 'r'),
    mapMargin(marginBottom, 'b'),
    mapMargin(marginLeft, 'l'),
    mapPosition(position),
    mapTextAlign(textAlign),
    mapOverflow(overflow),
    mapOverflow(overflowX, 'x'),
    mapOverflow(overflowY, 'y'),
    mapCursor(cursor),
    mapOpacity(opacity),
    mapPointerEvents(pointerEvents),
    mapAlignSelf(alignSelf),
    theme && `${theme}-theme`,
    className,
  );

  // Inline styles for values that can't be mapped to Tailwind utilities
  const inlineStyles: CSSProperties = {
    ...style,
    ...(width && { width }),
    ...(minWidth && { minWidth }),
    ...(maxWidth && { maxWidth }),
    ...(height && { height }),
    ...(minHeight && { minHeight }),
    ...(maxHeight && { maxHeight }),
    ...(top && { top }),
    ...(right && { right }),
    ...(bottom && { bottom }),
    ...(left && { left }),
    ...(flexBasis && { flexBasis }),
    ...(flexGrow !== undefined && { flexGrow }),
    ...(flexShrink !== undefined && { flexShrink }),
    ...(gridArea && { gridArea }),
    ...(gridRow && { gridRow }),
    ...(gridColumn && { gridColumn }),
    ...(order !== undefined && { order }),
    ...(zIndex !== undefined && { zIndex }),
    ...(justifySelf && { justifySelf: justifySelf as CSSProperties['justifySelf'] }),
    ...(borderWidth && { borderWidth: `${borderWidth}px` }),
  };

  // Only include style prop if there are inline styles beyond what was passed in
  const hasInlineStyles =
    Object.keys(inlineStyles).length > (style ? Object.keys(style).length : 0);

  const renderProps: BoxRenderProps = {
    ...props,
    className: classes || undefined,
    style: hasInlineStyles || style ? inlineStyles : undefined,
    children,
  };

  const defaultElement = (
    <Component
      {...props}
      className={classes || undefined}
      style={hasInlineStyles || style ? inlineStyles : undefined}
    >
      {children}
    </Component>
  );

  return resolveRender(render, renderProps, defaultElement);
}
