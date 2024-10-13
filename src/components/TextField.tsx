import { useState } from 'react';
import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  Input,
  TextArea,
} from 'react-aria-components';
import classNames from 'classnames';
import { CopyButton } from './CopyButton';
import fieldStyles from './Field.module.css';
import styles from './TextField.module.css';

interface TextFieldProps extends AriaTextFieldProps {
  asTextArea?: boolean;
  allowCopy?: boolean;
  onChange?: (e: any) => void;
}

function TextField({
  value,
  defaultValue,
  asTextArea,
  allowCopy,
  className,
  onChange,
  ...props
}: TextFieldProps) {
  const [inputValue, setInputValue] = useState(defaultValue || value);
  const Component = asTextArea ? TextArea : Input;

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
    return onChange?.(e);
  };

  return (
    <AriaTextField {...props} className={classNames(fieldStyles.field, className)}>
      <Component
        value={inputValue}
        className={classNames(fieldStyles.input, asTextArea && styles.textarea)}
        onChange={handleChange}
      />
      {allowCopy && <CopyButton className={styles.copy} value={inputValue} />}
    </AriaTextField>
  );
}

export { TextField };
export type { TextFieldProps };
