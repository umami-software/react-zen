import { Button, ButtonProps } from 'react-aria-components';
import classNames from 'classnames';
import styles from './Button.module.css';

function _Button({
  variant,
  size = 3,
  ...props
}: {
  variant?: 'primary' | 'secondary' | 'quiet' | 'danger';
  size?: 1 | 2 | 3 | 4;
} & ButtonProps) {
  return (
    <Button
      {...props}
      className={classNames(
        styles.button,
        variant && styles[variant],
        size && styles[`size${size}`],
      )}
    />
  );
}

export { _Button as Button };

export default _Button;
