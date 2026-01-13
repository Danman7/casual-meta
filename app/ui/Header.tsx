'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BsPcDisplay } from 'react-icons/bs'
import { IoMdClose, IoMdMenu } from 'react-icons/io'

import { ROOT_NAVIGATION_ITEMS } from '@/app/constants'
import { SectionNav } from '@/app/ui/SectionNav'
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
    <header className="z-50 sticky top-0 shadow-md bg-surface">
      <nav aria-labelledby="primary-navigation">
        <div className="px-6 py-4 flex items-center gap-4 justify-between">
          <Link
            className="flex items-center gap-1 hover:gap-2 hover:text-primary font-semibold text-2xl font-serif no-underline transition-all text-foreground"
            href="/"
          >
            <BsPcDisplay className="text-primary" />
            Casual Meta
          </Link>

          <button
            className="flex items-center gap-1 cursor-pointer hover:text-primary transition-all font-serif text-lg"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <IoMdClose className="text-xl" />
            ) : (
              <IoMdMenu className="text-xl" />
            )}
            Menu
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="flex flex-col items-start text-lg px-6 md:px-0">
            {ROOT_NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-serif hover:text-primary transition cursor-pointer py-2 w-full"
              >
                {' '}
                {item.name}
              </Link>
            ))}
          </div>
        )}

        {sectionNav ? (
          <div className="lg:hidden">
            <SectionNav
              items={sectionNav.items}
              title={sectionNav.title}
              rootUrl={sectionNav.rootUrl}
              isTopNav
            />
          </div>
        ) : null}
      </nav>
    </header>
  )
}
