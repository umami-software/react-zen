'use client';
import { PALETTES, type Palette, useTheme } from './hooks/useTheme';
import { cn } from './lib/tailwind';

export interface PaletteSwitcherProps {
  className?: string;
}

const PALETTE_LABELS: Record<Palette, string> = {
  neutral: 'Neutral',
  slate: 'Slate',
  gray: 'Gray',
  zinc: 'Zinc',
  stone: 'Stone',
};

export function PaletteSwitcher({ className }: PaletteSwitcherProps) {
  const { palette, setPalette } = useTheme();

  return (
    <div
      className={cn(
        'inline-flex items-center bg-surface-base border border-edge rounded-md overflow-hidden',
        className,
      )}
    >
      {PALETTES.map(p => (
        <button
          key={p}
          type="button"
          onClick={() => setPalette(p)}
          aria-label={PALETTE_LABELS[p]}
          aria-pressed={palette === p}
          className={cn(
            'px-3 h-9 flex items-center justify-center cursor-pointer outline-none transition-colors text-sm',
            '[&:not(:first-child)]:border-l [&:not(:first-child)]:border-edge',
            'hover:bg-interactive',
            'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset',
            palette === p ? 'bg-interactive text-foreground-primary' : 'text-foreground-muted',
          )}
        >
          {PALETTE_LABELS[p]}
        </button>
      ))}
    </div>
  );
}
