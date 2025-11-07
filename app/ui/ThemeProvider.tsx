'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function ThemeProvider() {
  const pathname = usePathname()

  useEffect(() => {
    const body = document.body

    body.removeAttribute('data-theme')

    if (pathname.startsWith('/mortal-kombat-1')) {
      body.setAttribute('data-theme', 'mk1')
    } else if (pathname.startsWith('/warhammer-40k')) {
      body.setAttribute('data-theme', 'warhammer')
    }
  }, [pathname])

  return null
}
