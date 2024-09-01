import classNames from 'classnames';
import { ToggleGroup, ToggleGroupItem, ToggleGroupItemProps } from '@radix-ui/react-toggle-group';
import { ToggleGroupProps } from '@radix-ui/react-toolbar';
import styles from './ToggleGroup.module.css';

function _ToggleGroup({ className, children, ...props }: ToggleGroupProps) {
  return (
    <ToggleGroup {...props} className={classNames(styles.group, className)}>
      {children}
    </ToggleGroup>
  );
}

function _ToggleGroupItem({ className, children, ...props }: ToggleGroupItemProps) {
  return (
    <ToggleGroupItem {...props} className={classNames(styles.item, className)}>
      {children}
    </ToggleGroupItem>
  );
}

export { _ToggleGroup as ToggleGroup, _ToggleGroupItem as ToggleGroupItem };
