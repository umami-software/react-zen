import type { ReactNode } from 'react';
import { Box } from './Box';
import { Column, type ColumnProps } from './Column';
import { Icon } from './Icon';
import { Row } from './Row';
import { Text } from './Text';

export interface EmptyStateProps extends Omit<ColumnProps, 'title'> {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
}

export function EmptyState({
  icon,
  title,
  description,
  actions,
  children,
  ...props
}: EmptyStateProps) {
  return (
    <Column alignItems="center" justifyContent="center" padding="8" gap="4" {...props}>
      {icon && (
        <Row
          width="16"
          height="16"
          borderRadius="full"
          backgroundColor="surface-raised"
          alignItems="center"
          justifyContent="center"
          aria-hidden="true"
        >
          <Icon size="lg" color="muted">
            {icon}
          </Icon>
        </Row>
      )}
      <Column alignItems="center" gap="2">
        <Text size="lg" weight="semibold" align="center">
          {title}
        </Text>
        {description && (
          <Box maxWidth="20rem" textAlign="center">
            <Text color="muted">{description}</Text>
          </Box>
        )}
      </Column>
      {children}
      {actions && (
        <Row gap="2" alignItems="center" justifyContent="center" wrap="wrap">
          {actions}
        </Row>
      )}
    </Column>
  );
}
