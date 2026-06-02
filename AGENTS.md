# Agent Instructions

## Project Structure

This is a Next.js App Router documentation site. Keep changes close to the
content section or shared utility they affect.

```text
casual-meta/
├── app/
│   ├── siteMap.ts                 # Section/page registry, typed hrefs, metadata helpers
│   ├── constants.tsx              # Site-wide title/base-url constants only
│   ├── globals.css                # Theme variables and global styles
│   ├── page.tsx                   # Homepage
│   ├── layout.tsx                 # Root layout and navigation provider
│   ├── ui/                        # Shared client/server UI components
│   ├── assets/                    # Static images grouped by game/section
│   ├── data/                      # Static data used by pages and tables
│   ├── homm3/                     # Heroes of Might and Magic III pages
│   ├── mortal-kombat/             # Mortal Kombat pages
│   └── warhammer-40k/             # Warhammer 40,000 pages
├── lib/
│   └── metadata.ts                # Low-level metadata suffix helper
├── README.md                      # Human-facing project overview
└── AGENTS.md                      # Agent-facing implementation rules
```

Expected page locations:

- Section landing pages live at `app/<section>/page.tsx`.
- Top-level guide pages live at `app/<section>/<slug>/page.tsx`.
- Nested guide pages live under their parent, for example
  `app/warhammer-40k/space-marines/units/page.tsx`.
- Section-specific constants may live near their section only when they are
  content/data helpers, not route lookup helpers.

## Navigation And Metadata

`app/siteMap.ts` is the source of truth for visible section/page navigation.
It defines:

- section roots and root navigation labels
- page IDs, titles, short titles, descriptions, and hrefs
- sidebar order through array order
- typed href helpers: `homm3Href`, `mkHref`, `wh40kHref`
- page lookup helpers: `homm3Page`, `mkPage`, `wh40kPage`
- metadata helpers: `homm3Metadata`, `mkMetadata`, `wh40kMetadata`

Do not recreate filesystem-based navigation or title-based route lookup.
Specifically, do not reintroduce `navTitle`, `navOrder`,
`createRouteLookup`, `wh40kRoute`, `mkRoute`, or `homm3Route`.

## Adding Pages

1. Create the new `page.tsx` in the appropriate `app/` subdirectory.
2. Add the page to the relevant section in `app/siteMap.ts`.
3. Put the entry exactly where it should appear in the sidebar and prev/next
   page navigation; array position controls order.
4. Use a camelCase page ID that is stable and developer-facing.
5. Add `shortTitle` only when the sidebar label should differ from the page
   title.
6. Export metadata through the section helper, for example:

   ```ts
   export const metadata = wh40kMetadata('datasheets')
   ```

7. Read the title from the page helper, for example:

   ```tsx
   const page = wh40kPage('datasheets')

   export default function Page() {
     return <h1>{page.title}</h1>
   }
   ```

8. Use the typed href helpers for internal links. The page ID is typed; heading
   hashes remain manual strings.

   ```tsx
   <Link href={wh40kHref('datasheets', 'wounds')}>wounds (W)</Link>
   <Link href={mkHref('anatomyOfAttacks', '#high')}>high attacks</Link>
   ```

## Editing Existing Pages

- Keep content pages focused on content. Avoid local route maps, local metadata
  constants, or duplicate nav labels.
- Use regular `h2` and `h3` IDs for page anchors; table-of-contents behavior
  depends on rendered headings.
- Keep section assets inside `app/assets/<section>/` unless a shared asset is
  genuinely cross-section.
- Prefer shared UI from `app/ui/` before adding page-local components.
- Preserve unrelated user edits in the working tree.

## Dependency Updates

When asked to update project dependencies, use this shortcut workflow:

```bash
ncu
ncu -u
npm update --save
npm run lint
npm run build
```

If `npm update --save` fails because `eslint` or `@eslint/js` moved to a new
major, check the peer ranges for the ESLint plugins before forcing the install.
In particular, keep `eslint` and `@eslint/js` on the same major, and do not
accept ESLint 10 until `eslint-plugin-import` supports it.

## Validation

Run checks after navigation, metadata, or shared component changes:

```bash
npm run lint
npm run build
```

After route/navigation work, also search for stale patterns:

```bash
rg "navTitle|navOrder|createRouteLookup|wh40kRoute|mkRoute|homm3Route" app lib README.md
```

For rendered navigation changes, verify at least one page per main section:

- sidebar order
- nested sidebar items
- prev/next page navigation
- one representative hash link, such as
  `wh40kHref('datasheets', 'wounds')`
