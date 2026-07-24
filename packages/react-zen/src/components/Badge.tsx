import type { HTMLAttributes } from 'react';
import { cn } from './lib/tailwind';
import { type BadgeVariants, badge } from './variants';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariants['variant'];
  size?: BadgeVariants['size'];
}

export function Badge({ variant, size, className, children, ...props }: BadgeProps) {
  return (
    <span {...props} className={cn(badge({ variant, size }), className)}>
      {children}
    </span>
  );
}
