'use client';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heading, Text, Row, Column } from '@/components';
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
    name: 'Design',
    children: [
      { title: 'Colors', path: '/docs/design/colors' },
      { title: 'Fonts', path: '/docs/design/fonts' },
      { title: 'Spacing', path: '/docs/design/spacing' },
      { title: 'Shadows', path: '/docs/design/shadows' },
      { title: 'Borders', path: '/docs/design/borders' },
      { title: 'Breakpoints', path: '/docs/design/breakpoints' },
    ],
  },
  {
    name: 'Typography',
    children: [
      { title: 'Text', path: '/docs/typography/text' },
      { title: 'Heading', path: '/docs/typography/heading' },
      { title: 'Blockquote', path: '/docs/typography/blockquote' },
      { title: 'Code', path: '/docs/typography/code' },
    ],
  },
  {
    name: 'Layouts',
    children: [
      { title: 'Box', path: '/docs/layout/box' },
      { title: 'Flexbox', path: '/docs/layout/flexbox' },
      { title: 'Grid', path: '/docs/layout/grid' },
    ],
  },
  {
    name: 'Components',
    children: [
      { title: 'Accordion', path: '/docs/components/accordion' },
      { title: 'Alert Banner', path: '/docs/components/alert-banner' },
      { title: 'Alert Dialog', path: '/docs/components/alert-dialog' },
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
      { title: 'Hover Trigger', path: '/docs/components/hover-trigger' },
      { title: 'Icon', path: '/docs/components/icon' },
      { title: 'Icons', path: '/docs/components/icons' },
      { title: 'Inline Edit Field', path: '/docs/components/inline-edit-field' },
      { title: 'List', path: '/docs/components/list' },
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
    <Column gap="5">
      {items.map(({ name, children }) => {
        return (
          <Column key={name} gap="2">
            <Heading size="2">{name}</Heading>
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
          </Column>
        );
      })}
    </Column>
  );
}
