import classNames from 'classnames';
import { TagGroup, TagGroupProps, TagList, Tag, TagProps, Selection } from 'react-aria-components';
import { Label } from './Label';
import styles from './ToggleGroup.module.css';

export interface ToggleGroupProps extends TagGroupProps {
  label?: string;
  onChange?: (value: string | string[]) => void;
}

function ToggleGroup({
  label,
  className,
  children,
  selectionMode = 'single',
  onChange,
  ...props
}: ToggleGroupProps) {
  const handleChange = (keys: Selection) => {
    onChange?.(Array.from(keys).map(k => k.toString()));
  };

  return (
    <TagGroup
      {...props}
      selectionMode={selectionMode}
      onSelectionChange={handleChange}
      className={classNames(styles.group, className)}
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
