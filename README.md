# Zen

Zen is the design system and React component collection used by [Umami](https://umami.is).
It contains the design tokens, layout primitives, controls, and interface patterns used across
Umami products.

The components follow [shadcn](https://ui.shadcn.com/) conventions, use
[Base UI](https://base-ui.com/) primitives for interactive behavior, and are styled with
[Tailwind CSS](https://tailwindcss.com/) and CSS custom properties.

[Documentation](https://zen.umami.is/) ·
[Component source](./packages/react-zen/src/components)

## Contents

- Design tokens for color, typography, spacing, borders, and shadows
- Layout and typography primitives
- Form controls and interactive components
- Reusable interface patterns from Umami products

## Installation

```shell
pnpm install @umami/react-zen
```

### With Tailwind CSS

For projects using Tailwind CSS v4, add the Zen preset and include the package in the content
paths:

```ts
import zenPreset from '@umami/react-zen/tailwind-preset';

export default {
  presets: [zenPreset],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@umami/react-zen/dist/**/*.{js,mjs}',
  ],
};
```

Import the theme variables and component animations:

```js
import '@umami/react-zen/styles.css';
```

### Without Tailwind CSS

Import the full stylesheet:

```js
import '@umami/react-zen/styles.full.css';
```

## Usage

Wrap the application with `ZenProvider`, then import components from the package:

```jsx
import { Button, ZenProvider } from '@umami/react-zen';

export function App() {
  return (
    <ZenProvider>
      <Button variant="primary">Save</Button>
    </ZenProvider>
  );
}
```

See the [documentation](https://zen.umami.is/docs) for component APIs, design tokens, and patterns.

## Development

This repository is a pnpm and Turborepo monorepo:

- `packages/react-zen` contains the component package
- `apps/docs` contains the documentation site

Install dependencies:

```shell
pnpm install
```

Run the workspace in development:

```shell
pnpm dev
```

Build all packages and apps:

```shell
pnpm build
```

Lint the workspace:

```shell
pnpm lint
```

To run a command for one workspace:

```shell
pnpm --filter @umami/react-zen build
pnpm --filter react-zen-docs dev
```

The documentation development server runs at `http://localhost:9001`.

## License

[MIT](./LICENSE)
