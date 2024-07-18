'use client';
import { createElement, ReactElement } from 'react';
import Icon from '@/components/Icon';
import Icons from '@/components/Icons';
import { Flexbox, Column, Tooltip, TooltipTrigger, Button, Text } from '@/components';

export function IconLibrary() {
  return (
    <Flexbox justifyContent="space-around" spacing={6}>
      {Object.keys(Icons).map((name: string) => {
        return (
          <Column key={name} alignItems="center" spacing={3}>
            <Icon size="md">{createElement(Icons[name as keyof typeof Icons])}</Icon>
            <Text size="sm" type="muted">
              {name}
            </Text>
          </Column>
        );
      })}
    </Flexbox>
  );
}
