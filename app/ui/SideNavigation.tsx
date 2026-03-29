'use client'

import Link from 'next/link'
import { FaAsterisk } from 'react-icons/fa'

import { ROOT_NAVIGATION_ITEMS } from '@/app/constants'
import { Anchor } from '@/app/ui/Anchor'
import { useSectionNav } from '@/app/ui/NavigationProvider'
import { SectionNav } from '@/app/ui/SectionNav'

type SideNavigationProps = {
  hideLogo?: boolean
  isMobile?: boolean
}

export const SideNavigation = ({ hideLogo, isMobile }: SideNavigationProps) => {
  const sectionNav = useSectionNav()

  return (
    <nav
      aria-label="Primary navigation"
      className={`flex flex-col bg-surface shadow-lg overflow-y-auto w-64 divide-y space-y-4 divide-foreground/10 p-4 *:space-y-1 ${
        isMobile ? 'h-full' : 'sticky top-0 max-h-screen'
      }`}
    >
      {!hideLogo && (
        <Link
          className="flex items-center gap-2 hover:gap-4 hover:text-primary font-bold no-underline transition-all text-xl px-2 pb-4"
          href="/"
          aria-label="Go to homepage"
        >
          <FaAsterisk focusable="false" className="text-primary" />
          <span className="hidden sm:inline">Casual Meta</span>
        </Link>
      )}

      <div className="flex flex-col font-semibold pb-4">
        {ROOT_NAVIGATION_ITEMS.map((item) => (
          <Anchor key={item.href} href={item.href}>
            {' '}
            {item.name}
          </Anchor>
        ))}
      </div>

      {sectionNav ? (
        <SectionNav
          items={sectionNav.items}
          title={sectionNav.title}
          rootUrl={sectionNav.rootUrl}
        />
      ) : null}
    </nav>
  )
}
