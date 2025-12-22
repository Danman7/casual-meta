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
    // Use requestAnimationFrame to defer the DOM query until after render
    const rafId = requestAnimationFrame(() => {
      // Extract headings from the page
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
    <nav className="">
      <h4 className="font-bold mb-2">On This Page</h4>

      <ul id="toc-root" className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? 'ml-4' : ''}>
            <a
              href={`#${heading.id}`}
              className="text-sm"
              onClick={(e) => {
                e.preventDefault()

                const element = document.getElementById(heading.id)
                if (element) {
                  const y = element.getBoundingClientRect().top + window.scrollY
                  window.scrollTo({ top: y, behavior: 'smooth' })
                }
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
