'use client'

import { usePathname } from 'next/navigation'
import { createContext, useContext } from 'react'

import type { SectionNavData } from '@/app/siteMap'

const NavigationContext = createContext<readonly SectionNavData[]>([])

export function NavigationProvider({
  sections,
  children,
}: {
  sections: readonly SectionNavData[]
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
