import {
  Checkbox as AriaCheckbox,
  CheckboxProps as AriaCheckboxProps,
} from 'react-aria-components';
import { ImCheckmark } from 'react-icons/im';
import classNames from 'classnames';
import { Icons } from './Icons';
import { Icon } from './Icon';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends AriaCheckboxProps {
  label?: string;
}

export function Checkbox({ label, className, children, ...props }: CheckboxProps) {
  const isSelected = typeof props.value !== 'undefined' ? !!props.value : undefined;

  return (
    <AriaCheckbox
      {...props}
      isSelected={isSelected}
      className={classNames(styles.checkbox, className)}
    >
      {({ isIndeterminate, isSelected }) => {
        return (
          <>
            <div className={styles.box}>
              <Icon className={styles.icon} size="xs">
                {isIndeterminate ? <Icons.Minus /> : isSelected ? <ImCheckmark /> : null}
              </Icon>
            </div>
            {children as any}
          </>
        );
      }}
    </AriaCheckbox>
  );
}
