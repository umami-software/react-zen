'use client';

import type { ReactNode } from 'react';
import { Box, type BoxProps, Grid, type GridProps } from '@/components';

interface DashboardGridProps extends GridProps {
  children: ReactNode;
}

export function DashboardGrid({ children, ...props }: DashboardGridProps) {
  return (
    <Grid columns="repeat(auto-fit, minmax(280px, 1fr))" gap="4" {...props}>
      {children}
    </Grid>
  );
}

interface DashboardCardProps extends BoxProps {
  children: ReactNode;
}

export function DashboardCard({ children, ...props }: DashboardCardProps) {
  return (
    <Box
      padding="4"
      backgroundColor="surface-raised"
      borderRadius="lg"
      border
      borderColor="muted"
      {...props}
    >
      {children}
    </Box>
  );
}

interface DashboardCardWideProps extends BoxProps {
  children: ReactNode;
}

export function DashboardCardWide({ children, ...props }: DashboardCardWideProps) {
  return (
    <Box
      padding="4"
      backgroundColor="surface-raised"
      borderRadius="lg"
      border
      borderColor="muted"
      style={{ gridColumn: 'span 2' }}
      {...props}
    >
      {children}
    </Box>
  );
}

interface DashboardCardFullProps extends BoxProps {
  children: ReactNode;
}

export function DashboardCardFull({ children, ...props }: DashboardCardFullProps) {
  return (
    <Box
      padding="4"
      backgroundColor="surface-raised"
      borderRadius="lg"
      border
      borderColor="muted"
      style={{ gridColumn: '1 / -1' }}
      {...props}
    >
      {children}
    </Box>
  );
}
