'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { getRouteTreeForPath } from '@/app/actions/getRouteTree'
import { HOMM3_BASE_URL } from '@/app/homm3/constants'
import { MK1_BASE_URL } from '@/app/mortal-kombat-1/constants'
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

      if (pathname.startsWith(MK1_BASE_URL)) {
        base = MK1_BASE_URL
        setTitle('Mortal Kombat 1')
      }

      if (pathname.startsWith(HOMM3_BASE_URL)) {
        base = HOMM3_BASE_URL
        setTitle('Heroes of Might and Magic 3')
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
