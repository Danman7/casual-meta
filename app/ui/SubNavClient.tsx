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
    <li className="mt-2">
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

  const open = isTopNav ? isManuallyToggled : true

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
    <nav className={`${isTopNav ? 'md:hidden inset-shadow-xs' : ''}`}>
      {isTopNav ? (
        <button
          type="button"
          className="w-full inline-flex items-center gap-1 text-foreground font-serif font-semibold hover:bg-primary hover:text-background cursor-pointer px-4 py-2 transition-all"
          aria-expanded={open}
          aria-controls="subnav-root"
          onClick={() => setIsManuallyToggled((v) => !v)}
        >
          {isTopNav && open ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
          <span>{title} Chapters</span>
        </button>
      ) : (
        <h4 className="text-lg font-semibold">{title} Chapters</h4>
      )}

      {open && (
        <ul id="subnav-root" className={`${isTopNav ? 'px-4' : ''} mt-0`}>
          {items.map((item) => (
            <TreeNode key={item.href} item={item} onSelect={handleSelect} />
          ))}
        </ul>
      )}
    </nav>
  )
}
