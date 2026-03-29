'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

export const TableOfContents: React.FC = () => {
  const [headings, setHeadings] = useState<Heading[]>([])
  const pathname = usePathname()

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      const articleElement = document.querySelector('article, main')
      if (!articleElement) return

      const headingElements = articleElement.querySelectorAll('h2, h3')
      const headingData: Heading[] = []

      headingElements.forEach((heading) => {
        if (heading.id) {
          headingData.push({
            id: heading.id,
            text: heading.textContent || '',
            level: parseInt(heading.tagName[1]),
          })
        }
      })

      setHeadings(headingData)
    })

    return () => cancelAnimationFrame(rafId)
  }, [pathname])

  if (headings.length === 0) return null

  return (
    <nav
      aria-labelledby="page-navigation"
      className="sticky-aside w-56 max-h-[calc(100dvh-6rem)] overflow-y-auto"
    >
      <ul>
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`py-1 ${heading.level === 3 ? 'sub-nav-item' : ''}`}
          >
            <a href={`#${heading.id}`} className="text-sm hover:underline">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
