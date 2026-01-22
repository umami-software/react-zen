'use client';

import { ArrowDown, ArrowUp, Minus } from 'lucide-react';
import type { ReactNode } from 'react';
import { Box, type BoxProps, Column, Icon, Row, Text } from '@/components';

interface StatCardProps extends BoxProps {
  label: string;
  value: string | number;
  change?: {
    value: number;
    label?: string;
  };
  icon?: ReactNode;
  trend?: 'up' | 'down' | 'neutral';
}

export function StatCard({ label, value, change, icon, trend, ...props }: StatCardProps) {
  const trendColor = trend === 'up' ? 'green' : trend === 'down' ? 'red' : 'muted';
  const TrendIcon = trend === 'up' ? ArrowUp : trend === 'down' ? ArrowDown : Minus;

  return (
    <Box
      padding="4"
      backgroundColor="surface-raised"
      borderRadius="lg"
      border
      borderColor="muted"
      {...props}
    >
      <Column gap="3">
        <Row alignItems="center" justifyContent="space-between">
          <Text color="muted">{label}</Text>
          {icon && (
            <Icon size="sm" color="muted">
              {icon}
            </Icon>
          )}
        </Row>
        <Text size="2xl" weight="semibold">
          {value}
        </Text>
        {change && (
          <Row alignItems="center" gap="1">
            <Icon size="xs" color={trendColor}>
              <TrendIcon />
            </Icon>
            <Text color={trendColor}>
              {change.value > 0 ? '+' : ''}
              {change.value}%
            </Text>
            {change.label && <Text color="muted">{change.label}</Text>}
          </Row>
        )}
      </Column>
    </Box>
  );
}

interface StatCardGroupProps extends BoxProps {
  children: ReactNode;
}

export function StatCardGroup({ children, ...props }: StatCardGroupProps) {
  return (
    <Row gap="4" flexWrap="wrap" {...props}>
      {children}
    </Row>
  );
}

interface StatCardCompactProps {
  label: string;
  value: string | number;
  subValue?: string;
}

export function StatCardCompact({ label, value, subValue }: StatCardCompactProps) {
  return (
    <Column gap="1">
      <Text color="muted" transform="uppercase">
        {label}
      </Text>
      <Row alignItems="baseline" gap="1">
        <Text size="xl" weight="semibold">
          {value}
        </Text>
        {subValue && <Text color="muted">{subValue}</Text>}
      </Row>
    </Column>
  );
}
