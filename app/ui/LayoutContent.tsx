'use client'

import { usePathname } from 'next/navigation'

import { SectionNav } from '@/app/ui/SectionNav'
import { TableOfContents } from '@/app/ui/TableOfContents'

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomepage = pathname === '/'

  return (
    <div className="flex gap-4 px-6 relative grow">
      {!isHomepage && (
        <aside className="w-56 shrink-0 hidden md:block ">
          <div className="sticky top-24 overflow-x-visible overflow-y-auto max-h-[calc(100vh-5rem)]">
            <SectionNav />
          </div>
        </aside>
      )}

      <main className="grow py-6">
        <article className="max-w-3xl mx-auto">{children}</article>
      </main>

      {!isHomepage && (
        <aside className="w-56 shrink-0 hidden xl:block ">
          <div className="sticky top-24 overflow-x-visible overflow-y-auto max-h-[calc(100vh-5rem)]">
            <TableOfContents />
          </div>
        </aside>
      )}
    </div>
  )
}
