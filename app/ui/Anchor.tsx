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

  return (
    <Link
      className={`rounded w-full px-4 py-1 hover:bg-primary-surface hover:text-primary-text ${isActive ? 'border-l-4 bg-primary-surface border-primary text-primary-text' : ''} ${className}`}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
