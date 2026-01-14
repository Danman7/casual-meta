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
      className={`px-4 sm:px-6 py-1 w-full inline-flex items-center hover:pl-8 hover:text-primary transition-all ${isActive ? 'text-primary' : ''} ${className}`}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
