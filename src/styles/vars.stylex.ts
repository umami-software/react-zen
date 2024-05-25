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
  fontSize1: 'var(--zen-font-size1)',
  fontSize2: 'var(--zen-font-size2)',
  fontSize3: 'var(--zen-font-size3)',
  fontSize4: 'var(--zen-font-size4)',
  fontSize5: 'var(--zen-font-size5)',
  fontSize6: 'var(--zen-font-size6)',
  fontSize7: 'var(--zen-font-size7)',
  fontSize8: 'var(--zen-font-size8)',
  fontSize9: 'var(--zen-font-size9)',
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
  textSize: fontSizes.fontSize2,
  padding: '0.75rem 1rem',
  borderRadius: '4px',
  borderWidth: '1px',

  borderColor: { default: lightColors.gray7, [DARK]: darkColors.gray7 },
  backgroundColor: { default: lightColors.gray1, [DARK]: darkColors.gray1 },

  textColor1: { default: lightColors.gray12, [DARK]: darkColors.gray12 },
  textColor2: { default: lightColors.gray10, [DARK]: darkColors.gray10 },
  textColor3: { default: lightColors.gray9, [DARK]: darkColors.gray9 },

  textColorInverse1: { default: lightColors.gray1, [DARK]: darkColors.gray1 },
  textColorInverse2: { default: lightColors.gray3, [DARK]: darkColors.gray3 },

  dangerColor1: { default: lightColors.red9, [DARK]: darkColors.red9 },
  dangerColor2: { default: lightColors.red10, [DARK]: darkColors.red10 },
  dangerColor3: { default: lightColors.red11, [DARK]: darkColors.red11 },

  baseColor1: { default: lightColors.gray1, [DARK]: darkColors.gray1 },
  baseColor2: { default: lightColors.gray2, [DARK]: darkColors.gray2 },
  baseColor3: { default: lightColors.gray3, [DARK]: darkColors.gray3 },
  baseColor4: { default: lightColors.gray4, [DARK]: darkColors.gray4 },
  baseColor5: { default: lightColors.gray5, [DARK]: darkColors.gray5 },
  baseColor6: { default: lightColors.gray6, [DARK]: darkColors.gray6 },
  baseColor7: { default: lightColors.gray7, [DARK]: darkColors.gray7 },
  baseColor8: { default: lightColors.gray8, [DARK]: darkColors.gray8 },
  baseColor9: { default: lightColors.gray9, [DARK]: darkColors.gray9 },
  baseColor10: { default: lightColors.gray10, [DARK]: darkColors.gray10 },
  baseColor11: { default: lightColors.gray11, [DARK]: darkColors.gray11 },
  baseColor12: { default: lightColors.gray12, [DARK]: darkColors.gray12 },

  accentColor1: { default: lightColors.gray1, [DARK]: darkColors.gray1 },
  accentColor2: { default: lightColors.gray2, [DARK]: darkColors.gray2 },
  accentColor3: { default: lightColors.gray3, [DARK]: darkColors.gray3 },
  accentColor4: { default: lightColors.gray4, [DARK]: darkColors.gray4 },
  accentColor5: { default: lightColors.gray5, [DARK]: darkColors.gray5 },
  accentColor6: { default: lightColors.gray6, [DARK]: darkColors.gray6 },
  accentColor7: { default: lightColors.gray7, [DARK]: darkColors.gray7 },
  accentColor8: { default: lightColors.gray8, [DARK]: darkColors.gray8 },
  accentColor9: { default: lightColors.gray9, [DARK]: darkColors.gray9 },
  accentColor10: { default: lightColors.gray10, [DARK]: darkColors.gray10 },
  accentColor11: { default: lightColors.gray11, [DARK]: darkColors.gray11 },
  accentColor12: { default: lightColors.gray12, [DARK]: darkColors.gray12 },

  primaryColor1: { default: lightColors.gray12, [DARK]: darkColors.gray12 },
  primaryColor2: { default: lightColors.gray11, [DARK]: darkColors.gray11 },
  primaryColor3: { default: lightColors.gray10, [DARK]: darkColors.gray10 },

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
