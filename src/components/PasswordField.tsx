import { useState, forwardRef, Ref } from 'react';
import { Input, TextField, TextFieldProps } from 'react-aria-components';
import classNames from 'classnames';
import { Icon } from './Icon';
import { Icons } from './Icons';
import { Label } from './Label';
import inputStyles from './styles/input.module.css';
import styles from './PasswordField.module.css';

interface PasswordFieldProps extends TextFieldProps {
  label?: string;
}

const PasswordField = forwardRef(
  ({ label, className, ...props }: PasswordFieldProps, ref: Ref<any>) => {
    const [show, setShow] = useState(false);
    const type = show ? 'text' : 'password';

    const handleShowPassword = () => setShow(state => !state);

    return (
      <TextField {...props} ref={ref} className={classNames(inputStyles.field, className)}>
        {label && <Label>{label}</Label>}
        <div className={inputStyles.row}>
          <Input type={type} className={inputStyles.input} />
          <Icon onClick={handleShowPassword} className={classNames(styles.icon, inputStyles.icon)}>
            {show ? <Icons.EyeSlash /> : <Icons.Eye />}
          </Icon>
        </div>
      </TextField>
    );
  },
);

export { PasswordField };
