import type { HTMLAttributes } from 'react';
import type {
  FontColor,
  FontSize,
  FontWeight,
  LetterSpacing,
  Responsive,
  TextAlign,
  TextTransform,
  TextWrap,
} from '@/lib/types';
import {
  cn,
  mapFontSize,
  mapFontWeight,
  mapLetterSpacing,
  mapTextAlign,
  mapTextColor,
  mapTextTransform,
  mapTextWrap,
} from './lib/tailwind';
import { Slot } from './Slot';

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  color?: FontColor;
  size?: Responsive<FontSize>;
  spacing?: Responsive<LetterSpacing>;
  weight?: Responsive<FontWeight>;
  align?: Responsive<TextAlign>;
  wrap?: Responsive<TextWrap>;
  transform?: Responsive<TextTransform>;
  truncate?: Responsive<boolean>;
  italic?: Responsive<boolean>;
  underline?: Responsive<boolean>;
  strikethrough?: Responsive<boolean>;
  as?: 'span' | 'div' | 'label' | 'p';
  asChild?: boolean;
}

export function Text({
  color,
  size = 'base',
  spacing,
  weight,
  align,
  wrap,
  transform,
  truncate,
  italic,
  underline,
  strikethrough,
  as = 'span',
  asChild,
  className,
  children,
  ...props
}: TextProps) {
  const Component = asChild ? Slot : as;

  // Convert color to string for mapping
  const colorStr = color === true ? 'true' : color;

  const classes = cn(
    'text-gray-900 dark:text-gray-100',
    mapFontSize(size),
    mapTextAlign(align),
    mapTextWrap(wrap),
    mapFontWeight(weight),
    mapLetterSpacing(spacing),
    mapTextTransform(transform),
    mapTextColor(colorStr),
    truncate && 'truncate',
    italic && 'italic',
    underline && 'underline',
    strikethrough && 'line-through',
    className,
  );

  return (
    <Component {...props} className={classes}>
      {children}
    </Component>
  );
}
