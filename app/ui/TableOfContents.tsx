'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io'

interface Heading {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [open, setOpen] = useState(false)
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
    <nav className="pb-2 xl:fixed xl:top-20 xl:right-6 ">
      <button
        type="button"
        className="w-full inline-flex items-center gap-1 text-foreground hover:opacity-80"
        aria-expanded={open}
        aria-controls="toc-root"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
        <span>On This Page</span>
      </button>

      {open && (
        <ul id="toc-root" className="mt-2 space-y-1">
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
                  setOpen(false)
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
      )}
    </nav>
  )
}
