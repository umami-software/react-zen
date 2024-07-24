import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Page.module.css';

interface PageProps {
  className?: string;
  children?: ReactNode;
}

function Page({ className, children, ...props }: PageProps) {
  return (
    <div {...props} className={classNames(styles.page, className)}>
      {children}
    </div>
  );
}

export { Page };
export type { PageProps };
