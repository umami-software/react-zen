import type { HTMLAttributes } from 'react';
import { create, props } from '@stylexjs/stylex';
import { theme } from '@/styles/vars.stylex';
import useTheme from '@/components/hooks/useTheme';

export function Text({
  color,
  size,
  weight,
  style,
  ...attributes
}: {
  color?: 1 | 2 | 3;
  size?: 1 | 2 | 3 | 4 | 5;
  weight?: 1 | 2 | 3 | 4 | 5;
  style?: any;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'color'>) {
  const { theme } = useTheme();

  return (
    <span
      {...props(
        styles.text,
        color && styles[`color${color}`],
        size && styles[`size${size}`],
        weight && styles[`weight${weight}`],
        theme.style,
        style,
      )}
      {...attributes}
    />
  );
}

export const styles = create({
  text: {
    color: theme.textColor1,
    fontWeight: 400,
  },
  color1: {
    color: theme.textColor1,
  },
  color2: {
    color: theme.textColor2,
  },
  color3: {
    color: theme.textColor3,
  },
  size1: {
    fontSize: 12,
  },
  size2: {
    fontSize: 14,
  },
  size3: {
    fontSize: 16,
  },
  size4: {
    fontSize: 18,
  },
  size5: {
    fontSize: 20,
  },
  size6: {
    fontSize: 24,
  },
  weight1: {
    fontWeight: 300,
  },
  weight2: {
    fontWeight: 400,
  },
  weight3: {
    fontWeight: 600,
  },
  weight4: {
    fontWeight: 700,
  },
  weight5: {
    fontWeight: 900,
  },
});

export default Text;
