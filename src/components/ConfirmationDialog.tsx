import { useState, ChangeEvent, ReactNode } from 'react';
import classNames from 'classnames';
import { AlertDialog, AlertDialogProps } from './AlertDialog';
import { TextField } from './TextField';
import { Text } from './Text';
import styles from './ConfirmationDialog.module.css';

interface ConfirmationDialogProps extends AlertDialogProps {
  value?: string;
  confirmMessage?: ReactNode;
}

function ConfirmationDialog({
  value,
  confirmMessage,
  className,
  children,
  ...props
}: ConfirmationDialogProps) {
  const [canSave, setCanSave] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCanSave(e.target.value === value);
  };

  return (
    <AlertDialog
      {...props}
      className={classNames(styles.dialog, className)}
      isConfirmDisabled={!canSave}
    >
      {({ close }) => {
        return (
          <>
            {typeof children === 'function' ? children({ close }) : children}
            <Text>{confirmMessage || 'Type the following value to confirm'}:</Text>
            <div className={styles.value}>{value}</div>
            <TextField autoFocus={true} aria-label="Confirmation" onChange={handleChange} />
          </>
        );
      }}
    </AlertDialog>
  );
}

export { ConfirmationDialog };
export type { ConfirmationDialogProps };
