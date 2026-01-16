import type { HTMLAttributes, ReactNode } from 'react';
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
import { type RenderProp, resolveRender } from './lib/render';
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
  render?: RenderProp<TextRenderProps>;
}

export interface TextRenderProps {
  className: string;
  children?: ReactNode;
  [key: string]: unknown;
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
  render,
  className,
  children,
  ...props
}: TextProps) {
  const Component = as;

  // Convert color to string for mapping
  const colorStr = color === true ? 'true' : color;

  const classes = cn(
    'text-foreground-primary',
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

  const renderProps: TextRenderProps = {
    ...props,
    className: classes,
    children,
  };

  const defaultElement = (
    <Component {...props} className={classes}>
      {children}
    </Component>
  );

  return resolveRender(render, renderProps, defaultElement);
}
