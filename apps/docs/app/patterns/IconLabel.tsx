'use client';

import type { ReactNode } from 'react';
import { Icon, Row, type RowProps, Text } from '@/components';

interface IconLabelProps extends RowProps {
  icon: ReactNode;
  label?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function IconLabel({ icon, label, size = 'md', children, ...props }: IconLabelProps) {
  const iconSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md';
  const textSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'base';

  return (
    <Row alignItems="center" gap="2" {...props}>
      <Icon size={iconSize}>{icon}</Icon>
      {label && <Text size={textSize}>{label}</Text>}
      {children}
    </Row>
  );
}
