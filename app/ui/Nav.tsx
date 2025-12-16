'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BsPcDisplay } from 'react-icons/bs'
import { IoMdClose, IoMdMenu } from 'react-icons/io'

import { ROOT_NAVIGATION_ITEMS } from '@/app/constants'
import { Anchor } from '@/app/ui/Anchor'

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
    <>
      <header className="shadow-md z-10 bg-surface px-6 top-0 left-0 right-0 py-4 fixed">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="text-2xl">
              <Link
                className="flex items-center gap-4 text-foreground! font-bold no-underline!"
                href="/"
              >
                <BsPcDisplay />
                Casual Meta
              </Link>
            </div>

            <div className="gap-4 hidden md:flex">
              {ROOT_NAVIGATION_ITEMS.map((item) => (
                <Anchor key={item.href} href={item.href}>
                  {item.icon} {item.name}
                </Anchor>
              ))}
            </div>
          </div>

          <div className="justify-end md:hidden">
            {isMobileMenuOpen ? (
              <IoMdClose className="text-xl" onClick={toggleMobileMenu} />
            ) : (
              <IoMdMenu className="text-xl" onClick={toggleMobileMenu} />
            )}
          </div>
        </nav>

        {isMobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 overflow-hidden pt-4">
            {ROOT_NAVIGATION_ITEMS.map((item) => (
              <Anchor key={item.href} href={item.href}>
                {item.icon} {item.name}
              </Anchor>
            ))}
          </nav>
        )}
      </header>
    </>
  )
}
