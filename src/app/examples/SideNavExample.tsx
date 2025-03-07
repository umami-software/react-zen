import { useState } from 'react';
import { Box as BoxIcon, LayoutGrid, User, Settings } from 'lucide-react';
import {
  Box,
  SideNav,
  SideNavHeader,
  SideNavItem,
  SideNavSection,
  Button,
  Icon,
  Icons,
  Row,
} from '@/components';

export function SideNavExample() {
  const [isCollapsed, setCollapsed] = useState(false);

  return (
    <Box style={{ position: 'absolute', top: 0, left: 0, bottom: 0 }}>
      <SideNav isCollapsed={isCollapsed}>
        <SideNavSection>
          <SideNavHeader icon={<BoxIcon />} name="MyApp" />
        </SideNavSection>
        <SideNavSection>
          <SideNavItem icon={<LayoutGrid />} label="Dashboard" />
          <SideNavItem icon={<User />} label="Accounts" />
          <SideNavItem icon={<Settings />} label="Settings" />
        </SideNavSection>
        <SideNavSection>
          <Row>
            <Button variant="quiet" onPress={() => setCollapsed(!isCollapsed)}>
              <Icon>
                <Icons.PanelLeft />
              </Icon>
            </Button>
          </Row>
        </SideNavSection>
      </SideNav>
    </Box>
  );
}
