import type { ReactNode } from 'react';
import {
  Checkbox as AriaCheckbox,
  type CheckboxProps as AriaCheckboxProps,
} from 'react-aria-components';
import { Check, Minus } from '@/components/icons';
import { Box } from './Box';
import { Icon } from './Icon';
import { cn } from './lib/tailwind';
import { checkbox } from './variants';

export interface CheckboxProps extends AriaCheckboxProps {
  children?: ReactNode;
  label?: string;
}

export function Checkbox({ label, className, children, ...props }: CheckboxProps) {
  const isSelected = typeof props.value !== 'undefined' ? !!props.value : undefined;
  const styles = checkbox();

  return (
    <AriaCheckbox {...props} isSelected={isSelected} className={cn(styles.root(), className)}>
      {({ isIndeterminate, isSelected }) => {
        return (
          <>
            <Box className={styles.box()}>
              <Icon className={styles.icon()} size="sm">
                {isIndeterminate ? <Minus /> : isSelected ? <Check /> : null}
              </Icon>
            </Box>
            {children as any}
          </>
        );
      }}
    </AriaCheckbox>
  );
}
