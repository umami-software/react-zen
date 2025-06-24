import { useEffect, useState } from 'react';
import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  TextArea,
  Input,
} from 'react-aria-components';
import classNames from 'classnames';
import { Label } from './Label';
import { CopyButton } from './CopyButton';
import styles from './TextField.module.css';

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  placeholder?: string;
  allowCopy?: boolean;
  asTextArea?: boolean;
  onChange?: (e: any) => void;
}

export function TextField({
  value,
  defaultValue,
  label,
  placeholder,
  allowCopy,
  asTextArea,
  onChange,
  isReadOnly,
  isDisabled,
  className,
  children,
  ...props
}: TextFieldProps) {
  const [inputValue, setInputValue] = useState(defaultValue || value);
  const Component = asTextArea ? TextArea : Input;

  const handleChange = (value: string) => {
    setInputValue(value);
    return onChange?.(value);
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <>
      {label && <Label>{label}</Label>}
      <AriaTextField
        aria-label="Text"
        {...props}
        className={classNames(
          styles.field,
          asTextArea && styles.textarea,
          allowCopy && styles.copy,
          className,
        )}
        value={inputValue}
        isReadOnly={isReadOnly}
        isDisabled={isDisabled}
        onChange={handleChange}
      >
        <Component placeholder={placeholder} />
        {allowCopy && <CopyButton value={inputValue} className={styles.icon} />}
      </AriaTextField>
    </>
  );
}
