import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import {
  BackgroundColor,
  BorderSize,
  BorderRadius,
  BoxShadow,
  Spacing,
  Responsive,
  Position,
  Display,
  TextAlign,
  FlexGrow,
  FlexShrink,
  Top,
  Right,
  Bottom,
  Left,
  Overflow,
  AlignSelf,
  JustifySelf,
  FontColor,
} from '@/lib/types';
import { useDesignProps } from './hooks/useDesignProps';
import { Slot } from './Slot';

interface BoxProps extends HTMLAttributes<HTMLElement> {
  display?: Responsive<Display>;
  color?: FontColor;
  backgroundColor?: BackgroundColor;
  borderSize?: Responsive<BorderSize>;
  borderRadius?: Responsive<BorderRadius>;
  shadow?: Responsive<BoxShadow>;

  padding?: Responsive<Spacing>;
  paddingX?: Responsive<Spacing>;
  paddingY?: Responsive<Spacing>;
  paddingTop?: Responsive<Spacing>;
  paddingRight?: Responsive<Spacing>;
  paddingBottom?: Responsive<Spacing>;
  paddingLeft?: Responsive<Spacing>;

  margin?: Responsive<Spacing>;
  marginX?: Responsive<Spacing>;
  marginY?: Responsive<Spacing>;
  marginTop?: Responsive<Spacing>;
  marginRight?: Responsive<Spacing>;
  marginBottom?: Responsive<Spacing>;
  marginLeft?: Responsive<Spacing>;

  width?: Responsive<string>;
  minWidth?: Responsive<string>;
  maxWidth?: Responsive<string>;

  height?: Responsive<string>;
  minHeight?: Responsive<string>;
  maxHeight?: Responsive<string>;

  position?: Responsive<Position>;
  align?: Responsive<TextAlign>;

  top?: Responsive<Top>;
  right?: Responsive<Right>;
  bottom?: Responsive<Bottom>;
  left?: Responsive<Left>;

  overflow?: Responsive<Overflow>;
  overflowX?: Responsive<Overflow>;
  overflowY?: Responsive<Overflow>;

  alignSelf?: Responsive<AlignSelf>;
  justifySelf?: Responsive<JustifySelf>;

  flexBasis?: Responsive<string>;
  flexGrow?: Responsive<FlexGrow>;
  flexShrink?: Responsive<FlexShrink>;

  gridArea?: Responsive<string>;
  gridRow?: Responsive<string>;
  gridColumn?: Responsive<string>;

  order?: Responsive<number>;

  as?: string;
  asChild?: boolean;
}

function Box({
  display,
  color,
  backgroundColor,
  borderSize,
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
  overflow,
  overflowX,
  overflowY,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  position,
  align,
  top,
  right,
  bottom,
  left,
  flexBasis,
  flexGrow,
  flexShrink,
  gridArea,
  gridRow,
  gridColumn,
  order,
  as = 'div',
  asChild,
  className,
  style,
  children,
  ...props
}: BoxProps) {
  const Component = asChild ? Slot : as;
  const [classes, styleProps] = useDesignProps({
    display,
    color,
    backgroundColor,
    borderSize,
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
    overflow,
    overflowX,
    overflowY,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    position,
    textAlign: align,
    top,
    right,
    bottom,
    left,
    flexBasis,
    flexGrow,
    flexShrink,
    gridArea,
    gridRow,
    gridColumn,
    order,
  });

  return (
    <Component
      {...props}
      className={classNames(className, classes)}
      style={{
        ...styleProps,
        ...style,
      }}
    >
      {children}
    </Component>
  );
}

export { Box };
export type { BoxProps };
