'use client';

import type { ReactNode } from 'react';
import { Column, Row, type RowProps, Text } from '@/components';

interface PageHeaderProps extends RowProps {
  children: ReactNode;
}

export function PageHeader({ children, ...props }: PageHeaderProps) {
  return (
    <Row
      width="100%"
      paddingY="4"
      alignItems="center"
      justifyContent="space-between"
      borderColor="muted"
      border="bottom"
      gap="4"
      {...props}
    >
      {children}
    </Row>
  );
}

interface PageHeaderTitleProps {
  title: string;
  description?: string;
  breadcrumb?: ReactNode;
}

export function PageHeaderTitle({ title, description, breadcrumb }: PageHeaderTitleProps) {
  return (
    <Column gap="1">
      {breadcrumb}
      <Text size="xl" weight="semibold">
        {title}
      </Text>
      {description && <Text color="muted">{description}</Text>}
    </Column>
  );
}

interface PageHeaderActionsProps {
  children: ReactNode;
}

export function PageHeaderActions({ children }: PageHeaderActionsProps) {
  return (
    <Row gap="2" alignItems="center">
      {children}
    </Row>
  );
}
