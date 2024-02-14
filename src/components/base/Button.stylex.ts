import * as stylex from '@stylexjs/stylex';
import { theme } from '@/styles/vars.stylex';

export const styles = stylex.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: theme.textColor1,
    fontSize: theme.textSize,
    padding: '0.75rem 1rem',
    borderRadius: theme.borderRadius,
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: theme.borderWidth,
    cursor: 'pointer',
  },
  normal: {
    backgroundColor: {
      default: theme.base4,
      ':hover': theme.base5,
      ':active': theme.base6,
    },
  },
  primary: {
    color: theme.textPrimary1,
    backgroundColor: {
      default: theme.primary1,
      ':hover': theme.primary2,
      ':active': theme.primary3,
    },
  },
  secondary: {
    backgroundColor: {
      default: theme.base1,
      ':hover': theme.base2,
      ':active': theme.base3,
    },
    borderColor: theme.borderColor,
  },
  quiet: {
    color: theme.textColor1,
    backgroundColor: {
      default: 'transparent',
      ':hover': theme.base3,
      ':active': theme.base4,
    },
  },
  danger: {
    color: theme.textPrimary1,
    backgroundColor: {
      default: theme.dangerColor1,
      ':hover': theme.dangerColor2,
      ':active': theme.dangerColor3,
    },
  },
});
