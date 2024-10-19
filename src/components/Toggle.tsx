import { ReactNode, Ref, forwardRef } from 'react';
import { ToggleButton, ToggleButtonProps } from 'react-aria-components';
import classNames from 'classnames';
import { Label } from './Label';
import styles from './Toggle.module.css';

interface ToggleProps extends ToggleButtonProps {
  label?: string;
}

const Toggle = forwardRef(
  ({ label, children, className, ...props }: ToggleProps, ref: Ref<any>) => {
    return (
      <>
        {label && <Label>{label}</Label>}
        <ToggleButton {...props} ref={ref} className={classNames(styles.toggle, className)}>
          {children as ReactNode}
        </ToggleButton>
      </>
    );
  },
);

export { Toggle };
export type { ToggleButtonProps as ToggleProps };
