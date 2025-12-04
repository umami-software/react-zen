import classNames from 'classnames';
import { type ReactNode, useCallback, useState } from 'react';
import { Edit } from '@/components/icons';
import { Icon } from './Icon';
import styles from './InlineEditField.module.css';
import { TextField, type TextFieldProps } from './TextField';

export interface InlineEditFieldProps extends TextFieldProps {
  name?: string;
  value: string;
  defaultEdit?: boolean;
  onChange?: (value: any) => void;
  onCommit?: (value: any) => void;
  onCancel?: () => void;
}

export function InlineEditField({
  name = '',
  value: defaultValue = '',
  defaultEdit,
  className,
  children,
  onChange,
  onCommit,
  onCancel,
  ...props
}: InlineEditFieldProps) {
  const [value, setValue] = useState(defaultValue);
  const [edit, setEdit] = useState(defaultEdit);

  const handleEdit = () => setEdit(true);

  const handleChange = (value: string) => {
    setValue(value);
    onChange?.(value);
  };

  const handleCommit = () => {
    setEdit(false);
    onCommit?.(value);
  };

  const handleCancel = useCallback(() => {
    setEdit(false);
    setValue(defaultValue);
    onCancel?.();
  }, [defaultValue, onCancel]);

  const handleKeyDown = ({ key }: { key: string }) => {
    if (key === 'Enter') {
      handleCommit();
    } else if (key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div aria-label="Edit" className={classNames(styles.edit, className)} onClick={handleEdit}>
      {!edit && (children as ReactNode)}
      {!edit && (
        <Icon className={styles.icon}>
          <Edit />
        </Icon>
      )}
      {edit && (
        <TextField
          {...props}
          name={name}
          value={value}
          onKeyDown={handleKeyDown}
          onBlur={handleCommit}
          onChange={handleChange}
          autoFocus={true}
        />
      )}
    </div>
  );
}
