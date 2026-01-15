import { TagGroup, TagGroupProps, TagList, Tag, TagProps, Selection } from 'react-aria-components';
import { Label } from './Label';
import { cn } from './lib/tailwind';

export interface ToggleGroupProps extends TagGroupProps {
  label?: string;
  value?: string[];
  defaultValue?: string[];
  variant?: 'primary';
  onChange?: (value: string[]) => void;
}

function ToggleGroup({
  label,
  value,
  defaultValue,
  variant,
  onChange,
  className,
  children,
  selectionMode = 'single',
  selectedKeys,
  defaultSelectedKeys,
  onSelectionChange,
  ...props
}: ToggleGroupProps) {
  const handleChange = (keys: Selection) => {
    onSelectionChange?.(keys);
    onChange?.(Array.from(keys).map(k => k.toString()));
  };

  return (
    <TagGroup
      {...props}
      selectedKeys={value || selectedKeys}
      defaultSelectedKeys={defaultValue || defaultSelectedKeys}
      selectionMode={selectionMode}
      onSelectionChange={handleChange}
      className={cn(
        'text-xs bg-white dark:bg-gray-900 shadow-sm border border-gray-300 dark:border-gray-700 rounded overflow-hidden',
        className,
      )}
    >
      {label && <Label>{label}</Label>}
      <TagList className="flex flex-row items-center">
        {children}
      </TagList>
    </TagGroup>
  );
}

export interface ToggleGroupItemProps extends TagProps {}

function ToggleGroupItem({ className, children, ...props }: ToggleGroupItemProps) {
  return (
    <Tag
      {...props}
      className={cn(
        'text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 font-bold flex items-center justify-center p-2 cursor-pointer outline-none',
        '[&:not(:first-child)]:border-l [&:not(:first-child)]:border-gray-300 dark:[&:not(:first-child)]:border-gray-700',
        'hover:bg-gray-100 dark:hover:bg-gray-800',
        'data-[selected]:text-gray-900 dark:data-[selected]:text-gray-100 data-[selected]:bg-gray-100 dark:data-[selected]:bg-gray-800',
        'data-[disabled]:text-gray-300 dark:data-[disabled]:text-gray-600',
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export { ToggleGroup, ToggleGroupItem };
