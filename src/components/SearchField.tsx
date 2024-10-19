import { useState, useEffect, ChangeEvent } from 'react';
import {
  SearchField as AriaSearchField,
  SearchFieldProps as AriaSearchFieldProps,
  Input,
  Button,
  Label,
} from 'react-aria-components';
import classNames from 'classnames';
import { useDebounce } from './hooks/useDebounce';
import { Icon } from './Icon';
import { Icons } from './Icons';
import inputStyles from './Input.module.css';
import styles from './SearchField.module.css';

interface SearchFieldProps extends AriaSearchFieldProps {
  label?: string;
  value?: string;
  delay?: number;
  onSearch?: (value: string) => void;
}

function SearchField({ label, value, delay = 0, onSearch, className, ...props }: SearchFieldProps) {
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
    <AriaSearchField {...props} className={classNames(inputStyles.field, className)}>
      {({ state }) => {
        return (
          <>
            {label && <Label className={inputStyles.label}>{label}</Label>}
            <div className={inputStyles.row}>
              <Icons.MagnifyingGlass className={classNames(styles.search, inputStyles.icon)} />
              <Input
                className={classNames(styles.input, inputStyles.input)}
                onChange={handleChange}
              />
              {state.value && (
                <Button
                  className={classNames(styles.close, inputStyles.icon)}
                  onPress={resetSearch}
                >
                  <Icon>
                    <Icons.Close />
                  </Icon>
                </Button>
              )}
            </div>
          </>
        );
      }}
    </AriaSearchField>
  );
}

export { SearchField };
export type { SearchFieldProps };
