import { create } from '@stylexjs/stylex';
import { theme } from '@/styles/vars.stylex';

export const styles = create({
  page: {
    backgroundColor: theme.backgroundColor,
    minHeight: '100vh',
  },
});
