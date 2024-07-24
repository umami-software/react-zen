import {
  Tabs,
  Tab,
  TabProps,
  TabsProps,
  TabPanel,
  TabPanelProps,
  TabList,
  TabListProps,
} from 'react-aria-components';
import styles from './Tabs.module.css';

function _Tabs({ children, ...props }: TabsProps) {
  return (
    <Tabs {...props} className={styles.tabs}>
      {children}
    </Tabs>
  );
}

function _TabList({ children, ...props }: TabListProps<any>) {
  return (
    <TabList {...props} className={styles.list}>
      {children}
    </TabList>
  );
}

function _Tab({ children, ...props }: TabProps) {
  return (
    <Tab {...props} className={styles.tab}>
      {children}
    </Tab>
  );
}

function _TabPanel({ children, ...props }: TabPanelProps) {
  return (
    <TabPanel {...props} className={styles.panel}>
      {children}
    </TabPanel>
  );
}

export { _Tabs as Tabs, _TabList as TabList, _Tab as Tab, _TabPanel as TabPanel };
export type { TabsProps, TabListProps, TabProps, TabPanelProps };
