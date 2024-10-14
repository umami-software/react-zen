import { ReactNode, HTMLProps } from 'react';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import styles from './Box.module.css';

interface BoxProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  border?: 'thin' | 'medium' | 'thick';
  borderRadius?: 'sm' | 'md' | 'lg' | 'full';
  shadow?: 1 | 2 | 3 | 4 | 5 | 6;
  spacing?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  asChild?: boolean;
  children?: ReactNode;
}

function Box({
  className,
  spacing,
  fontSize,
  border,
  borderRadius,
  shadow,
  gap,
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
        gap && styles[`gap-${gap}`],
        border && styles[`border-${border}`],
        borderRadius && styles[`border-radius-${borderRadius}`],
        shadow && styles[`shadow-${shadow}`],
        spacing && styles[`spacing-${spacing}`],
      )}
    >
      {children}
    </Component>
  );
}

export { Box };
export type { BoxProps };
