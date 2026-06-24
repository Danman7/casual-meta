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
    <div className="flex flex-col min-h-full">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
      />

      <div className="reading-shell">
        <aside className="hidden min-w-0 lg:block">
          <SideNavigation />
        </aside>

        <main tabIndex={-1} className="reading-main mx-auto">
          {children}
          <AutoPageNav />
        </main>

        <aside className="hidden min-w-0 xl:block">
          <TableOfContents />
        </aside>
      </div>

      <div
        id="mobile-nav"
        className={`fixed top-0 left-0 h-full transition z-40 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <SideNavigation isMobile />
      </div>
    </div>
  )
}
