import type { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Text.module.css';

export function Text({
  color,
  size,
  weight,
  style,
  ...attributes
}: {
  color?: 1 | 2 | 3;
  size?: 1 | 2 | 3 | 4 | 5;
  weight?: 1 | 2 | 3 | 4 | 5;
  style?: any;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'color'>) {
  return (
    <span
      {...attributes}
      className={classNames(styles.text, {
        [styles[`size${size}`]]: size,
        [styles[`color${color}`]]: color,
        [styles[`weight${weight}`]]: weight,
      })}
    />
  );
}

export default Text;
