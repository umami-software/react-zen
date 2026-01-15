import { ReactNode } from 'react';
import { ToggleButton, ToggleButtonProps } from 'react-aria-components';
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
          'hover:bg-gray-100 dark:hover:bg-gray-800',
          'data-[selected]:text-white data-[selected]:bg-gray-900 dark:data-[selected]:text-gray-900 dark:data-[selected]:bg-gray-100',
          'focus:border-transparent focus:ring-2 focus:ring-gray-400',
          className,
        )}
      >
        {children as ReactNode}
      </ToggleButton>
    </>
  );
}
