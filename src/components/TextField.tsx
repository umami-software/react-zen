import { useEffect, useState } from 'react';
import {
  Group as AriaGroup,
  TextField as AriaTextField,
  type TextFieldProps as AriaTextFieldProps,
  Input,
  TextArea,
} from 'react-aria-components';
import { CopyButton } from './CopyButton';
import { Label } from './Label';
import { cn } from './lib/tailwind';

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  placeholder?: string;
  allowCopy?: boolean;
  asTextArea?: boolean;
  resize?: 'vertical' | 'horizontal' | 'both' | 'none';
  variant?: 'quiet' | 'none';
  onChange?: (e: any) => void;
}

const resizeClasses = {
  vertical: 'resize-y',
  horizontal: 'resize-x',
  both: 'resize',
  none: 'resize-none',
};

export function TextField({
  value,
  defaultValue,
  label,
  placeholder,
  allowCopy,
  asTextArea,
  resize,
  variant,
  onChange,
  isReadOnly,
  isDisabled,
  className,
  children,
  ...props
}: TextFieldProps) {
  const [inputValue, setInputValue] = useState(defaultValue || value);
  const Component = asTextArea ? TextArea : Input;

  const handleChange = (value: string) => {
    setInputValue(value);
    return onChange?.(value);
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const inputClasses = cn(
    'flex-1 py-2 bg-transparent border-none outline-none placeholder:text-content-muted',
    asTextArea && 'p-3 w-full',
    resize && resizeClasses[resize],
  );

  return (
    <>
      {label && <Label>{label}</Label>}
      <AriaTextField
        aria-label="Text"
        {...props}
        className={cn('relative', className)}
        value={inputValue}
        isReadOnly={isReadOnly}
        isDisabled={isDisabled}
        onChange={handleChange}
      >
        <AriaGroup
          className={cn(
            'flex items-center px-3 gap-3 text-base border border-edge rounded bg-surface-base shadow-sm leading-6',
            'focus-within:border-transparent focus-within:ring-2 focus-within:ring-focus-ring',
            'data-[readonly]:bg-surface-raised',
            'data-[disabled]:text-content-disabled data-[disabled]:bg-surface-disabled',
            'focus-within:data-[readonly]:border-edge focus-within:data-[readonly]:ring-0',
            asTextArea && 'p-0',
            variant === 'quiet' &&
              'p-0 shadow-none rounded-none border-transparent bg-transparent focus-within:border-b-edge focus-within:ring-0',
          )}
        >
          <Component placeholder={placeholder} className={inputClasses} />
          {allowCopy && (
            <CopyButton
              value={inputValue}
              className={cn(
                'text-content-muted cursor-pointer hover:text-content-primary',
                !inputValue && 'text-content-disabled',
                asTextArea && 'absolute top-3 right-3 z-10',
              )}
            />
          )}
        </AriaGroup>
      </AriaTextField>
    </>
  );
}
