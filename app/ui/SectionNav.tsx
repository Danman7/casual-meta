'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState, startTransition } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io'

import { Anchor } from '@/app/ui/Anchor'
import type { RouteItem } from '@/lib/routes'

type Props = {
  items: RouteItem[]
  title: string
  rootUrl: string
  isTopNav?: boolean
}

function TreeNode({
  item,
  onSelect,
}: {
  item: RouteItem
  isTopNav?: boolean
  onSelect: () => void
}) {
  const hasChildren = !!item.children?.length
  return (
    <li className="w-full">
      <Anchor href={item.href} onClick={onSelect}>
        {item.title}
      </Anchor>
      {hasChildren && (
        <ul className="ml-4">
          {item.children!.map((child) => (
            <TreeNode key={child.href} item={child} onSelect={onSelect} />
          ))}
        </ul>
      )}
    </li>
  )
}

export function SectionNav({ items, title, rootUrl, isTopNav }: Props) {
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
    <nav
      className={`${isTopNav ? 'lg:hidden ' : ''}`}
      aria-labelledby="section-navigation"
    >
      {isTopNav ? (
        <button
          type="button"
          className="w-full mb-4 inline-flex items-center gap-1 text-foreground font-serif font-semibold hover:text-primary cursor-pointer transition-all"
          aria-expanded={open}
          aria-controls="subnav-root"
          onClick={() => setIsManuallyToggled((v) => !v)}
        >
          {isTopNav && open ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
          <span>{title}</span>
        </button>
      ) : (
        <Anchor href={rootUrl} className="text-xl font-bold border-b mb-4">
          {title}
        </Anchor>
      )}

      {open && (
        <ul id="subnav-root" className={isTopNav ? 'mb-4' : ''}>
          {items.map((item) => (
            <TreeNode key={item.href} item={item} onSelect={handleSelect} />
          ))}
        </ul>
      )}
    </nav>
  )
}
