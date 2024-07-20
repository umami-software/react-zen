import { ReactNode } from 'react';
import { Dialog, DialogProps } from 'react-aria-components';
import classNames from 'classnames';
import styles from './Dialog.module.css';

interface _DialogProps extends DialogProps {
  title?: ReactNode;
}

function _Dialog({ title, children, className, ...props }: _DialogProps) {
  return (
    <Dialog {...props} className={classNames(styles.dialog, className)}>
      {({ close }) => {
        return (
          <>
            {title && <div className={styles.title}>{title}</div>}
            {typeof children === 'function' ? children({ close }) : children}
          </>
        );
      }}
    </Dialog>
  );
}

export { _Dialog as Dialog };
export type { _DialogProps as DialogProps };

export default _Dialog;
