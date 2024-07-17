import { TextField, TextFieldProps, Input, TextArea } from 'react-aria-components';
import classNames from 'classnames';
import { GrBottomCorner } from 'react-icons/gr';
import Icon from './Icon';
import styles from './TextField.module.css';

interface _TextFieldProps extends TextFieldProps {
  asTextArea?: boolean;
}

function _TextField({ asTextArea, className, ...props }: _TextFieldProps) {
  const Component = asTextArea ? TextArea : Input;

  return (
    <TextField {...props} className={classNames(styles.field, className)}>
      <Component className={classNames(styles.input, asTextArea && styles.textarea)} />
      {asTextArea && (
        <Icon className={styles.handle}>
          <GrBottomCorner />
        </Icon>
      )}
    </TextField>
  );
}

export { _TextField as TextField };
export type { _TextFieldProps as TextFieldProps };

export default _TextField;
