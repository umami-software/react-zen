import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';
import type { HTMLAttributes, ReactNode } from 'react';
import { Box } from './Box';
import { cn } from './lib/tailwind';
import { tooltip } from './variants';

export interface TooltipProps extends Omit<BaseTooltip.Positioner.Props, 'children' | 'className'> {
  children?: ReactNode;
  showArrow?: boolean;
  className?: string;
  placement?: BaseTooltip.Positioner.Props['side'];
}

export function Tooltip({
  children,
  className,
  placement,
  side,
  sideOffset = 8,
  showArrow,
  ...props
}: TooltipProps) {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner {...props} side={placement ?? side} sideOffset={sideOffset}>
        <BaseTooltip.Popup className={cn('group', tooltip(), className)}>
          {showArrow && (
            <BaseTooltip.Arrow
              style={({ side }) => ({
                width: 12,
                height: 6,
                ...(side === 'top' && { bottom: -6, transform: 'rotate(180deg)' }),
                ...(side === 'bottom' && { top: -6 }),
                ...(side === 'left' && { right: -9, transform: 'rotate(90deg)' }),
                ...(side === 'right' && { left: -9, transform: 'rotate(-90deg)' }),
              })}
            >
              <svg aria-hidden="true" viewBox="0 0 12 6" className="block w-full h-full">
                <path d="M0 6 6 0l6 6Z" className="fill-surface-inverted" />
              </svg>
            </BaseTooltip.Arrow>
          )}
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
