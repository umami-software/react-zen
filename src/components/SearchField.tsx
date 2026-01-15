import { useEffect, useState } from 'react';
import {
  Group as AriaGroup,
  SearchField as AriaSearchField,
  type SearchFieldProps as AriaSearchFieldProps,
  Input,
} from 'react-aria-components';
import { Search, X } from '@/components/icons';
import { useDebounce } from './hooks/useDebounce';
import { Icon } from './Icon';
import { Label } from './Label';
import { cn } from './lib/tailwind';

export interface SearchFieldProps extends AriaSearchFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  delay?: number;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
}

export function SearchField({
  label,
  placeholder,
  value,
  defaultValue = '',
  delay = 0,
  onChange,
  onSearch,
  className,
  ...props
}: SearchFieldProps) {
  const [search, setSearch] = useState(defaultValue);
  const searchValue = useDebounce(search, delay);

  const handleChange = (value: string) => {
    setSearch(value);

    if (delay === 0 || value === '') {
      onSearch?.(value);
    }

    onChange?.(value);
  };

  const resetSearch = () => {
    setSearch('');
    onSearch?.('');
    onChange?.('');
  };

  useEffect(() => {
    if (delay > 0) {
      onSearch?.(searchValue);
    }
  }, [searchValue, delay]);

  return (
    <>
      {label && <Label>{label}</Label>}
      <AriaSearchField
        aria-label="Search"
        {...props}
        className={cn('relative', className)}
        onChange={handleChange}
      >
        <AriaGroup
          className={cn(
            'flex items-center px-3 gap-3 text-base border border-edge rounded bg-surface-base shadow-sm leading-6',
            'focus-within:border-transparent focus-within:ring-2 focus-within:ring-focus-ring',
          )}
        >
          <Icon color="muted">
            <Search />
          </Icon>
          <Input
            placeholder={placeholder}
            value={search}
            className="flex-1 py-2 bg-transparent border-none outline-none placeholder:text-content-muted [&::-webkit-search-cancel-button]:hidden"
          />
          {search && (
            <Icon size="sm" color="muted" onClick={resetSearch}>
              <X />
            </Icon>
          )}
        </AriaGroup>
      </AriaSearchField>
    </>
  );
}
