import { ReactNode } from 'react';
import { Breadcrumbs, BreadcrumbsProps, Breadcrumb, BreadcrumbProps } from 'react-aria-components';
import classNames from 'classnames';
import { Icon } from './Icon';
import { Icons } from './Icons';
import styles from './Breadcrumbs.module.css';

function _Breadcrumbs({ children, className, ...props }: BreadcrumbsProps<any>) {
  return (
    <Breadcrumbs {...props} className={classNames(styles.breadcrumbs, className)}>
      {children}
    </Breadcrumbs>
  );
}

function _Breadcrumb({ children, className, ...props }: BreadcrumbProps) {
  return (
    <Breadcrumb {...props} className={classNames(styles.breadcrumb, className)}>
      {children as ReactNode}
      <Icon className={styles.icon} size="xs">
        <Icons.Chevron />
      </Icon>
    </Breadcrumb>
  );
}

export { _Breadcrumb as Breadcrumb, _Breadcrumbs as Breadcrumbs };
export type { BreadcrumbProps, BreadcrumbsProps };
