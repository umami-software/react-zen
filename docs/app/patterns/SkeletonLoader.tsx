'use client';

import { Box, type BoxProps, Column, Row } from '@/components';

interface SkeletonProps extends BoxProps {
  width?: string;
  height?: string;
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

export function Skeleton({
  width = '100%',
  height = '1rem',
  borderRadius = 'md',
  ...props
}: SkeletonProps) {
  return (
    <Box
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor="muted"
      className="animate-pulse"
      {...props}
    />
  );
}

export function SkeletonText({
  lines = 3,
  lastLineWidth = '60%',
}: {
  lines?: number;
  lastLineWidth?: string;
}) {
  const lineKeys = Array.from({ length: lines }, (_, i) => `line-${i}`);
  return (
    <Column gap="2">
      {lineKeys.map((key, i) => (
        <Skeleton key={key} height="0.875rem" width={i === lines - 1 ? lastLineWidth : '100%'} />
      ))}
    </Column>
  );
}

export function SkeletonAvatar({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeMap = { sm: '2rem', md: '2.5rem', lg: '3rem' };
  return <Skeleton width={sizeMap[size]} height={sizeMap[size]} borderRadius="full" />;
}

export function SkeletonCard() {
  return (
    <Box padding="4" backgroundColor="surface-raised" borderRadius="lg" border borderColor="muted">
      <Column gap="4">
        <Skeleton height="8rem" borderRadius="md" />
        <Column gap="2">
          <Skeleton height="1.25rem" width="70%" />
          <SkeletonText lines={2} />
        </Column>
      </Column>
    </Box>
  );
}

export function SkeletonListItem() {
  return (
    <Row padding="3" alignItems="center" gap="3" borderColor="muted" border="bottom">
      <SkeletonAvatar />
      <Column gap="2" flexGrow="1">
        <Skeleton height="1rem" width="40%" />
        <Skeleton height="0.75rem" width="60%" />
      </Column>
      <Skeleton width="4rem" height="1.5rem" borderRadius="full" />
    </Row>
  );
}

export function SkeletonTable({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  const headerKeys = Array.from({ length: columns }, (_, i) => `header-col-${i}`);
  const rowKeys = Array.from({ length: rows }, (_, i) => `row-${i}`);

  return (
    <Column>
      <Row padding="3" gap="4" borderColor="muted" border="bottom">
        {headerKeys.map(key => (
          <Skeleton key={key} height="0.75rem" width="6rem" />
        ))}
      </Row>
      {rowKeys.map((rowKey, rowIndex) => {
        const cellKeys = Array.from({ length: columns }, (_, i) => `${rowKey}-col-${i}`);
        return (
          <Row key={rowKey} padding="3" gap="4" borderColor="muted" border="bottom">
            {cellKeys.map((cellKey, colIndex) => (
              <Skeleton key={cellKey} height="1rem" width={colIndex === 0 ? '8rem' : '6rem'} />
            ))}
          </Row>
        );
      })}
    </Column>
  );
}

export function SkeletonStatCard() {
  return (
    <Box padding="4" backgroundColor="surface-raised" borderRadius="lg" border borderColor="muted">
      <Column gap="3">
        <Skeleton height="0.875rem" width="40%" />
        <Skeleton height="2rem" width="60%" />
        <Skeleton height="0.75rem" width="30%" />
      </Column>
    </Box>
  );
}
