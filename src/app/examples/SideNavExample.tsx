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
  Heading,
} from '@/components';
import { SideNavProps } from '@/components/SideNav';

export function SideNavExample({ name, ...props }: { name: string } & SideNavProps) {
  const [isCollapsed, setCollapsed] = useState(false);

  return (
    <>
      <Heading>{name}</Heading>
      <Box style={{ position: 'absolute', top: 0, left: 0, bottom: 0 }}>
        <SideNav {...props} isCollapsed={isCollapsed}>
          <SideNavSection>
            <SideNavHeader icon={<BoxIcon />} label="MyApp" />
          </SideNavSection>
          <SideNavSection>
            <SideNavItem icon={<LayoutGrid />} label="Dashboard" isSelected={true} />
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
    </>
  );
}
