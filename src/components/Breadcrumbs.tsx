import classNames from 'classnames';
import type { ReactNode } from 'react';
import {
  Breadcrumb as AriaBreadcrumb,
  Breadcrumbs as AriaBreadcrumbs,
  type BreadcrumbProps,
  type BreadcrumbsProps,
} from 'react-aria-components';
import { ChevronRight } from '@/components/icons';
import styles from './Breadcrumbs.module.css';
import { Icon } from './Icon';

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
        <ChevronRight />
      </Icon>
    </AriaBreadcrumb>
  );
}

export { Breadcrumb, Breadcrumbs };
export type { BreadcrumbProps, BreadcrumbsProps };
