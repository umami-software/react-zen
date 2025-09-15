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
  Selection,
} from 'react-aria-components';
import classNames from 'classnames';
import { Icon } from '@/components/Icon';
import { Label } from '@/components/Label';
import { Check } from '@/components/icons';
import { useFieldId } from '@/components/hooks/useFieldId';
import { getHighlightColor } from '@/lib/styles';
import styles from './List.module.css';

export interface ListProps extends ListBoxProps<any> {
  items?: any[];
  idProperty?: string;
  labelProperty?: string;
  separatorProperty?: string;
  highlightColor?: string;
  showCheckmark?: boolean;
  label?: string;
  value?: string[];
  onChange?: (value: string[]) => void;
}

export function List({
  id,
  items = [],
  idProperty = 'id',
  labelProperty = 'label',
  separatorProperty = 'separatpr',
  highlightColor,
  showCheckmark = true,
  label,
  value,
  onChange,
  className,
  selectedKeys,
  defaultSelectedKeys,
  onSelectionChange,
  style,
  children,
  ...props
}: ListProps) {
  const handleSelectionChange = (keys: Selection) => {
    onSelectionChange?.(keys);
    if (keys !== 'all') {
      onChange?.([...keys].map(String));
    }
  };
  const fieldId = useFieldId(id);

  return (
    <>
      {label && <Label htmlFor={fieldId}>{label}</Label>}
      <ListBox
        id={fieldId}
        aria-label="list"
        {...props}
        selectedKeys={value || selectedKeys}
        defaultSelectedKeys={value || defaultSelectedKeys}
        items={items}
        className={classNames(styles.list, className, !showCheckmark && styles.hideCheckmark)}
        onSelectionChange={handleSelectionChange}
        style={{ ...style, ...getHighlightColor(highlightColor) }}
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
    </>
  );
}

export interface ListItemProps extends ListBoxItemProps<any> {
  showCheckmark?: boolean;
}

export function ListItem({
  id,
  children,
  className,
  showCheckmark = true,
  ...props
}: ListItemProps) {
  return (
    <ListBoxItem
      {...props}
      id={id}
      className={classNames(styles.item, className)}
      textValue={typeof children === 'string' ? children : id?.toString()}
    >
      {children as any}
      {showCheckmark && (
        <Icon aria-hidden="true" className={styles.checkmark}>
          <Check />
        </Icon>
      )}
    </ListBoxItem>
  );
}

export function ListSeparator({ className, ...props }: SeparatorProps) {
  return <Separator {...props} className={classNames(styles.separator, className)} />;
}

export interface ListSectionProps extends ListBoxSectionProps<any> {
  title?: string;
}

export function ListSection({ title, className, children, ...props }: ListSectionProps) {
  return (
    <ListBoxSection {...props} className={classNames(styles.section, className)}>
      {title && <Header className={styles.header}>{title}</Header>}
      {children as any}
    </ListBoxSection>
  );
}
