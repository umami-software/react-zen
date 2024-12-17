import { ReactNode } from 'react';
import {
  ListBox,
  ListBoxProps,
  Separator,
  SeparatorProps,
  ListBoxSection,
  ListBoxSectionProps,
  Header,
  ListBoxItemProps,
  ListBoxItem,
} from 'react-aria-components';
import classNames from 'classnames';
import { Icon } from '@/components/Icon';
import { Icons } from '@/components/Icons';
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

export function ListItem({ children, className, ...props }: ListBoxItemProps<any>) {
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

export function ListSeparator({ className, ...props }: SeparatorProps) {
  return <Separator {...props} className={classNames(styles.separator, className)} />;
}

export function ListSection({
  title,
  className,
  children,
  ...props
}: ListBoxSectionProps<any> & { title?: string }) {
  return (
    <ListBoxSection {...props} className={classNames(styles.section, className)}>
      {title && <Header className={styles.header}>{title}</Header>}
      {children as any}
    </ListBoxSection>
  );
}
