'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaAsterisk } from 'react-icons/fa'

export const Anchor: React.FC<{
  children: React.ReactNode
  href: string
}> = ({ href, children }) => {
  const pathname = usePathname()

  const isActive = pathname.endsWith(href)

  return (
    <Link href={href} aria-current={isActive ? 'page' : undefined}>
      {isActive && <FaAsterisk />}

      {children}
    </Link>
  )
}
