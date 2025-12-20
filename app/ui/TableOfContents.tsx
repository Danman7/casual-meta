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
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
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
  }, [pathname])

  if (headings.length === 0) return null

  return (
    <nav className="">
      <button
        type="button"
        className="w-full inline-flex items-center gap-1 text-foreground hover:text-primary cursor-pointer"
        aria-expanded={open}
        aria-controls="toc-root"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
        <span>On This Page</span>
      </button>

      {open && (
        <ul id="toc-root" className="space-y-1">
          {headings.map((heading) => (
            <li key={heading.id} className={heading.level === 3 ? 'ml-4' : ''}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  setOpen(false)
                  const element = document.getElementById(heading.id)
                  if (element) {
                    const y =
                      element.getBoundingClientRect().top + window.scrollY
                    window.scrollTo({ top: y, behavior: 'smooth' })
                  }
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
