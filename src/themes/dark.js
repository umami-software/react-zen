import { createTheme } from '@stylexjs/stylex';
import { theme } from '@/styles/vars.stylex';
import { darkColors as colors } from '@/styles/colors.stylex';

export const dark = createTheme(theme, {
  base1: colors.gray1,
  base2: colors.gray2,
  base3: colors.gray3,
  base4: colors.gray4,
  base5: colors.gray5,
  base6: colors.gray6,
  base7: colors.gray7,
  base8: colors.gray8,
  base9: colors.gray9,
  base10: colors.gray10,
  base11: colors.gray11,
  base12: colors.gray12,

  accent1: colors.blue1,
  accent2: colors.blue2,
  accent3: colors.blue3,
  accent4: colors.blue4,
  accent5: colors.blue5,
  accent6: colors.blue6,
  accent7: colors.blue7,
  accent8: colors.blue8,
  accent9: colors.blue9,
  accent10: colors.blue10,
  accent11: colors.blue11,
  accent12: colors.blue12,

  primary1: colors.blue9,
  primary2: colors.blue10,
  primary3: colors.blue11,

  textColor1: colors.gray12,
  textColor2: colors.gray11,

  borderColor: colors.gray7,

  backgroundColor: colors.gray1,
});
