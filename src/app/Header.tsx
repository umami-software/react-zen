'use client';
import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Header.module.css';

export default function Header({
  className,
  children,
  ...domProps
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div {...domProps} className={clsx(styles.header, className)}>
      <a href={'/'}>zen</a>
      <a href={'/docs'}>docs</a>
      <div className={styles.buttons}>{children}</div>
    </div>
  );
}
