'use client';
import { createElement } from 'react';
import { Icon } from '@/components/Icon';
import { Icons } from '@/components/Icons';
import { Column, Row, Label } from '@/components';

export function IconLibrary() {
  return (
    <Column justifyContent="space-evenly" wrap="wrap" gap="lg">
      {Object.keys(Icons).map((name: string) => {
        const icon = createElement(Icons[name as keyof typeof Icons]);
        return (
          <Column key={name} gap="md">
            <Label>{name}</Label>
            <Row alignItems="center" gap="lg">
              <Icon size="xl">{icon}</Icon>
              <Icon size="lg">{icon}</Icon>
              <Icon size="md">{icon}</Icon>
              <Icon size="sm">{icon}</Icon>
              <Icon size="xs">{icon}</Icon>
            </Row>
          </Column>
        );
      })}
    </Column>
  );
}
