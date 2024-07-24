import { MenuItem, MenuItemProps } from 'react-aria-components';
import classNames from 'classnames';
import { Icon } from './Icon';
import { Icons } from './Icons';
import styles from './MenuItem.module.css';

function _MenuItem({ children, className, ...props }: MenuItemProps<any>) {
  return (
    <MenuItem {...props} className={classNames(styles.item, className)}>
      {children as any}
      <span aria-hidden="true">
        <Icon className={styles.check}>
          <Icons.Check />
        </Icon>
      </span>
    </MenuItem>
  );
}

export { _MenuItem as MenuItem };
export type { MenuItemProps };
