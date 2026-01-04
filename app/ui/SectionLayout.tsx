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

      <div className="flex relative grow px-6 py-12">
        <aside className="w-56 shrink-0 hidden lg:block">
          <div className="sticky top-28 max-h-[calc(100vh-5rem)]">
            <SectionNav items={items} title={title} rootUrl={rootUrl} />
          </div>
        </aside>

        <main className="grow">
          <article className="max-w-3xl mx-auto">{children}</article>
        </main>

        <aside className="w-56 shrink-0 hidden xl:block ">
          <div className="sticky top-28 max-h-[calc(100vh-5rem)]">
            <TableOfContents />
          </div>
        </aside>
      </div>
    </div>
  )
}
