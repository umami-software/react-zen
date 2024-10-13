import { ReactNode } from 'react';
import { Menu as AriaMenu, MenuProps as AriaMenuProps, Separator } from 'react-aria-components';
import classNames from 'classnames';
import { MenuItem } from './MenuItem';
import styles from './Menu.module.css';

interface MenuProps extends AriaMenuProps<any> {
  items?: any[];
  className?: string;
  children?: ReactNode;
}

function Menu({ items, className, children, ...props }: MenuProps) {
  return (
    <AriaMenu {...props} className={classNames(styles.menu, className)}>
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
    </AriaMenu>
  );
}

export { Menu };
export type { MenuProps };
