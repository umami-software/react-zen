'use client';
import { Fragment } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heading, Text } from '@/components';
import styles from './Menu.module.css';

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
      { title: 'Button group', path: '/docs/components/button-group' },
      { title: 'Checkbox', path: '/docs/components/checkbox' },
      { title: 'Dropdown', path: '/docs/components/dropdown' },
      { title: 'Heading', path: '/docs/components/heading' },
      { title: 'Icon', path: '/docs/components/icon' },
      { title: 'Select', path: '/docs/components/select' },
      { title: 'Text', path: '/docs/components/text' },
      { title: 'Text field', path: '/docs/components/text-field' },
      { title: 'Text area', path: '/docs/components/text-area' },
    ],
  },
];

export default function Menu() {
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
