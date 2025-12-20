'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BsPcDisplay } from 'react-icons/bs'
import { IoMdClose, IoMdMenu } from 'react-icons/io'

import { ROOT_NAVIGATION_ITEMS } from '@/app/constants'
import { Anchor } from '@/app/ui/Anchor'
import { FlexWrapper } from '@/app/ui/FlexWrapper'

export const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  return (
    <header className="shadow-md z-10 bg-surface px-6 top-0 left-0 right-0 py-4 fixed">
      <nav className="flex items-center gap-4 justify-between">
        <Link className="flex items-center gap-4 font-bold text-2xl" href="/">
          <BsPcDisplay />
          Casual Meta
        </Link>

        <div className="gap-4 hidden md:flex">
          {ROOT_NAVIGATION_ITEMS.map((item) => (
            <Anchor key={item.href} href={item.href}>
              {item.name}
            </Anchor>
          ))}
        </div>

        <FlexWrapper
          className="md:hidden cursor-pointer hover:text-primary transition hover:scale-105 active:scale-95"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <IoMdClose className="text-xl" />
          ) : (
            <IoMdMenu className="text-xl" />
          )}
          Menu
        </FlexWrapper>
      </nav>

      <nav
        className={`md:hidden flex flex-col items-start gap-4  transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-96 opacity-100 pt-4'
            : 'max-h-0 opacity-0 pt-0'
        }`}
      >
        {ROOT_NAVIGATION_ITEMS.map((item) => (
          <Anchor key={item.href} href={item.href}>
            {' '}
            {item.name}
          </Anchor>
        ))}
      </nav>
    </header>
  )
}
