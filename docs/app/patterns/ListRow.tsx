'use client';

import { ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Box, Column, Icon, Row, type RowProps, Text } from '@/components';

interface ListRowProps extends RowProps {
  children: ReactNode;
  onClick?: () => void;
  isSelected?: boolean;
  showChevron?: boolean;
}

export function ListRow({ children, onClick, isSelected, showChevron, ...props }: ListRowProps) {
  return (
    <Row
      minWidth="20rem"
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

interface ListRowAvatarProps {
  src?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function ListRowAvatar({ src, fallback, size = 'md' }: ListRowAvatarProps) {
  const sizeMap = { sm: '8', md: '10', lg: '12' } as const;

  return (
    <Row
      width={sizeMap[size]}
      height={sizeMap[size]}
      borderRadius="full"
      backgroundColor="interactive"
      flexShrink="0"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      {src ? (
        <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <Text color="muted" weight="medium">
          {fallback}
        </Text>
      )}
    </Row>
  );
}

interface ListRowContentProps {
  title: string;
  description?: string;
  meta?: string;
}

export function ListRowContent({ title, description, meta }: ListRowContentProps) {
  return (
    <Column gap="0" flexGrow="1" overflow="hidden">
      <Row alignItems="center" gap="2">
        <Box overflow="hidden" flexGrow="1">
          <Text weight="medium" truncate>
            {title}
          </Text>
        </Box>
        {meta && <Text color="muted">{meta}</Text>}
      </Row>
      {description && (
        <Box overflow="hidden">
          <Text color="muted" truncate>
            {description}
          </Text>
        </Box>
      )}
    </Column>
  );
}

interface ListRowActionsProps {
  children: ReactNode;
}

export function ListRowActions({ children }: ListRowActionsProps) {
  return (
    <Row gap="1" alignItems="center" onClick={e => e.stopPropagation()}>
      {children}
    </Row>
  );
}
