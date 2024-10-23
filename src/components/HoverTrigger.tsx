import { cloneElement, useRef, useState, ReactElement } from 'react';
import { Dialog, DialogTrigger, Popover } from '@/components/index';
import styles from './HoverTrigger.module.css';

const CLOSE_DELAY = 500;

export interface HoverButtonProps {
  closeDelay?: number;
  children: ReactElement[];
}

export function HoverTrigger({ closeDelay = CLOSE_DELAY, children }: HoverButtonProps) {
  const [triggerElement, popupElement] = children;

  const [show, setShow] = useState(false);
  const isOverMenu = useRef<boolean>(false);
  const isOverButton = useRef<boolean>(false);
  const timeout = useRef<NodeJS.Timeout>();

  const handleHoverStart = () => {
    isOverMenu.current = false;
    isOverButton.current = true;
    setShow(true);
  };

  const handleHoverEnd = () => {
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
        setShow(false);
        isOverMenu.current = false;
        isOverButton.current = false;
      }
    }, closeDelay);
  };

  return (
    <DialogTrigger>
      {cloneElement(triggerElement, { onHoverStart: handleHoverStart, onHoverEnd: handleHoverEnd })}
      <Popover isOpen={show} isNonModal>
        <div
          className={styles.wrapper}
          onMouseEnter={handleMenuEnter}
          onMouseLeave={handleMenuLeave}
        >
          <Dialog>{cloneElement(popupElement)}</Dialog>
        </div>
      </Popover>
    </DialogTrigger>
  );
}
