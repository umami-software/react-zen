import { Checkbox as AriaCheckbox, CheckboxProps } from 'react-aria-components';
import classNames from 'classnames';
import { Icons } from './Icons';
import { Icon } from './Icon';
import styles from './Checkbox.module.css';

function Checkbox({ className, children, ...props }: CheckboxProps) {
  return (
    <AriaCheckbox {...props} className={classNames(styles.checkbox, className)}>
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
    </AriaCheckbox>
  );
}

export { Checkbox };
export type { CheckboxProps };
