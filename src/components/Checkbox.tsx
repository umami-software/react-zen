import { ReactNode } from 'react';
import { Checkbox } from 'react-aria-components';
import classNames from 'classnames';
import { HiCheck } from 'react-icons/hi';
import Icon from './Icon';
import styles from './Checkbox.module.css';

export interface CheckboxProps {
  className?: string;
  children: ReactNode;
}

export function ZenCheckbox({ className, children, ...props }: CheckboxProps) {
  return (
    <Checkbox {...props} className={classNames(styles.checkbox, className)}>
      <div className={styles.box}>
        <Icon className={styles.icon} size={1}>
          <HiCheck />
        </Icon>
      </div>
      {children}
    </Checkbox>
  );
}

export default ZenCheckbox;
