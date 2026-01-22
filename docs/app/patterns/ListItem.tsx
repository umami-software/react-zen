'use client';

import { ChevronRight, MoreHorizontal } from 'lucide-react';
import type { ReactNode } from 'react';
import { Box, Button, Column, Icon, Row, type RowProps, Text } from '@/components';

interface ListItemProps extends RowProps {
  children: ReactNode;
  onClick?: () => void;
  isSelected?: boolean;
  showChevron?: boolean;
}

export function ListItem({ children, onClick, isSelected, showChevron, ...props }: ListItemProps) {
  return (
    <Row
      padding="3"
      alignItems="center"
      gap="3"
      borderColor="muted"
      border="bottom"
      backgroundColor={isSelected ? 'interactive' : undefined}
      className={onClick ? `cursor-pointer ${!isSelected ? 'hover:bg-interactive' : ''}` : ''}
      onClick={onClick}
      {...props}
    >
      {children}
      {showChevron && (
        <Icon size="sm" color="muted">
          <ChevronRight />
        </Icon>
      )}
    </Row>
  );
}

interface ListItemAvatarProps {
  src?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function ListItemAvatar({ src, fallback, size = 'md' }: ListItemAvatarProps) {
  const sizeMap = { sm: '8', md: '10', lg: '12' } as const;

  return (
    <Box
      width={sizeMap[size]}
      height={sizeMap[size]}
      borderRadius="full"
      backgroundColor="primary"
      flexShrink="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      {src ? (
        <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <Text size="sm" color="on-primary" weight="medium">
          {fallback}
        </Text>
      )}
    </Box>
  );
}

interface ListItemContentProps {
  title: string;
  description?: string;
  meta?: string;
}

export function ListItemContent({ title, description, meta }: ListItemContentProps) {
  return (
    <Column gap="0" flexGrow="1" overflow="hidden">
      <Row alignItems="center" gap="2">
        <Text
          weight="medium"
          style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
        >
          {title}
        </Text>
        {meta && (
          <Text size="xs" color="muted">
            {meta}
          </Text>
        )}
      </Row>
      {description && (
        <Text
          size="sm"
          color="muted"
          style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
        >
          {description}
        </Text>
      )}
    </Column>
  );
}

interface ListItemActionsProps {
  children: ReactNode;
}

export function ListItemActions({ children }: ListItemActionsProps) {
  return (
    <Row gap="1" alignItems="center" onClick={e => e.stopPropagation()}>
      {children}
    </Row>
  );
}

interface ListItemMenuProps {
  onPress?: () => void;
}

export function ListItemMenu({ onPress }: ListItemMenuProps) {
  return (
    <Button variant="quiet" size="sm" onPress={onPress}>
      <Icon size="sm">
        <MoreHorizontal />
      </Icon>
    </Button>
  );
}

interface ListItemBadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
}

export function ListItemBadge({ children, variant = 'default' }: ListItemBadgeProps) {
  const colorMap = {
    default: 'muted',
    success: 'green',
    warning: 'yellow',
    error: 'red',
  } as const;

  return (
    <Box paddingX="2" paddingY="1" backgroundColor={colorMap[variant]} borderRadius="full">
      <Text size="xs" color={variant === 'default' ? undefined : 'on-primary'}>
        {children}
      </Text>
    </Box>
  );
}
