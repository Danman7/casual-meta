'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

type PageTransitionProps = {
  children: React.ReactNode
  className?: string
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className,
}) => {
  const pathname = usePathname()

  const combinedClassName = [
    'animate-fade-in',
    'motion-reduce:animate-none',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div key={pathname} className={combinedClassName}>
      {children}
    </div>
  )
}

export default PageTransition
