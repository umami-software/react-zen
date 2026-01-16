import { useState } from 'react';
import { Input, TextField, type TextFieldProps } from 'react-aria-components';
import { Eye, EyeSlash } from '@/components/svg';
import { Icon } from './Icon';
import { Label } from './Label';
import { cn } from './lib/tailwind';

export interface PasswordFieldProps extends TextFieldProps {
  label?: string;
}

export function PasswordField({ label, className, ...props }: PasswordFieldProps) {
  const [show, setShow] = useState(false);
  const type = show ? 'text' : 'password';

  const handleShowPassword = () => setShow(state => !state);

  return (
    <>
      {label && <Label>{label}</Label>}
      <TextField
        aria-label="Password"
        {...props}
        className={cn(
          'flex items-center text-base border border-edge rounded bg-surface-base shadow-sm leading-6 relative',
          'focus-within:border-edge-strong',
          '[&_input]:border-0 [&_input]:outline-none [&_input]:py-2 [&_input]:px-3 [&_input]:bg-transparent [&_input]:w-full [&_input]:flex-1',
          '[&_input]:placeholder:text-foreground-muted',
          className,
        )}
      >
        <Input type={type} />
        <Icon className="mr-3" onClick={handleShowPassword}>
          {show ? <EyeSlash /> : <Eye />}
        </Icon>
      </TextField>
    </>
  );
}
