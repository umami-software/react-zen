import { ReactNode } from 'react';
import { ListBox, ListBoxProps, Separator } from 'react-aria-components';
import classNames from 'classnames';
import { ListItem } from './ListItem';
import styles from './List.module.css';

interface ListProps extends ListBoxProps<any> {
  items?: any[];
  className?: string;
  children?: ReactNode;
}

function List({ items, className, children, ...props }: ListProps) {
  return (
    <ListBox {...props} items={items} className={classNames(styles.list, className)}>
      {children ||
        items?.map((item, index) => {
          if (item === null) {
            return <Separator key={index} className={styles.separator} />;
          }

          return (
            <ListItem key={index} id={item}>
              {item}
            </ListItem>
          );
        })}
    </ListBox>
  );
}

export { List };
export type { ListProps };
