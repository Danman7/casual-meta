import { SectionNav } from '@/app/ui/SectionNav'
import { TableOfContents } from '@/app/ui/TableOfContents'
import type { RouteTree } from '@/types'

interface SectionLayoutProps {
  children: React.ReactNode
  items: RouteTree[]
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
    <div className="flex gap-4 relative grow mx-2">
      <aside className="w-56 shrink-0 hidden lg:block">
        <div className="sticky top-22 max-h-[calc(100vh-5rem)]">
          <SectionNav items={items} title={title} rootUrl={rootUrl} />
        </div>
      </aside>

      <main className="grow px-4">
        <article className="max-w-3xl mx-auto">{children}</article>
      </main>

      <aside className="w-56 shrink-0 hidden xl:block ">
        <div className="sticky top-22 max-h-[calc(100vh-5rem)]">
          <TableOfContents />
        </div>
      </aside>
    </div>
  )
}
