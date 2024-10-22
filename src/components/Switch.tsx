import { forwardRef, Ref } from 'react';
import { Switch as AriaSwitch, SwitchProps as AriaSwitchProps } from 'react-aria-components';
import classNames from 'classnames';
import { Label } from './Label';
import styles from './Switch.module.css';

interface SwitchProps extends AriaSwitchProps {
  label?: string;
}

const Switch = forwardRef(
  ({ label, children, className, ...props }: SwitchProps, ref: Ref<any>) => {
    const isSelected = typeof props.value !== 'undefined' ? !!props.value : undefined;

    return (
      <>
        {label && <Label>{label}</Label>}
        <AriaSwitch
          {...props}
          isSelected={isSelected}
          ref={ref}
          className={classNames(styles.switch, className)}
        >
          <div className={styles.track}>
            <div className={styles.knob} />
          </div>
          {children as any}
        </AriaSwitch>
      </>
    );
  },
);

export { Switch };
export type { SwitchProps };
