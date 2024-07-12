import { ReactNode } from 'react';
import { Menu, MenuProps, MenuItem, Separator } from 'react-aria-components';
import styles from './Menu.module.css';

function _Menu({
  items,
  children,
  ...props
}: { items: any[]; children: ReactNode } & MenuProps<any>) {
  return (
    <Menu {...props} className={styles.menu}>
      {children
        ? typeof children === 'function'
          ? items.map(children)
          : children
        : items.map((item, index) => {
            if (item === null) {
              return <Separator key={index} className={styles.separator} />;
            }

            return (
              <MenuItem key={index} id={item} className={styles.item}>
                {item}
              </MenuItem>
            );
          })}
    </Menu>
  );
}

export { _Menu as Menu };

export default _Menu;
