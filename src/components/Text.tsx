import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Responsive, TextAlign, FontWeight, LetterSpacing, FontSize, TextWrap } from '@/lib/types';
import { Slot } from './Slot';
import globalStyles from './global.module.css';
import styles from './Text.module.css';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: 'span' | 'div' | 'label' | 'p';
  type?: 'muted' | 'faded';
  size?: Responsive<FontSize>;
  letterSpacing?: Responsive<LetterSpacing>;
  weight?: Responsive<FontWeight>;
  align?: Responsive<TextAlign>;
  wrap?: Responsive<TextWrap>;
  asChild?: boolean;
}

export function Text({
  as = 'span',
  children,
  type,
  size,
  letterSpacing,
  weight,
  align,
  asChild,
  className,
  ...props
}: TextProps) {
  const Component = asChild ? Slot : as;

  return (
    <Component
      {...props}
      className={classNames(
        styles.text,
        className,
        typeof size === 'string' ? globalStyles[`font-size-${size}`] : globalStyles['font-size'],
        typeof weight === 'string' && globalStyles[`font-weight-${weight}`],
        typeof letterSpacing === 'string' && styles[`letter-spacing-${letterSpacing}`],
        typeof align === 'string' && styles[`align-${align}`],
        type && styles[type],
      )}
    >
      {children}
    </Component>
  );
}
