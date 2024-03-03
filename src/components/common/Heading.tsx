import { HTMLAttributes, ReactNode } from 'react';
import { create, props } from '@stylexjs/stylex';
import useTheme from '@/components/hooks/useTheme';

export function Heading({
  size,
  style,
  children,
  ...attributes
}: {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  style?: any;
  children: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>) {
  const { theme } = useTheme();

  return (
    <h1
      {...attributes}
      {...props(styles.heading, size && styles[`size${size}`], theme.style, style)}
    >
      {children}
    </h1>
  );
}

export const styles = create({
  heading: {
    fontWeight: 700,
    lineHeight: '150%',
    margin: 0,
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
  size7: {
    fontSize: 28,
  },
  size8: {
    fontSize: 36,
  },
  size9: {
    fontSize: 60,
  },
});

export default Heading;
