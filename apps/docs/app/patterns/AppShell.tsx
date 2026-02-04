'use client';

import { PanelLeft } from 'lucide-react';
import { createContext, type ReactNode, useContext, useState } from 'react';
import { Box, type BoxProps, Button, Column, Icon, Row } from '@/components';

interface AppShellContextValue {
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const AppShellContext = createContext<AppShellContextValue>({
  isSidebarOpen: true,
  setSidebarOpen: () => {},
});

export function useAppShell() {
  return useContext(AppShellContext);
}

interface AppShellProps extends BoxProps {
  defaultSidebarOpen?: boolean;
  children: ReactNode;
}

export function AppShell({ defaultSidebarOpen = true, children, ...props }: AppShellProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(defaultSidebarOpen);

  return (
    <AppShellContext.Provider value={{ isSidebarOpen, setSidebarOpen }}>
      <Box height="100%" {...props}>
        <Column height="100%">{children}</Column>
      </Box>
    </AppShellContext.Provider>
  );
}

interface AppShellHeaderProps {
  children: ReactNode;
}

export function AppShellHeader({ children }: AppShellHeaderProps) {
  return (
    <Row
      paddingX="4"
      paddingY="3"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="surface-raised"
      borderColor="muted"
      border="bottom"
    >
      {children}
    </Row>
  );
}

interface AppShellBodyProps {
  children: ReactNode;
}

export function AppShellBody({ children }: AppShellBodyProps) {
  return (
    <Row flexGrow="1" overflow="hidden">
      {children}
    </Row>
  );
}

interface AppShellSidebarProps extends BoxProps {
  width?: string;
  children: ReactNode;
}

export function AppShellSidebar({ width = '14rem', children, ...props }: AppShellSidebarProps) {
  const { isSidebarOpen } = useAppShell();

  if (!isSidebarOpen) return null;

  return (
    <Box
      width={width}
      height="100%"
      backgroundColor="surface-raised"
      borderColor="muted"
      border="right"
      flexShrink="0"
      overflow="auto"
      {...props}
    >
      {children}
    </Box>
  );
}

interface AppShellContentProps extends BoxProps {
  children: ReactNode;
}

export function AppShellContent({ children, ...props }: AppShellContentProps) {
  return (
    <Box flexGrow="1" overflow="auto" {...props}>
      {children}
    </Box>
  );
}

export function AppShellSidebarToggle() {
  const { isSidebarOpen, setSidebarOpen } = useAppShell();

  return (
    <Button variant="quiet" onPress={() => setSidebarOpen(!isSidebarOpen)}>
      <Icon style={{ transform: isSidebarOpen ? undefined : 'scaleX(-1)' }}>
        <PanelLeft />
      </Icon>
    </Button>
  );
}
