'use client'

import Link from 'next/link'
import { BsPcDisplay } from 'react-icons/bs'

import { ROOT_NAVIGATION_ITEMS } from '@/app/constants'
import { Anchor } from '@/app/ui/Anchor'
import { SectionNav } from '@/app/ui/SectionNav'
import type { RouteItem } from '@/lib/routes'

type SideNavigationProps = {
  sectionNav?: {
    items: RouteItem[]
    title: string
    rootUrl: string
  }
}

export const SideNavigation = ({ sectionNav }: SideNavigationProps) => (
  <nav
    aria-labelledby="primary-navigation"
    className="flex flex-col bg-surface shadow-md sticky top-0 max-h-screen overflow-y-auto w-82"
  >
    <Link
      className="flex items-center gap-2 hover:gap-4 hover:text-primary font-semibold font-serif no-underline transition-all p-6 text-2xl"
      href="/"
      aria-label="Go to homepage"
    >
      <BsPcDisplay />
      <span className="hidden sm:inline">Casual Meta</span>
    </Link>

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
      <div className="bg-alt-surface grow py-4">
        <SectionNav
          items={sectionNav.items}
          title={sectionNav.title}
          rootUrl={sectionNav.rootUrl}
        />
      </div>
    ) : null}
  </nav>
)
