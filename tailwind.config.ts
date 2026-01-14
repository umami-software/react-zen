import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'modal-fade': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'modal-zoom': {
          from: { transform: 'scale(0.8)' },
          to: { transform: 'scale(1)' },
        },
        'modal-slide-left': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        'modal-slide-right': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        'modal-slide-up': {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        },
        'modal-slide-down': {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        'popover-in': {
          from: { opacity: '0', transform: 'var(--tw-translate)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'toast-slide-in': {
          from: { transform: 'translateX(100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'modal-fade-in': 'modal-fade 200ms ease-out',
        'modal-fade-out': 'modal-fade 200ms ease-in reverse',
        'modal-zoom-in': 'modal-zoom 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'modal-slide-left-in': 'modal-slide-left 200ms ease-out',
        'modal-slide-left-out': 'modal-slide-left 200ms ease-out reverse',
        'modal-slide-right-in': 'modal-slide-right 200ms ease-out',
        'modal-slide-right-out': 'modal-slide-right 200ms ease-in reverse',
        'modal-slide-up-in': 'modal-slide-up 200ms ease-out',
        'modal-slide-up-out': 'modal-slide-up 200ms ease-in reverse',
        'modal-slide-down-in': 'modal-slide-down 200ms ease-out',
        'modal-slide-down-out': 'modal-slide-down 200ms ease-in reverse',
        'popover-in': 'popover-in 200ms ease-out',
        'popover-out': 'popover-in 200ms ease-in reverse',
        'toast-in': 'toast-slide-in 200ms ease-out',
        'toast-out': 'toast-slide-in 200ms ease-in reverse',
        spin: 'spin 1s linear infinite',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      // React Aria state variants
      addVariant('pressed', '&[data-pressed]');
      addVariant('selected', '&[data-selected]');
      addVariant('disabled', '&[data-disabled]');
      addVariant('focused', '&[data-focused]');
      addVariant('focus-visible', '&[data-focus-visible]');
      addVariant('hovered', '&[data-hovered]');
      addVariant('indeterminate', '&[data-indeterminate]');
      addVariant('expanded', '&[data-expanded]');
      addVariant('readonly', '&[data-readonly]');
      addVariant('entering', '&[data-entering]');
      addVariant('exiting', '&[data-exiting]');
      addVariant('dragging', '&[data-dragging]');
      addVariant('outside-month', '&[data-outside-month]');

      // Placement variants for Popover/Tooltip
      addVariant('placement-top', "&[data-placement='top']");
      addVariant('placement-bottom', "&[data-placement='bottom']");
      addVariant('placement-left', "&[data-placement='left']");
      addVariant('placement-right', "&[data-placement='right']");

      // Orientation variants
      addVariant('orientation-horizontal', "&[data-orientation='horizontal']");
      addVariant('orientation-vertical', "&[data-orientation='vertical']");

      // Group variants for nested state selectors
      addVariant('group-pressed', ':merge(.group)[data-pressed] &');
      addVariant('group-selected', ':merge(.group)[data-selected] &');
      addVariant('group-disabled', ':merge(.group)[data-disabled] &');
      addVariant('group-expanded', ':merge(.group)[data-expanded] &');
      addVariant('group-focus-visible', ':merge(.group)[data-focus-visible] &');
      addVariant('group-indeterminate', ':merge(.group)[data-indeterminate] &');
    }),
  ],
};

export default config;
