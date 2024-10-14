import { ReactNode } from 'react';
import { Modal as AriaModal, ModalOverlay as AriaModalOverlay } from 'react-aria-components';
import classNames from 'classnames';
import styles from './Modal.module.css';

interface ModalProps {
  className?: string;
  children?: ReactNode;
}

function Modal({ children, className, ...props }: ModalProps) {
  return (
    <AriaModalOverlay {...props} className={styles.overlay}>
      <AriaModal
        className={classNames(styles.modal, className)}
        isDismissable={true}
        isKeyboardDismissDisabled={true}
      >
        {children}
      </AriaModal>
    </AriaModalOverlay>
  );
}

export { Modal };
export type { ModalProps };
