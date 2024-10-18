import { useEffect, useState } from 'react';
import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  Label,
  Input,
  TextArea,
} from 'react-aria-components';
import classNames from 'classnames';
import { CopyButton } from './CopyButton';
import inputStyles from './Input.module.css';
import styles from './TextField.module.css';

interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  asTextArea?: boolean;
  allowCopy?: boolean;
  placeholder?: string;
  onChange?: (e: any) => void;
}

function TextField({
  name,
  value,
  defaultValue,
  label,
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

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <AriaTextField className={classNames(inputStyles.field, className)}>
      {label && <Label className={inputStyles.label}>{label}</Label>}
      <div className={inputStyles.row}>
        <Component
          {...(props as any)}
          value={inputValue}
          className={classNames(
            styles.input,
            inputStyles.input,
            asTextArea && styles.textarea,
            allowCopy && styles.allowCopy,
          )}
          onChange={handleChange}
        />
        {allowCopy && (
          <CopyButton className={classNames(styles.icon, inputStyles.icon)} value={inputValue} />
        )}
      </div>
    </AriaTextField>
  );
}

export { TextField };
export type { TextFieldProps };
