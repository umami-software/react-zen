import classNames from 'classnames';
import { ReactNode, HTMLAttributes } from 'react';
import styles from './Page.module.css';

export function Page({
  style,
  children,
  ...attributes
}: { style?: any; children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...attributes} className={classNames(styles.page)}>
      {children}
    </div>
  );
}

export default Page;
