import { Popover as AriaPopover, PopoverProps as AriaPopoverProps } from 'react-aria-components';
import { cn } from './lib/tailwind';
import './Popover.css';

export interface PopoverProps extends AriaPopoverProps {
  isFullscreen?: boolean;
}

export function Popover({ children, isFullscreen, className, ...props }: PopoverProps) {
  return (
    <AriaPopover
      {...props}
      className={cn(
        'popover',
        'p-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg outline-none',
        isFullscreen && 'block border-0 rounded-none fixed inset-0 overflow-auto z-[9999] bg-white dark:bg-gray-900 [&[data-entering]]:!animate-none [&[data-exiting]]:!animate-none',
        className,
      )}
    >
      {children as any}
    </AriaPopover>
  );
}
