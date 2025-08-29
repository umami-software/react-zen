import { ReactNode } from 'react';
import { Dialog as AriaDialog, DialogProps as AriaDialogProps } from 'react-aria-components';
import classNames from 'classnames';
import styles from './Dialog.module.css';

interface DialogProps extends AriaDialogProps {
  title?: ReactNode;
  variant?: 'modal' | 'menu' | 'sheet' | 'none';
}

function Dialog({ title, variant = 'modal', children, className, ...props }: DialogProps) {
  return (
    <AriaDialog
      aria-label="Dialog"
      {...props}
      className={classNames(styles.dialog, variant && styles[variant], className)}
    >
      {dialogProps => {
        return (
          <>
            {title && <div className={styles.title}>{title}</div>}
            {typeof children === 'function' ? children(dialogProps) : children}
          </>
        );
      }}
    </AriaDialog>
  );
}

export { Dialog };
export type { DialogProps };
