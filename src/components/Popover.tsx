import { Popover, PopoverProps } from 'react-aria-components';
import classNames from 'classnames';
import styles from './Popover.module.css';

function _Popover({ children, className, ...props }: PopoverProps) {
  return (
    <Popover {...props} className={classNames(styles.popover, className)}>
      {children as any}
    </Popover>
  );
}

export { _Popover as Popover };
export type { PopoverProps };

export default _Popover;
