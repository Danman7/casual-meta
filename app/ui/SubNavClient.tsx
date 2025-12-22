'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState, startTransition } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io'

import { Anchor } from '@/app/ui/Anchor'
import type { RouteItem } from '@/lib/routes'

type Props = {
  items: RouteItem[]
  title: string
  isTopNav?: boolean
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

export function SubNavClient({ items, title, isTopNav }: Props) {
  const [isManuallyToggled, setIsManuallyToggled] = useState(false)
  const pathname = usePathname()
  const prevPathnameRef = useRef(pathname)

  // Derive open state: desktop sidebars are always open, mobile nav follows manual toggle
  const open = isTopNav ? isManuallyToggled : true

  // Reset mobile nav when pathname changes
  useEffect(() => {
    if (isTopNav && prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname
      startTransition(() => {
        setIsManuallyToggled(false)
      })
    }
  }, [pathname, isTopNav])

  const closeNav = () => {
    if (isTopNav) {
      setIsManuallyToggled(false)
    }
  }

  const handleSelect = () => closeNav()

  return (
    <nav
      className={`${isTopNav ? 'bg-alt-surface shadow-md md:hidden px-6' : ''}`}
    >
      {isTopNav ? (
        <button
          type="button"
          className="w-full inline-flex items-center gap-1 text-foreground font-bold hover:text-primary cursor-pointer py-2"
          aria-expanded={open}
          aria-controls="subnav-root"
          onClick={() => setIsManuallyToggled((v) => !v)}
        >
          {isTopNav && open ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
          <span>{title || 'Menu'}</span>
        </button>
      ) : (
        <h4 className="text-lg font-bold">{title}</h4>
      )}

      {open && (
        <ul id="subnav-root" className="mt-2 space-y-1 pb-2">
          {items.map((item) => (
            <TreeNode key={item.href} item={item} onSelect={handleSelect} />
          ))}
        </ul>
      )}
    </nav>
  )
}
