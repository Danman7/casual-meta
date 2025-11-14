'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io'

import { Anchor } from '@/app/ui/Anchor'
import type { RouteItem } from '@/lib/routes'

type Props = {
  items: RouteItem[]
  title: string
}

function TreeNode({
  item,
  onSelect,
}: {
  item: RouteItem
  onSelect: () => void
}) {
  const hasChildren = !!item.children?.length
  return (
    <li>
      <Anchor href={item.href} onClick={onSelect}>
        {item.title}
      </Anchor>
      {hasChildren && (
        <ul className="ml-5 mt-1 space-y-1">
          {item.children!.map((child) => (
            <TreeNode key={child.href} item={child} onSelect={onSelect} />
          ))}
        </ul>
      )}
    </li>
  )
}

export function SubNavClient({ items, title }: Props) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const handleSelect = () => setOpen(false)

  return (
    <nav className="text-sm pt-4">
      <button
        type="button"
        className="w-full inline-flex items-center gap-1 text-foreground hover:opacity-80"
        aria-expanded={open}
        aria-controls="subnav-root"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
        <span>{title || 'Menu'}</span>
      </button>

      {open && (
        <ul id="subnav-root" className="mt-2 space-y-1">
          {items.map((item) => (
            <TreeNode key={item.href} item={item} onSelect={handleSelect} />
          ))}
        </ul>
      )}
    </nav>
  )
}
