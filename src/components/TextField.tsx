import { useState } from 'react';
import { TextField, TextFieldProps, Input, TextArea } from 'react-aria-components';
import classNames from 'classnames';
import { Icon } from './Icon';
import { Icons } from './Icons';
import { CopyButton } from './CopyButton';
import fieldStyles from './Field.module.css';
import styles from './TextField.module.css';

interface _TextFieldProps extends TextFieldProps {
  asTextArea?: boolean;
  allowCopy?: boolean;
  onChange?: (e: any) => void;
}

function _TextField({
  value,
  defaultValue,
  asTextArea,
  allowCopy,
  className,
  onChange,
  ...props
}: _TextFieldProps) {
  const [inputValue, setInputValue] = useState(defaultValue || value);
  const Component = asTextArea ? TextArea : Input;

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
    return onChange?.(e);
  };

  return (
    <TextField {...props} className={classNames(fieldStyles.field, className)}>
      <Component
        value={inputValue}
        className={classNames(fieldStyles.input, asTextArea && styles.textarea)}
        onChange={handleChange}
      />
      {asTextArea && (
        <Icon className={styles.resize} rotate={45}>
          <Icons.Chevron />
        </Icon>
      )}
      {allowCopy && <CopyButton className={styles.copy} value={inputValue} />}
    </TextField>
  );
}

export { _TextField as TextField };
export type { _TextFieldProps as TextFieldProps };
