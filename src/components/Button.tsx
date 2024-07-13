import { Button, ButtonProps } from 'react-aria-components';
import classNames from 'classnames';
import styles from './Button.module.css';

interface _ButtonProps extends ButtonProps {
  variant?: 'primary' | 'secondary' | 'quiet' | 'danger';
  size?: 1 | 2 | 3 | 4;
  className?: string;
}

function _Button({ variant, size = 3, className, ...props }: _ButtonProps) {
  return (
    <Button
      {...props}
      className={classNames(
        styles.button,
        className,
        variant && styles[variant],
        size && styles[`size${size}`],
      )}
    />
  );
}

export { _Button as Button };
export type { _ButtonProps as ButtonProps };

export default _Button;
