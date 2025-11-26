'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const pathname = usePathname()

  useEffect(() => {
    // Extract headings from the page
    const articleElement = document.querySelector('article, main')
    if (!articleElement) return

    const headingElements = articleElement.querySelectorAll('h2, h3')
    const headingData: Heading[] = []

    headingElements.forEach((heading) => {
      const id =
        heading.id ||
        heading.textContent
          ?.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]/g, '') ||
        ''
      if (!heading.id && id) {
        heading.id = id
      }

      headingData.push({
        id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName[1]),
      })
    })

    setHeadings(headingData)
  }, [pathname])

  useEffect(() => {
    // Track active heading on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -80% 0px' },
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className="hidden xl:block w-64 px-6 py-6 sticky top-0 h-screen overflow-y-auto">
      <h2 className="font-bold text-sm mb-4 text-foreground/80">
        On This Page
      </h2>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? 'ml-4' : ''}>
            <a
              href={`#${heading.id}`}
              className={`block hover:text-primary transition-colors ${
                activeId === heading.id
                  ? 'text-primary font-semibold'
                  : 'text-foreground/70'
              }`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
