import { type ReactElement, useEffect, useRef, useState } from 'react';
import { Popover } from '@/components/index';

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

  const close = () => setOpen(false);

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
    <>
      <span ref={triggerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {triggerElement}
      </span>
      <Popover isOpen={open} isNonModal triggerRef={triggerRef}>
        <div onMouseEnter={handleMenuEnter} onMouseLeave={handleMenuLeave}>
          {popupElement}
        </div>
      </Popover>
    </>
  );
}
