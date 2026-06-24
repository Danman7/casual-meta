'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useId, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

export const TableOfContents: React.FC = () => {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState('')
  const titleId = useId()
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
      setActiveId(headingData[0]?.id ?? '')
    })

    return () => cancelAnimationFrame(rafId)
  }, [pathname])

  useEffect(() => {
    if (headings.length === 0) return

    const headingElements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((heading): heading is HTMLElement => Boolean(heading))

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeading = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0]

        if (visibleHeading?.target.id) {
          setActiveId(visibleHeading.target.id)
        }
      },
      {
        rootMargin: '-15% 0px -70% 0px',
        threshold: 0,
      },
    )

    headingElements.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav
      aria-labelledby={titleId}
      className="book-sidebar sticky-aside max-h-[calc(100dvh-6rem)] w-full overflow-y-auto pb-8"
    >
      <p id={titleId} className="lead mb-3 text-xs text-foreground/50">
        On this page
      </p>

      <ul className="space-y-0">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.level === 3 ? 'ml-3' : undefined}
          >
            <a
              href={`#${heading.id}`}
              aria-current={activeId === heading.id ? 'location' : undefined}
              className={`toc-link ${
                activeId === heading.id ? 'toc-link-active' : ''
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
