import { ReactNode, HTMLAttributes } from 'react';
import { create, props } from '@stylexjs/stylex';
import useTheme from '@/components/hooks/useTheme';
import { theme } from '@/styles/vars.stylex';

export function Page({
  style,
  children,
  ...attributes
}: { style?: any; children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  const { theme } = useTheme();

  return (
    <div {...props(styles.page, theme.style, style)} {...attributes}>
      {children}
    </div>
  );
}

export const styles = create({
  page: {
    display: 'grid',
    color: theme.textColor1,
    backgroundColor: theme.backgroundColor,
    minHeight: '100vh',
  },
});

export default Page;
