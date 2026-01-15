import type { ReactNode } from 'react';
import { Box, type BoxProps } from './Box';
import { Label } from './Label';
import { cn } from './lib/tailwind';
import { Slot } from './Slot';

export interface InputFieldProps extends BoxProps {
  label?: string;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  children: ReactNode;
}

export function InputField({
  label,
  isReadOnly,
  isDisabled,
  className,
  children,
  ...props
}: InputFieldProps) {
  return (
    <Box>
      {label && <Label>{label}</Label>}
      <Slot
        {...props}
        className={cn(
          'flex items-center px-3 gap-3 text-base border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 shadow-sm leading-6 relative',
          'focus-within:border-transparent focus-within:ring-2 focus-within:ring-gray-400',
          '[&_input]:border-0 [&_input]:outline-none [&_input]:py-2 [&_input]:bg-transparent [&_input]:flex-1',
          '[&_textarea]:border-0 [&_textarea]:outline-none [&_textarea]:py-2 [&_textarea]:bg-transparent [&_textarea]:flex-1',
          '[&_input]:placeholder:text-gray-400 [&_textarea]:placeholder:text-gray-400',
          '[&_input]:disabled:text-gray-400 [&_textarea]:disabled:text-gray-400',
          isReadOnly &&
            'bg-gray-50 dark:bg-gray-800 focus-within:border-gray-300 dark:focus-within:border-gray-700 focus-within:ring-0',
          isDisabled && 'bg-gray-50 dark:bg-gray-800',
          className,
        )}
      >
        {children}
      </Slot>
    </Box>
  );
}
