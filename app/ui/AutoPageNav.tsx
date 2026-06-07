'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useSectionNav } from '@/app/ui/NavigationProvider'

type FlatRoute = {
  title: string
  href: string
  children?: readonly FlatRoute[]
}

const flattenRoutes = (items: readonly FlatRoute[]): FlatRoute[] => {
  return items.flatMap((item) => [
    { title: item.title, href: item.href },
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

  const orderedRoutes = flattenRoutes(section.items)

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
    <nav
      aria-label="Page navigation"
      className="mt-8 grid gap-4 md:grid-cols-2"
    >
      {prev ? (
        <Link href={prev.href} className="button justify-start text-left!">
          <span aria-hidden="true" className="shrink-0 leading-none">
            &larr;
          </span>
          <span className="min-w-0 flex-1">
            <span className="block lead">Prev</span>
            <span className="block leading-snug wrap-break-word">
              {prev.title}
            </span>
          </span>
        </Link>
      ) : (
        <div className="hidden md:block" />
      )}

      {next ? (
        <Link href={next.href} className="button justify-end text-right!">
          <span className="min-w-0 flex-1">
            <span className="block lead">Next</span>
            <span className="block leading-snug wrap-break-word">
              {next.title}
            </span>
          </span>
          <span aria-hidden="true" className="shrink-0 leading-none">
            &rarr;
          </span>
        </Link>
      ) : (
        <div className="hidden md:block" />
      )}
    </nav>
  )
}
