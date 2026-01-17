'use client'

import { Anchor } from '@/app/ui/Anchor'
import type { RouteItem } from '@/lib/routes'

type Props = {
  items: RouteItem[]
  title: string
  rootUrl: string
}

function TreeNode({ item }: { item: RouteItem }) {
  const hasChildren = !!item.children?.length
  return (
    <div className="flex flex-col">
      <Anchor href={item.href}>{item.title}</Anchor>

      {hasChildren && (
        <div className="ml-4 flex flex-col">
          {item.children!.map((child) => (
            <TreeNode key={child.href} item={child} />
          ))}
        </div>
      )}
    </div>
  )
}

export function SectionNav({ items }: Props) {
  return (
    <nav
      aria-labelledby="section-navigation"
      className="grow flex flex-col p-2 space-y-1 text-sm"
    >
      {items.map((item) => (
        <TreeNode key={item.href} item={item} />
      ))}
    </nav>
  )
}
