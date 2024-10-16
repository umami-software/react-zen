import { useState } from 'react';
import { Input, Label, TextField, TextFieldProps } from 'react-aria-components';
import { Icon } from './Icon';
import { Icons } from './Icons';
import inputStyles from './Input.module.css';
import styles from './PasswordField.module.css';
import classNames from 'classnames';

interface PasswordFieldProps extends TextFieldProps {
  label?: string;
}

function PasswordField({ label, ...props }: PasswordFieldProps) {
  const [show, setShow] = useState(false);
  const type = show ? 'text' : 'password';

  const handleShowPassword = () => setShow(state => !state);

  return (
    <TextField {...props} className={inputStyles.field}>
      {label && <Label className={inputStyles.label}>{label}</Label>}
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
