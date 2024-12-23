import { ListBoxItem, ListBoxItemProps } from 'react-aria-components';
import classNames from 'classnames';
import { Icon } from './Icon';
import { Icons } from './Icons';
import styles from './ListItem.module.css';

function ListItem({ children, className, ...props }: ListBoxItemProps<any>) {
  return (
    <ListBoxItem {...props} className={classNames(styles.item, className)}>
      {children as any}
      <span aria-hidden="true">
        <Icon size="sm" className={styles.check}>
          <Icons.Check />
        </Icon>
      </span>
    </ListBoxItem>
  );
}

export { ListItem };
export type { ListBoxItemProps as ListItemProps };
