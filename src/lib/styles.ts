import { ACCENT_COLORS } from '@/lib/constants';

export function getHighlightColor(color?: string) {
  if (!color) return;

  if (/\d+/.test(color)) {
    return { '--highlight-color': `var(--base-color-${color})` };
  } else if (ACCENT_COLORS.includes(color as any)) {
    return { '--highlight-color': `var(--accent-color-${color})` };
  }
}
