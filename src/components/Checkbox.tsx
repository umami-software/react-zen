import { Checkbox, CheckboxProps } from 'react-aria-components';
import classNames from 'classnames';
import { Icons } from './Icons';
import { Icon } from './Icon';
import styles from './Checkbox.module.css';

function _Checkbox({ className, children, ...props }: CheckboxProps) {
  return (
    <Checkbox {...props} className={classNames(styles.checkbox, className)}>
      {({ isIndeterminate, isSelected }) => {
        return (
          <>
            <div className={styles.box}>
              <Icon className={styles.icon} size="xs">
                {isIndeterminate ? <Icons.Minus /> : isSelected ? <Icons.Check /> : null}
              </Icon>
            </div>
            {children as any}
          </>
        );
      }}
    </Checkbox>
  );
}

export { _Checkbox as Checkbox };
export type { CheckboxProps };
