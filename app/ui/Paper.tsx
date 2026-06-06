import React from 'react'
import { IconType } from 'react-icons'

export const Paper: React.FC<
  React.PropsWithChildren<{
    title?: string
    icon?: IconType
  }>
> = ({ children, title, icon }) => (
  <div className="paper my-5 text-sm">
    {icon &&
      React.createElement(icon, {
        className:
          'text-9xl absolute text-foreground/6 top-0 right-0 -z-1 rotate-20',
      })}

    {title && <p className="font-bold uppercase">{title}</p>}

    {children}
  </div>
)
