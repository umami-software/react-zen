'use client';

import type { ReactNode } from 'react';
import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  type TagGroupProps as AriaTagGroupProps,
  type TagProps as AriaTagProps,
  Button,
  TagList,
} from 'react-aria-components';
import { X } from '@/components/icons';
import { Icon } from './Icon';
import { Label } from './Label';
import { cn } from './lib/tailwind';
import { type TagVariants, tag } from './variants';

export interface TagGroupProps extends Omit<AriaTagGroupProps, 'children'> {
  label?: string;
  children?: ReactNode;
}

export function TagGroup({ label, children, className, ...props }: TagGroupProps) {
  return (
    <AriaTagGroup {...props} className={cn('flex flex-col gap-1', className)}>
      {label && <Label>{label}</Label>}
      <TagList className="flex flex-wrap gap-1">{children}</TagList>
    </AriaTagGroup>
  );
}

export interface TagProps extends AriaTagProps, TagVariants {
  children?: ReactNode;
}

export function Tag({ variant, children, className, ...props }: TagProps) {
  const textValue = typeof children === 'string' ? children : undefined;
  const styles = tag({ variant });

  return (
    <AriaTag {...props} textValue={textValue} className={cn(styles.base(), className)}>
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <Button slot="remove" className={styles.removeButton()}>
              <Icon size="xs">
                <X />
              </Icon>
            </Button>
          )}
        </>
      )}
    </AriaTag>
  );
}
