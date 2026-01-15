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
          'flex items-center justify-center whitespace-nowrap gap-3 font-medium bg-transparent border border-transparent rounded p-2 relative cursor-pointer',
          'hover:bg-interactive',
          'data-[selected]:text-interactive-text-selected data-[selected]:bg-interactive-selected',
          'focus:border-transparent focus:ring-2 focus:ring-focus-ring',
          className,
        )}
      >
        {children as ReactNode}
      </ToggleButton>
    </>
  );
}
