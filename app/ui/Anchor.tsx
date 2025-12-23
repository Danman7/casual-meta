'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoMdArrowForward } from 'react-icons/io'

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
      className={`inline-flex items-center gap-1 ${className}`}
      href={href}
      onClick={onClick}
    >
      {isActive && <IoMdArrowForward />}
      {children}
    </Link>
  )
}
