'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BsPcDisplay } from 'react-icons/bs'
import { IoMdClose, IoMdMenu } from 'react-icons/io'

import { SideNavigation } from '@/app/ui/SideNavigation'
import type { RouteItem } from '@/lib/routes'

type HeaderProps = {
  sectionNav?: {
    items: RouteItem[]
    title: string
    rootUrl: string
  }
}

export const Header = ({ sectionNav }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lastPathname, setLastPathname] = useState<string | null>(null)
  const pathname = usePathname()

  // Close mobile menu when route changes
  if (pathname !== lastPathname && isMobileMenuOpen) {
    setIsMobileMenuOpen(false)
    setLastPathname(pathname)
  } else if (pathname !== lastPathname) {
    setLastPathname(pathname)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  return (
    <>
      <header className="z-50 sticky top-0 shadow-md bg-surface h-14 flex items-center text-xl md:hidden">
        <nav aria-label="Primary navigation">
          <div className="px-4 flex items-center">
            <button
              className="cursor-pointer hover:text-primary transition-all pr-2 pb-2 pt-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              aria-haspopup="true"
              type="button"
            >
              {isMobileMenuOpen ? (
                <IoMdClose aria-hidden="true" focusable="false" />
              ) : (
                <IoMdMenu aria-hidden="true" focusable="false" />
              )}
            </button>

            <Link
              className="flex items-center gap-2 hover:gap-4 hover:text-primary font-bold no-underline transition-all p-2"
              href="/"
              aria-label="Go to homepage"
            >
              <BsPcDisplay aria-hidden="true" focusable="false" />
              <span className="hidden sm:inline">Casual Meta</span>
            </Link>
          </div>
        </nav>
      </header>

      <div
        id="mobile-nav"
        aria-hidden={!isMobileMenuOpen}
        className={`fixed top-14 left-0 w-full max-w-82 h-[calc(100vh-3.5rem)] transition ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} z-40 lg:hidden`}
      >
        <SideNavigation sectionNav={sectionNav} hideLogo isMobile />
      </div>
    </>
  )
}
