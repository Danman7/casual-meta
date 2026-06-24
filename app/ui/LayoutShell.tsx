'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { AutoPageNav } from '@/app/ui/AutoPageNav'
import { Header } from '@/app/ui/Header'
import { SideNavigation } from '@/app/ui/SideNavigation'
import { TableOfContents } from '@/app/ui/TableOfContents'

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lastPathname, setLastPathname] = useState(pathname)

  // Close mobile menu on route change
  if (pathname !== lastPathname) {
    setLastPathname(pathname)
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }

  if (pathname === '/') {
    return <div>{children}</div>
  }

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)

  return (
    <div className="min-h-full overflow-x-hidden [--mobile-sidebar-width:min(20rem,85vw)]">
      <div
        className={`flex min-h-full flex-col transition-transform duration-300 ease-out lg:translate-x-0 ${
          isMobileMenuOpen
            ? 'translate-x-[var(--mobile-sidebar-width)]'
            : 'translate-x-0'
        }`}
      >
        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMobileMenu={toggleMobileMenu}
        />

        <div className="reading-shell">
          <aside className="hidden w-64 min-w-0 justify-self-start lg:block 2xl:w-68">
            <SideNavigation />
          </aside>

          <main tabIndex={-1} className="reading-main mx-auto">
            {children}
            <AutoPageNav />
          </main>

          <aside className="hidden w-56 min-w-0 justify-self-end xl:block 2xl:w-60">
            <TableOfContents />
          </aside>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`fixed top-0 left-0 z-40 h-full w-[var(--mobile-sidebar-width)] transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SideNavigation isMobile />
      </div>
    </div>
  )
}
