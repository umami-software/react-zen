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
  // Safelist hover/focus/active variants of colors
  // These are dynamically composed in mapStateStyles and need to be explicitly included
  safelist: [
    // Primary accent/brand color
    { pattern: /^(hover|focus|active):bg-primary$/ },
    { pattern: /^(hover|focus|active):text-primary(-foreground)?$/ },
    // Semantic surface backgrounds
    { pattern: /^(hover|focus|active):bg-surface-(base|raised|sunken|overlay|inverted|disabled)$/ },
    // Semantic interactive backgrounds
    { pattern: /^(hover|focus|active):bg-interactive(-hover|-pressed|-selected)?$/ },
    // Semantic text colors
    {
      pattern: /^(hover|focus|active):text-foreground-(primary|muted|disabled|inverted)$/,
    },
    // Semantic border colors
    { pattern: /^(hover|focus|active):border-edge(-muted|-strong|-inverted)?$/ },
    // Opacity
    {
      pattern:
        /^(hover|focus|active):opacity-(0|5|10|15|20|25|30|35|40|45|50|55|60|65|70|75|80|85|90|95|100)$/,
    },
    // Tailwind color palette for backgrounds
    {
      pattern:
        /^(hover|focus|active):bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)$/,
    },
    // Tailwind color palette for text
    {
      pattern:
        /^(hover|focus|active):text-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)$/,
    },
    // Tailwind color palette for borders
    {
      pattern:
        /^(hover|focus|active):border-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)$/,
    },
  ],
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

export default preset;
