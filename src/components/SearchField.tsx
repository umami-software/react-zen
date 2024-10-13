import { useState, useEffect, ChangeEvent } from 'react';
import {
  SearchField as AriaSearchField,
  SearchFieldProps as AriaSearchFieldProps,
  Input,
  Button,
} from 'react-aria-components';
import classNames from 'classnames';
import { useDebounce } from './hooks/useDebounce';
import { Icon } from './Icon';
import { Icons } from './Icons';
import fieldStyles from './Field.module.css';
import styles from './SearchField.module.css';

interface SearchFieldProps extends AriaSearchFieldProps {
  value?: string;
  delay?: number;
  onSearch?: (value: string) => void;
}

function SearchField({ value, delay = 0, onSearch, className, ...props }: SearchFieldProps) {
  const [search, setSearch] = useState(value ?? '');
  const searchValue = useDebounce(search, delay);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearch(value);

    if (delay === 0 || value === '') {
      onSearch?.(value);
    }
  };

  const resetSearch = () => {
    setSearch('');
    onSearch?.('');
  };

  useEffect(() => {
    if (delay > 0) {
      onSearch?.(searchValue);
    }
  }, [searchValue, delay, onSearch]);

  return (
    <AriaSearchField {...props} className={classNames(fieldStyles.field, className)}>
      {({ state }) => {
        return (
          <>
            <Icons.MagnifyingGlass className={classNames(fieldStyles.icon, styles.icon)} />
            <Input className={fieldStyles.input} onChange={handleChange} />
            {state.value && (
              <Button className={styles.button} onPress={resetSearch}>
                <Icon>
                  <Icons.Close />
                </Icon>
              </Button>
            )}
          </>
        );
      }}
    </AriaSearchField>
  );
}

export { SearchField };
export type { SearchFieldProps };
