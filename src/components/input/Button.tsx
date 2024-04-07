import { HTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { create, props } from '@stylexjs/stylex';
import { theme } from '@/styles/vars.stylex';
import useTheme from '@/components/hooks/useTheme';

export function Button({
  variant,
  size,
  style,
  asChild,
  ...attributes
}: {
  variant?: 'primary' | 'secondary' | 'quiet' | 'danger';
  size?: 1 | 2 | 3 | 4;
  style?: any;
  asChild?: boolean;
} & HTMLAttributes<HTMLButtonElement>) {
  const { theme } = useTheme();
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      {...attributes}
      {...props(
        styles.button,
        variant && styles[variant],
        size && styles[`size${size}`],
        theme.style,
        style,
      )}
    />
  );
}

export const styles = create({
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: {
      default: theme.textColor1,
      ':disabled': theme.textColor3,
    },
    fontSize: theme.textSize,
    fontWeight: 600,
    padding: '0.75rem 1rem',
    borderRadius: theme.borderRadius,
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: theme.borderWidth,
    cursor: {
      default: 'pointer',
      ':disabled': 'default',
    },
    backgroundColor: {
      default: theme.base4,
      ':hover': theme.base5,
      ':active': theme.base6,
      ':hover:disabled': theme.base4,
      ':active:disabled': theme.base4,
    },
  },
  primary: {
    color: {
      default: theme.textColorInverse1,
      ':disabled': theme.textColorInverse2,
    },
    backgroundColor: {
      default: theme.primary1,
      ':hover': theme.primary2,
      ':active': theme.primary3,
      ':disabled': theme.base11,
      ':hover:disabled': theme.base11,
      ':active:disabled': theme.base11,
    },
  },
  secondary: {
    backgroundColor: {
      default: theme.base1,
      ':hover': theme.base2,
      ':active': theme.base3,
      ':disabled': theme.base3,
      ':hover:disabled': theme.base3,
      ':active:disabled': theme.base3,
    },
    borderColor: theme.borderColor,
  },
  quiet: {
    backgroundColor: {
      default: 'transparent',
      ':hover': theme.base3,
      ':active': theme.base4,
      ':hover:disabled': 'transparent',
      ':active:disabled': 'transparent',
    },
  },
  danger: {
    color: {
      default: theme.textColorInverse1,
      ':disabled': theme.textColorInverse2,
    },
    backgroundColor: {
      default: theme.dangerColor1,
      ':hover': theme.dangerColor2,
      ':active': theme.dangerColor3,
      ':disabled': theme.base10,
      ':hover:disabled': theme.base10,
      ':active:disabled': theme.base10,
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
