'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'

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
    return <div className="grow">{children}</div>
  }

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)

  return (
    <div className="flex flex-col min-h-full">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
      />

      <div className="flex relative">
        <aside className="hidden lg:flex">
          <SideNavigation />
        </aside>

        <main tabIndex={-1} className="edge-padding">
          {children}
        </main>

        <aside className="edge-padding hidden xl:flex">
          <TableOfContents />
        </aside>
      </div>

      <div
        id="mobile-nav"
        className={`fixed top-0 left-0 w-80 h-full transition z-40 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <SideNavigation isMobile />
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 blurred-surface z-30 lg:hidden"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
