import type { InputHTMLAttributes } from 'react';
import { useEffect, useState } from 'react';
import { Search, X } from '@/components/icons';
import { useDebounce } from './hooks/useDebounce';
import { Icon } from './Icon';
import { Label } from './Label';
import { cn } from './lib/tailwind';

export interface SearchFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onSearch'> {
  label?: string;
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
  const [search, setSearch] = useState(String(value ?? defaultValue));
  const searchValue = useDebounce(search, delay);

  const handleChange = (nextValue: string) => {
    setSearch(nextValue);
    if (delay === 0 || nextValue === '') {
      onSearch?.(nextValue);
    }
    onChange?.(nextValue);
  };

  useEffect(() => {
    if (value !== undefined) {
      setSearch(String(value));
    }
  }, [value]);

  useEffect(() => {
    if (delay > 0) {
      onSearch?.(searchValue);
    }
  }, [searchValue, delay, onSearch]);

  return (
    <>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <div
        role="search"
        className={cn(
          'relative flex items-center text-base border border-edge rounded bg-surface-base shadow-sm leading-6',
          'focus-within:border-edge-strong',
          className,
        )}
      >
        <Icon className="ml-3" color="muted">
          <Search />
        </Icon>
        <input
          aria-label="Search"
          {...props}
          type="search"
          placeholder={placeholder}
          value={search}
          className="flex-1 py-2 px-3 bg-transparent border-none outline-none placeholder:text-foreground-muted [&::-webkit-search-cancel-button]:hidden"
          onChange={event => handleChange(event.target.value)}
          onKeyDown={event => {
            props.onKeyDown?.(event);
            if (event.key === 'Enter') {
              onSearch?.(search);
            }
          }}
        />
        {search && (
          <button
            type="button"
            className="mr-3 text-foreground-muted"
            aria-label="Clear search"
            onClick={() => handleChange('')}
          >
            <Icon size="sm">
              <X />
            </Icon>
          </button>
        )}
      </div>
    </>
  );
}
