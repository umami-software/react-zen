import { ReactNode } from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import styles from './Checkbox.module.css';

export interface CheckboxProps {
  id?: string;
  children: ReactNode;
}

export function Checkbox({ id, children, ...props }: CheckboxProps) {
  return (
    <div className={styles.checkbox}>
      <RadixCheckbox.Root {...props} className={styles.root}>
        <RadixCheckbox.Indicator className={styles.indicator}>
          <CheckIcon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      {children && (
        <label className={styles.label} htmlFor="checkbox">
          {children}
        </label>
      )}
    </div>
  );
}

export default Checkbox;
