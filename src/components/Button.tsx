import { Button, ButtonProps } from 'react-aria-components';
import classNames from 'classnames';
import styles from './Button.module.css';

interface _ButtonProps extends ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'quiet' | 'danger' | 'zero';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

function _Button({ variant = 'secondary', size = 'md', className, ...props }: _ButtonProps) {
  return (
    <Button
      {...props}
      className={classNames(
        styles.button,
        className,
        variant && styles[variant],
        size && styles[size],
      )}
    />
  );
}

export { _Button as Button };
export type { _ButtonProps as ButtonProps };

export default _Button;
