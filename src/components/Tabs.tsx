import {
  Tabs as AriaTabs,
  Tab as AriaTab,
  TabProps,
  TabsProps,
  TabPanel as AriaTabPanel,
  TabPanelProps,
  TabList as AriaTabList,
  TabListProps,
} from 'react-aria-components';
import styles from './Tabs.module.css';

function Tabs({ children, ...props }: TabsProps) {
  return (
    <AriaTabs {...props} className={styles.tabs}>
      {children}
    </AriaTabs>
  );
}

function TabList({ children, ...props }: TabListProps<any>) {
  return (
    <AriaTabList {...props} className={styles.list}>
      {children}
    </AriaTabList>
  );
}

function Tab({ children, ...props }: TabProps) {
  return (
    <AriaTab {...props} className={styles.tab}>
      {children}
    </AriaTab>
  );
}

function TabPanel({ children, ...props }: TabPanelProps) {
  return (
    <AriaTabPanel {...props} className={styles.panel}>
      {children}
    </AriaTabPanel>
  );
}

export { Tabs, TabList, Tab, TabPanel };
export type { TabsProps, TabListProps, TabProps, TabPanelProps };
