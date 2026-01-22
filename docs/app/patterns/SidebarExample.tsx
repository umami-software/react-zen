'use client';

import { FileText, Home, Settings, Users } from 'lucide-react';
import { useState } from 'react';
import { Box, Column, Row, Text } from '@/components';
import {
  Sidebar,
  SidebarFooter,
  SidebarItem,
  SidebarNav,
  SidebarToggle,
  useSidebar,
} from './Sidebar';

function SidebarUser() {
  const { isCollapsed } = useSidebar();

  return (
    <Row gap="3" alignItems="center" justifyContent={isCollapsed ? 'center' : 'flex-start'}>
      <Box width="8" height="8" borderRadius="full" backgroundColor="blue-500" flexShrink="0" />
      {!isCollapsed && (
        <Column gap="0">
          <Text weight="medium">John Doe</Text>
          <Text color="muted">Admin</Text>
        </Column>
      )}
    </Row>
  );
}

function SidebarHeaderWithToggle() {
  const { isCollapsed } = useSidebar();

  return (
    <Row
      padding="4"
      alignItems="center"
      borderColor="muted"
      border="bottom"
      justifyContent={isCollapsed ? 'center' : 'space-between'}
    >
      {!isCollapsed && <Text weight="semibold">Acme Inc</Text>}
      <SidebarToggle />
    </Row>
  );
}

export function SidebarExample() {
  const [selected, setSelected] = useState('dashboard');

  return (
    <Box height="96" border borderRadius="lg" overflow="hidden" backgroundColor="surface-base">
      <Row height="100%">
        <Sidebar>
          <Column>
            <SidebarHeaderWithToggle />
            <SidebarNav>
              <SidebarItem
                icon={<Home />}
                label="Dashboard"
                isSelected={selected === 'dashboard'}
                onClick={() => setSelected('dashboard')}
              />
              <SidebarItem
                icon={<Users />}
                label="Users"
                isSelected={selected === 'users'}
                onClick={() => setSelected('users')}
              />
              <SidebarItem
                icon={<FileText />}
                label="Documents"
                isSelected={selected === 'documents'}
                onClick={() => setSelected('documents')}
              />
              <SidebarItem
                icon={<Settings />}
                label="Settings"
                isSelected={selected === 'settings'}
                onClick={() => setSelected('settings')}
              />
            </SidebarNav>
          </Column>
          <SidebarFooter>
            <SidebarUser />
          </SidebarFooter>
        </Sidebar>
        <Box padding="6" flexGrow="1">
          <Text color="muted">Main content area</Text>
        </Box>
      </Row>
    </Box>
  );
}
