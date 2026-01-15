import type { ReactNode } from 'react';
import {
  Breadcrumb as AriaBreadcrumb,
  Breadcrumbs as AriaBreadcrumbs,
  type BreadcrumbProps,
  type BreadcrumbsProps,
} from 'react-aria-components';
import { ChevronRight } from '@/components/icons';
import { Icon } from './Icon';
import { cn } from './lib/tailwind';

function Breadcrumbs({ children, className, ...props }: BreadcrumbsProps<any>) {
  return (
    <AriaBreadcrumbs {...props} className={cn('flex items-center gap-3', className)}>
      {children}
    </AriaBreadcrumbs>
  );
}

function Breadcrumb({ children, className, ...props }: BreadcrumbProps) {
  return (
    <AriaBreadcrumb
      {...props}
      className={cn(
        'flex items-center text-base gap-3 list-none',
        '[&_a]:text-content-muted [&_a]:no-underline [&_a]:font-normal [&_a]:p-2',
        '[&_a:hover]:text-content-primary',
        className,
      )}
    >
      {children as ReactNode}
      <Icon className="text-content-muted last:hidden" size="xs">
        <ChevronRight />
      </Icon>
    </AriaBreadcrumb>
  );
}

export { Breadcrumb, Breadcrumbs };
export type { BreadcrumbProps, BreadcrumbsProps };
