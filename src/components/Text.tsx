import { ReactNode } from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';
import styles from './Text.module.css';

interface TextProps {
  color?: 'muted' | 'faded';
  size?: 1 | 2 | 3 | 4 | 5;
  weight?: 'light' | 'bold' | 'bolder';
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

function Text({ children, color, size, weight, asChild, className, ...props }: TextProps) {
  const Component = asChild ? Slot : 'span';

  return (
    <Component
      {...props}
      className={classNames(
        styles.text,
        className,
        size && styles[`size${size}`],
        color && styles[color],
        weight && styles[weight],
      )}
    >
      {children}
    </Component>
  );
}

export { Text };
export type { TextProps };

export default Text;
