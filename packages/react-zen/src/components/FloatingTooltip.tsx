import { useEffect, useState } from 'react';
import { TooltipBubble, type TooltipBubbleProps } from '@/components/Tooltip';
import { cn } from './lib/tailwind';

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
      className={cn(
        'fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-[calc(100%+10px)]',
        className,
      )}
      style={{ ...style, left: position.x, top: position.y }}
    >
      {children}
    </TooltipBubble>
  );
}
