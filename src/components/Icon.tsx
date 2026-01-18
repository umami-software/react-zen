import { cloneElement, type HTMLAttributes, isValidElement, type ReactElement } from 'react';
import type { FillColor, FontColor, StrokeColor } from '@/lib/types';
import { cn, getCssColorValue, mapTextColor } from './lib/tailwind';

export interface IconProps extends Omit<HTMLAttributes<HTMLElement>, 'color' | 'size'> {
  color?: FontColor;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'input';
  rotate?: number;
  strokeWidth?: string;
  strokeColor?: StrokeColor;
  fillColor?: FillColor;
}

const sizeMap = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

export function Icon({
  color,
  size = 'sm',
  variant,
  rotate,
  strokeWidth,
  strokeColor,
  fillColor,
  style,
  className,
  children,
  ...props
}: IconProps) {
  // Convert color to string for mapping
  const colorStr = color === true ? 'true' : color;

  // Wrapper classes for positioning and rotation
  const wrapperClasses = cn('inline-flex items-center justify-center shrink-0');

  // Map stroke/fill colors for SVG compatibility
  const strokeColorStr = strokeColor === true ? undefined : strokeColor;
  const fillColorStr = fillColor === true ? undefined : fillColor;

  const wrapperStyle: React.CSSProperties = {
    ...style,
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
  };

  // SVG-specific props to pass to the child
  const svgProps: Record<string, any> = {
    className: cn(sizeMap[size], mapTextColor(colorStr), className),
  };

  if (strokeWidth) {
    svgProps.strokeWidth = strokeWidth;
  }
  if (strokeColorStr) {
    svgProps.stroke = getCssColorValue(strokeColorStr);
  }
  if (fillColorStr) {
    svgProps.fill = getCssColorValue(fillColorStr);
  }

  // Clone the child element to pass SVG props
  const clonedChild =
    isValidElement(children) ? cloneElement(children as ReactElement, svgProps) : children;

  return (
    <span {...props} className={wrapperClasses} style={wrapperStyle}>
      {clonedChild}
    </span>
  );
}
