import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2';
import Icon from './Icon';
import { SearchField, SearchFieldProps, Input, Button } from 'react-aria-components';
import styles from './SearchField.module.css';
import classNames from 'classnames';

function _SearchField({ className, ...props }: SearchFieldProps) {
  return (
    <SearchField {...props} className={classNames(styles.field, className)}>
      {({ state }) => {
        return (
          <>
            <HiMagnifyingGlass className={styles.icon} />
            <Input className={styles.input} />
            {state.value && (
              <Button className={styles.button}>
                <Icon size={1}>
                  <HiXMark />
                </Icon>
              </Button>
            )}
          </>
        );
      }}
    </SearchField>
  );
}

export { _SearchField as SearchField };
export type { SearchFieldProps };

export default _SearchField;
