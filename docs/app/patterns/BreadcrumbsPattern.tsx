'use client';

import { ChevronRight, Home } from 'lucide-react';
import type { ReactNode } from 'react';
import { Icon, Row, type RowProps, Text } from '@/components';

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: ReactNode;
}

interface BreadcrumbsPatternProps extends RowProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  showHome?: boolean;
  onNavigate?: (href: string) => void;
}

export function BreadcrumbsPattern({
  items,
  separator,
  showHome = false,
  onNavigate,
  ...props
}: BreadcrumbsPatternProps) {
  const allItems = showHome ? [{ label: 'Home', href: '/', icon: <Home /> }, ...items] : items;

  return (
    <Row alignItems="center" gap="1" {...props}>
      {allItems.map((item, index) => {
        const isLast = index === allItems.length - 1;

        return (
          <Row key={item.label} alignItems="center" gap="1">
            {index > 0 &&
              (separator || (
                <Icon size="xs" color="muted">
                  <ChevronRight />
                </Icon>
              ))}
            <Row
              alignItems="center"
              gap="1"
              className={!isLast && item.href ? 'cursor-pointer hover:underline' : ''}
              onClick={!isLast && item.href ? () => onNavigate?.(item.href as string) : undefined}
            >
              {item.icon && (
                <Icon size="sm" color={isLast ? undefined : 'muted'}>
                  {item.icon}
                </Icon>
              )}
              <Text
                size="sm"
                color={isLast ? undefined : 'muted'}
                weight={isLast ? 'medium' : undefined}
              >
                {item.label}
              </Text>
            </Row>
          </Row>
        );
      })}
    </Row>
  );
}
