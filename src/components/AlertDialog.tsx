import { ReactNode } from 'react';
import classNames from 'classnames';
import { Dialog, DialogProps } from './Dialog';
import { Column } from './Column';
import { Row } from './Row';
import { Button } from './Button';
import styles from './AlertDialog.module.css';

export interface AlertDialogProps extends DialogProps {
  title?: ReactNode;
  description?: ReactNode;
  isDanger?: boolean;
  isConfirmDisabled?: boolean;
  confirmLabel?: ReactNode;
  cancelLabel?: ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export function AlertDialog({
  title,
  description,
  isDanger,
  isConfirmDisabled,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
  className,
  children,
  ...props
}: AlertDialogProps) {
  const handleConfirm = (close: () => void) => {
    onConfirm?.();
    close();
  };

  const handleClose = (close: () => void) => {
    onCancel?.();
    close();
  };

  return (
    <Dialog {...props} title={title} className={classNames(styles.dialog, className)}>
      {({ close }) => {
        return (
          <Column gap="4">
            {typeof children === 'function' ? children({ close }) : children}
            <Row gap="3" justifyContent="end">
              <Button onPress={() => handleClose(close)}>{cancelLabel}</Button>
              <Button
                variant={isDanger ? 'danger' : 'primary'}
                isDisabled={isConfirmDisabled}
                onPress={() => handleConfirm(close)}
              >
                {confirmLabel}
              </Button>
            </Row>
          </Column>
        );
      }}
    </Dialog>
  );
}
