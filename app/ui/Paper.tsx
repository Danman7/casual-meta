import React from 'react'
import { IconType } from 'react-icons'
import { GiMagnifyingGlass } from 'react-icons/gi'

export const Paper: React.FC<
  React.PropsWithChildren<{
    icon?: IconType
    isExample?: boolean
  }>
> = ({ children, icon, isExample }) => {
  const paperIcon = icon ?? (isExample ? GiMagnifyingGlass : undefined)

  return (
    <div
      className={`paper flex ${isExample ? ' italic text-foreground/80 text-sm gap-2 p-2' : 'gap-2 p-3'}`}
    >
      {paperIcon && (
        <div className="text-xl mt-1">{React.createElement(paperIcon)}</div>
      )}

      <div className="space-y-2">{children}</div>
    </div>
  )
}
