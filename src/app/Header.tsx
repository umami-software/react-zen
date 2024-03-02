'use client';
import { ReactNode } from 'react';
import styles from './Header.module.css';
import clsx from 'clsx';

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
      <div>zen</div>
      <a href={'/docs'}>docs</a>
      <div>{children}</div>
    </div>
  );
}
