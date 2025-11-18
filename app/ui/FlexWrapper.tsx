import React from 'react'

export const FlexWrapper: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-2 items-center ${className}`}>
      {children}
    </div>
  )
}
