'use client';

import { PanelLeft } from 'lucide-react';
import { createContext, type ReactNode, useContext, useState } from 'react';
import { Box, type BoxProps, Button, Column, Icon, Row, Text } from '@/components';

interface SidebarContextValue {
  isCollapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const SidebarContext = createContext<SidebarContextValue>({
  isCollapsed: false,
  setCollapsed: () => {},
});

export function useSidebar() {
  return useContext(SidebarContext);
}

interface SidebarProps extends BoxProps {
  defaultCollapsed?: boolean;
  collapsedWidth?: string;
  expandedWidth?: string;
  children: ReactNode;
}

export function Sidebar({
  defaultCollapsed = false,
  collapsedWidth = '4rem',
  expandedWidth = '14rem',
  children,
  ...props
}: SidebarProps) {
  const [isCollapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <SidebarContext.Provider value={{ isCollapsed, setCollapsed }}>
      <Box
        height="100%"
        backgroundColor="surface-raised"
        borderColor="muted"
        border="right"
        style={{
          width: isCollapsed ? collapsedWidth : expandedWidth,
          transition: 'width 0.2s ease-in-out',
        }}
        {...props}
      >
        <Column height="100%" justifyContent="space-between">
          {children}
        </Column>
      </Box>
    </SidebarContext.Provider>
  );
}

interface SidebarHeaderProps {
  icon?: ReactNode;
  title?: string;
}

export function SidebarHeader({ icon, title }: SidebarHeaderProps) {
  const { isCollapsed } = useSidebar();

  return (
    <Row
      padding="4"
      gap="3"
      alignItems="center"
      borderColor="muted"
      border="bottom"
      justifyContent={isCollapsed ? 'center' : 'flex-start'}
    >
      {icon && (
        <Box width="8" height="8" borderRadius="md" backgroundColor="primary" flexShrink="0">
          {icon}
        </Box>
      )}
      {!isCollapsed && title && <Text weight="semibold">{title}</Text>}
    </Row>
  );
}

interface SidebarNavProps {
  children: ReactNode;
}

export function SidebarNav({ children }: SidebarNavProps) {
  return (
    <Column padding="2" gap="1" flexGrow="1">
      {children}
    </Column>
  );
}

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export function SidebarItem({ icon, label, isSelected, onClick }: SidebarItemProps) {
  const { isCollapsed } = useSidebar();

  return (
    <Row
      paddingY="2"
      paddingX="3"
      borderRadius="md"
      gap="3"
      alignItems="center"
      justifyContent={isCollapsed ? 'center' : 'flex-start'}
      backgroundColor={isSelected ? 'interactive' : undefined}
      className={`cursor-pointer ${!isSelected ? 'hover:bg-interactive' : ''}`}
      onClick={onClick}
    >
      <Icon size="sm" color={isSelected ? undefined : 'muted'}>
        {icon}
      </Icon>
      {!isCollapsed && <Text color={isSelected ? undefined : 'muted'}>{label}</Text>}
    </Row>
  );
}

interface SidebarFooterProps {
  children: ReactNode;
}

export function SidebarFooter({ children }: SidebarFooterProps) {
  return (
    <Box padding="4" borderColor="muted" border="top">
      {children}
    </Box>
  );
}

export function SidebarToggle() {
  const { isCollapsed, setCollapsed } = useSidebar();

  return (
    <Button variant="quiet" onPress={() => setCollapsed(!isCollapsed)}>
      <Icon style={{ transform: isCollapsed ? 'scaleX(-1)' : undefined }}>
        <PanelLeft />
      </Icon>
    </Button>
  );
}
