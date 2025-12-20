'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BsPcDisplay } from 'react-icons/bs'
import { IoMdClose, IoMdMenu } from 'react-icons/io'

import { ROOT_NAVIGATION_ITEMS } from '@/app/constants'
import { Anchor } from '@/app/ui/Anchor'
import { FlexWrapper } from '@/app/ui/FlexWrapper'
import { SectionNav } from '@/app/ui/SectionNav'

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
    <header className="z-10">
      <nav className="shadow-md bg-surface px-6 py-4">
        <div className="flex items-center gap-4 justify-between">
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
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-start gap-4 mt-4">
            {ROOT_NAVIGATION_ITEMS.map((item) => (
              <Anchor key={item.href} href={item.href}>
                {' '}
                {item.name}
              </Anchor>
            ))}
          </div>
        )}
      </nav>

      <SectionNav />
    </header>
  )
}
