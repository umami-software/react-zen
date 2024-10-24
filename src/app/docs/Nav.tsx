'use client';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heading, Text } from '@/components';
import styles from './Nav.module.css';

const items = [
  {
    name: 'Getting Started',
    children: [
      { title: 'Introduction', path: '/docs' },
      { title: 'Installation', path: '/docs/install' },
    ],
  },
  {
    name: 'Components',
    children: [
      { title: 'Accordion', path: '/docs/components/accordion' },
      { title: 'Alert Banner', path: '/docs/components/alert-banner' },
      { title: 'Alert Dialog', path: '/docs/components/alert-dialog' },
      { title: 'Box', path: '/docs/components/box' },
      { title: 'Button', path: '/docs/components/button' },
      { title: 'Breadcrumbs', path: '/docs/components/breadcrumbs' },
      { title: 'Calendar', path: '/docs/components/calendar' },
      { title: 'Checkbox', path: '/docs/components/checkbox' },
      { title: 'Combobox', path: '/docs/components/combobox' },
      { title: 'Confirmation Dialog', path: '/docs/components/confirmation-dialog' },
      { title: 'Data Table', path: '/docs/components/data-table' },
      { title: 'Dialog', path: '/docs/components/dialog' },
      { title: 'Dots', path: '/docs/components/dots' },
      { title: 'Form', path: '/docs/components/form' },
      { title: 'Heading', path: '/docs/components/heading' },
      { title: 'Hover Trigger', path: '/docs/components/hover-trigger' },
      { title: 'Icon', path: '/docs/components/icon' },
      { title: 'Icons', path: '/docs/components/icons' },
      { title: 'Inline Edit Field', path: '/docs/components/inline-edit-field' },
      { title: 'List', path: '/docs/components/list' },
      { title: 'Loading', path: '/docs/components/loading' },
      { title: 'Loading Button', path: '/docs/components/loading-button' },
      { title: 'Menu', path: '/docs/components/menu' },
      { title: 'Navigation Menu', path: '/docs/components/navigation-menu' },
      { title: 'Password Field', path: '/docs/components/password-field' },
      { title: 'Popover', path: '/docs/components/popover' },
      { title: 'Progress Bar', path: '/docs/components/progress-bar' },
      { title: 'Progress Circle', path: '/docs/components/progress-circle' },
      { title: 'Radio Group', path: '/docs/components/radio-group' },
      { title: 'Search Field', path: '/docs/components/search-field' },
      { title: 'Select', path: '/docs/components/select' },
      { title: 'Slider', path: '/docs/components/slider' },
      { title: 'Spinner', path: '/docs/components/spinner' },
      { title: 'Status Light', path: '/docs/components/status-light' },
      { title: 'Switch', path: '/docs/components/switch' },
      { title: 'Table', path: '/docs/components/table' },
      { title: 'Tabs', path: '/docs/components/tabs' },
      { title: 'Text', path: '/docs/components/text' },
      { title: 'Text Overflow', path: '/docs/components/text-overflow' },
      { title: 'Text Field', path: '/docs/components/text-field' },
      { title: 'Toast', path: '/docs/components/toast' },
      { title: 'Toggle', path: '/docs/components/toggle' },
      { title: 'Toggle Group', path: '/docs/components/toggle-group' },
      { title: 'Tooltip', path: '/docs/components/tooltip' },
    ],
  },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <div className={styles.menu}>
      {items.map(({ name, children }) => {
        return (
          <div key={name} className={styles.group}>
            <Text weight="bold">{name}</Text>
            {children.map(({ title, path }) => {
              return (
                <div
                  key={path}
                  className={classNames(styles.item, pathname.endsWith(path) && styles.selected)}
                >
                  <Text type="faded">
                    <Link href={path}>{title}</Link>
                  </Text>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
