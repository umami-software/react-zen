import { AlertDialog as BaseAlertDialog } from '@base-ui/react/alert-dialog';
import type { ReactNode } from 'react';
import { Button } from './Button';
import { Column } from './Column';
import { Dialog, type DialogProps } from './Dialog';
import { cn } from './lib/tailwind';
import type { OverlayTarget } from './OverlayTrigger';
import { Row } from './Row';
import { Text } from './Text';

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
  return (
    <Dialog {...props} title={title} className={cn('grid', className)}>
      {({ close }) => {
        return (
          <Column gap="4">
            {description && (
              <BaseAlertDialog.Description render={<Text color="muted" />}>
                {description}
              </BaseAlertDialog.Description>
            )}
            {typeof children === 'function' ? children({ close }) : children}
            <Row gap="3" justifyContent="end">
              <BaseAlertDialog.Close render={<Button onPress={onCancel}>{cancelLabel}</Button>} />
              <BaseAlertDialog.Close
                render={
                  <Button
                    variant={isDanger ? 'danger' : 'primary'}
                    isDisabled={isConfirmDisabled}
                    onPress={onConfirm}
                  >
                    {confirmLabel}
                  </Button>
                }
              />
            </Row>
          </Column>
        );
      }}
    </Dialog>
  );
}

(AlertDialog as typeof AlertDialog & OverlayTarget).zenOverlayType = 'alert-dialog';
