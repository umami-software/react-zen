# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**zen** (`@umami/react-zen`) is a modern, minimalist React component library built on top of [React Aria](https://react-spectrum.adobe.com/react-aria/) primitives. This is a Turborepo monorepo with:

- `packages/react-zen` - The component library
- `apps/docs` - Next.js documentation site

## Development

**IMPORTANT**: Assume a dev server is always running on port 9001. Do not start the dev server - it's already running. After making changes to the library, run `pnpm --filter @umami/react-zen build` to rebuild and the dev server will pick up changes automatically via hot reload.

## Commands

### Turbo Commands (root)
```bash
pnpm build         # Build all packages (library first, then docs)
pnpm dev           # Start dev servers
pnpm lint          # Run linters across all packages
```

### Library Commands (packages/react-zen)
```bash
pnpm --filter @umami/react-zen build    # Build library (tsup + css)
pnpm --filter @umami/react-zen lint     # Run Biome linter
pnpm --filter @umami/react-zen icons    # Generate SVG icon components
```

### Docs Commands (apps/docs)
```bash
pnpm --filter react-zen-docs dev        # Start docs dev server (port 9001)
pnpm --filter react-zen-docs build      # Build docs site
```

## Architecture

### Monorepo Structure
```
/
├── apps/
│   └── docs/                 # Next.js 16 documentation site
├── packages/
│   └── react-zen/           # Component library
│       ├── src/components/  # Component source
│       ├── dist/            # Build output
│       └── styles.css       # Combined CSS
├── turbo.json               # Turborepo config
└── pnpm-workspace.yaml      # Workspace config
```

### Component Structure
- Components live in `packages/react-zen/src/components/` with co-located CSS modules
- Entry point: `src/components/index.ts` - exports all public components
- All components use `'use client'` directive for React Server Components compatibility

### Key Patterns

**React Aria Foundation**: Components wrap React Aria primitives from `react-aria-components`.

**CSS Modules**: Each component has its own `.module.css` file.

**Form System**: Built on `react-hook-form` with custom wrappers:
- `Form` - Wraps `FormProvider` with submit handling and error display
- `FormField` - Controller wrapper for form inputs
- `FormFieldArray` - For dynamic field arrays
- `FormSubmitButton` / `FormResetButton` - Form-aware buttons

**State Management**: Uses Zustand for global state (theme, toasts)

**Theming**:
- `ZenProvider` initializes theme and toast system
- `useTheme` hook manages light/dark mode with localStorage persistence
- Theme applied via `data-theme` attribute on `<html>`

### Docs Site
Located in `apps/docs/` - a Next.js 16 app using Nextra for MDX documentation. Content lives in `apps/docs/content/`.

### Build Output (packages/react-zen)
- `dist/index.js` - CommonJS bundle
- `dist/index.mjs` - ES module bundle
- `dist/index.d.ts` - TypeScript declarations
- `styles.css` - Combined CSS (zen tokens + reset + global + component styles)

## Code Style

Uses Biome with:
- Single quotes, trailing commas
- 2-space indentation, LF line endings
- 100 character line width
- Arrow parens only when needed

## Git Workflow

**IMPORTANT**: Always ask for permission before running `git commit` or `git push`. Never commit or push without explicit user authorization.
