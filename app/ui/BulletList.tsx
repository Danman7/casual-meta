import React from 'react'
import * as FaIcons from 'react-icons/fa6'
import * as GiIcons from 'react-icons/gi'
import * as IoIcons from 'react-icons/io5'
import * as MdIcons from 'react-icons/md'

const ICON_LIBRARIES = {
  gi: GiIcons,
  fa: FaIcons,
  md: MdIcons,
  io: IoIcons,
} as const

interface BulletListProps {
  icon: string
  items: React.ReactNode[]
  className?: string
}

export const BulletList: React.FC<BulletListProps> = ({
  icon,
  items,
  className,
}) => {
  // Parse icon string like "gi/GiDeathSkull" or just "GiDeathSkull"
  const [library, iconName] = icon.includes('/')
    ? icon.split('/')
    : [icon.slice(0, 2).toLowerCase(), icon]

  const iconLib = ICON_LIBRARIES[library as keyof typeof ICON_LIBRARIES]
  const IconComponent = iconLib?.[iconName as keyof typeof iconLib] as
    | React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
    | undefined

  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found`)
    return null
  }

  return (
    <ul role="list" className={className}>
      {items.map((item, index) => (
        <li key={index} className="ml-2 flex gap-2">
          <IconComponent aria-hidden className="shrink-0 mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
