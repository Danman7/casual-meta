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
      className={`w-full inline-flex items-center px-4 sm:px-6 py-1.5 border-l-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:text-primary hover:bg-alt-surface ${isActive ? 'text-primary bg-alt-surface border-primary' : 'border-transparent'} ${className}`}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
