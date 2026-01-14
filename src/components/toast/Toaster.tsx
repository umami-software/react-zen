import { animated, useTransition } from '@react-spring/web';
import { useEffect, useState } from 'react';
import { Toast } from '@/components/toast/Toast';
import { removeToast, useToast } from '@/components/hooks/useToast';
import { Column } from '@/components/Column';
import { Box } from '@/components/Box';
import { cn } from '@/components/lib/tailwind';

export type ToastPosition =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'bottom-left'
  | 'bottom'
  | 'bottom-right'
  | 'left'
  | 'right';

export interface ToasterProps {
  duration?: number;
  position?: ToastPosition;
}

const positionClasses: Record<ToastPosition, string> = {
  'top-left': 'top-4 left-4 items-start',
  'top': 'top-4 left-1/2 -translate-x-1/2 items-center',
  'top-right': 'top-4 right-4 items-end',
  'bottom-left': 'bottom-4 left-4 items-start',
  'bottom': 'bottom-4 left-1/2 -translate-x-1/2 items-center',
  'bottom-right': 'bottom-4 right-4 items-end',
  'left': 'top-1/2 left-4 -translate-y-1/2 items-start',
  'right': 'top-1/2 right-4 -translate-y-1/2 items-end',
};

const AnimatedBox = animated(Box);

export function Toaster({ duration = 0, position = 'bottom-right' }: ToasterProps) {
  const { toasts } = useToast();
  const [hovered, setHovered] = useState(false);

  const transitions = useTransition(toasts, {
    from: {
      opacity: 0,
      transform: position?.includes('left') ? 'translateX(-100%)' : 'translateX(100%)',
    },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: {
      opacity: 0,
      transform: position?.includes('top') ? 'translateY(-80%)' : 'translateY(80%)',
    },
    config: { duration: 100 },
  });

  useEffect(() => {
    if (duration) {
      const timeout = setInterval(() => {
        if (hovered || !toasts.length) return;

        const expired = Date.now() - duration;

        toasts.forEach(toast => {
          if (toast.timestamp < expired) {
            removeToast(toast.id);
          }
        });
      }, 100);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [duration, toasts, hovered]);

  return (
    <Column
      gap="2"
      className={cn('fixed z-[9999]', positionClasses[position])}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {transitions((style, item) => {
        const { id, ...props } = item;

        return (
          <AnimatedBox key={id} style={style}>
            <Toast {...props} id={id} onClose={() => removeToast(id)} />
          </AnimatedBox>
        );
      })}
    </Column>
  );
}
