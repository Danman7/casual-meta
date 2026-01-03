'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { BsPcDisplay } from 'react-icons/bs'
import { IoMdClose, IoMdMenu } from 'react-icons/io'

import { ROOT_NAVIGATION_ITEMS } from '@/app/constants'
import { SectionNav } from '@/app/ui/SectionNav'

export const Header = () => {
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
    <header className="z-10 sticky top-0 shadow-md bg-surface">
      <nav className="p-4" aria-labelledby="primary-navigation">
        <div className="flex items-center gap-4 justify-between">
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
          <div className="flex flex-col items-start gap-4 mt-4">
            {ROOT_NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-serif hover:text-primary transition"
              >
                {' '}
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <SectionNav isTopNav />
    </header>
  )
}
