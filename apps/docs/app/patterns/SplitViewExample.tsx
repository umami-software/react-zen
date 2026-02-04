'use client';

import { Box, Column, Text } from '@/components';
import { SplitView, SplitViewDetail, SplitViewItem, SplitViewList } from './SplitView';

const items = [
  { id: '1', title: 'Welcome to the app', preview: 'Thanks for signing up...' },
  { id: '2', title: 'Your weekly report', preview: 'Here is your summary...' },
  { id: '3', title: 'New features available', preview: 'Check out what is new...' },
];

export function SplitViewExample() {
  return (
    <Box height="72" border borderRadius="lg" overflow="hidden" backgroundColor="surface-base">
      <SplitView defaultSelectedId="1">
        <SplitViewList>
          {items.map(item => (
            <SplitViewItem key={item.id} id={item.id}>
              <Column gap="1">
                <Text weight="medium">{item.title}</Text>
                <Text color="muted">{item.preview}</Text>
              </Column>
            </SplitViewItem>
          ))}
        </SplitViewList>
        <SplitViewDetail
          emptyState={
            <Box padding="6">
              <Text color="muted">Select an item to view details</Text>
            </Box>
          }
        >
          <Box padding="6">
            <Column gap="2">
              <Text weight="semibold">Welcome to the app</Text>
              <Text>Thanks for signing up! We're excited to have you here.</Text>
            </Column>
          </Box>
        </SplitViewDetail>
      </SplitView>
    </Box>
  );
}
