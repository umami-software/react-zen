import { SearchField, SearchFieldProps, Input, Button } from 'react-aria-components';
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2';
import classNames from 'classnames';
import Icon from './Icon';
import fieldStyles from './Field.module.css';
import styles from './SearchField.module.css';

function _SearchField({ className, ...props }: SearchFieldProps) {
  return (
    <SearchField {...props} className={classNames(fieldStyles.field, className)}>
      {({ state }) => {
        return (
          <>
            <HiMagnifyingGlass className={classNames(fieldStyles.icon, styles.icon)} />
            <Input className={fieldStyles.input} />
            {state.value && (
              <Button className={styles.button}>
                <Icon>
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
