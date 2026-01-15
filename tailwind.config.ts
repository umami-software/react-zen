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
        'spinner-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spinner-dash': {
          '0%': { strokeDasharray: '1, 200', strokeDashoffset: '0' },
          '50%': { strokeDasharray: '89, 200', strokeDashoffset: '-35' },
          '100%': { strokeDasharray: '89, 200', strokeDashoffset: '-124' },
        },
        'icon-pop': {
          from: { transform: 'scale(0.5)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
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
        'spinner-rotate': 'spinner-rotate 1.6s linear infinite',
        'spinner-dash': 'spinner-dash 1.2s ease-in-out infinite',
        'icon-pop': 'icon-pop 200ms ease-out',
      },
      colors: {
        // Surface colors (backgrounds)
        surface: {
          base: 'var(--surface-base)',
          raised: 'var(--surface-raised)',
          sunken: 'var(--surface-sunken)',
          overlay: 'var(--surface-overlay)',
          inverted: 'var(--surface-inverted)',
          disabled: 'var(--surface-disabled)',
        },
        // Text colors
        content: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          disabled: 'var(--text-disabled)',
          inverted: 'var(--text-inverted)',
          'on-primary': 'var(--text-on-primary)',
        },
        // Border colors
        edge: {
          DEFAULT: 'var(--border-default)',
          muted: 'var(--border-muted)',
          strong: 'var(--border-strong)',
          inverted: 'var(--border-inverted)',
        },
        // Interactive state colors
        interactive: {
          DEFAULT: 'var(--interactive-bg)',
          hover: 'var(--interactive-bg-hover)',
          pressed: 'var(--interactive-bg-pressed)',
          selected: 'var(--interactive-bg-selected)',
          'text-selected': 'var(--interactive-text-selected)',
        },
        // Focus colors
        focus: {
          ring: 'var(--focus-ring)',
          offset: 'var(--focus-ring-offset)',
        },
        // Track colors (sliders, progress bars)
        track: {
          DEFAULT: 'var(--track-bg)',
          fill: 'var(--track-fill)',
        },
        // Status colors
        status: {
          info: 'var(--status-info)',
          'info-bg': 'var(--status-info-bg)',
          'info-text': 'var(--status-info-text)',
          success: 'var(--status-success)',
          'success-bg': 'var(--status-success-bg)',
          'success-text': 'var(--status-success-text)',
          warning: 'var(--status-warning)',
          'warning-bg': 'var(--status-warning-bg)',
          'warning-text': 'var(--status-warning-text)',
          error: 'var(--status-error)',
          'error-bg': 'var(--status-error-bg)',
          'error-text': 'var(--status-error-text)',
        },
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
