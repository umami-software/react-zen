import { useState, ChangeEvent, ReactNode } from 'react';
import { AlertDialog, AlertDialogProps } from './AlertDialog';
import { Box } from './Box';
import { TextField } from './TextField';
import { Text } from './Text';
import { cn } from './lib/tailwind';

interface ConfirmationDialogProps extends AlertDialogProps {
  value: string;
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
      className={cn(className)}
      isConfirmDisabled={!canSave}
    >
      {({ close }) => {
        return (
          <>
            {typeof children === 'function' ? children({ close }) : children}
            <Text>{confirmMessage || 'Type the following value to confirm'}:</Text>
            <Box paddingX="3" paddingY="2" marginY="2" borderRadius="md" className="font-mono text-sm bg-gray-100 dark:bg-gray-800">
              {value}
            </Box>
            <TextField autoFocus={true} aria-label="Confirmation" onChange={handleChange} />
          </>
        );
      }}
    </AlertDialog>
  );
}

export { ConfirmationDialog };
export type { ConfirmationDialogProps };
