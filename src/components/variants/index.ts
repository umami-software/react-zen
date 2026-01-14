import { tv, type VariantProps } from 'tailwind-variants';

// Button variants
export const button = tv({
  base: [
    'inline-flex items-center justify-center gap-3 whitespace-nowrap',
    'font-medium rounded border border-transparent cursor-pointer',
    'transition-colors leading-normal relative',
  ],
  variants: {
    variant: {
      default: [
        'bg-gray-100 text-gray-900',
        'hover:bg-gray-200',
        'pressed:bg-gray-300',
        'dark:bg-gray-800 dark:text-gray-100',
        'dark:hover:bg-gray-700',
        'dark:pressed:bg-gray-600',
      ],
      primary: [
        'bg-gray-900 text-white',
        'hover:bg-gray-800',
        'pressed:bg-gray-700',
        'dark:bg-gray-100 dark:text-gray-900',
        'dark:hover:bg-gray-200',
        'dark:pressed:bg-gray-300',
        'disabled:bg-gray-400',
      ],
      outline: [
        'bg-white border-gray-300 shadow-sm text-gray-900',
        'hover:border-gray-400',
        'pressed:bg-gray-50',
        'dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100',
        'dark:hover:border-gray-600',
        'dark:pressed:bg-gray-800',
        'disabled:bg-gray-50',
      ],
      quiet: [
        'bg-transparent text-gray-900',
        'hover:bg-gray-100',
        'pressed:bg-gray-200',
        'dark:text-gray-100',
        'dark:hover:bg-gray-800',
        'dark:pressed:bg-gray-700',
      ],
      danger: [
        'bg-red-500 text-white',
        'hover:bg-red-600',
        'pressed:bg-red-700',
        'disabled:bg-gray-400',
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
    'text-sm rounded border border-gray-300 bg-white shadow-sm',
    'leading-6 relative',
    'focus-within:border-transparent focus-within:ring-2 focus-within:ring-gray-400 focus-within:ring-offset-0',
    'dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100',
    'dark:focus-within:ring-gray-500',
  ],
  variants: {
    variant: {
      default: '',
      quiet: 'border-transparent shadow-none bg-transparent dark:bg-transparent',
    },
  },
  compoundVariants: [
    {
      class: 'readonly:bg-gray-50 dark:readonly:bg-gray-800',
    },
    {
      class: 'disabled:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:disabled:bg-gray-800',
    },
  ],
});

export type InputFieldVariants = VariantProps<typeof inputField>;

// List item variants (Menu, List, Select items)
export const listItem = tv({
  base: [
    'flex items-center justify-between',
    'gap-3 text-sm py-2 px-3 min-w-[120px]',
    'cursor-pointer outline-none rounded',
    'text-gray-900 dark:text-gray-100',
    'hovered:bg-gray-100 dark:hovered:bg-gray-800',
    'focused:bg-gray-100 dark:focused:bg-gray-800',
    'focus-visible:bg-gray-100 dark:focus-visible:bg-gray-800',
    'disabled:text-gray-400 disabled:cursor-default',
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
    'bg-white border border-gray-200 rounded-lg shadow-lg p-4',
    'dark:bg-gray-900 dark:border-gray-700',
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
    'bg-gray-900 text-white text-xs px-2 py-1 rounded',
    'dark:bg-gray-100 dark:text-gray-900',
    'entering:animate-popover-in',
    'exiting:animate-popover-out',
  ],
});

// Checkbox variants
export const checkbox = tv({
  slots: {
    root: [
      'group flex items-center gap-3',
      'text-sm cursor-pointer',
      'disabled:text-gray-400 disabled:cursor-default',
    ],
    box: [
      'flex items-center justify-center',
      'w-5 h-5 rounded border border-gray-300 bg-white',
      'shadow-sm transition-colors',
      'dark:bg-gray-900 dark:border-gray-700',
      'group-selected:bg-gray-900 group-selected:border-gray-900 group-selected:text-white',
      'dark:group-selected:bg-gray-100 dark:group-selected:border-gray-100 dark:group-selected:text-gray-900',
      'group-indeterminate:bg-white group-indeterminate:text-gray-900',
      'dark:group-indeterminate:bg-gray-900 dark:group-indeterminate:text-gray-100',
      'group-disabled:bg-gray-100 dark:group-disabled:bg-gray-800',
      'group-focus-visible:ring-2 group-focus-visible:ring-gray-400 group-focus-visible:ring-offset-1',
    ],
    icon: ['hidden', 'group-selected:block', 'group-indeterminate:block'],
  },
});

export type CheckboxVariants = VariantProps<typeof checkbox>;

// Switch variants
export const switchVariant = tv({
  slots: {
    root: [
      'group flex items-center gap-3',
      'text-sm cursor-pointer',
      'disabled:opacity-50 disabled:cursor-default',
    ],
    track: [
      'relative w-10 h-6 rounded-full',
      'bg-gray-200 dark:bg-gray-700',
      'transition-colors',
      'group-selected:bg-gray-900 dark:group-selected:bg-gray-100',
    ],
    thumb: [
      'absolute top-1 left-1 w-4 h-4 rounded-full',
      'bg-white shadow-sm',
      'transition-transform',
      'group-selected:translate-x-4',
      'dark:bg-gray-900 dark:group-selected:bg-gray-900',
    ],
  },
});

export type SwitchVariants = VariantProps<typeof switchVariant>;

// Tabs variants
export const tabs = tv({
  slots: {
    root: 'flex flex-col',
    list: [
      'flex gap-1 border-b border-gray-200',
      'dark:border-gray-700',
    ],
    tab: [
      'px-4 py-2 text-sm font-medium cursor-pointer',
      'text-gray-600 dark:text-gray-400',
      'border-b-2 border-transparent -mb-px',
      'hovered:text-gray-900 dark:hovered:text-gray-100',
      'selected:text-gray-900 selected:border-gray-900',
      'dark:selected:text-gray-100 dark:selected:border-gray-100',
      'disabled:text-gray-300 disabled:cursor-default',
    ],
    panel: 'py-4',
  },
});

export type TabsVariants = VariantProps<typeof tabs>;

// Text variants
export const text = tv({
  base: 'text-gray-900 dark:text-gray-100',
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
      muted: 'text-gray-500 dark:text-gray-400',
      disabled: 'text-gray-400 dark:text-gray-500',
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
  base: 'font-semibold text-gray-900 dark:text-gray-100',
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
  base: [
    'flex items-center gap-3 px-4 py-3 rounded-lg',
    'text-sm',
  ],
  variants: {
    variant: {
      info: 'bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100',
      success: 'bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100',
      warning: 'bg-yellow-50 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-100',
      error: 'bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-100',
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
    label: 'text-sm',
  },
  variants: {
    color: {
      gray: { dot: 'bg-gray-400' },
      green: { dot: 'bg-green-500' },
      yellow: { dot: 'bg-yellow-500' },
      red: { dot: 'bg-red-500' },
      blue: { dot: 'bg-blue-500' },
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
    'bg-white dark:bg-gray-800',
    'border border-gray-200 dark:border-gray-700',
    'text-sm',
    'entering:animate-toast-in',
    'exiting:animate-toast-out',
  ],
  variants: {
    variant: {
      default: '',
      success: 'border-l-4 border-l-green-500',
      error: 'border-l-4 border-l-red-500',
    },
  },
});

export type ToastVariants = VariantProps<typeof toast>;
