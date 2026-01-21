'use client';

import { BarChart, Home, Settings, Shield, Users } from 'lucide-react';
import { useState } from 'react';
import { Box } from '@/components';
import { NavMenu, NavMenuGroup, NavMenuItem } from './NavMenu';

export function NavMenuExample() {
  const [selected, setSelected] = useState('home');

  return (
    <Box width="64" border borderRadius="lg" padding="2">
      <NavMenu>
        <NavMenuGroup title="Dashboard">
          <NavMenuItem
            icon={<Home />}
            isSelected={selected === 'home'}
            onClick={() => setSelected('home')}
          >
            Home
          </NavMenuItem>
          <NavMenuItem
            icon={<BarChart />}
            isSelected={selected === 'analytics'}
            onClick={() => setSelected('analytics')}
          >
            Analytics
          </NavMenuItem>
          <NavMenuItem
            icon={<Users />}
            isSelected={selected === 'users'}
            onClick={() => setSelected('users')}
          >
            Users
          </NavMenuItem>
        </NavMenuGroup>

        <NavMenuGroup title="Settings">
          <NavMenuItem
            icon={<Settings />}
            isSelected={selected === 'general'}
            onClick={() => setSelected('general')}
          >
            General
          </NavMenuItem>
          <NavMenuItem
            icon={<Shield />}
            isSelected={selected === 'security'}
            onClick={() => setSelected('security')}
          >
            Security
          </NavMenuItem>
        </NavMenuGroup>
      </NavMenu>
    </Box>
  );
}
