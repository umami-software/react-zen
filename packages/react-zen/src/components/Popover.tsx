import type { ReactNode } from 'react';
import {
  Popover as AriaPopover,
  type PopoverProps as AriaPopoverProps,
} from 'react-aria-components';
import { cn } from './lib/tailwind';
import './Popover.css';

export interface PopoverProps extends AriaPopoverProps {
  children?: ReactNode;
  isFullscreen?: boolean;
}

export function Popover({ children, isFullscreen, className, ...props }: PopoverProps) {
  return (
    <AriaPopover
      {...props}
      className={cn(
        'zen-popover outline-none',
        isFullscreen &&
          'block border-0 rounded-none fixed inset-0 overflow-auto z-[9999] bg-surface-base [&[data-entering]]:!animate-none [&[data-exiting]]:!animate-none',
        className,
      )}
    >
      {children as any}
    </AriaPopover>
  );
}
