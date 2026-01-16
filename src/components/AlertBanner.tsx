import { createElement, type ReactNode } from 'react';
import { CircleAlert, CircleCheck, Info, TriangleAlert, X } from '@/components/icons';
import { Column } from './Column';
import { Icon } from './Icon';
import { cn } from './lib/tailwind';
import { Row } from './Row';
import { Text } from './Text';
import { alertBanner } from './variants';

const AlertIcons = {
  info: Info,
  success: CircleCheck,
  warning: CircleAlert,
  error: TriangleAlert,
};

export interface AlertBannerProps {
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  align?: 'start' | 'center' | 'end';
  allowClose?: boolean;
  onClose?: () => void;
  className?: string;
  children?: ReactNode;
}

const alignClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
};

export function AlertBanner({
  title,
  description,
  icon,
  variant = 'info',
  align,
  allowClose,
  onClose,
  children,
  className,
  ...props
}: AlertBannerProps) {
  return (
    <Row
      {...props}
      className={cn(alertBanner({ variant }), align && alignClasses[align], className)}
    >
      {(icon || variant) && (
        <Icon size="sm">{variant ? createElement(AlertIcons[variant]) : icon}</Icon>
      )}
      <Column flexGrow={1} gap="1">
        {title && <Text weight="semibold">{title}</Text>}
        {description && <Text>{description}</Text>}
      </Column>
      {children}
      {allowClose && (
        <Icon className="cursor-pointer opacity-60 hover:opacity-100" onClick={onClose}>
          <X />
        </Icon>
      )}
    </Row>
  );
}
