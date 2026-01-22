'use client';

import { FileX, Inbox, Search } from 'lucide-react';
import type { ReactNode } from 'react';
import { Box, type BoxProps, Button, Column, Icon, Row, Text } from '@/components';

interface EmptyStateProps extends BoxProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  secondaryAction,
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
        >
          <Icon size="lg" color="muted">
            {icon}
          </Icon>
        </Row>
      )}
      <Column alignItems="center" gap="2">
        <Text size="lg" weight="semibold">
          {title}
        </Text>
        {description && (
          <Box maxWidth="20rem">
            <Text color="muted" align="center">
              {description}
            </Text>
          </Box>
        )}
      </Column>
      {(action || secondaryAction) && (
        <Column gap="2" alignItems="center">
          {action && (
            <Button variant="primary" onPress={action.onClick}>
              {action.label}
            </Button>
          )}
          {secondaryAction && (
            <Button variant="quiet" onPress={secondaryAction.onClick}>
              {secondaryAction.label}
            </Button>
          )}
        </Column>
      )}
    </Column>
  );
}

export function EmptyStateNoResults(props: Partial<EmptyStateProps>) {
  return (
    <EmptyState
      icon={<Search />}
      title="No results found"
      description="Try adjusting your search or filter to find what you're looking for."
      {...props}
    />
  );
}

export function EmptyStateNoData(props: Partial<EmptyStateProps>) {
  return (
    <EmptyState
      icon={<Inbox />}
      title="No data yet"
      description="Get started by creating your first item."
      {...props}
    />
  );
}

export function EmptyStateError(props: Partial<EmptyStateProps>) {
  return (
    <EmptyState
      icon={<FileX />}
      title="Something went wrong"
      description="We couldn't load this content. Please try again."
      action={{ label: 'Try again', onClick: () => window.location.reload() }}
      {...props}
    />
  );
}
