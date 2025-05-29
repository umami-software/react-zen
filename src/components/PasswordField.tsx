import { useState } from 'react';
import { Input, TextField, TextFieldProps } from 'react-aria-components';
import classNames from 'classnames';
import { Eye, EyeSlash } from '@/components/icons';
import { Icon } from './Icon';
import { Label } from './Label';
import styles from './TextField.module.css';

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
      <TextField aria-label="Password" {...props} className={classNames(styles.field, className)}>
        <Input type={type} />
        <Icon onClick={handleShowPassword}>{show ? <EyeSlash /> : <Eye />}</Icon>
      </TextField>
    </>
  );
}
