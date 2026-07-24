import type { HTMLAttributes } from 'react';
import { cn } from './lib/tailwind';

export interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  ratio?: number;
}

export function AspectRatio({ ratio = 1, className, style, children, ...props }: AspectRatioProps) {
  return (
    <div
      {...props}
      className={cn(
        'relative w-full overflow-hidden',
        '[&>*]:absolute [&>*]:inset-0 [&>*]:size-full [&>img]:object-cover [&>video]:object-cover',
        className,
      )}
      style={{ aspectRatio: ratio, ...style }}
    >
      {children}
    </div>
  );
}
