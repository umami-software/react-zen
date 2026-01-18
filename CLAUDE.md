# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
when 
**zen** (`@umami/react-zen`) is a modern, minimalist React component library built on top of [React Aria](https://react-spectrum.adobe.com/react-aria/) primitives. This is a pnpm workspace monorepo containing the component library and a Next.js documentation site.

## Commands

### Development
```bash
pnpm dev           # Start docs site dev server on port 9001
```

### Build
```bash
pnpm bundle        # Build library (runs: types → esbuild → css)
pnpm build         # Build library + docs site
```

### Linting
```bash
pnpm lint          # Run Biome linter on src/
```

### Individual Build Steps
```bash
pnpm types         # Generate TypeScript declarations with tsup
pnpm esbuild       # Bundle JS (CJS + ESM) via esbuild
pnpm css           # Concatenate CSS into styles.css
pnpm icons         # Generate SVG icon components from src/assets
```

## Architecture

### Component Structure
- Components live in `src/components/` with co-located CSS modules (`.module.css`)
- Entry point: `src/components/index.ts` - exports all public components
- All components use `'use client'` directive for React Server Components compatibility

### Key Patterns

**React Aria Foundation**: Components wrap React Aria primitives from `react-aria-components`. Example pattern:
```tsx
import { Button as AriaButton } from 'react-aria-components';
// Wrap with custom styling and props
```

**CSS Modules**: Each component has its own `.module.css` file. Class names are scoped with pattern `zen-{component}-{class}-{hash}`.

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
Located in `docs/` - a Next.js 16 app using `@umami/shiso` for MDX documentation. Content lives in `src/content/docs/`.

### Build Output
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
