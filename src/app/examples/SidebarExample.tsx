import { useState } from 'react';
import { Box as BoxIcon, LayoutGrid, User, Settings } from 'lucide-react';
import {
  Box,
  Sidebar,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
  Button,
  Icon,
  Icons,
  Row,
  Heading,
} from '@/components';
import { SidebarProps } from '@/components/Sidebar';

export function SidebarExample({ name, ...props }: { name: string } & SidebarProps) {
  const [isCollapsed, setCollapsed] = useState(false);

  return (
    <>
      <Heading>{name}</Heading>
      <Box style={{ position: 'absolute', top: 0, left: 0, bottom: 0 }}>
        <Sidebar {...props} isCollapsed={isCollapsed}>
          <SidebarSection>
            <SidebarHeader icon={<BoxIcon />} label="MyApp" />
          </SidebarSection>
          <SidebarSection>
            <SidebarItem icon={<LayoutGrid />} label="Dashboard" isSelected={true} />
            <SidebarItem icon={<User />} label="Accounts" />
            <SidebarItem icon={<Settings />} label="Settings" />
          </SidebarSection>
          <SidebarSection>
            <Row>
              <Button variant="quiet" onPress={() => setCollapsed(!isCollapsed)}>
                <Icon>
                  <Icons.PanelLeft />
                </Icon>
              </Button>
            </Row>
          </SidebarSection>
        </Sidebar>
      </Box>
    </>
  );
}
