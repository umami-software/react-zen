import { Popover as BasePopover } from '@base-ui/react/popover';
import { type ReactElement, useEffect, useRef, useState } from 'react';

const CLOSE_DELAY = 500;

export interface HoverButtonProps {
  isOpen?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  closeDelay?: number;
  children: ReactElement[];
}

export function HoverTrigger({
  isOpen,
  onHoverStart,
  onHoverEnd,
  closeDelay = CLOSE_DELAY,
  children,
}: HoverButtonProps) {
  const [triggerElement, popupElement] = children;
  const triggerRef = useRef(null);

  const [open, setOpen] = useState(isOpen);
  const isOverMenu = useRef<boolean>(false);
  const isOverButton = useRef<boolean>(false);
  const timeout = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    if (isOpen !== open) {
      setOpen(isOpen);
    }
  }, [isOpen]);

  const _close = () => setOpen(false);

  const handleMouseEnter = () => {
    isOverMenu.current = false;
    isOverButton.current = true;
    setOpen(true);
    onHoverStart?.();
  };

  const handleMouseLeave = () => {
    isOverButton.current = false;
    checkHoverState();
  };

  const handleMenuEnter = () => {
    isOverMenu.current = true;
  };

  const handleMenuLeave = () => {
    isOverMenu.current = false;
    checkHoverState();
  };

  const checkHoverState = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      if (!isOverMenu.current && !isOverButton.current) {
        setOpen(false);
        onHoverEnd?.();
        isOverMenu.current = false;
        isOverButton.current = false;
      }
    }, closeDelay);
  };

  return (
    <BasePopover.Root open={open} onOpenChange={setOpen}>
      <BasePopover.Trigger
        ref={triggerRef}
        render={
          <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {triggerElement}
          </span>
        }
      />
      <BasePopover.Portal>
        <BasePopover.Positioner>
          <BasePopover.Popup className="zen-popover outline-none">
            <div onMouseEnter={handleMenuEnter} onMouseLeave={handleMenuLeave}>
              {popupElement}
            </div>
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  );
}
