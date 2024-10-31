import { ReactNode } from 'react';
import classNames from 'classnames';
import { Slot } from './Slot';
import styles from './Text.module.css';

interface TextProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  spacing?: 'tighter' | 'tight' | 'wide' | 'wider';
  type?: 'muted' | 'faded';
  weight?: 'lighter' | 'light' | 'bold' | 'bolder';
  align?: 'left' | 'center' | 'right';
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

function Text({
  children,
  type,
  size = 'md',
  spacing,
  weight,
  align,
  asChild,
  className,
  ...props
}: TextProps) {
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
        align && styles[align],
      )}
    >
      {children}
    </Component>
  );
}

export { Text };
export type { TextProps };
