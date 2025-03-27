import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import {
  Responsive,
  TextAlign,
  FontWeight,
  LetterSpacing,
  FontSize,
  TextWrap,
  TextTransform,
  FontColor,
} from '@/lib/types';
import { useDesignProps } from './hooks/useDesignProps';
import { Slot } from './Slot';
import styles from './Text.module.css';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  color?: FontColor;
  size?: Responsive<FontSize>;
  spacing?: Responsive<LetterSpacing>;
  weight?: Responsive<FontWeight>;
  align?: Responsive<TextAlign>;
  wrap?: Responsive<TextWrap>;
  transform?: Responsive<TextTransform>;
  truncate?: Responsive<boolean>;
  as?: 'span' | 'div' | 'label' | 'p';
  asChild?: boolean;
}

export function Text({
  color,
  size,
  spacing,
  weight,
  align,
  wrap,
  transform,
  truncate,
  as = 'span',
  asChild,
  className,
  style,
  children,
  ...props
}: TextProps) {
  const Component = asChild ? Slot : as;
  const [classes, styleProps] = useDesignProps({
    fontSize: size,
    textAlign: align,
    textWrap: wrap,
    fontWeight: weight,
    letterSpacing: spacing,
    textTransform: transform,
    color,
  });

  return (
    <Component
      {...props}
      className={classNames(styles.text, className, classes, truncate && styles.truncate)}
      style={{ ...styleProps, ...style }}
    >
      {children}
    </Component>
  );
}
