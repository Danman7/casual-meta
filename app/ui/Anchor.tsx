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

  const isActive = pathname.endsWith(href)

  return (
    <Link
      className={`px-6 py-1 w-full inline-flex items-center cursor-pointer!  hover:text-primary active:inset-shadow-sm ${isActive ? 'bg-surface shadow-sm  rounded' : ''} ${className}`}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
