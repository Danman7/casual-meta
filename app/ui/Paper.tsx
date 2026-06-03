import React from 'react'
import { IconType } from 'react-icons'

export const Paper: React.FC<
  React.PropsWithChildren<{
    icon?: IconType
    isPrimary?: boolean
    isExample?: boolean
  }>
> = ({ children, icon, isPrimary, isExample }) => (
  <div className="paper flex items-stretch">
    {icon && (
      <div
        className={`text-background flex items-center px-1 text-xl md:text-2xl ${isPrimary ? 'bg-primary/80' : 'bg-foreground/80'}`}
      >
        {React.createElement(icon)}
      </div>
    )}

    <div className={`text-sm p-2 space-y-2${isExample ? ' italic' : ''}`}>
      {children}
    </div>
  </div>
)
