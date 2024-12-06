import { ReactNode } from 'react';
import {
  ListBox,
  ListBoxProps,
  Separator,
  SeparatorProps,
  ListBoxSection,
  ListBoxSectionProps,
  Header,
} from 'react-aria-components';
import classNames from 'classnames';
import { ListItem } from './ListItem';
import styles from './List.module.css';

export interface ListProps extends ListBoxProps<any> {
  items?: any[];
  className?: string;
  children?: ReactNode;
}

export function List({ items, className, children, ...props }: ListProps) {
  return (
    <ListBox {...props} items={items} className={classNames(styles.list, className)}>
      {children ||
        items?.map((item, index) => {
          if (item === null) {
            return <Separator key={index} className={styles.separator} />;
          }

          return (
            <ListItem key={index} id={item} className={styles.item}>
              {item}
            </ListItem>
          );
        })}
    </ListBox>
  );
}

export function ListSeparator({ className, ...props }: SeparatorProps) {
  return <Separator {...props} className={classNames(styles.separator, className)} />;
}

export function ListSection({
  title,
  className,
  children,
  ...props
}: ListBoxSectionProps<any> & { title?: string }): ReactNode {
  return (
    <ListBoxSection {...props} className={classNames(styles.section, className)}>
      {title && <Header className={styles.header}>{title}</Header>}
      {children as any}
    </ListBoxSection>
  );
}
