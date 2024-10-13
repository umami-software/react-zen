import classNames from 'classnames';
import {
  ToggleGroup as RadixToggleGroup,
  ToggleGroupItem as RadixToggleGroupItem,
  ToggleGroupItemProps,
} from '@radix-ui/react-toggle-group';
import { ToggleGroupProps } from '@radix-ui/react-toolbar';
import styles from './ToggleGroup.module.css';

function ToggleGroup({ className, children, ...props }: ToggleGroupProps) {
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
