'use client'

import { usePathname } from 'next/navigation'
import { createContext, useContext } from 'react'

import type { RouteItem } from '@/lib/routes'

export type SectionNavData = {
  items: RouteItem[]
  title: string
  rootUrl: string
}

const NavigationContext = createContext<SectionNavData[]>([])

export function NavigationProvider({
  sections,
  children,
}: {
  sections: SectionNavData[]
  children: React.ReactNode
}) {
  return (
    <NavigationContext.Provider value={sections}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useSectionNav(): SectionNavData | undefined {
  const sections = useContext(NavigationContext)
  const pathname = usePathname()

  return sections.find((s) => pathname.startsWith(s.rootUrl))
}
