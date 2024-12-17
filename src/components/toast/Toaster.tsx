import { animated, useTransition } from '@react-spring/web';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Toast } from '@/components/toast/Toast';
import { removeToast, useToast } from '@/components/hooks/useToast';
import styles from './Toaster.module.css';

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
    <div
      className={classNames(styles.toaster, styles[`position-${position}`])}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {transitions((style, item) => {
        const { id, ...props } = item;
        return (
          <animated.div key={id} style={style}>
            <Toast {...props} id={id} onClose={() => removeToast(id)} />
          </animated.div>
        );
      })}
    </div>
  );
}
