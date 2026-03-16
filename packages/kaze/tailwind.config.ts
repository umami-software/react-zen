import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['selector', '[data-theme="dark"], .dark'],
  content: ['./src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-family)',
        mono: 'var(--font-family-mono)',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        surface: {
          base: 'var(--surface-base)',
          raised: 'var(--surface-raised)',
          sunken: 'var(--surface-sunken)',
          overlay: 'var(--surface-overlay)',
          inverted: 'var(--surface-inverted)',
          disabled: 'var(--surface-disabled)',
        },
        foreground: {
          DEFAULT: 'var(--text-primary)',
          primary: 'var(--text-primary)',
          muted: 'var(--text-muted)',
          disabled: 'var(--text-disabled)',
        },
        edge: {
          DEFAULT: 'var(--border-default)',
          muted: 'var(--border-muted)',
          strong: 'var(--border-strong)',
        },
        interactive: {
          DEFAULT: 'var(--interactive-bg)',
          hover: 'var(--interactive-bg-hover)',
          pressed: 'var(--interactive-bg-pressed)',
        },
        focus: {
          ring: 'var(--focus-ring)',
          offset: 'var(--focus-ring-offset)',
        },
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
};

export default config;
