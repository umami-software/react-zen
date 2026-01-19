import type { ReactNode } from 'react';
import { Switch as AriaSwitch, SwitchProps as AriaSwitchProps } from 'react-aria-components';
import { Box } from './Box';
import { Label } from './Label';
import { Column } from './Column';
import { cn } from './lib/tailwind';
import { switchVariant } from './variants';

export interface SwitchProps extends AriaSwitchProps {
  children?: ReactNode;
  label?: string;
}

export function Switch({ label, children, className, ...props }: SwitchProps) {
  const styles = switchVariant();

  return (
    <Column>
      {label && <Label>{label}</Label>}
      <AriaSwitch {...props} className={cn(styles.root(), className)}>
        <Box className={styles.track()}>
          <Box className={styles.thumb()} />
        </Box>
        {children as any}
      </AriaSwitch>
    </Column>
  );
}
