'use client';

import { createContext, type ReactNode, useContext, useState } from 'react';
import { Box, type BoxProps, Row, Text } from '@/components';

interface TabsPanelContextValue {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsPanelContext = createContext<TabsPanelContextValue>({
  activeTab: '',
  setActiveTab: () => {},
});

export function useTabsPanel() {
  return useContext(TabsPanelContext);
}

interface TabsPanelProps extends BoxProps {
  defaultTab: string;
  children: ReactNode;
}

export function TabsPanel({ defaultTab, children, ...props }: TabsPanelProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabsPanelContext.Provider value={{ activeTab, setActiveTab }}>
      <Box {...props}>{children}</Box>
    </TabsPanelContext.Provider>
  );
}

interface TabsListProps {
  children: ReactNode;
}

export function TabsList({ children }: TabsListProps) {
  return (
    <Row gap="0" borderColor="muted" border="bottom">
      {children}
    </Row>
  );
}

interface TabProps {
  id: string;
  children: ReactNode;
}

export function Tab({ id, children }: TabProps) {
  const { activeTab, setActiveTab } = useTabsPanel();
  const isActive = activeTab === id;

  return (
    <Box
      paddingX="4"
      paddingY="3"
      className="cursor-pointer"
      onClick={() => setActiveTab(id)}
      style={{
        borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
        marginBottom: '-1px',
      }}
    >
      <Text
        size="sm"
        weight={isActive ? 'medium' : undefined}
        color={isActive ? undefined : 'muted'}
      >
        {children}
      </Text>
    </Box>
  );
}

interface TabContentProps extends BoxProps {
  id: string;
  children: ReactNode;
}

export function TabContent({ id, children, ...props }: TabContentProps) {
  const { activeTab } = useTabsPanel();

  if (activeTab !== id) return null;

  return (
    <Box padding="4" {...props}>
      {children}
    </Box>
  );
}
