import { useRef, useState, ReactElement, useEffect } from 'react';
import { Popover } from '@/components/index';
import styles from './HoverTrigger.module.css';

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
  const timeout = useRef<NodeJS.Timeout>();

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
    clearTimeout(timeout.current);
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
      <div ref={triggerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {triggerElement}
      </div>
      <Popover isOpen={open} isNonModal triggerRef={triggerRef}>
        <div
          className={styles.wrapper}
          onMouseEnter={handleMenuEnter}
          onMouseLeave={handleMenuLeave}
        >
          {popupElement}
        </div>
      </Popover>
    </>
  );
}
