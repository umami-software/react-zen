import { ReactNode } from 'react';
import {
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  ModalOverlayProps as AriaModalOverlayProps,
  ModalRenderProps,
} from 'react-aria-components';
import classNames from 'classnames';
import styles from './Modal.module.css';

interface ModalProps extends AriaModalOverlayProps {
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'fullscreen';
  children?: ReactNode | ((values: ModalRenderProps & { defaultChildren: ReactNode }) => ReactNode);
}

function Modal({ position = 'center', children, className, ...props }: ModalProps) {
  return (
    <AriaModalOverlay {...props} className={styles.overlay} isDismissable>
      <AriaModal className={classNames(styles.modal, position && styles[position], className)}>
        {children}
      </AriaModal>
    </AriaModalOverlay>
  );
}

export { Modal };
export type { ModalProps };
