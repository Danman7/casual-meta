import { Header } from '@/app/ui/Header'
import { SectionNav } from '@/app/ui/SectionNav'
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

      <div className="flex relative grow px-6 py-12 gap-6">
        <aside className="hidden lg:flex flex-1">
          <div className="sticky top-20 max-h-[calc(100vh-5rem)]">
            <SectionNav items={items} title={title} rootUrl={rootUrl} />
          </div>
        </aside>

        <main className="mx-auto max-w-3xl">
          <article className="mx-auto">{children}</article>
        </main>

        <aside className="hidden xl:flex flex-1 justify-end">
          <div className="sticky top-20 max-h-[calc(100vh-5rem)]">
            <TableOfContents />
          </div>
        </aside>
      </div>
    </div>
  )
}
