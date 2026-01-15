import { useEffect, useState } from 'react';
import {
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
        className={cn(
          'flex items-center px-3 gap-3 text-base border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 shadow-sm leading-6 relative',
          'focus-within:border-transparent focus-within:ring-2 focus-within:ring-gray-400',
          '[&_input]:border-0 [&_input]:outline-none [&_input]:py-2 [&_input]:bg-transparent [&_input]:w-full [&_input]:flex-1',
          '[&_input]:placeholder:text-gray-400',
          className,
        )}
        onChange={handleChange}
      >
        <Icon color="muted">
          <Search />
        </Icon>
        <Input placeholder={placeholder} value={search} />
        {search && (
          <Icon size="sm" color="muted" onClick={resetSearch}>
            <X />
          </Icon>
        )}
      </AriaSearchField>
    </>
  );
}
