'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SEGMENT_LABELS: Record<string, string> = {
  homm3: 'Heroes of Might and Magic 3',
  mk1: 'Mortal Kombat 1',
  wh40k: 'Warhammer 40k',
}

function toTitleCase(input: string) {
  return input
    .split('-')
    .map((s) => (s ? s[0].toUpperCase() + s.slice(1) : s))
    .join(' ')
}

export function Breadcrumbs() {
  const pathname = usePathname()

  if (!pathname || pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)

  const items = segments.map((seg, idx) => {
    const href = '/' + segments.slice(0, idx + 1).join('/')
    const label = SEGMENT_LABELS[seg] || toTitleCase(decodeURIComponent(seg))
    return { href, label }
  })

  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-foreground/80">
        <li>
          <Link className="hover:underline" href="/">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            <span className="text-foreground/50">/</span>
            {i === items.length - 1 ? (
              <span className="text-foreground/90" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link className="hover:underline" href={item.href}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
