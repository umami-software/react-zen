import { Dialog, DialogProps } from 'react-aria-components';
import Modal from './Modal';
import styles from './Dialog.module.css';
import classNames from 'classnames';

function _Dialog({ children, className, ...props }: DialogProps) {
  return (
    <Modal>
      <Dialog {...props} className={classNames(styles.dialog, className)}>
        {children}
      </Dialog>
    </Modal>
  );
}

export { _Dialog as Dialog };
export type { DialogProps };

export default _Dialog;
