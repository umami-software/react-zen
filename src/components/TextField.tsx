import { useEffect, useState } from 'react';
import {
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
  vertical: '[&_textarea]:resize-y',
  horizontal: '[&_textarea]:resize-x',
  both: '[&_textarea]:resize',
  none: '[&_textarea]:resize-none',
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

  return (
    <>
      {label && <Label>{label}</Label>}
      <AriaTextField
        aria-label="Text"
        {...props}
        className={cn(
          'flex items-center px-3 gap-3 text-base border border-edge rounded bg-surface-base shadow-sm leading-6 relative',
          'focus-within:border-transparent focus-within:ring-2 focus-within:ring-focus-ring',
          'data-[readonly]:bg-surface-raised',
          'data-[disabled]:text-content-disabled data-[disabled]:bg-surface-disabled',
          'focus-within:data-[readonly]:border-edge focus-within:data-[readonly]:ring-0',
          '[&_input]:border-0 [&_input]:outline-none [&_input]:py-2 [&_input]:bg-transparent [&_input]:w-full [&_input]:flex-1',
          '[&_textarea]:border-0 [&_textarea]:outline-none [&_textarea]:py-2 [&_textarea]:bg-transparent [&_textarea]:w-full [&_textarea]:flex-1',
          '[&_input]:placeholder:text-content-muted [&_textarea]:placeholder:text-content-muted',
          asTextArea && 'p-0 [&_textarea]:p-3',
          resize && resizeClasses[resize],
          variant === 'quiet' &&
            'p-0 shadow-none rounded-none border-transparent bg-transparent focus-within:border-b-edge focus-within:ring-0',
          className,
        )}
        value={inputValue}
        isReadOnly={isReadOnly}
        isDisabled={isDisabled}
        onChange={handleChange}
      >
        <Component placeholder={placeholder} />
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
      </AriaTextField>
    </>
  );
}
