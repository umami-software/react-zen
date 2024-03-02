import * as stylex from '@stylexjs/stylex';
import { lightColors, darkColors } from '@/styles/colors.stylex';

const DARK = '@media (prefers-color-scheme: dark)';

export const screens = stylex.defineVars({
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
});

export const spacing = stylex.defineVars({
  spacing1: '.25rem', // 4px
  spacing2: '.5rem', // 8px
  spacing3: '1rem', // 16px
  spacing4: '1.25rem', // 20px
  spacing5: '1.5rem', // 24px
  spacing6: '1.75rem', // 28px
  spacing7: '2rem', // 32px
  spacing8: '3rem', // 48px
  spacing9: '4rem', // 64px
  spacing10: '5rem', // 80px
  spacing11: '7.5rem', // 120px
  spacing12: '10rem', // 160px
});

export const fontSizes = stylex.defineVars({
  fontSize1: '12px',
  fontSize2: '14px',
  fontSize3: '16px',
  fontSize4: '18px',
  fontSize5: '20px',
  fontSize6: '24px',
  fontSize7: '28px',
  fontSize8: '36px',
  fontSize9: '60px',
});

export const zIndex = stylex.defineVars({
  layer1: '1',
  layer2: '2',
  layer3: '3',
  layer4: '4',
  layer5: '5',
  overlay: '2147483647',
});

export const radius = stylex.defineVars({
  none: '0',
  sm: '2px',
  md: '4px',
  lg: '8px',
  full: '100%',
});

export const theme = stylex.defineVars({
  textSize: '14px',
  textColor1: { default: lightColors.gray12, [DARK]: darkColors.gray12 },
  textColor2: { default: lightColors.gray10, [DARK]: darkColors.gray10 },
  textPrimary1: { default: lightColors.gray1, [DARK]: darkColors.gray1 },
  textPrimary2: { default: lightColors.gray3, [DARK]: darkColors.gray3 },

  padding: '0.75rem 1rem',
  borderRadius: '4px',
  borderWidth: '1px',
  borderColor: { default: lightColors.gray7, [DARK]: darkColors.gray7 },
  backgroundColor: { default: lightColors.gray1, [DARK]: darkColors.gray1 },

  dangerColor1: { default: lightColors.red9, [DARK]: darkColors.red9 },
  dangerColor2: { default: lightColors.red10, [DARK]: darkColors.red10 },
  dangerColor3: { default: lightColors.red11, [DARK]: darkColors.red11 },

  base1: { default: lightColors.gray1, [DARK]: darkColors.gray1 },
  base2: { default: lightColors.gray2, [DARK]: darkColors.gray2 },
  base3: { default: lightColors.gray3, [DARK]: darkColors.gray3 },
  base4: { default: lightColors.gray4, [DARK]: darkColors.gray4 },
  base5: { default: lightColors.gray5, [DARK]: darkColors.gray5 },
  base6: { default: lightColors.gray6, [DARK]: darkColors.gray6 },
  base7: { default: lightColors.gray7, [DARK]: darkColors.gray7 },
  base8: { default: lightColors.gray8, [DARK]: darkColors.gray8 },
  base9: { default: lightColors.gray9, [DARK]: darkColors.gray9 },
  base10: { default: lightColors.gray10, [DARK]: darkColors.gray10 },
  base11: { default: lightColors.gray11, [DARK]: darkColors.gray11 },
  base12: { default: lightColors.gray12, [DARK]: darkColors.gray12 },

  accent1: { default: lightColors.gray1, [DARK]: darkColors.gray1 },
  accent2: { default: lightColors.gray2, [DARK]: darkColors.gray2 },
  accent3: { default: lightColors.gray3, [DARK]: darkColors.gray3 },
  accent4: { default: lightColors.gray4, [DARK]: darkColors.gray4 },
  accent5: { default: lightColors.gray5, [DARK]: darkColors.gray5 },
  accent6: { default: lightColors.gray6, [DARK]: darkColors.gray6 },
  accent7: { default: lightColors.gray7, [DARK]: darkColors.gray7 },
  accent8: { default: lightColors.gray8, [DARK]: darkColors.gray8 },
  accent9: { default: lightColors.gray9, [DARK]: darkColors.gray9 },
  accent10: { default: lightColors.gray10, [DARK]: darkColors.gray10 },
  accent11: { default: lightColors.gray11, [DARK]: darkColors.gray11 },
  accent12: { default: lightColors.gray12, [DARK]: darkColors.gray12 },

  primary1: { default: lightColors.gray12, [DARK]: darkColors.gray12 },
  primary2: { default: lightColors.gray11, [DARK]: darkColors.gray11 },
  primary3: { default: lightColors.gray10, [DARK]: darkColors.gray10 },

  spacing1: spacing.spacing1,
  spacing2: spacing.spacing2,
  spacing3: spacing.spacing3,
  spacing4: spacing.spacing4,
  spacing5: spacing.spacing5,
  spacing6: spacing.spacing6,
  spacing7: spacing.spacing7,
  spacing8: spacing.spacing8,
  spacing9: spacing.spacing9,
  spacing10: spacing.spacing10,
  spacing11: spacing.spacing11,
  spacing12: spacing.spacing12,
});
