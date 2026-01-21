import { Header } from '@/app/ui/Header'
import { SideNavigation } from '@/app/ui/SideNavigation'
import { TableOfContents } from '@/app/ui/TableOfContents'
import type { RouteItem } from '@/lib/routes'

interface SectionLayoutProps {
  children: React.ReactNode
  items: RouteItem[]
  title: string
  rootUrl: string
}

export function SectionLayout({
  children,
  items,
  title,
  rootUrl,
}: SectionLayoutProps) {
  return (
    <div className="flex flex-col min-h-full">
      <Header sectionNav={{ items, title, rootUrl }} />

      <div className="flex relative grow gap-6 items-stretch">
        <aside className="hidden md:flex" aria-label="Primary navigation">
          <SideNavigation sectionNav={{ items, title, rootUrl }} />
        </aside>

        <main
          id="main-content"
          tabIndex={-1}
          className="mx-auto max-w-4xl px-4 pt-8 pb-32"
        >
          <article className="mx-auto max-w-3xl text-base space-y-6">
            {children}
          </article>
        </main>

        <aside className="hidden xl:flex" aria-label="On this page">
          <TableOfContents />
        </aside>
      </div>
    </div>
  )
}
