import { ReactNode } from 'react';
import {
  Breadcrumbs as AriaBreadcrumbs,
  BreadcrumbsProps,
  Breadcrumb as AriaBreadcrumb,
  BreadcrumbProps,
} from 'react-aria-components';
import classNames from 'classnames';
import { Icon } from './Icon';
import { Icons } from './Icons';
import styles from './Breadcrumbs.module.css';

function Breadcrumbs({ children, className, ...props }: BreadcrumbsProps<any>) {
  return (
    <AriaBreadcrumbs {...props} className={classNames(styles.breadcrumbs, className)}>
      {children}
    </AriaBreadcrumbs>
  );
}

function Breadcrumb({ children, className, ...props }: BreadcrumbProps) {
  return (
    <AriaBreadcrumb {...props} className={classNames(styles.breadcrumb, className)}>
      {children as ReactNode}
      <Icon className={styles.icon} size="xs">
        <Icons.Chevron />
      </Icon>
    </AriaBreadcrumb>
  );
}

export { Breadcrumb, Breadcrumbs };
export type { BreadcrumbProps, BreadcrumbsProps };
