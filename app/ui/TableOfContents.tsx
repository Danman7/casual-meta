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
      className="sticky top-0 max-h-screen overflow-y-auto w-56 pt-10 pr-4"
    >
      <h4
        id="page-navigation"
        className="font-bold mb-4 border-b border-foreground/10"
      >
        On This Page
      </h4>

      <ul id="toc-root" className="mt-0">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? 'ml-4' : ''}>
            <a href={`#${heading.id}`} className="text-sm hover:underline">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
