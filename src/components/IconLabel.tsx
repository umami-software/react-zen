import { ReactNode } from 'react';
import { Row, type RowProps } from '@/components/Row';
import { Icon, type IconProps } from '@/components/Icon';
import { Text, type TextProps } from '@/components/Text';

export interface IconLabelProps extends RowProps {
  icon: ReactNode;
  label?: ReactNode;
  iconProps?: IconProps;
  labelProps?: TextProps;
  showLabel?: boolean;
}

export function IconLabel({
  icon,
  label,
  iconProps,
  labelProps,
  showLabel = true,
  children,
  ...props
}: IconLabelProps) {
  return (
    <Row alignItems="center" gap width="100%" {...props}>
      <Icon {...iconProps}>{icon}</Icon>
      {showLabel && label && <Text {...labelProps}>{label}</Text>}
      {showLabel && children}
    </Row>
  );
}
