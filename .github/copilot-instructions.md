# Casual Meta: AI Agent Instructions

## Project Overview

Casual Meta is a Next.js 16 (App Router) documentation site for casual gaming guides. It serves multiple game sections (Heroes of Might & Magic 3, Mortal Kombat, Warhammer 40K) with auto-generated navigation from the file system structure.

**Tech Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS 4, @tanstack/react-table

## Architecture & Key Patterns

### File-Based Navigation System

Navigation is **automatically generated** from the `app/` directory structure using [lib/routes.ts](lib/routes.ts):

- Each `page.tsx` becomes a route automatically
- Export `navTitle` (string) in `page.tsx` to customize sidebar display name (falls back to metadata title or folder name)
- Export `navOrder` (number) in `page.tsx` to control ordering in navigation (lower numbers appear first)
- Navigation depth and hierarchy mirror the folder structure
- See [app/homm3/creature-compendium/page.tsx](app/homm3/creature-compendium/page.tsx) for example: `export const navOrder = 50` and `export const navTitle = 'Creature Compendium'`

Root navigation sections defined in [app/constants.tsx](app/constants.tsx) via `ROOT_NAVIGATION_ITEMS` array.

### Metadata Convention

Use the helper function from [lib/metadata.ts](lib/metadata.ts):

```typescript
export const metadata = generatePageMetadata(
  `${GAME_TITLE}: ${navTitle}`,
  'Page description here',
)
```

This automatically appends the site suffix "| Casual Meta".

### Styling & Theming

- **Tailwind CSS 4** with custom design tokens in [app/globals.css](app/globals.css)
- Custom CSS variables for theme colors: `--background`, `--foreground`, `--surface`, `--primary`, `--light`, etc.
- Dark mode via `prefers-color-scheme: dark` media query
- Use the `!` suffix for important overrides: `className="text-foreground! no-underline!"`
- Typography: Noto Serif font family loaded in [app/layout.tsx](app/layout.tsx)

### UI Components Pattern

Components in [app/ui/](app/ui/) follow these conventions:

- Simple, functional components with `React.FC` type
- Accept `children` and `className` props for composition
- Use inline Tailwind classes (no CSS modules)
- Example: [app/ui/FlexWrapper.tsx](app/ui/FlexWrapper.tsx), [app/ui/Badge.tsx](app/ui/Badge.tsx)

### Layout Components

- [app/layout.tsx](app/layout.tsx): Root layout with `<Nav>`, `<SectionNav>`, and `<TableOfContents>`
- `<SectionNav>`: Dynamically renders sub-navigation based on current route (see [app/ui/SectionNav.tsx](app/ui/SectionNav.tsx))
- `<TableOfContents>`: Client component that auto-generates from `h2` and `h3` tags in articles

### Server Actions

Server actions live in [app/actions/](app/actions/):

- Use `'use server'` directive
- Example: [app/actions/getRouteTree.ts](app/actions/getRouteTree.ts) provides route data to client components

## Development Workflows

**Start dev server**: `npm run dev` (uses Turbopack)  
**Build**: `npm run build --turbopack`  
**Lint**: `npm run lint` (runs TypeScript check + ESLint)  
**Format**: `npm run format` (Prettier)

### ESLint Configuration

Custom flat config in [eslint.config.mjs](eslint.config.mjs) with:

- Import ordering rules (builtin → external → internal `@/` paths)
- `newlines-between: always` for import groups
- Alphabetized imports within groups

## Adding New Pages

1. Create `page.tsx` in the appropriate `app/` subdirectory
2. Export `navTitle` and `navOrder` constants to control navigation display
3. Export `metadata` using `generatePageMetadata()` helper
4. Wrap content in `<article>` tag for proper styling and TOC generation
5. Navigation updates automatically—no manual registration needed

## Data & Static Assets

- Game data stored as JSON in [app/data/](app/data/) (e.g., `homm3/creatures.json`)
- Static assets (images) in [app/assets/](app/assets/) organized by game
- Use `@/` path alias for imports (configured in [tsconfig.json](tsconfig.json))

## Important Notes

- **TypeScript strict mode** enabled with `noUnusedLocals` and `noUnusedParameters`
- Client components must use `'use client'` directive (e.g., [app/ui/Nav.tsx](app/ui/Nav.tsx))
- Article `h2` headings automatically get top border via global CSS
- Route generation happens at build time via filesystem scanning in [lib/routes.ts](lib/routes.ts)
