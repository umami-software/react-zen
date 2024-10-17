import classNames from 'classnames';
import {
  ToggleGroup as RadixToggleGroup,
  ToggleGroupItem as RadixToggleGroupItem,
  ToggleGroupItemProps,
  ToggleGroupMultipleProps,
} from '@radix-ui/react-toggle-group';
import styles from './ToggleGroup.module.css';

function ToggleGroup({ className, children, ...props }: ToggleGroupMultipleProps) {
  return (
    <RadixToggleGroup {...props} className={classNames(styles.group, className)}>
      {children}
    </RadixToggleGroup>
  );
}

function ToggleGroupItem({ className, children, ...props }: ToggleGroupItemProps) {
  return (
    <RadixToggleGroupItem {...props} className={classNames(styles.item, className)}>
      {children}
    </RadixToggleGroupItem>
  );
}

export { ToggleGroup, ToggleGroupItem };
