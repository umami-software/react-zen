import type { HTMLAttributes } from 'react';
import {
  Tooltip as AriaTooltip,
  type TooltipProps as AriaTooltipProps,
  OverlayArrow,
} from 'react-aria-components';
import { Box } from './Box';
import { cn } from './lib/tailwind';
import { tooltip } from './variants';

interface TooltipProps extends AriaTooltipProps {
  showArrow?: boolean;
}

function Tooltip({ children, className, showArrow, ...props }: TooltipProps) {
  return (
    <AriaTooltip {...props} className={cn(tooltip(), className)}>
      <TooltipBubble showArrow={showArrow}>{children as any}</TooltipBubble>
    </AriaTooltip>
  );
}

interface TooltipBubbleProps extends HTMLAttributes<HTMLDivElement> {
  showArrow?: boolean;
}

function TooltipBubble({
  showArrow,
  children,
  className,
  color: _color,
  ...props
}: TooltipBubbleProps) {
  return (
    <Box {...props} className={className}>
      {showArrow && (
        <OverlayArrow
          className={cn(
            'fill-surface-inverted',
            'data-[placement=bottom]:rotate-180',
            'data-[placement=left]:rotate-90',
            'data-[placement=right]:-rotate-90',
          )}
        >
          <svg width={8} height={8} viewBox="0 0 8 8">
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </OverlayArrow>
      )}
      <Box>{children}</Box>
    </Box>
  );
}

export { Tooltip, TooltipBubble };
export type { TooltipProps, TooltipBubbleProps };
