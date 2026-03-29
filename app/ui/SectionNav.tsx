'use client'

import { Anchor } from '@/app/ui/Anchor'
import type { RouteItem } from '@/lib/routes'

type Props = {
  items: RouteItem[]
  title: string
  rootUrl: string
}

export function SectionNav({ items }: Props) {
  return (
    <nav aria-label="Section navigation" className="space-y-2">
      {items.map((item) => (
        <div key={item.href}>
          <Anchor href={item.href}>{item.title}</Anchor>

          {!!item.children?.length && (
            <div className="sub-nav-item">
              {item.children.map((child) => (
                <Anchor key={child.href} href={child.href}>
                  {child.title}
                </Anchor>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
