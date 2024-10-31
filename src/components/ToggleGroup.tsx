import classNames from 'classnames';
import { TagGroup, TagGroupProps, TagList, Tag, TagProps } from 'react-aria-components';
import { Label } from './Label';
import styles from './ToggleGroup.module.css';

export interface ToggleGroupProps extends TagGroupProps {
  label?: string;
}

function ToggleGroup({ label, className, children, ...props }: ToggleGroupProps) {
  return (
    <TagGroup {...props} className={classNames(styles.group, className)} selectionBehavior="toggle">
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
