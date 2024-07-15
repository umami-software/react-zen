import { Dialog, DialogProps } from 'react-aria-components';
import styles from './Dialog.module.css';
import classNames from 'classnames';

function _Dialog({ children, className, ...props }: DialogProps) {
  return (
    <Dialog {...props} className={classNames(styles.dialog, className)}>
      {children}
    </Dialog>
  );
}

export { _Dialog as Dialog };
export type { DialogProps };

export default _Dialog;
