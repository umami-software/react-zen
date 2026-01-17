import type { HTMLAttributes, ReactNode } from 'react';
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
      {showArrow && (
        <OverlayArrow
          className={cn(
            'fill-surface-inverted',
            // Position arrow outside tooltip based on placement
            'data-[placement=top]:bottom-full data-[placement=top]:left-1/2 data-[placement=top]:-translate-x-1/2',
            'data-[placement=bottom]:top-full data-[placement=bottom]:left-1/2 data-[placement=bottom]:-translate-x-1/2 data-[placement=bottom]:rotate-180',
            'data-[placement=left]:right-full data-[placement=left]:top-1/2 data-[placement=left]:-translate-y-1/2 data-[placement=left]:-rotate-90',
            'data-[placement=right]:left-full data-[placement=right]:top-1/2 data-[placement=right]:-translate-y-1/2 data-[placement=right]:rotate-90',
          )}
        >
          <svg width={8} height={8} viewBox="0 0 8 8">
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </OverlayArrow>
      )}
      {children as ReactNode}
    </AriaTooltip>
  );
}

interface TooltipBubbleProps extends HTMLAttributes<HTMLDivElement> {
  showArrow?: boolean;
}

function TooltipBubble({ children, className, color: _color, ...props }: TooltipBubbleProps) {
  return (
    <Box {...props} className={className}>
      {children}
    </Box>
  );
}

export { Tooltip, TooltipBubble };
export type { TooltipProps, TooltipBubbleProps };
