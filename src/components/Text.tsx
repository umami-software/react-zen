import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Responsive, TextAlign, FontWeight, LetterSpacing, FontSize, TextWrap } from '@/lib/types';
import { mapProps } from '@/lib/utils';
import { Slot } from './Slot';
import styles from './Text.module.css';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: 'span' | 'div' | 'label' | 'p';
  asChild?: boolean;
  type?: 'muted' | 'faded';
  size?: Responsive<FontSize>;
  letterSpacing?: Responsive<LetterSpacing>;
  weight?: Responsive<FontWeight>;
  align?: Responsive<TextAlign>;
  wrap?: Responsive<TextWrap>;
}

export function Text({
  as = 'span',
  asChild,
  type,
  size,
  letterSpacing,
  weight,
  align,
  wrap,
  className,
  style,
  children,
  ...props
}: TextProps) {
  const Component = asChild ? Slot : as;
  const [classes, styleProps] = mapProps({
    fontSize: size,
    textAlign: align,
    textWrap: wrap,
    fontWeight: weight,
    letterSpacing,
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
