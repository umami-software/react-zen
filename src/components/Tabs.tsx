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
        'flex items-center border-b border-gray-300 dark:border-gray-700 gap-6',
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
        'tab flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 py-2 border-b-2 border-transparent select-none -mb-[2px] cursor-pointer outline-none',
        'data-[hovered]:text-gray-900 dark:data-[hovered]:text-gray-100',
        'data-[selected]:text-gray-900 dark:data-[selected]:text-gray-100 data-[selected]:border-b-gray-900 dark:data-[selected]:border-b-gray-100',
        'data-[disabled]:text-gray-300 dark:data-[disabled]:text-gray-600 data-[disabled]:cursor-default',
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
