import { TextField, TextFieldProps, Label, Input } from 'react-aria-components';
import classNames from 'classnames';
import styles from './TextField.module.css';

function _TextField({ className, ...props }: TextFieldProps) {
  return (
    <TextField {...props} className={classNames(styles.field, className)}>
      <Input className={styles.input} />
    </TextField>
  );
}

export { _TextField as TextField };

export default _TextField;
