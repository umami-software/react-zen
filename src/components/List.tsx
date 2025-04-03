import { Fragment } from 'react';
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
  idProperty?: string;
  labelProperty?: string;
  separatorProperty?: string;
}

export function List({
  items,
  idProperty = 'id',
  labelProperty = 'label',
  separatorProperty = 'separatpr',
  className,
  children,
  ...props
}: ListProps) {
  return (
    <ListBox
      aria-label="list"
      {...props}
      items={items}
      className={classNames(styles.list, className)}
    >
      {children ||
        items?.map(item => {
          const id = item[idProperty] || item.toString();
          const label = item[labelProperty] || item.toString();

          return (
            <Fragment key={id}>
              {item[separatorProperty] && <Separator className={styles.separator} />}
              <ListItem id={id} className={styles.item}>
                {label}
              </ListItem>
            </Fragment>
          );
        })}
    </ListBox>
  );
}

export function ListItem({ id, children, className, ...props }: ListBoxItemProps<any>) {
  return (
    <ListBoxItem
      {...props}
      id={id}
      className={classNames(styles.item, className)}
      textValue={typeof children === 'string' ? children : id?.toString()}
    >
      {children as any}
      <div aria-hidden="true" className={styles.check}>
        <Icon>
          <Icons.Check />
        </Icon>
      </div>
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
