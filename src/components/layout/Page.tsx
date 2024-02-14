import { ReactNode, useContext } from 'react';
import { props } from '@stylexjs/stylex';
import { ThemeContext } from '@/components/ThemeProvider';
import { styles } from './Page.stylex';

export function Page({ children, ...domProps }: { children: ReactNode }) {
  const theme = useContext(ThemeContext);

  return (
    <div {...domProps} {...props(styles.page, theme)}>
      {children}
    </div>
  );
}

export default Page;
