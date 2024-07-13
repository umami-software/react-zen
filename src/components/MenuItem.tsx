import { MenuItem, MenuItemProps } from 'react-aria-components';
import classNames from 'classnames';
import { HiCheck } from 'react-icons/hi2';
import styles from './MenuItem.module.css';

function _MenuItem({ children, className, ...props }: MenuItemProps<any>) {
  return (
    <MenuItem {...props} className={classNames(styles.item, className)}>
      {children as any}
      <span className={styles.check} aria-hidden="true">
        <HiCheck />
      </span>
    </MenuItem>
  );
}

export { _MenuItem as MenuItem };
export type { MenuItemProps };

export default _MenuItem;
