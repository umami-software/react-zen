'use client';

import { Bell, Home, Settings, Users } from 'lucide-react';
import { Box, Button, Column, Icon, Row, Text } from '@/components';
import {
  AppShell,
  AppShellBody,
  AppShellContent,
  AppShellHeader,
  AppShellSidebar,
  AppShellSidebarToggle,
} from './AppShell';

export function AppShellExample() {
  return (
    <Box height="80" border borderRadius="lg" overflow="hidden" backgroundColor="surface-base">
      <AppShell>
        <AppShellHeader>
          <Row gap="3" alignItems="center">
            <AppShellSidebarToggle />
            <Text weight="semibold">My Application</Text>
          </Row>
          <Row gap="2">
            <Button variant="quiet">
              <Icon size="sm">
                <Bell />
              </Icon>
            </Button>
          </Row>
        </AppShellHeader>
        <AppShellBody>
          <AppShellSidebar>
            <Column padding="2" gap="1">
              <Row
                paddingX="3"
                paddingY="2"
                borderRadius="md"
                backgroundColor="interactive"
                alignItems="center"
                gap="2"
              >
                <Icon size="sm">
                  <Home />
                </Icon>
                <Text size="sm">Dashboard</Text>
              </Row>
              <Row
                paddingX="3"
                paddingY="2"
                borderRadius="md"
                alignItems="center"
                gap="2"
                className="cursor-pointer hover:bg-interactive"
              >
                <Icon size="sm" color="muted">
                  <Users />
                </Icon>
                <Text size="sm" color="muted">
                  Users
                </Text>
              </Row>
              <Row
                paddingX="3"
                paddingY="2"
                borderRadius="md"
                alignItems="center"
                gap="2"
                className="cursor-pointer hover:bg-interactive"
              >
                <Icon size="sm" color="muted">
                  <Settings />
                </Icon>
                <Text size="sm" color="muted">
                  Settings
                </Text>
              </Row>
            </Column>
          </AppShellSidebar>
          <AppShellContent padding="6">
            <Text color="muted">Main content area</Text>
          </AppShellContent>
        </AppShellBody>
      </AppShell>
    </Box>
  );
}
