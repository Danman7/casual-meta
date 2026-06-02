'use client'

import type { NavItem } from '@/app/siteMap'
import { Anchor } from '@/app/ui/Anchor'

type Props = {
  items: readonly NavItem[]
  title: string
  rootUrl: string
}

export function SectionNav({ items }: Props) {
  return (
    <nav aria-label="Section navigation" className="space-y-2">
      {items.map((item) => (
        <div key={item.href}>
          <Anchor href={item.href}>{item.shortTitle ?? item.title}</Anchor>

          {!!item.children?.length && (
            <div className="sub-nav-item">
              {item.children.map((child) => (
                <Anchor key={child.href} href={child.href}>
                  {child.shortTitle ?? child.title}
                </Anchor>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
