import { ReactNode } from 'react';
import { create, props } from '@stylexjs/stylex';
import { theme } from '@/styles/vars.stylex';
import useTheme from '@/components/hooks/useTheme';

export function Panel({ style, ...domProps }: { style?: any; children: ReactNode }) {
  const { theme } = useTheme();

  return <div {...props(styles.panel, theme.style, style)} {...domProps}></div>;
}

export const styles = create({
  panel: {
    color: theme.textColor1,
    backgroundColor: theme.backgroundColor,
  },
});

export default Panel;
