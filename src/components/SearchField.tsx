import { useState, useEffect, ChangeEvent, forwardRef, Ref } from 'react';
import {
  SearchField as AriaSearchField,
  SearchFieldProps as AriaSearchFieldProps,
  Input,
  Button,
} from 'react-aria-components';
import classNames from 'classnames';
import { useDebounce } from './hooks/useDebounce';
import { Label } from './Label';
import { Icon } from './Icon';
import { Icons } from './Icons';
import inputStyles from './styles/input.module.css';
import styles from './SearchField.module.css';

interface SearchFieldProps extends AriaSearchFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  delay?: number;
  onSearch?: (value: string) => void;
}

const SearchField = forwardRef(
  ({ label, placeholder, value, delay = 0, onSearch, className, ...props }: SearchFieldProps, ref: Ref<any>) => {
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
      <AriaSearchField {...props} ref={ref} className={classNames(inputStyles.field, className)}>
        {({ state }) => {
          return (
            <>
              {label && <Label>{label}</Label>}
              <div className={inputStyles.row}>
                <Icons.MagnifyingGlass className={classNames(styles.search, inputStyles.icon)} />
                <Input
                  className={classNames(styles.input, inputStyles.input)}
                  placeholder={placeholder}
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
  },
);

export { SearchField };
export type { SearchFieldProps };
