'use client';

import type { ReactNode } from 'react';
import { Icon, type IconProps, Row, type RowProps, Text, type TextProps } from '@/components';

interface IconLabelProps extends RowProps {
  icon: ReactNode;
  label?: ReactNode;
  iconProps?: Partial<IconProps>;
  labelProps?: Partial<TextProps>;
}

export function IconLabel({
  icon,
  label,
  iconProps,
  labelProps,
  children,
  ...props
}: IconLabelProps) {
  return (
    <Row alignItems="center" gap="2" {...props}>
      <Icon {...iconProps}>{icon}</Icon>
      {label && <Text {...labelProps}>{label}</Text>}
      {children}
    </Row>
  );
}
