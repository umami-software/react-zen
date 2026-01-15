import { ACCENT_COLORS } from '@/lib/constants';

// Tailwind color values for highlight colors
const highlightColors: Record<string, string> = {
  gray: '#f3f4f6',
  slate: '#f1f5f9',
  zinc: '#f4f4f5',
  neutral: '#f5f5f5',
  stone: '#f5f5f4',
  red: '#fee2e2',
  orange: '#ffedd5',
  amber: '#fef3c7',
  yellow: '#fef9c3',
  lime: '#ecfccb',
  green: '#dcfce7',
  emerald: '#d1fae5',
  teal: '#ccfbf1',
  cyan: '#cffafe',
  sky: '#e0f2fe',
  blue: '#dbeafe',
  indigo: '#e0e7ff',
  violet: '#ede9fe',
  purple: '#f3e8ff',
  fuchsia: '#fae8ff',
  pink: '#fce7f3',
  rose: '#ffe4e6',
};

export function getHighlightColor(color?: string) {
  if (!color) return;

  if (ACCENT_COLORS.includes(color as any)) {
    return { '--highlight-color': highlightColors[color] || color };
  }

  return { '--highlight-color': color };
}
