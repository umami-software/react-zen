import { useEffect, useState, forwardRef, Ref } from 'react';
import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  Input,
  TextArea,
} from 'react-aria-components';
import classNames from 'classnames';
import { Label } from './Label';
import { CopyButton } from './CopyButton';
import inputStyles from './Input.module.css';
import styles from './TextField.module.css';

interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  placeholder?: string;
  asTextArea?: boolean;
  allowCopy?: boolean;
  onChange?: (e: any) => void;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      value,
      defaultValue,
      label,
      placeholder,
      asTextArea,
      allowCopy,
      className,
      onChange,
      ...props
    },
    ref: Ref<HTMLInputElement>,
  ) => {
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
      <AriaTextField
        {...props}
        ref={ref}
        value={inputValue}
        className={classNames(inputStyles.field, className)}
      >
        {label && <Label>{label}</Label>}
        <div className={inputStyles.row}>
          <Component
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
  },
);

export { TextField };
export type { TextFieldProps };
