import { useEffect, useState, forwardRef, Ref } from 'react';
import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  Input,
} from 'react-aria-components';
import classNames from 'classnames';
import { Slot } from './Slot';
import { Label } from './Label';
import { CopyButton } from './CopyButton';
import inputStyles from './styles/input.module.css';
import styles from './TextField.module.css';

interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  placeholder?: string;
  allowCopy?: boolean;
  asChild?: boolean;
  onChange?: (e: any) => void;
}

const TextField = forwardRef(
  (
    {
      value,
      defaultValue,
      label,
      placeholder,
      allowCopy,
      asChild,
      className,
      onChange,
      children,
      ...props
    }: TextFieldProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const [inputValue, setInputValue] = useState(defaultValue || value);
    const Component = asChild ? Slot : Input;

    const handleChange = (e: any) => {
      setInputValue(e.target.value);
      return onChange?.(e);
    };

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    return (
      <AriaTextField
        aria-label="Text"
        {...props}
        ref={ref}
        value={inputValue}
        className={classNames(inputStyles.field, className)}
      >
        {label && <Label>{label}</Label>}
        <div className={inputStyles.row}>
          <Component
            className={classNames(styles.input, inputStyles.input, allowCopy && styles.allowCopy)}
            placeholder={placeholder}
            onChange={handleChange}
          >
            {children as any}
          </Component>
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
