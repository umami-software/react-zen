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
      { title: 'Banner', path: '/docs/components/banner' },
      { title: 'Button', path: '/docs/components/button' },
      { title: 'Checkbox', path: '/docs/components/checkbox' },
      { title: 'Combobox', path: '/docs/components/combobox' },
      { title: 'Dialog', path: '/docs/components/dialog' },
      { title: 'Dots', path: '/docs/components/dots' },
      { title: 'Heading', path: '/docs/components/heading' },
      { title: 'Icon', path: '/docs/components/icon' },
      { title: 'List', path: '/docs/components/list' },
      { title: 'Loading', path: '/docs/components/loading' },
      { title: 'Menu', path: '/docs/components/menu' },
      { title: 'Menu Button', path: '/docs/components/menu-button' },
      { title: 'Progress Bar', path: '/docs/components/progress-bar' },
      { title: 'Progress Circle', path: '/docs/components/progress-circle' },
      { title: 'Search Field', path: '/docs/components/search-field' },
      { title: 'Select', path: '/docs/components/select' },
      { title: 'Spinner', path: '/docs/components/spinner' },
      { title: 'Status Light', path: '/docs/components/status-light' },
      { title: 'Switch', path: '/docs/components/switch' },
      { title: 'Tabs', path: '/docs/components/tabs' },
      { title: 'Text', path: '/docs/components/text' },
      { title: 'Text Field', path: '/docs/components/text-field' },
      { title: 'Toggle', path: '/docs/components/toggle' },
      { title: 'Tooltip', path: '/docs/components/tooltip' },
    ],
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <div className={styles.menu}>
      {items.map(({ name, children }) => {
        return (
          <div key={name} className={styles.group}>
            <Heading size={2}>{name}</Heading>
            {children.map(({ title, path }) => {
              return (
                <div
                  key={path}
                  className={classNames(styles.item, pathname.endsWith(path) && styles.selected)}
                >
                  <Text color={2}>
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
