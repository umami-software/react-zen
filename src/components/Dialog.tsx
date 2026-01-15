import { ReactNode } from 'react';
import { Dialog as AriaDialog, DialogProps as AriaDialogProps } from 'react-aria-components';
import { Heading } from './Heading';
import { Column } from './Column';
import { cn } from './lib/tailwind';

interface DialogProps extends AriaDialogProps {
  title?: ReactNode;
  variant?: 'sheet';
}

function Dialog({ title, variant, children, className, ...props }: DialogProps) {
  return (
    <AriaDialog
      aria-label="Dialog"
      {...props}
      className={cn(
        'p-6 shadow-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded relative outline-none overflow-auto',
        variant === 'sheet' && 'w-full h-full p-0 border-0 rounded-none shadow-none z-[9999]',
        className,
      )}
    >
      {dialogProps => {
        return (
          <Column height="100%" gap>
            {title && <Heading size="xl">{title}</Heading>}
            {typeof children === 'function' ? children(dialogProps) : children}
          </Column>
        );
      }}
    </AriaDialog>
  );
}

export { Dialog };
export type { DialogProps };
