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
  const overMenu = useRef<boolean>(false);

  const handleHoverStart = () => {
    overMenu.current = false;
    setShow(true);
  };
  const handleHoverEnd = () => {
    setTimeout(() => {
      if (!overMenu.current) {
        setShow(false);
        overMenu.current = false;
      }
    }, closeDelay);
  };

  const handleMenuEnter = () => {
    overMenu.current = true;
  };
  const handleMenuLeave = () => {
    overMenu.current = false;
    setShow(false);
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
