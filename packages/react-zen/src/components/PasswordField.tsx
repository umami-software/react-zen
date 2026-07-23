import type { InputHTMLAttributes } from 'react';
import { useState } from 'react';
import { Eye, EyeSlash } from '@/components/svg';
import { Icon } from './Icon';
import { Label } from './Label';
import { cn } from './lib/tailwind';

export interface PasswordFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled' | 'readOnly'> {
  label?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

export function PasswordField({
  label,
  className,
  isDisabled,
  isReadOnly,
  ...props
}: PasswordFieldProps) {
  const [show, setShow] = useState(false);

  return (
    <>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <div
        className={cn(
          'flex items-center text-base border border-edge rounded bg-surface-base shadow-sm leading-6 relative',
          'focus-within:border-edge-strong',
          className,
        )}
      >
        <input
          aria-label="Password"
          {...props}
          type={show ? 'text' : 'password'}
          disabled={isDisabled}
          readOnly={isReadOnly}
          className="border-0 outline-none py-2 px-3 bg-transparent w-full flex-1 placeholder:text-foreground-muted"
        />
        <button
          type="button"
          className="mr-3"
          aria-label={show ? 'Hide password' : 'Show password'}
          onClick={() => setShow(state => !state)}
        >
          <Icon>{show ? <EyeSlash /> : <Eye />}</Icon>
        </button>
      </div>
    </>
  );
}
