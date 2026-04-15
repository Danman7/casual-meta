'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import { useSectionNav } from '@/app/ui/NavigationProvider'

type FlatRoute = {
  title: string
  href: string
  order?: number
  children?: FlatRoute[]
}

const flattenRoutes = (items: FlatRoute[]): FlatRoute[] => {
  return items.flatMap((item) => [
    { title: item.title, href: item.href, order: item.order },
    ...(item.children ? flattenRoutes(item.children) : []),
  ])
}

const normalizePath = (value: string) => {
  if (value !== '/' && value.endsWith('/')) {
    return value.slice(0, -1)
  }

  return value
}

export function AutoPageNav() {
  const pathname = normalizePath(usePathname())
  const section = useSectionNav()

  if (!section) return null

  const orderedRoutes = flattenRoutes(section.items).filter(
    (item) => item.order != null,
  )

  const currentIndex = orderedRoutes.findIndex(
    (item) => normalizePath(item.href) === pathname,
  )

  if (currentIndex === -1) return null

  const prev = currentIndex > 0 ? orderedRoutes[currentIndex - 1] : null
  const next =
    currentIndex < orderedRoutes.length - 1
      ? orderedRoutes[currentIndex + 1]
      : null

  if (!prev && !next) return null

  return (
    <nav aria-label="Page navigation" className="mt-8 flex gap-4">
      {prev ? (
        <Link
          href={prev.href}
          className="w-1/2 button flex-center justify-between"
        >
          <FaAngleLeft />
          <div>Prev: {prev.title}</div>
        </Link>
      ) : (
        <div className="w-1/2" />
      )}

      {next ? (
        <Link
          href={next.href}
          className="w-1/2 button flex-center justify-between"
        >
          <div>Next: {next.title}</div>
          <FaAngleRight />
        </Link>
      ) : (
        <div className="w-1/2" />
      )}
    </nav>
  )
}
