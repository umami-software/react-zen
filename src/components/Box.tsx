import { ReactNode, HTMLProps } from 'react';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import {
  BackgroundColor,
  BorderSize,
  BorderRadius,
  BoxShadow,
  FontSize,
  Spacing,
} from '@/lib/types';
import styles from './Box.module.css';

interface BoxProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  fontSize?: FontSize;
  backgroundColor?: BackgroundColor;
  border?: BorderSize;
  borderRadius?: BorderRadius;
  shadow?: BoxShadow;
  padding?: Spacing;
  margin?: Spacing;
  paddingX?: Spacing;
  marginX?: Spacing;
  paddingY?: Spacing;
  marginY?: Spacing;
  asChild?: boolean;
  children?: ReactNode;
}

function Box({
  className,
  fontSize,
  backgroundColor,
  border,
  borderRadius,
  shadow,
  padding,
  margin,
  paddingX,
  marginX,
  paddingY,
  marginY,
  asChild,
  children,
  ...props
}: BoxProps) {
  const Component = asChild ? Slot : 'div';

  return (
    <Component
      {...props}
      className={classNames(
        className,
        fontSize && styles[`font-size-${fontSize}`],
        backgroundColor && styles[`background-color-${backgroundColor}`],
        border && styles[`border-${border}`],
        borderRadius && styles[`border-radius-${borderRadius}`],
        shadow && styles[`shadow-${shadow}`],
        padding && styles[`padding-${padding}`],
        margin && styles[`margin-${margin}`],
        paddingX && styles[`padding-x-${paddingX}`],
        marginX && styles[`margin-x-${marginX}`],
        paddingY && styles[`padding-y-${paddingY}`],
        marginY && styles[`margin-y-${marginY}`],
      )}
    >
      {children}
    </Component>
  );
}

export { Box };
export type { BoxProps };
