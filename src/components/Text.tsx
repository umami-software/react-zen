import { ReactNode } from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';
import styles from './Text.module.css';

interface TextProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  spacing?: 'tighter' | 'tight' | 'wide' | 'wider';
  type?: 'muted' | 'faded';
  weight?: 'lighter' | 'light' | 'bold' | 'bolder';
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

function Text({ children, type, size, spacing, weight, asChild, className, ...props }: TextProps) {
  const Component = asChild ? Slot : 'span';

  return (
    <Component
      {...props}
      className={classNames(
        styles.text,
        className,
        size && styles[size],
        spacing && styles[spacing],
        type && styles[type],
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
