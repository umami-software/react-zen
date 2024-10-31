import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { Slot } from './Slot';
import { Text } from './Text';
import styles from './TextOverflow.module.css';

interface TextOverflowProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

function TextOverflow({ asChild, children, className, ...props }: TextOverflowProps) {
  const Component = asChild ? Slot : Text;

  return (
    <div {...props} className={classNames(styles.wrapper, className)}>
      <Component className={styles.overflow}>{children}</Component>
    </div>
  );
}

export { TextOverflow };
export type { TextOverflowProps };
