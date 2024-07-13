import { ListBoxItem, ListBoxItemProps } from 'react-aria-components';
import classNames from 'classnames';
import { HiCheck } from 'react-icons/hi2';
import styles from './ListItem.module.css';

function ListItem({ children, className, ...props }: ListBoxItemProps<any>) {
  return (
    <ListBoxItem {...props} className={classNames(styles.item, className)}>
      {children as any}
      <span className={styles.check} aria-hidden="true">
        <HiCheck />
      </span>
    </ListBoxItem>
  );
}

export { ListItem };
export type { ListBoxItemProps as ListItemProps };

export default ListItem;
