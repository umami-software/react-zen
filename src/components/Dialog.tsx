import { ReactNode } from 'react';
import { Dialog as AriaDialog, DialogProps as AriaDialogProps } from 'react-aria-components';
import classNames from 'classnames';
import styles from './Dialog.module.css';

interface DialogProps extends AriaDialogProps {
  title?: ReactNode;
}

function Dialog({ title, children, className, ...props }: DialogProps) {
  return (
    <AriaDialog {...props} className={classNames(styles.dialog, className)}>
      {({ close }) => {
        return (
          <>
            {title && <div className={styles.title}>{title}</div>}
            {typeof children === 'function' ? children({ close }) : children}
          </>
        );
      }}
    </AriaDialog>
  );
}

export { Dialog };
export type { DialogProps };
