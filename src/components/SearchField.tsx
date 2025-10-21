import { useState, useEffect } from 'react';
import {
  SearchField as AriaSearchField,
  SearchFieldProps as AriaSearchFieldProps,
  Input,
} from 'react-aria-components';
import classNames from 'classnames';
import { Search, X } from '@/components/icons';
import { useDebounce } from './hooks/useDebounce';
import { Label } from './Label';
import { Icon } from './Icon';
import styles from './TextField.module.css';

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
        className={classNames(styles.field, className)}
        onChange={handleChange}
      >
        <Icon strokeColor="8">
          <Search />
        </Icon>
        <Input placeholder={placeholder} value={search} />
        {search && (
          <Icon size="sm" color="8" onClick={resetSearch}>
            <X />
          </Icon>
        )}
      </AriaSearchField>
    </>
  );
}
