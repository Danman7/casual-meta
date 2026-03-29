'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { FaAsterisk } from 'react-icons/fa'
import { IoMdClose, IoMdMenu } from 'react-icons/io'

import { SideNavigation } from '@/app/ui/SideNavigation'

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastPathname, setLastPathname] = useState<string | null>(null)
  const lastScrollY = useRef(0)
  const pathname = usePathname()

  // Close mobile menu when route changes
  if (pathname !== lastPathname && isMobileMenuOpen) {
    setIsMobileMenuOpen(false)
    setLastPathname(pathname)
  } else if (pathname !== lastPathname) {
    setLastPathname(pathname)
  }

  // Scroll-direction tracking: hide on scroll down, show on scroll up
  const downScrollAccumulator = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY

      if (isMobileMenuOpen) {
        lastScrollY.current = currentY
        return
      }

      const delta = currentY - lastScrollY.current

      if (delta > 0 && currentY > 50) {
        downScrollAccumulator.current += delta
        if (downScrollAccumulator.current > 250) {
          setIsHeaderVisible(false)
        }
      } else if (delta < 0) {
        downScrollAccumulator.current = 0
        setIsHeaderVisible(true)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  return (
    <>
      <header
        className={`z-50 sticky top-0 shadow-md bg-surface h-14 flex items-center text-xl lg:hidden transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
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
                <IoMdClose focusable="false" />
              ) : (
                <IoMdMenu focusable="false" />
              )}
            </button>

            <Link
              className="flex items-center gap-2 hover:gap-4 hover:text-primary font-bold no-underline transition-all p-2 active:text-primary/80"
              href="/"
              aria-label="Go to homepage"
            >
              <FaAsterisk focusable="false" className="text-primary" />
              <span>Casual Meta</span>
            </Link>
          </div>
        </nav>
      </header>

      <div
        id="mobile-nav"
        className={`fixed top-14 left-0 w-full max-w-82 h-[calc(100vh-3.5rem)] transition ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} ${isHeaderVisible ? '' : '-translate-y-14'} z-40 lg:hidden`}
      >
        <SideNavigation hideLogo isMobile />
      </div>
    </>
  )
}
