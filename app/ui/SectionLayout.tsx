import { Header } from '@/app/ui/Header'
import { SideNavigation } from '@/app/ui/SideNavigation'
import { TableOfContents } from '@/app/ui/TableOfContents'

export function SectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-full">
      <Header />

      <div className="flex relative grow gap-6 items-stretch">
        <aside className="hidden lg:flex" aria-label="Primary navigation">
          <SideNavigation />
        </aside>

        <main
          id="main-content"
          tabIndex={-1}
          className="mx-auto max-w-4xl px-4 pb-32"
        >
          <article className="mx-auto max-w-3xl">{children}</article>
        </main>

        <aside className="hidden xl:flex" aria-label="On this page">
          <TableOfContents />
        </aside>
      </div>
    </div>
  )
}
