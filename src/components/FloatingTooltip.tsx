import { ReactNode, useEffect, useState } from 'react';
import styles from './FloatingTooltip.module.css';

export function FloatingTooltip({ children }: { children: ReactNode }) {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handler);

    return () => {
      document.removeEventListener('mousemove', handler);
    };
  }, []);

  return (
    <div className={styles.tooltip} style={{ left: position.x, top: position.y }}>
      {children}
    </div>
  );
}
