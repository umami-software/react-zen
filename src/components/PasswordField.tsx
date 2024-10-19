import { useState } from 'react';
import { Input, TextField, TextFieldProps } from 'react-aria-components';
import classNames from 'classnames';
import { Icon } from './Icon';
import { Icons } from './Icons';
import { Label } from './Label';
import inputStyles from './Input.module.css';
import styles from './PasswordField.module.css';

interface PasswordFieldProps extends TextFieldProps {
  label?: string;
}

function PasswordField({ label, className, ...props }: PasswordFieldProps) {
  const [show, setShow] = useState(false);
  const type = show ? 'text' : 'password';

  const handleShowPassword = () => setShow(state => !state);

  return (
    <TextField {...props} className={classNames(inputStyles.field, className)}>
      {label && <Label>{label}</Label>}
      <div className={inputStyles.row}>
        <Input type={type} className={inputStyles.input} />
        <Icon onClick={handleShowPassword} className={classNames(styles.icon, inputStyles.icon)}>
          {show ? <Icons.EyeSlash /> : <Icons.Eye />}
        </Icon>
      </div>
    </TextField>
  );
}

export { PasswordField };
