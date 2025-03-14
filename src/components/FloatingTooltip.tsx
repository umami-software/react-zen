import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { TooltipBubble, TooltipBubbleProps } from '@/components/Tooltip';
import styles from './FloatingTooltip.module.css';

export interface FloatingTooltipProps extends TooltipBubbleProps {}

export function FloatingTooltip({ className, style, children, ...props }: FloatingTooltipProps) {
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
    <TooltipBubble
      {...props}
      className={classNames(styles.floating, className, 'BALLLLSSSS')}
      style={{ ...style, left: position.x, top: position.y }}
    >
      {children}
    </TooltipBubble>
  );
}
