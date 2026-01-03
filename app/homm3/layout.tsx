import { getRouteTreeForPath } from '@/app/actions/getRouteTree'
import { HOMM3_BASE_URL, HOMM3_TITLE } from '@/app/constants'
import { SectionNav } from '@/app/ui/SectionNav'
import { TableOfContents } from '@/app/ui/TableOfContents'

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const items = await getRouteTreeForPath(HOMM3_BASE_URL)

  return (
    <div className="flex gap-4 relative grow mx-2">
      <aside className="w-56 shrink-0 hidden md:block">
        <div className="sticky top-28 max-h-[calc(100vh-5rem)]">
          <SectionNav
            items={items}
            title={HOMM3_TITLE}
            rootUrl={HOMM3_BASE_URL}
          />
        </div>
      </aside>

      <main className="grow px-4">
        <article className="max-w-3xl mx-auto">{children}</article>
      </main>

      <aside className="w-56 shrink-0 hidden xl:block ">
        <div className="sticky top-28 max-h-[calc(100vh-5rem)]">
          <TableOfContents />
        </div>
      </aside>
    </div>
  )
}
