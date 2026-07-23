import { Popover as BasePopover } from '@base-ui/react/popover';
import type { ReactNode } from 'react';
import { cn } from './lib/tailwind';
import type { OverlayTarget } from './OverlayTrigger';
import './Popover.css';

export interface PopoverProps extends Omit<BasePopover.Positioner.Props, 'children' | 'className'> {
  children?: ReactNode;
  isFullscreen?: boolean;
  isOpen?: boolean;
  isNonModal?: boolean;
  triggerRef?: React.RefObject<Element | null>;
  className?: string;
  onOpenChange?: (open: boolean) => void;
}

export function Popover({
  children,
  isFullscreen,
  className,
  isOpen: _isOpen,
  isNonModal: _isNonModal,
  triggerRef: _triggerRef,
  onOpenChange: _onOpenChange,
  ...props
}: PopoverProps) {
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner {...props}>
        <BasePopover.Popup
          className={cn(
            'zen-popover outline-none',
            isFullscreen &&
              'block border-0 rounded-none fixed inset-0 overflow-auto z-[9999] bg-surface-base',
            className,
          )}
        >
          {children}
        </BasePopover.Popup>
      </BasePopover.Positioner>
    </BasePopover.Portal>
  );
}

(Popover as typeof Popover & OverlayTarget).zenOverlayType = 'popover';
