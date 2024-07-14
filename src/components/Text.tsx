import { ReactNode } from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';
import styles from './Text.module.css';

interface TextProps {
  color?: 1 | 2 | 3;
  size?: 1 | 2 | 3 | 4 | 5;
  weight?: 1 | 2 | 3 | 4 | 5;
  asChild?: boolean;
  children?: ReactNode;
}

function Text({ children, color, size, weight, asChild, ...props }: TextProps) {
  const Component = asChild ? Slot : 'span';

  return (
    <Component
      {...props}
      className={classNames(styles.text, {
        [styles[`size${size}`]]: size,
        [styles[`color${color}`]]: color,
        [styles[`weight${weight}`]]: weight,
      })}
    >
      {children}
    </Component>
  );
}

export { Text };
export type { TextProps };

export default Text;
