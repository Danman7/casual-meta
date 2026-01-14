'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BsPcDisplay } from 'react-icons/bs'
import { IoMdClose, IoMdMenu } from 'react-icons/io'

import { ROOT_NAVIGATION_ITEMS } from '@/app/constants'
import { Anchor } from '@/app/ui/Anchor'
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
    <>
      <header className="z-50 sticky top-0 shadow-lg bg-surface h-14 flex items-center text-2xl">
        <nav aria-labelledby="primary-navigation">
          <div className="px-4 sm:px-6 flex items-center gap-4">
            <button
              className="cursor-pointer hover:text-primary transition-all pr-2 pb-2 pt-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>

            <Link
              className="flex items-center gap-2 hover:gap-4 hover:text-primary font-semibold font-serif no-underline transition-all text-foreground p-2"
              href="/"
              aria-label="Go to homepage"
            >
              <BsPcDisplay />
              <span className="hidden sm:inline">Casual Meta</span>
            </Link>
          </div>
        </nav>
      </header>

      <nav
        aria-labelledby="mobile-navigation"
        className={`fixed top-14 left-0 bottom-0 w-full max-w-82 transition ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} bg-surface shadow-md z-40 flex flex-col lg:hidden`}
      >
        <div className="flex flex-col my-2">
          {ROOT_NAVIGATION_ITEMS.map((item) => (
            <Anchor
              key={item.href}
              href={item.href}
              className="text-lg font-semibold"
            >
              {' '}
              {item.name}
            </Anchor>
          ))}
        </div>

        {sectionNav ? (
          <div className="bg-alt-surface grow overflow-y-auto py-4">
            <SectionNav
              items={sectionNav.items}
              title={sectionNav.title}
              rootUrl={sectionNav.rootUrl}
            />
          </div>
        ) : null}
      </nav>
    </>
  )
}
