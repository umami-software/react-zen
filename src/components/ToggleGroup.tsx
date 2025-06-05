import classNames from 'classnames';
import { TagGroup, TagGroupProps, TagList, Tag, TagProps, Selection } from 'react-aria-components';
import { Label } from './Label';
import styles from './ToggleGroup.module.css';

export interface ToggleGroupProps extends TagGroupProps {
  label?: string;
  value?: string[];
  defaultValue?: string[];
  variant?: 'primary';
  onChange?: (value: string[]) => void;
}

function ToggleGroup({
  label,
  value,
  defaultValue,
  variant,
  onChange,
  className,
  children,
  selectionMode = 'single',
  selectedKeys,
  defaultSelectedKeys,
  onSelectionChange,
  ...props
}: ToggleGroupProps) {
  const handleChange = (keys: Selection) => {
    onSelectionChange?.(keys);
    onChange?.(Array.from(keys).map(k => k.toString()));
  };

  return (
    <TagGroup
      {...props}
      selectedKeys={value || selectedKeys}
      defaultSelectedKeys={defaultValue || defaultSelectedKeys}
      selectionMode={selectionMode}
      onSelectionChange={handleChange}
      className={classNames(styles.group, className, variant && styles[variant])}
    >
      {label && <Label>{label}</Label>}
      <TagList className={styles.list}>{children}</TagList>
    </TagGroup>
  );
}

export interface ToggleGroupItemProps extends TagProps {}

function ToggleGroupItem({ className, children, ...props }: ToggleGroupItemProps) {
  return (
    <Tag {...props} className={classNames(styles.item, className)}>
      {children}
    </Tag>
  );
}

export { ToggleGroup, ToggleGroupItem };
