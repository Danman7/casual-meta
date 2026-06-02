import React from 'react'
import { IconType } from 'react-icons'

export const Paper: React.FC<
  React.PropsWithChildren<{
    icon?: IconType
    isPrimary?: boolean
  }>
> = ({ children, icon, isPrimary }) => (
  <div className="paper flex items-stretch">
    {icon && (
      <div
        className={`text-background flex items-center px-1 text-xl ${isPrimary ? 'bg-primary/80' : 'bg-foreground/80'}`}
      >
        {React.createElement(icon)}
      </div>
    )}

    <div className="text-sm italic p-2 space-y-2">{children}</div>
  </div>
)
