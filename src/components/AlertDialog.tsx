import { ReactNode } from 'react';
import classNames from 'classnames';
import { Dialog, DialogProps } from './Dialog';
import { Text } from './Text';
import { Row } from './Row';
import { Button } from './Button';
import styles from './AlertDialog.module.css';

interface AlertDialogProps extends DialogProps {
  title?: ReactNode;
  description?: ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
}

function AlertDialog({
  title,
  description,
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
          <>
            {typeof children === 'function' ? children({ close }) : children}
            <Row spacing={3} justifyContent="end">
              <Button onPress={() => handleClose(close)}>Cancel</Button>
              <Button variant="danger" onPress={() => handleConfirm(close)}>
                Delete
              </Button>
            </Row>
          </>
        );
      }}
    </Dialog>
  );
}

export { AlertDialog };

export default AlertDialog;
