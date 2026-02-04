import type { HTMLAttributes, ReactNode } from 'react';
import {
  Tooltip as AriaTooltip,
  type TooltipProps as AriaTooltipProps,
  OverlayArrow,
} from 'react-aria-components';
import { Box } from './Box';
import { cn } from './lib/tailwind';
import { tooltip } from './variants';

export interface TooltipProps extends AriaTooltipProps {
  children?: ReactNode;
  showArrow?: boolean;
}

export function Tooltip({ children, className, showArrow, ...props }: TooltipProps) {
  return (
    <AriaTooltip {...props} className={cn('group', tooltip(), className)}>
      {showArrow && (
        <OverlayArrow className="w-2 h-2">
          <svg
            viewBox="0 0 8 8"
            className={cn(
              'block fill-surface-inverted',
              'group-data-[placement=bottom]:rotate-180',
              'group-data-[placement=left]:-rotate-90',
              'group-data-[placement=right]:rotate-90',
            )}
          >
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </OverlayArrow>
      )}
      {children as ReactNode}
    </AriaTooltip>
  );
}

export interface TooltipBubbleProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  showArrow?: boolean;
}

export function TooltipBubble({
  children,
  className,
  color: _color,
  ...props
}: TooltipBubbleProps) {
  return (
    <Box {...props} className={className}>
      {children}
    </Box>
  );
}
