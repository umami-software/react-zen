import { ReactNode, Ref, forwardRef } from 'react';
import { ToggleButton, ToggleButtonProps } from 'react-aria-components';
import classNames from 'classnames';
import { Label } from './Label';
import styles from './Toggle.module.css';

interface ToggleProps extends ToggleButtonProps {
  label?: string;
  value?: string;
}

const Toggle = forwardRef(
  ({ label, children, className, ...props }: ToggleProps, ref: Ref<any>) => {
    const isSelected = typeof props.value !== 'undefined' ? !!props.value : undefined;

    return (
      <>
        {label && <Label>{label}</Label>}
        <ToggleButton
          {...props}
          ref={ref}
          isSelected={isSelected}
          className={classNames(styles.toggle, className)}
        >
          {children as ReactNode}
        </ToggleButton>
      </>
    );
  },
);

export { Toggle };
export type { ToggleButtonProps as ToggleProps };
