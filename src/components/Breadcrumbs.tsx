import { Breadcrumbs, BreadcrumbsProps, Breadcrumb, BreadcrumbProps } from 'react-aria-components';
import { HiChevronDown } from 'react-icons/hi2';
import classNames from 'classnames';
import Icon from './Icon';
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
      {children}
      <Icon className={styles.icon} rotate={-90} size="xs">
        <HiChevronDown />
      </Icon>
    </Breadcrumb>
  );
}

export { _Breadcrumb as Breadcrumb, _Breadcrumbs as Breadcrumbs };
export type { BreadcrumbProps, BreadcrumbsProps };

export default _Breadcrumbs;
