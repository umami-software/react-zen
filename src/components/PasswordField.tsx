import { useState } from 'react';
import { Input, TextField, TextFieldProps } from 'react-aria-components';
import Icon from './Icon';
import Icons from './Icons';
import styles from './PasswordField.module.css';

function PasswordField({ ...props }: TextFieldProps) {
  const [show, setShow] = useState(false);
  const type = show ? 'text' : 'password';

  const handleShowPassword = () => setShow(state => !state);

  return (
    <TextField {...props} className={styles.field}>
      <Input type={type} className={styles.input} />
      <Icon onClick={handleShowPassword} className={styles.icon}>
        {show ? <Icons.EyeSlash /> : <Icons.Eye />}
      </Icon>
    </TextField>
  );
}

export { PasswordField };

export default PasswordField;
