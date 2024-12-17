import { animated, useTransition } from '@react-spring/web';
import classNames from 'classnames';
import { useToast } from '@/components/hooks/useToast';
import { Toast } from './Toast';
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

  return (
    <div className={classNames(styles.toaster, styles[`position-${position}`])}>
      {transitions((style, item) => {
        const { id, ...props } = item;
        return (
          <animated.div key={id} style={style}>
            <Toast {...props} id={id} duration={duration} />
          </animated.div>
        );
      })}
    </div>
  );
}
