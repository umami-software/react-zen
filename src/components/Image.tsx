import type { HTMLAttributes } from 'react';
import type { BorderRadius, BoxShadow, ObjectFit, Responsive } from '@/lib/types';
import { cn, mapBorderRadius, mapShadow } from './lib/tailwind';

export interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  objectFit?: ObjectFit;
  isCentered?: boolean;
  rounded?: Responsive<BorderRadius>;
  shadow?: Responsive<BoxShadow>;
}

const objectFitMap: Record<ObjectFit, string> = {
  fill: 'object-fill',
  contain: 'object-contain',
  cover: 'object-cover',
  none: 'object-none',
  'scale-down': 'object-scale-down',
};

export function Image({
  src,
  alt,
  objectFit,
  isCentered,
  rounded,
  shadow,
  className,
  ...props
}: ImageProps) {
  const classes = cn(
    'block max-w-full',
    mapBorderRadius(rounded as Responsive<string>),
    mapShadow(shadow as Responsive<string>),
    objectFit && objectFitMap[objectFit],
    objectFit && 'w-full h-full',
    isCentered && 'mx-auto',
    className,
  );

  return <img {...props} className={classes} src={src} alt={alt} />;
}
