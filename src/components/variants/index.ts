import { tv, type VariantProps } from 'tailwind-variants';

// Button variants
export const button = tv({
  base: [
    'inline-flex items-center justify-center gap-3 whitespace-nowrap',
    'font-medium rounded border border-transparent cursor-pointer',
    'transition-colors leading-normal relative no-underline',
  ],
  variants: {
    variant: {
      default: [
        'bg-interactive text-foreground-primary',
        'hover:bg-interactive-hover',
        'pressed:bg-interactive-pressed',
      ],
      primary: [
        'bg-interactive-selected text-interactive-text-selected',
        'hover:opacity-90',
        'pressed:opacity-80',
        'disabled:opacity-50',
      ],
      outline: [
        'bg-surface-base border-edge shadow-sm text-foreground-primary',
        'hover:border-edge-strong',
        'pressed:bg-surface-raised',
        'disabled:bg-surface-disabled',
      ],
      quiet: ['bg-transparent', 'hover:bg-interactive', 'pressed:bg-interactive-hover'],
      danger: [
        'bg-status-error text-white',
        'hover:opacity-90',
        'pressed:opacity-80',
        'disabled:opacity-50',
      ],
      zero: ['bg-transparent border-0', 'hover:bg-transparent', 'pressed:bg-transparent'],
    },
    size: {
      xs: 'text-sm py-1 px-2',
      sm: 'text-base py-1.5 px-2.5',
      md: 'text-base py-2 px-3',
      lg: 'text-lg py-2.5 px-4',
      xl: 'text-xl py-3 px-5',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export type ButtonVariants = VariantProps<typeof button>;

// Input field variants (TextField, SearchField, PasswordField, etc.)
export const inputField = tv({
  base: [
    'flex items-center px-3 gap-3',
    'text-base rounded border border-edge bg-surface-base shadow-sm',
    'leading-6 relative text-foreground-primary',
    'focus-within:border-edge-strong',
  ],
  variants: {
    variant: {
      default: '',
      quiet:
        'border-transparent shadow-none bg-transparent focus-within:border-b-edge focus-within:border-x-transparent focus-within:border-t-transparent',
    },
  },
  compoundVariants: [
    {
      class: 'readonly:bg-surface-raised',
    },
    {
      class: 'disabled:bg-surface-disabled disabled:opacity-50 disabled:cursor-not-allowed',
    },
  ],
});

export type InputFieldVariants = VariantProps<typeof inputField>;

// List item variants (Menu, List, Select items)
export const listItem = tv({
  base: [
    'flex items-center justify-between',
    'gap-3 text-base py-2 px-3 min-w-[120px]',
    'cursor-pointer outline-none rounded',
    'text-foreground-primary',
    'hovered:bg-interactive',
    'focused:bg-interactive',
    'focus-visible:bg-interactive',
    'disabled:text-foreground-disabled disabled:cursor-default',
    'selected:font-semibold',
  ],
});

export type ListItemVariants = VariantProps<typeof listItem>;

// Overlay/backdrop variants
export const overlay = tv({
  base: [
    'fixed inset-0',
    'bg-black/80 flex items-center justify-center',
    'z-[9999]',
    'entering:animate-modal-fade-in',
    'exiting:animate-modal-fade-out',
  ],
});

// Modal variants
export const modal = tv({
  base: 'relative z-[9999]',
  variants: {
    position: {
      center: 'entering:animate-modal-zoom-in',
      left: [
        'absolute top-0 left-0 bottom-0 m-auto',
        'w-[calc(100dvw-var(--modal-offset,0))]',
        'entering:animate-modal-slide-left-in',
        'exiting:animate-modal-slide-left-out',
      ],
      right: [
        'absolute top-0 right-0 bottom-0 m-auto',
        'w-[calc(100dvw-var(--modal-offset,0))]',
        'entering:animate-modal-slide-right-in',
        'exiting:animate-modal-slide-right-out',
      ],
      top: [
        'absolute top-0 left-0 right-0 m-auto',
        'h-[calc(100dvh-var(--modal-offset,0))]',
        'entering:animate-modal-slide-up-in',
        'exiting:animate-modal-slide-up-out',
      ],
      bottom: [
        'absolute bottom-0 left-0 right-0 m-auto',
        'h-[calc(100dvh-var(--modal-offset,0))]',
        'entering:animate-modal-slide-down-in',
        'exiting:animate-modal-slide-down-out',
      ],
      fullscreen: ['w-dvw h-dvh rounded-none', 'entering:animate-modal-fade-in'],
    },
  },
  defaultVariants: {
    position: 'center',
  },
});

export type ModalVariants = VariantProps<typeof modal>;

// Popover variants
export const popover = tv({
  base: [
    'bg-surface-overlay border border-edge-muted rounded-lg shadow-lg p-4',
    'entering:animate-popover-in',
    'exiting:animate-popover-out',
  ],
  variants: {
    placement: {
      top: '[--tw-translate:translateY(8px)]',
      bottom: '[--tw-translate:translateY(-8px)]',
      left: '[--tw-translate:translateX(8px)]',
      right: '[--tw-translate:translateX(-8px)]',
    },
  },
});

export type PopoverVariants = VariantProps<typeof popover>;

// Tooltip variants
export const tooltip = tv({
  base: [
    'bg-surface-inverted text-foreground-inverted text-xs px-2 py-1 rounded',
    'entering:animate-popover-in',
    'exiting:animate-popover-out',
  ],
});

// Checkbox variants
export const checkbox = tv({
  slots: {
    root: [
      'group flex items-center gap-3',
      'text-base cursor-pointer',
      'disabled:text-foreground-disabled disabled:cursor-default',
    ],
    box: [
      'flex items-center justify-center',
      'w-5 h-5 rounded border border-edge bg-surface-base',
      'shadow-sm transition-colors',
      'group-selected:bg-interactive-selected group-selected:border-interactive-selected group-selected:text-interactive-text-selected',
      'group-indeterminate:bg-surface-base group-indeterminate:text-foreground-primary',
      'group-disabled:bg-surface-disabled',
      'group-focus-visible:ring-2 group-focus-visible:ring-focus-ring group-focus-visible:ring-offset-1',
    ],
    icon: [
      'hidden',
      'group-selected:flex',
      'group-indeterminate:flex',
      'items-center justify-center',
    ],
  },
});

export type CheckboxVariants = VariantProps<typeof checkbox>;

// Switch variants
export const switchVariant = tv({
  slots: {
    root: [
      'group flex items-center gap-3',
      'text-base cursor-pointer',
      'disabled:opacity-50 disabled:cursor-default',
    ],
    track: [
      'flex items-center w-10 h-6 px-1 rounded-full',
      'bg-track',
      'transition-colors',
      'group-selected:bg-interactive-selected',
    ],
    thumb: [
      'w-4 h-4 rounded-full',
      'bg-surface-base shadow-sm',
      'transition-transform',
      'group-selected:translate-x-4',
    ],
  },
});

export type SwitchVariants = VariantProps<typeof switchVariant>;

// Tabs variants
export const tabs = tv({
  slots: {
    root: 'flex flex-col',
    list: ['flex gap-1 border-b border-edge-muted'],
    tab: [
      'px-4 py-2 text-base font-medium cursor-pointer',
      'text-foreground-secondary',
      'border-b-2 border-transparent -mb-px',
      'hovered:text-foreground-primary',
      'selected:text-foreground-primary selected:border-edge-inverted',
      'disabled:text-foreground-disabled disabled:cursor-default',
    ],
    panel: 'py-4',
  },
});

export type TabsVariants = VariantProps<typeof tabs>;

// Text variants
export const text = tv({
  base: 'text-foreground-primary',
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
    },
    color: {
      default: '',
      muted: 'text-foreground-muted',
      disabled: 'text-foreground-disabled',
    },
    weight: {
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

export type TextVariants = VariantProps<typeof text>;

// Heading variants
export const heading = tv({
  base: 'font-semibold text-foreground-primary',
  variants: {
    size: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
  },
  defaultVariants: {
    size: '2xl',
  },
});

export type HeadingVariants = VariantProps<typeof heading>;

// Alert banner variants
export const alertBanner = tv({
  base: ['flex items-center gap-3 px-4 py-3 rounded-lg', 'text-base'],
  variants: {
    variant: {
      info: 'bg-status-info-bg text-status-info-text',
      success: 'bg-status-success-bg text-status-success-text',
      warning: 'bg-status-warning-bg text-status-warning-text',
      error: 'bg-status-error-bg text-status-error-text',
    },
  },
  defaultVariants: {
    variant: 'info',
  },
});

export type AlertBannerVariants = VariantProps<typeof alertBanner>;

// Status light variants
export const statusLight = tv({
  base: 'inline-flex items-center gap-2',
  slots: {
    dot: 'w-2 h-2 rounded-full',
    label: 'text-base',
  },
  variants: {
    color: {
      gray: { dot: 'bg-content-muted' },
      green: { dot: 'bg-status-success' },
      yellow: { dot: 'bg-status-warning' },
      red: { dot: 'bg-status-error' },
      blue: { dot: 'bg-status-info' },
    },
  },
  defaultVariants: {
    color: 'gray',
  },
});

export type StatusLightVariants = VariantProps<typeof statusLight>;

// Toast variants
export const toast = tv({
  base: [
    'flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg',
    'bg-surface-overlay',
    'border border-edge-muted',
    'text-base',
    'entering:animate-toast-in',
    'exiting:animate-toast-out',
  ],
  variants: {
    variant: {
      default: '',
      success: 'border-l-4 border-l-status-success',
      error: 'border-l-4 border-l-status-error',
    },
  },
});

export type ToastVariants = VariantProps<typeof toast>;
