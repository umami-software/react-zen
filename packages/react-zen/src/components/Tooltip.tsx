import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';
import type { HTMLAttributes, ReactNode } from 'react';
import { Box } from './Box';
import { cn } from './lib/tailwind';
import { tooltip } from './variants';

export interface TooltipProps extends Omit<BaseTooltip.Positioner.Props, 'children' | 'className'> {
  children?: ReactNode;
  showArrow?: boolean;
  className?: string;
}

export function Tooltip({
  children,
  className,
  sideOffset = 8,
  showArrow,
  ...props
}: TooltipProps) {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner {...props} sideOffset={sideOffset}>
        <BaseTooltip.Popup className={cn('group', tooltip(), className)}>
          {showArrow && <BaseTooltip.Arrow className="w-2 h-2 fill-surface-inverted" />}
          {children}
        </BaseTooltip.Popup>
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
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
