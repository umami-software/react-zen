import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { FontColor } from '@/lib/types';
import { useDesignProps } from '@/components/hooks/useDesignProps';
import { Slot } from './Slot';
import styles from './Icon.module.css';

export interface IconProps extends HTMLAttributes<HTMLElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'input';
  rotate?: number;
  strokeWidth?: string;
  strokeColor?: FontColor;
  fillColor?: FontColor;
}

export function Icon({
  size = 'sm',
  variant,
  rotate,
  strokeWidth,
  strokeColor,
  fillColor,
  style,
  className,
  children,
  ...props
}: IconProps & HTMLAttributes<HTMLElement>) {
  const [classes, styleProps] = useDesignProps({
    strokeColor,
    fillColor,
  });

  return (
    <Slot
      {...props}
      className={classNames(styles.icon, className, classes, size && styles[size])}
      style={{
        ...styleProps,
        ...style,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        strokeWidth: strokeWidth,
      }}
    >
      {children}
    </Slot>
  );
}
