import { TextField, TextFieldProps, Input, TextArea } from 'react-aria-components';
import classNames from 'classnames';
import Icon from './Icon';
import Icons from './Icons';
import fieldStyles from './Field.module.css';
import styles from './TextField.module.css';

interface _TextFieldProps extends TextFieldProps {
  asTextArea?: boolean;
}

function _TextField({ asTextArea, className, ...props }: _TextFieldProps) {
  const Component = asTextArea ? TextArea : Input;

  return (
    <TextField {...props} className={classNames(fieldStyles.field, className)}>
      <Component className={classNames(fieldStyles.input, asTextArea && styles.textarea)} />
      {asTextArea && (
        <Icon className={styles.handle}>
          <Icons.Corner />
        </Icon>
      )}
    </TextField>
  );
}

export { _TextField as TextField };
export type { _TextFieldProps as TextFieldProps };

export default _TextField;
