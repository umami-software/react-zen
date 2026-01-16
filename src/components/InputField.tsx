import { cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';
import { Box, type BoxProps } from './Box';
import { Label } from './Label';
import { cn } from './lib/tailwind';

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
  const classes = cn(
    'flex items-center px-3 gap-3 text-base border border-edge rounded bg-surface-base shadow-sm leading-6 relative',
    'focus-within:border-transparent focus-within:ring-2 focus-within:ring-focus-ring',
    '[&_input]:border-0 [&_input]:outline-none [&_input]:py-2 [&_input]:bg-transparent [&_input]:flex-1',
    '[&_textarea]:border-0 [&_textarea]:outline-none [&_textarea]:py-2 [&_textarea]:bg-transparent [&_textarea]:flex-1',
    '[&_input]:placeholder:text-foreground-muted [&_textarea]:placeholder:text-foreground-muted',
    '[&_input]:disabled:text-foreground-disabled [&_textarea]:disabled:text-foreground-disabled',
    isReadOnly && 'bg-surface-raised focus-within:border-edge focus-within:ring-0',
    isDisabled && 'bg-surface-disabled',
    className,
  );

  if (!isValidElement(children)) {
    return null;
  }

  return (
    <Box>
      {label && <Label>{label}</Label>}
      {cloneElement(children as ReactElement<any>, {
        ...props,
        className: classes,
      })}
    </Box>
  );
}
