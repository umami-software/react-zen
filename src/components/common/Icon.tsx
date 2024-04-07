import { create, props } from '@stylexjs/stylex';
import { Slot } from '@radix-ui/react-slot';
import useTheme from '@/components/hooks/useTheme';
import { ReactNode, cloneElement } from 'react';

export interface IconProps {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'input';
  rotate?: number;
  style?: any;
  children: ReactNode;
}

export function Icon({ size = 3, variant, rotate, style, children, ...attributes }: IconProps) {
  const { theme } = useTheme();

  return (
    <Slot
      {...attributes}
      {...props(styles.icon, size && styles[`size${size}`], theme.style, style)}
      style={{ ...style, transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      {children}
    </Slot>
  );
}

export const styles = create({
  icon: {
    display: 'inline-block',
    fill: 'currentColor',
  },
  size1: {
    width: 16,
    height: 16,
  },
  size2: {
    width: 20,
    height: 20,
  },
  size3: {
    width: 24,
    height: 24,
  },
  size4: {
    width: 32,
    height: 32,
  },
  size5: {
    width: 48,
    height: 48,
  },
  size6: {
    width: 60,
    height: 60,
  },
});

export default Icon;
