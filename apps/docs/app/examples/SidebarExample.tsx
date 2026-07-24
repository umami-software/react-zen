'use client';
import { useState } from 'react';
import { FileText, HelpCircle, Home, Inbox, Settings, Users } from 'lucide-react';
import {
  Box,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarItem,
  SidebarToggle,
} from '@/components';

export function SidebarExample() {
  const [selected, setSelected] = useState('home');

  return (
    <Box border borderRadius="md" overflow="hidden" height="360px">
      <Sidebar>
        <SidebarHeader>
          <SidebarToggle />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup title="Main">
            <SidebarItem
              icon={<Home />}
              label="Home"
              isSelected={selected === 'home'}
              onPress={() => setSelected('home')}
            />
            <SidebarItem
              icon={<Inbox />}
              label="Inbox"
              isSelected={selected === 'inbox'}
              onPress={() => setSelected('inbox')}
            />
            <SidebarItem
              icon={<FileText />}
              label="Documents"
              isSelected={selected === 'documents'}
              onPress={() => setSelected('documents')}
            />
          </SidebarGroup>
          <SidebarGroup title="Workspace">
            <SidebarItem
              icon={<Users />}
              label="Team"
              isSelected={selected === 'team'}
              onPress={() => setSelected('team')}
            />
            <SidebarItem
              icon={<Settings />}
              label="Settings"
              isSelected={selected === 'settings'}
              onPress={() => setSelected('settings')}
            />
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarItem icon={<HelpCircle />} label="Help" isDisabled />
        </SidebarFooter>
      </Sidebar>
    </Box>
  );
}
