import { Modal, ModalOverlay } from 'react-aria-components';
import classNames from 'classnames';
import styles from './Modal.module.css';

interface ModalProps {
  className?: string;
  children?: React.ReactNode;
}

function _Modal({ children, className, ...props }: ModalProps) {
  return (
    <ModalOverlay {...props} className={styles.overlay}>
      <Modal
        className={classNames(styles.modal, className)}
        isDismissable={true}
        isKeyboardDismissDisabled={true}
      >
        {children}
      </Modal>
    </ModalOverlay>
  );
}

export { _Modal as Modal };
export type { ModalProps };

export default _Modal;
