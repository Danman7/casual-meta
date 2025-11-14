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

  const baseClasses =
    'hover:text-foreground inline-flex items-center gap-2 no-underline!'

  const activeClasses = isActive ? '' : ' text-foreground!'

  const combinedClasses = [baseClasses, activeClasses, className]
    .filter(Boolean)
    .join(' ')

  return (
    <Link className={combinedClasses} href={href} onClick={onClick}>
      {children}
    </Link>
  )
}
