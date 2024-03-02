'use client';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './Menu.module.css';
import { Fragment } from 'react';

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
      { title: 'ButtonGroup', url: '/docs/components/button-group' },
      { title: 'Checkbox', url: '/docs/components/checkbox' },
      { title: 'Dropdown', url: '/docs/components/dropdown' },
      { title: 'TextField', url: '/docs/components/text-field' },
      { title: 'TextArea', url: '/docs/components/text-area' },
    ],
  },
];

export default function Menu({ className }: { className: any }) {
  return (
    <div className={clsx(styles.menu, className)}>
      {items.map(({ name, children }) => {
        return (
          <Fragment key={name}>
            <header>{name}</header>
            {children.map(({ title, url }) => {
              return (
                <div key={url} className={styles.item}>
                  <Link href={url}>{title}</Link>
                </div>
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );
}
