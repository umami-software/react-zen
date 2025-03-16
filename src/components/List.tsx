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
    <ListBox {...props} items={items} className={classNames(styles.list, className)}>
      {children ||
        items?.map((item, index) => {
          const id = item[idProperty] || item;
          const label = item[labelProperty] || item;

          console.log({ item, id, label });

          return (
            <>
              {item[separatorProperty] && (
                <Separator key={`separator-${id}`} className={styles.separator} />
              )}
              <ListItem key={index} id={id} className={styles.item}>
                {label}
              </ListItem>
            </>
          );
        })}
    </ListBox>
  );
}

export function ListItem({ children, className, ...props }: ListBoxItemProps<any>) {
  return (
    <ListBoxItem {...props} className={classNames(styles.item, className)}>
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
