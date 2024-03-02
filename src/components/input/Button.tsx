import { HTMLAttributes, ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import { theme } from '@/styles/vars.stylex';
import useTheme from '@/components/hooks/useTheme';

export function Button({
  variant,
  size,
  style,
  children,
  ...attributes
}: {
  variant?: 'primary' | 'secondary' | 'quiet' | 'danger';
  size?: 1 | 2 | 3 | 4;
  style?: any;
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>) {
  const { theme } = useTheme();

  return (
    <button
      {...stylex.props(
        styles.button,
        variant && styles[variant],
        size && styles[`size${size}`],
        theme.style,
        style,
      )}
      {...attributes}
    >
      {children}
    </button>
  );
}

export const styles = stylex.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: theme.textColor1,
    fontSize: theme.textSize,
    fontWeight: 600,
    padding: '0.75rem 1rem',
    borderRadius: theme.borderRadius,
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: theme.borderWidth,
    cursor: 'pointer',
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
  size1: {
    fontSize: 11,
    padding: '0.5rem 0.75rem',
  },
  size2: {
    fontSize: 12,
    padding: '0.65rem 0.85rem',
  },
  size3: {
    fontSize: 14,
    padding: '0.75rem 1rem',
  },
  size4: {
    fontSize: 20,
    padding: '1rem 1.25rem',
  },
});

export default Button;
