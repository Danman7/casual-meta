'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Anchor: React.FC<{
  children: React.ReactNode
  href: string
  className?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}> = ({ href, children, className = '', onClick }) => {
  const pathname = usePathname()

  const isActive = pathname.startsWith(href)

  const activeClasses = isActive ? 'opacity-100! border-b' : ''

  return (
    <Link
      className={`inline-flex items-center gap-2 ${activeClasses} ${className}`}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
