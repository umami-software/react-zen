import { ReactNode, HTMLProps, HTMLAttributes } from 'react';
import classNames from 'classnames';
import {
  BackgroundColor,
  BorderRadius,
  BoxShadow,
  Spacing,
  Responsive,
  Position,
  Display,
} from '@/lib/types';
import { Slot } from './Slot';
import globalStyles from './global.module.css';
import styles from './Box.module.css';

type AlignSelf =
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'stretch'
  | 'safe center'
  | 'unsafe center';

interface BoxProps extends HTMLAttributes<HTMLElement> {
  display?: Responsive<Display>;
  backgroundColor?: BackgroundColor;
  borderSize?: Responsive<string>;
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

  className?: string;
  as?: string;
  asChild?: boolean;
}

function Box({
  display,
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
  as = 'div',
  asChild,
  className,
  style,
  children,
  ...props
}: BoxProps) {
  const Component = asChild ? Slot : as;

  return (
    <Component
      {...props}
      className={classNames(
        className,
        display && styles[`display-${display}`],
        backgroundColor && globalStyles[`background-color-${backgroundColor}`],
        borderSize && globalStyles[`border-size-${borderSize}`],
        borderRadius && globalStyles[`border-radius-${borderRadius}`],
        shadow && globalStyles[`shadow-${shadow}`],

        padding && globalStyles[`padding-${padding}`],
        paddingX && globalStyles[`padding-x-${paddingX}`],
        paddingY && globalStyles[`padding-y-${paddingY}`],
        paddingTop && globalStyles[`padding-top-${paddingTop}`],
        paddingRight && globalStyles[`padding-right-${paddingRight}`],
        paddingBottom && globalStyles[`padding-bottom-${paddingBottom}`],
        paddingLeft && globalStyles[`padding-left-${paddingLeft}`],

        margin && globalStyles[`margin-${margin}`],
        marginX && globalStyles[`margin-x-${marginX}`],
        marginY && globalStyles[`margin-y-${marginY}`],
        marginTop && globalStyles[`margin-top-${marginTop}`],
        marginRight && globalStyles[`margin-right-${marginRight}`],
        marginBottom && globalStyles[`margin-bottom-${marginBottom}`],
        marginLeft && globalStyles[`margin-left-${marginLeft}`],
      )}
    >
      {children}
    </Component>
  );
}

export { Box };
export type { BoxProps };
