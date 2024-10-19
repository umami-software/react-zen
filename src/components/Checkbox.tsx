import { forwardRef, Ref } from 'react';
import {
  Checkbox as AriaCheckbox,
  CheckboxProps as AriaCheckboxProps,
} from 'react-aria-components';
import classNames from 'classnames';
import { Icons } from './Icons';
import { Icon } from './Icon';
import styles from './Checkbox.module.css';

interface CheckboxProps extends AriaCheckboxProps {
  label?: string;
}

const Checkbox = forwardRef(
  ({ label, className, children, ...props }: CheckboxProps, ref: Ref<any>) => {
    return (
      <AriaCheckbox ref={ref} {...props} className={classNames(styles.checkbox, className)}>
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
  },
);

export { Checkbox };
export type { CheckboxProps };
