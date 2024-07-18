'use client';
import { createElement, ReactElement } from 'react';
import Icon from '@/components/Icon';
import Icons from '@/components/Icons';
import { Heading, Column, Row, Text } from '@/components';

export function IconLibrary() {
  return (
    <Column justifyContent="space-evenly" spacing={9} wrap="wrap">
      {Object.keys(Icons).map((name: string) => {
        const icon = createElement(Icons[name as keyof typeof Icons]);
        return (
          <>
            <Heading size={2}>{name}</Heading>
            <Row key={name} alignItems="center" spacing={3}>
              <Icon size="xl">{icon}</Icon>
              <Icon size="lg">{icon}</Icon>
              <Icon size="md">{icon}</Icon>
              <Icon size="sm">{icon}</Icon>
              <Icon size="xs">{icon}</Icon>
            </Row>
          </>
        );
      })}
    </Column>
  );
}
