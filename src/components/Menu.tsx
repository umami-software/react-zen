import { ReactNode } from 'react';
import { Menu, MenuProps, Separator } from 'react-aria-components';
import classNames from 'classnames';
import { MenuItem } from './MenuItem';
import styles from './Menu.module.css';

interface _MenuProps extends MenuProps<any> {
  items?: any[];
  className?: string;
  children?: ReactNode;
}

function _Menu({ items, className, children, ...props }: _MenuProps) {
  return (
    <Menu {...props} className={classNames(styles.menu, className)}>
      {children ||
        items?.map((item, index) => {
          if (item === null) {
            return <Separator key={index} className={styles.separator} />;
          }

          return (
            <MenuItem key={index} id={item}>
              {item}
            </MenuItem>
          );
        })}
    </Menu>
  );
}

export { _Menu as Menu };
export type { _MenuProps as MenuProps };
