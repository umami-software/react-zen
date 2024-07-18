import { useState } from 'react';
import { Input, TextField, TextFieldProps } from 'react-aria-components';
import { PiEyeLight, PiEyeSlashLight } from 'react-icons/pi';
import Icon from './Icon';
import styles from './PasswordField.module.css';

function PasswordField({ ...props }: TextFieldProps) {
  const [show, setShow] = useState(false);
  const type = show ? 'text' : 'password';

  const handleShowPassword = () => setShow(state => !state);

  return (
    <TextField {...props} className={styles.field}>
      <Input type={type} className={styles.input} />
      <Icon onClick={handleShowPassword} className={styles.icon}>
        {show ? <PiEyeSlashLight /> : <PiEyeLight />}
      </Icon>
    </TextField>
  );
}

export { PasswordField };

export default PasswordField;
