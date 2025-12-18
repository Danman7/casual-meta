# Casual Meta

> **Docs for casual players** — Making complex games accessible through clean, straightforward guides.

A documentation site consolidating community knowledge from YouTube, Reddit, forums, and wikis into clear, actionable guides for casual gamers.

## 🎮 Games Covered

- **Heroes of Might & Magic 3** — Creature compendium, faction guides, strategy fundamentals
- **Mortal Kombat** — Frame data, combo systems, character breakdowns
- **Warhammer 40K** — Unit profiles, army building, tactical concepts

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (or compatible runtime)
- npm, yarn, pnpm, or bun

### Development

```bash
# Install dependencies
npm install

# Start dev server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
# Build for production
npm run build --turbopack

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Runtime**: [React 19](https://react.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org) (strict mode)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Tables**: [@tanstack/react-table](https://tanstack.com/table)
- **Build Tool**: [Turbopack](https://turbo.build/pack)

## 📁 Project Structure

```
casual-meta/
├── app/                        # Next.js App Router pages
│   ├── homm3/                 # Heroes of Might & Magic 3 guides
│   ├── mortal-kombat/         # Mortal Kombat guides
│   ├── warhammer-40k/         # Warhammer 40K guides
│   ├── ui/                    # Shared UI components
│   ├── actions/               # Server actions
│   ├── data/                  # Game data (JSON)
│   └── assets/                # Static images
├── lib/                       # Utilities (routes, metadata)
├── types/                     # TypeScript types
└── .github/                   # GitHub config & AI instructions
```

## ✨ Key Features

### Automatic Navigation Generation

Navigation is **auto-generated** from the file system. To add a new page:

1. Create `page.tsx` in the appropriate `app/` subdirectory
2. Export navigation metadata:
   ```typescript
   export const navTitle = 'My Page Title'
   export const navOrder = 10 // Lower numbers appear first
   ```
3. Export page metadata:

   ```typescript
   import { generatePageMetadata } from '@/lib/metadata'

   export const metadata = generatePageMetadata(
     'Page Title',
     'Page description',
   )
   ```

Navigation hierarchy mirrors your folder structure—no manual configuration needed.

### Table of Contents

Article `h2` and `h3` headings automatically generate a table of contents. Just wrap your content in an `<article>` tag:

```tsx
export default function Page() {
  return (
    <article>
      <h1>Page Title</h1>
      <h2>Section 1</h2>
      <p>Content...</p>
      <h3>Subsection</h3>
      <p>More content...</p>
    </article>
  )
}
```

### Responsive Design

- Desktop: Fixed navigation with sidebar and TOC
- Mobile: Collapsible hamburger menu
- Dark mode via `prefers-color-scheme`

## 🧰 Development Commands

| Command                | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start development server with Turbopack |
| `npm run build`        | Build for production                    |
| `npm start`            | Start production server                 |
| `npm run lint`         | Run TypeScript check + ESLint           |
| `npm run lint:fix`     | Auto-fix linting issues                 |
| `npm run format`       | Format code with Prettier               |
| `npm run format:check` | Check formatting without changes        |

## 🎨 Styling Conventions

- **Inline Tailwind classes** — No CSS modules, keep styles co-located
- **Custom CSS variables** — Theme colors defined in `app/globals.css`
- **Important modifiers** — Use `!` suffix when needed: `text-foreground!`
- **Component composition** — UI components accept `className` for extension

### Theme Colors

| Variable       | Light Mode | Dark Mode |
| -------------- | ---------- | --------- |
| `--background` | slate-50   | slate-950 |
| `--foreground` | slate-950  | slate-100 |
| `--surface`    | slate-100  | slate-900 |
| `--primary`    | blue-700   | blue-400  |
| `--light`      | slate-600  | slate-400 |

## 📝 Content Guidelines

- **Justification** — Articles use justified text alignment
- **Line height** — Generous spacing (1.75) for readability
- **Typography** — Noto Serif for a classic documentation feel
- **Headings** — `h2` elements get automatic top borders for visual separation

## 🤝 Contributing

1. Follow the existing patterns in `app/ui/` for components
2. Use the ESLint import ordering rules (automatically enforced)
3. Export `navTitle` and `navOrder` for all new pages
4. Wrap article content in `<article>` tags
5. Run `npm run lint` before committing

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 📧 Contact

Questions or feedback? Reach out at [danmanm@gmail.com](mailto:danmanm@gmail.com)
