import { ReactNode } from 'react';
import { ToggleButton, ToggleButtonProps } from 'react-aria-components';
import classNames from 'classnames';
import { Label } from './Label';
import styles from './Toggle.module.css';

export interface ToggleProps extends ToggleButtonProps {
  label?: string;
  value?: string;
}

export function Toggle({ label, children, className, ...props }: ToggleProps) {
  const isSelected = typeof props.value !== 'undefined' ? !!props.value : undefined;

  return (
    <>
      {label && <Label>{label}</Label>}
      <ToggleButton
        {...props}
        isSelected={isSelected}
        className={classNames(styles.toggle, className)}
      >
        {children as ReactNode}
      </ToggleButton>
    </>
  );
}
