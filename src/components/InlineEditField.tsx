import { ReactNode, useState, useCallback, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { TextField } from './TextField';
import { Icon } from './Icon';
import { Icons } from './Icons';
import styles from './InlineEditField.module.css';

export interface InlineEditFieldProps extends HTMLAttributes<HTMLDivElement> {
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

  const handleChange = (e: { target: { value: any } }) => {
    const val = e.target.value;
    setValue(val);
    onChange?.(val);
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
    <div
      {...props}
      aria-label="Edit"
      className={classNames(styles.edit, className)}
      onClick={handleEdit}
    >
      {!edit && (children as ReactNode)}
      {!edit && (
        <Icon className={styles.icon}>
          <Icons.Edit />
        </Icon>
      )}
      {edit && (
        <TextField
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
