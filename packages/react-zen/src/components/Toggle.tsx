import type { ReactNode } from 'react';
import { ToggleButton, type ToggleButtonProps } from 'react-aria-components';
import { Label } from './Label';
import { cn } from './lib/tailwind';

export interface ToggleProps extends ToggleButtonProps {
  label?: string;
  value?: string;
}

export function Toggle({ label, children, className, ...props }: ToggleProps) {
  const isSelected = typeof props.value !== 'undefined' ? !!props.value : undefined;

  return (
    <>
      {label && <Label>{label}</Label>}
      <ToggleButton
        {...props}
        isSelected={isSelected}
        className={cn(
          'flex items-center justify-center whitespace-nowrap gap-3 font-medium bg-interactive border border-transparent rounded p-2 relative cursor-pointer',
          'hover:bg-interactive-hover',
          'pressed:bg-interactive-pressed',
          'data-[selected]:text-primary-foreground data-[selected]:bg-primary',
          className,
        )}
      >
        {children as ReactNode}
      </ToggleButton>
    </>
  );
}
