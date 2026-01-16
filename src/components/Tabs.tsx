import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabPanel as AriaTabPanel,
  Tabs as AriaTabs,
  type TabListProps,
  type TabPanelProps,
  type TabProps,
  type TabsProps,
} from 'react-aria-components';
import { cn } from './lib/tailwind';

function Tabs({ children, className, ...props }: TabsProps) {
  return (
    <AriaTabs {...props} className={cn('grid relative w-full gap-6', className)}>
      {children}
    </AriaTabs>
  );
}

function TabList({ children, className, ...props }: TabListProps<any>) {
  return (
    <AriaTabList
      {...props}
      className={cn(
        'flex items-center border-b border-edge gap-6',
        '[&_a.tab]:font-medium [&_a.tab]:no-underline',
        className,
      )}
    >
      {children}
    </AriaTabList>
  );
}

function Tab({ children, className, ...props }: TabProps) {
  return (
    <AriaTab
      {...props}
      className={cn(
        'tab flex items-center justify-center text-base text-foreground-muted py-2 border-b-2 border-transparent select-none -mb-[2px] cursor-pointer outline-none',
        'data-[hovered]:text-foreground-primary',
        'data-[selected]:text-foreground-primary data-[selected]:border-b-edge-inverted',
        'data-[disabled]:text-foreground-disabled data-[disabled]:cursor-default',
        className,
      )}
    >
      {children}
    </AriaTab>
  );
}

function TabPanel({ children, className, ...props }: TabPanelProps) {
  return (
    <AriaTabPanel {...props} className={className}>
      {children}
    </AriaTabPanel>
  );
}

export { Tabs, TabList, Tab, TabPanel };
export type { TabsProps, TabListProps, TabProps, TabPanelProps };
