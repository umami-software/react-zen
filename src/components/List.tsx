import { Fragment } from 'react';
import {
  Header,
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  type ListBoxProps,
  ListBoxSection,
  type ListBoxSectionProps,
  type Selection,
  Separator,
  type SeparatorProps,
} from 'react-aria-components';
import { useFieldId } from '@/components/hooks/useFieldId';
import { Icon } from '@/components/Icon';
import { Check } from '@/components/icons';
import { Label } from '@/components/Label';
import { getHighlightColor } from '@/lib/styles';
import { cn } from './lib/tailwind';

export interface ListProps extends ListBoxProps<any> {
  items?: any[];
  idProperty?: string;
  labelProperty?: string;
  separatorProperty?: string;
  highlightColor?: string;
  showCheckmark?: boolean;
  isFullscreen?: boolean;
  label?: string;
  value?: string[];
  onChange?: (value: string[]) => void;
}

export function List({
  id,
  items = [],
  idProperty = 'id',
  labelProperty = 'label',
  separatorProperty = 'separator',
  highlightColor,
  showCheckmark = true,
  isFullscreen,
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
        className={cn(
          'grid outline-none overflow-auto gap-1 p-2',
          isFullscreen &&
            'block p-3 rounded-none fixed inset-0 overflow-auto z-[9999] bg-surface-base',
          className,
        )}
        onSelectionChange={handleSelectionChange}
        style={{ ...style, ...getHighlightColor(highlightColor) }}
      >
        {children ||
          items?.map(item => {
            const id = item[idProperty] || item.toString();
            const label = item[labelProperty] || item.toString();

            return (
              <Fragment key={id}>
                {item[separatorProperty] && <ListSeparator />}
                <ListItem id={id} showCheckmark={showCheckmark}>
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
      className={cn(
        'text-base flex items-center justify-between px-2 py-1.5 gap-3 min-w-[120px] cursor-pointer outline-none rounded',
        'hover:bg-interactive',
        'data-[focus]:bg-interactive',
        'data-[disabled]:text-foreground-disabled',
        'data-[selected]:font-semibold',
        className,
      )}
      textValue={typeof children === 'string' ? children : id?.toString()}
    >
      {({ isSelected }) => (
        <>
          {children}
          {showCheckmark && isSelected && (
            <Icon aria-hidden="true">
              <Check />
            </Icon>
          )}
        </>
      )}
    </ListBoxItem>
  );
}

export function ListSeparator({ className, ...props }: SeparatorProps) {
  return <Separator {...props} className={cn('border-b border-edge-muted', className)} />;
}

export interface ListSectionProps extends ListBoxSectionProps<any> {
  title?: string;
}

export function ListSection({ title, className, children, ...props }: ListSectionProps) {
  return (
    <ListBoxSection {...props} className={cn('[&:not(:last-child)]:mb-4', className)}>
      {title && <Header className="text-base font-bold px-2 py-1.5">{title}</Header>}
      {children as any}
    </ListBoxSection>
  );
}
