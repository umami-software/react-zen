import type { NextConfig } from 'next';
import nextra from 'nextra';

const withNextra = nextra({});

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    // Form Inputs
    const formInputs = [
      'checkbox',
      'combobox',
      'password-field',
      'radio-group',
      'search-field',
      'select',
      'slider',
      'switch',
      'text-field',
      'toggle',
      'toggle-group',
    ];
    // Actions & Navigation
    const actionsNavigation = [
      'breadcrumbs',
      'button',
      'hover-trigger',
      'loading-button',
      'menu',
      'nav-menu',
      'navbar',
      'sidebar',
      'tabs',
      'theme-button',
    ];
    // Feedback & Status
    const feedbackStatus = [
      'alert-banner',
      'alert-dialog',
      'confirmation-dialog',
      'dialog',
      'loading',
      'modal',
      'popover',
      'progress-bar',
      'progress-circle',
      'status-light',
      'toast',
      'tooltip',
    ];
    // Data Display
    const dataDisplay = [
      'accordion',
      'calendar',
      'data-card',
      'data-table',
      'icon',
      'icon-label',
      'image',
      'list',
      'table',
    ];

    const componentRewrites = [
      ...formInputs.map(c => ({
        source: `/docs/components/${c}`,
        destination: `/docs/form-inputs/${c}`,
      })),
      ...actionsNavigation.map(c => ({
        source: `/docs/components/${c}`,
        destination: `/docs/actions-navigation/${c}`,
      })),
      ...feedbackStatus.map(c => ({
        source: `/docs/components/${c}`,
        destination: `/docs/feedback-status/${c}`,
      })),
      ...dataDisplay.map(c => ({
        source: `/docs/components/${c}`,
        destination: `/docs/data-display/${c}`,
      })),
    ];

    return [
      { source: '/z.js', destination: 'https://cloud.umami.is/script.js' },
      ...componentRewrites,
    ];
  },
};

export default withNextra(nextConfig);
