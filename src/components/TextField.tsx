import { ReactNode } from 'react';
import { TextField, TextFieldProps, Label, Input } from 'react-aria-components';
import classNames from 'classnames';
import Icon from './Icon';
import styles from './TextField.module.css';

interface _TextFieldProps extends TextFieldProps {
  icon?: ReactNode;
}

function _TextField({ icon, className, ...props }: _TextFieldProps) {
  return (
    <TextField {...props} className={classNames(styles.field, className)}>
      {icon && (
        <Icon size={1} className={styles.icon}>
          {icon}
        </Icon>
      )}
      <Input className={styles.input} />
    </TextField>
  );
}

export { _TextField as TextField };
export type { _TextFieldProps as TextFieldProps };

export default _TextField;
