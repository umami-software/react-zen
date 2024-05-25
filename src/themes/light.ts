import { createTheme } from '@stylexjs/stylex';
import { theme } from '@/styles/vars.stylex';
import { lightColors as colors } from '@/styles/colors.stylex';

export const light = createTheme(theme, {
  baseColor1: colors.gray1,
  baseColor2: colors.gray2,
  baseColor3: colors.gray3,
  baseColor4: colors.gray4,
  baseColor5: colors.gray5,
  baseColor6: colors.gray6,
  baseColor7: colors.gray7,
  baseColor8: colors.gray8,
  baseColor9: colors.gray9,
  baseColor10: colors.gray10,
  baseColor11: colors.gray11,
  baseColor12: colors.gray12,

  accentColor1: colors.blue1,
  accentColor2: colors.blue2,
  accentColor3: colors.blue3,
  accentColor4: colors.blue4,
  accentColor5: colors.blue5,
  accentColor6: colors.blue6,
  accentColor7: colors.blue7,
  accentColor8: colors.blue8,
  accentColor9: colors.blue9,
  accentColor10: colors.blue10,
  accentColor11: colors.blue11,
  accentColor12: colors.blue12,

  primaryColor1: colors.blue9,
  primaryColor2: colors.blue10,
  primaryColor3: colors.blue11,

  backgroundColor: colors.gray1,
});
