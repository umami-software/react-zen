import { ReactNode } from 'react';
import classNames from 'classnames';
import { Dialog, DialogProps } from './Dialog';
import { Text } from './Text';
import { Column } from './Column';
import { Row } from './Row';
import { Button } from './Button';
import styles from './AlertDialog.module.css';

interface AlertDialogProps extends DialogProps {
  title?: ReactNode;
  description?: ReactNode;
  isDanger?: boolean;
  isConfirmDisabled?: boolean;
  confirmLabel?: ReactNode;
  cancelLabel?: ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
}

function AlertDialog({
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
          <Column spacing={6}>
            {typeof children === 'function' ? children({ close }) : children}
            <Row spacing={3} justifyContent="end">
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

export { AlertDialog };
export type { AlertDialogProps };

export default AlertDialog;
