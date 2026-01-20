import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

/**
 * Tailwind CSS preset for @umami/react-zen
 *
 * Usage in your tailwind.config.ts:
 * ```ts
 * import zenPreset from '@umami/react-zen/tailwind-preset';
 *
 * export default {
 *   presets: [zenPreset],
 *   content: [
 *     './src/**\/*.{ts,tsx}',
 *     './node_modules/@umami/react-zen/dist/**\/*.{js,mjs}',
 *   ],
 * } satisfies Config;
 * ```
 */
const preset: Config = {
  darkMode: ['selector', '[data-theme="dark"], .dark'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-family)',
        mono: 'var(--font-family-mono)',
      },
      colors: {
        // Primary accent/brand color
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
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
        foreground: {
          DEFAULT: 'var(--text-primary)',
          primary: 'var(--text-primary)',
          muted: 'var(--text-muted)',
          disabled: 'var(--text-disabled)',
          inverted: 'var(--text-inverted)',
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
        },
        // Focus colors
        focus: {
          ring: 'var(--focus-ring)',
          offset: 'var(--focus-ring-offset)',
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

export default preset;
