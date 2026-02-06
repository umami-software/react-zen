# zen

**Zen** is a props-driven React component library built for speed. Build polished interfaces without writing HTML, CSS, or thinking about Tailwind classes.

- **Props over classes** - Style through component props, not utility classes
- **Design included** - Complete design system out of the box with dark mode
- **Accessible** - Built on [React Aria](https://react-spectrum.adobe.com/react-aria/) primitives
- **Powered by Tailwind** - Uses [Tailwind CSS](https://tailwindcss.com/) under the hood, but you never touch it

[Documentation](https://zen.umami.is/)

## Installation

```shell
npm install @umami/react-zen
```

## Usage

### Import styles

```javascript
import '@umami/react-zen/styles.css';
```

### Build with components

```jsx
import { Box, Column, Heading, Text, Button } from '@umami/react-zen';

export default function Welcome() {
  return (
    <Box padding="6" border borderRadius="lg" shadow="lg">
      <Column alignItems="center" gap="6">
        <Heading size="3xl">Welcome</Heading>
        <Text color="muted">This is the zen way.</Text>
        <Button variant="primary">Enter</Button>
      </Column>
    </Box>
  );
}
```

No `className`. No CSS files. Just components and props.

## Why Zen?

Building UI is slow. You have to think about markup, CSS organization, responsive breakpoints, accessibility, and design consistency.

Zen eliminates that friction:

| Traditional approach | zen approach |
|---------------------|--------------|
| Write HTML structure | Compose components |
| Add Tailwind classes | Pass props |
| Handle responsive manually | Use responsive objects |
| Configure accessibility | Already done |

## Development

This is a Turborepo monorepo with:
- `packages/react-zen` - Component library
- `apps/docs` - Documentation site

### Build the component library

```bash
pnpm --filter @umami/react-zen build
```

### Run the docs site

```bash
pnpm --filter react-zen-docs dev
```

Runs on http://localhost:9001

### Build everything

```bash
pnpm build
```

### Lint

```bash
pnpm lint
```

## License

MIT
