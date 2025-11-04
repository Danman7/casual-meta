'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { getRouteTreeForPath } from '@/app/actions/getRouteTree'
import { SubNavClient } from '@/app/ui/SubNavClient'
import { WH40K_BASE_URL } from '@/app/warhammer-40k/constants'
import type { RouteItem } from '@/lib/routes'

export const SectionNav: React.FC = () => {
  const pathname = usePathname()
  const [items, setItems] = useState<RouteItem[] | null>(null)
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    let active = true

    async function run() {
      if (!pathname) {
        if (active) setItems(null)
        return
      }

      let base = ''
      if (pathname.startsWith(WH40K_BASE_URL)) {
        base = WH40K_BASE_URL
        setTitle('Warhammer 40k')
      }

      if (!base) {
        if (active) setItems(null)
        return
      }

      const data = await getRouteTreeForPath(base)
      if (active) setItems(data)
    }

    run()

    return () => {
      active = false
    }
  }, [pathname])

  if (!items || items.length === 0) return null

  return <SubNavClient items={items} title={title} />
}
