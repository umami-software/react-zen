import { useState } from 'react';
import { Input, TextField, TextFieldProps } from 'react-aria-components';
import classNames from 'classnames';
import { Eye, EyeSlash } from '@/components/icons';
import { Icon } from './Icon';
import { Label } from './Label';
import inputStyles from './styles/input.module.css';
import styles from './PasswordField.module.css';

export interface PasswordFieldProps extends TextFieldProps {
  label?: string;
}

export function PasswordField({ label, className, ...props }: PasswordFieldProps) {
  const [show, setShow] = useState(false);
  const type = show ? 'text' : 'password';

  const handleShowPassword = () => setShow(state => !state);

  return (
    <TextField {...props} className={classNames(inputStyles.field, className)}>
      {label && <Label>{label}</Label>}
      <div className={inputStyles.row}>
        <Input type={type} className={inputStyles.input} />
        <Icon onClick={handleShowPassword} className={classNames(styles.icon, inputStyles.icon)}>
          {show ? <EyeSlash /> : <Eye />}
        </Icon>
      </div>
    </TextField>
  );
}
