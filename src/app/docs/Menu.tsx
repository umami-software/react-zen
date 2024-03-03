'use client';
import { Fragment } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heading, Text } from '@/components';
import styles from './Menu.module.css';

const items = [
  {
    name: 'Getting Started',
    children: [
      { title: 'Introduction', url: '/docs' },
      { title: 'Installation', url: '/docs/install' },
    ],
  },
  {
    name: 'Components',
    children: [
      { title: 'Button', url: '/docs/components/button' },
      { title: 'Icon', url: '/docs/components/icon' },
      { title: 'Text', url: '/docs/components/text' },
      { title: 'Heading', url: '/docs/components/heading' },
      { title: 'Button group', url: '/docs/components/button-group' },
      { title: 'Checkbox', url: '/docs/components/checkbox' },
      { title: 'Dropdown', url: '/docs/components/dropdown' },
      { title: 'Text field', url: '/docs/components/text-field' },
      { title: 'Text area', url: '/docs/components/text-area' },
    ],
  },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <div className={styles.menu}>
      {items.map(({ name, children }) => {
        return (
          <Fragment key={name}>
            <Heading size={2}>{name}</Heading>
            {children.map(({ title, url }) => {
              return (
                <div
                  key={url}
                  className={clsx(styles.item, pathname.endsWith(url) && styles.selected)}
                >
                  <Text color={2}>
                    <Link href={url}>{title}</Link>
                  </Text>
                </div>
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );
}
