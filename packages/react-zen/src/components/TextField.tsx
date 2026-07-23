import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { useEffect, useState } from 'react';
import { CopyButton } from './CopyButton';
import { Label } from './Label';
import { cn } from './lib/tailwind';

type NativeFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>,
  'onChange' | 'readOnly' | 'disabled'
>;

export interface TextFieldProps extends NativeFieldProps {
  label?: string;
  placeholder?: string;
  allowCopy?: boolean;
  asTextArea?: boolean;
  resize?: 'vertical' | 'horizontal' | 'both' | 'none';
  variant?: 'quiet' | 'none';
  isReadOnly?: boolean;
  isDisabled?: boolean;
  onChange?: (value: any) => void;
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
  children: _children,
  ...props
}: TextFieldProps) {
  const [inputValue, setInputValue] = useState(defaultValue ?? value ?? '');
  const Component = asTextArea ? 'textarea' : 'input';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const nextValue = event.target.value;
    setInputValue(nextValue);
    onChange?.(nextValue);
  };

  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  const inputClasses = cn(
    'flex-1 min-w-0 py-2 px-3 bg-transparent border-none outline-none placeholder:text-foreground-muted',
    asTextArea && 'p-3 w-full',
    resize && resizeClasses[resize],
  );

  return (
    <>
      {label && <Label>{label}</Label>}
      <div
        className={cn(
          'relative flex items-center w-full text-base border border-edge rounded bg-surface-base shadow-sm leading-6',
          'focus-within:border-edge-strong',
          isReadOnly && 'bg-surface-raised focus-within:border-edge',
          isDisabled && 'text-foreground-disabled bg-surface-disabled',
          asTextArea && 'p-0',
          variant === 'quiet' &&
            'py-0 px-0 shadow-none rounded-none border-transparent bg-transparent text-[length:inherit] focus-within:border-b-edge focus-within:border-x-transparent focus-within:border-t-transparent',
          variant === 'quiet' && allowCopy && 'pr-3',
          className,
        )}
      >
        <Component
          {...props}
          placeholder={placeholder}
          value={inputValue}
          readOnly={isReadOnly}
          disabled={isDisabled}
          className={inputClasses}
          onChange={handleChange}
        />
        {allowCopy && (
          <CopyButton
            value={String(inputValue)}
            className={cn(
              'mr-3 text-foreground-muted cursor-pointer hover:text-foreground-primary',
              !inputValue && 'text-foreground-disabled',
              asTextArea && 'absolute top-3 right-3 z-10 mr-0',
            )}
          />
        )}
      </div>
    </>
  );
}
