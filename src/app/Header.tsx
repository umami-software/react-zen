'use client';
import classNames from 'classnames';
import { Button } from '@/components';
import useTheme from '@/components/hooks/useTheme';
import styles from './Header.module.css';

export default function Header({ className, ...domProps }: { className?: string }) {
  const { setTheme } = useTheme();

  return (
    <div {...domProps} className={classNames(styles.header, className)}>
      <a href={'/'}>zen</a>
      <a href={'/docs'}>docs</a>
      <div className={styles.buttons}>
        <Button size={1} onClick={() => setTheme('zen')}>
          zen
        </Button>
        <Button size={1} onClick={() => setTheme('light')}>
          light
        </Button>
        <Button size={1} onClick={() => setTheme('dark')}>
          dark
        </Button>
      </div>
    </div>
  );
}
