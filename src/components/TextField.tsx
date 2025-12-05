import classNames from 'classnames';
import { useEffect, useState } from 'react';
import {
  TextField as AriaTextField,
  type TextFieldProps as AriaTextFieldProps,
  Input,
  TextArea,
} from 'react-aria-components';
import { CopyButton } from './CopyButton';
import { Label } from './Label';
import styles from './TextField.module.css';

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  placeholder?: string;
  allowCopy?: boolean;
  asTextArea?: boolean;
  resize?: 'vertical' | 'horizontal' | 'both' | 'none';
  variant?: 'quiet' | 'none';
  onChange?: (e: any) => void;
}

export function TextField({
  value,
  defaultValue,
  label,
  placeholder,
  allowCopy,
  asTextArea,
  resize,
  variant,
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
          !inputValue && styles.novalue,
          resize && styles[`resize-${resize}`],
          variant && styles[`variant-${variant}`],
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
