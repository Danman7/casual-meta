'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BsPcDisplay } from 'react-icons/bs'
import { IoMdClose, IoMdMenu } from 'react-icons/io'

import { Anchor } from '@/app/ui/Anchor'

const navigation = [{ name: 'Warhammer 40k', href: '/warhammer-40k' }]

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
    <header className="shadow-md z-10 bg-surface">
      <nav className="flex items-center justify-between mx-auto p-4 md:px-8 gap-10">
        <div className="text-2xl">
          <Link
            className="flex items-center gap-2 text-foreground! no-underline!"
            href="/"
          >
            <BsPcDisplay />
            Casual Meta
          </Link>
        </div>

        <div className="gap-4 hidden md:flex">
          {navigation.map((item) => (
            <Anchor key={item.href} href={item.href}>
              {item.name}
            </Anchor>
          ))}
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
        <nav className="md:hidden text-center flex flex-col gap-4 overflow-hidden px-4 pb-4">
          {navigation.map((item) => (
            <Anchor key={item.href} href={item.href}>
              {item.name}
            </Anchor>
          ))}
        </nav>
      )}
    </header>
  )
}
