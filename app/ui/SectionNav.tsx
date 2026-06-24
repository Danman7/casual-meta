'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { NavItem } from '@/app/siteMap'

type Props = {
  items: readonly NavItem[]
  title: string
  rootUrl: string
}

const normalizePath = (value: string) =>
  value !== '/' && value.endsWith('/') ? value.slice(0, -1) : value

export function SectionNav({ items, title, rootUrl }: Props) {
  const pathname = normalizePath(usePathname())

  const isActive = (href: string) => normalizePath(href) === pathname

  return (
    <nav aria-label="Section navigation" className="space-y-5">
      <Link
        href={rootUrl}
        aria-current={isActive(rootUrl) ? 'page' : undefined}
        className={`chapter-root ${
          isActive(rootUrl) ? 'chapter-root-active' : ''
        }`}
      >
        {title}
      </Link>

      <ol className="space-y-1">
        {items.map((item, itemIndex) => {
          const isCurrentItem = isActive(item.href)
          const hasActiveChild =
            item.children?.some((child) => isActive(child.href)) ?? false

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrentItem ? 'page' : undefined}
                className={`chapter-link ${
                  isCurrentItem || hasActiveChild ? 'chapter-link-active' : ''
                }`}
              >
                <span className="chapter-number">
                  {String(itemIndex + 1).padStart(2, '0')}
                </span>
                <span>{item.shortTitle ?? item.title}</span>
              </Link>

              {!!item.children?.length && (
                <ol className="mt-1 space-y-1 pl-5">
                  {item.children.map((child, childIndex) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        aria-current={isActive(child.href) ? 'page' : undefined}
                        className={`chapter-link grid-cols-[2.75rem_minmax(0,1fr)] ${
                          isActive(child.href) ? 'chapter-link-active' : ''
                        }`}
                      >
                        <span className="chapter-number">
                          {itemIndex + 1}.{childIndex + 1}
                        </span>
                        <span>{child.shortTitle ?? child.title}</span>
                      </Link>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
