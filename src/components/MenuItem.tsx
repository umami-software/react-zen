import { MenuItem as AriaMenuItem, MenuItemProps } from 'react-aria-components';
import classNames from 'classnames';
import { Icon } from './Icon';
import { Icons } from './Icons';
import styles from './MenuItem.module.css';

function MenuItem({ children, className, ...props }: MenuItemProps<any>) {
  return (
    <AriaMenuItem {...props} className={classNames(styles.item, className)}>
      {children as any}
      <span aria-hidden="true">
        <Icon className={styles.check}>
          <Icons.Check />
        </Icon>
      </span>
    </AriaMenuItem>
  );
}

export { MenuItem };
export type { MenuItemProps };
