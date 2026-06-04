import React from 'react'
import { IconType } from 'react-icons'
import { GiMagnifyingGlass } from 'react-icons/gi'

export const Paper: React.FC<
  React.PropsWithChildren<{
    icon?: IconType
    isPrimary?: boolean
    isExample?: boolean
  }>
> = ({ children, icon, isPrimary, isExample }) => {
  const paperIcon = icon ?? (isExample ? GiMagnifyingGlass : undefined)

  return (
    <div className="paper flex items-stretch">
      {paperIcon && (
        <div
          className={`text-background flex items-center px-1 text-xl md:text-2xl ${isPrimary ? 'bg-primary/80' : 'bg-foreground/80'}`}
        >
          {React.createElement(paperIcon)}
        </div>
      )}

      <div className={`text-sm p-2 space-y-2${isExample ? ' italic' : ''}`}>
        {children}
      </div>
    </div>
  )
}
