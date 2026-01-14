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
    <li className="w-full">
      <Anchor href={item.href}>{item.title}</Anchor>
      {hasChildren && (
        <ul className="pl-4">
          {item.children!.map((child) => (
            <TreeNode key={child.href} item={child} />
          ))}
        </ul>
      )}
    </li>
  )
}

export function SectionNav({ items }: Props) {
  return (
    <nav aria-labelledby="section-navigation">
      <ul id="subnav-root">
        {items.map((item) => (
          <TreeNode key={item.href} item={item} />
        ))}
      </ul>
    </nav>
  )
}
