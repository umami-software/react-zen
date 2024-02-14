import { ReactNode, useContext } from 'react';
import * as stylex from '@stylexjs/stylex';
import { ThemeContext } from '@/components/ThemeProvider';
import { styles } from './Button.stylex';

export function Button({
  variant = 'normal',
  children,
  ...domProps
}: {
  variant?: 'primary' | 'secondary' | 'normal' | 'quiet' | 'danger';
  children: ReactNode;
}) {
  const theme = useContext(ThemeContext);

  console.log('Button', { theme });

  return (
    <button {...domProps} {...stylex.props(styles.button, styles[variant], theme)}>
      {children}
    </button>
  );
}
