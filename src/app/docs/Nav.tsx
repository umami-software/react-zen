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
      { title: 'Button', path: '/docs/components/button' },
      { title: 'Checkbox', path: '/docs/components/checkbox' },
      { title: 'Combobox', path: '/docs/components/combobox' },
      { title: 'Dialog', path: '/docs/components/dialog' },
      { title: 'Heading', path: '/docs/components/heading' },
      { title: 'Icon', path: '/docs/components/icon' },
      { title: 'List', path: '/docs/components/list' },
      { title: 'Menu', path: '/docs/components/menu' },
      { title: 'Menu Button', path: '/docs/components/menu-button' },
      { title: 'Search Field', path: '/docs/components/search-field' },
      { title: 'Select', path: '/docs/components/select' },
      { title: 'Switch', path: '/docs/components/switch' },
      { title: 'Text', path: '/docs/components/text' },
      { title: 'Text Field', path: '/docs/components/text-field' },
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
