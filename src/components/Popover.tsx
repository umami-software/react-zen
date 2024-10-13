import { Popover as AriaPopover, PopoverProps } from 'react-aria-components';
import classNames from 'classnames';
import styles from './Popover.module.css';

function Popover({ children, className, ...props }: PopoverProps) {
  return (
    <AriaPopover {...props} className={classNames(styles.popover, className)}>
      {children as any}
    </AriaPopover>
  );
}

export { Popover };
export type { PopoverProps };
