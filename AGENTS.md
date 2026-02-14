# AGENTS.md

Guidance for coding agents working in this repository.

## Project Overview

- Monorepo for `@umami/react-zen`.
- Main packages:
  - `packages/react-zen`: React component library.
  - `apps/docs`: Next.js documentation site.

## Core Rules

- Assume a dev server is already running on port `9001`.
- Do **not** run `pnpm dev` or any other dev-server command.
- After library changes, run:
  - `pnpm --filter @umami/react-zen build`
- Use `pnpm` (not `npm` or `yarn`).

## Useful Commands

- Root:
  - `pnpm build`
  - `pnpm lint`
- Library:
  - `pnpm --filter @umami/react-zen build`
  - `pnpm --filter @umami/react-zen lint`
  - `pnpm --filter @umami/react-zen icons`
- Docs:
  - `pnpm --filter react-zen-docs build`
  - `pnpm --filter react-zen-docs start`

## Architecture Notes

- Component source: `packages/react-zen/src/components/`.
- Public exports: `packages/react-zen/src/components/index.ts`.
- Components are built on React Aria primitives.
- Styling uses CSS Modules with co-located `.module.css` files.

## Code Style

- Biome formatting/linting.
- Single quotes, trailing commas, 2-space indentation.
- Keep line width near 100 chars.

## Git Workflow

- You may inspect git state freely (`status`, `diff`, `log`, etc.).
- Ask for explicit user permission before `git commit` or `git push`.
- Avoid destructive git commands unless explicitly requested.
