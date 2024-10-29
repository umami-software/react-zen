import { useRef, useState, ReactElement } from 'react';
import { Popover } from '@/components/index';
import styles from './HoverTrigger.module.css';

const CLOSE_DELAY = 500;

export interface HoverButtonProps {
  closeDelay?: number;
  children: ReactElement[];
}

export function HoverTrigger({ closeDelay = CLOSE_DELAY, children }: HoverButtonProps) {
  const [triggerElement, popupElement] = children;
  const triggerRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const isOverMenu = useRef<boolean>(false);
  const isOverButton = useRef<boolean>(false);
  const timeout = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    isOverMenu.current = false;
    isOverButton.current = true;
    setIsOpen(true);
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
        setIsOpen(false);
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
      <Popover isOpen={isOpen} isNonModal triggerRef={triggerRef}>
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
