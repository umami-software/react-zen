import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './Button.module.css';

export function Button({
  variant,
  size = 3,
  asChild,
  ...props
}: {
  variant?: 'primary' | 'secondary' | 'quiet' | 'danger';
  size?: 1 | 2 | 3 | 4;
  asChild?: boolean;
} & HTMLAttributes<HTMLButtonElement>) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      {...props}
      className={classNames(
        styles.button,
        variant && styles[variant],
        size && styles[`size${size}`],
      )}
    />
  );
}

export default Button;
