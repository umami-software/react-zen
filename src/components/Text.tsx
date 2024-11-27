import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Responsive, TextAlign, FontWeight, LetterSpacing, FontSize, TextWrap } from '@/lib/types';
import { useDesignProps } from './hooks/useDesignProps';
import { Slot } from './Slot';
import styles from './Text.module.css';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  type?: 'muted' | 'faded';
  size?: Responsive<FontSize>;
  spacing?: Responsive<LetterSpacing>;
  weight?: Responsive<FontWeight>;
  align?: Responsive<TextAlign>;
  wrap?: Responsive<TextWrap>;
  as?: 'span' | 'div' | 'label' | 'p';
  asChild?: boolean;
}

export function Text({
  type,
  size,
  spacing,
  weight,
  align,
  wrap,
  color,
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
    color,
  });

  return (
    <Component
      {...props}
      className={classNames(styles.text, className, type && styles[type], classes)}
      style={{ ...styleProps, ...style }}
    >
      {children}
    </Component>
  );
}
