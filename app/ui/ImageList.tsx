import Image, { type StaticImageData } from 'next/image'
import type { ReactNode } from 'react'

type ImageListItem = {
  title: ReactNode
  image: StaticImageData
  alt?: string
  imageClassName?: string
}

export function ImageList({ items }: { items: readonly ImageListItem[] }) {
  return (
    <div className="flex-list font-bold justify-center">
      {items.map((item, index) => (
        <div key={index} className="flex-center flex-col w-full md:w-auto">
          <div>{item.title}</div>
          <div className="md:h-46 flex items-end">
            <Image
              src={item.image}
              className={item.imageClassName}
              alt={
                item.alt ?? (typeof item.title === 'string' ? item.title : '')
              }
            />
          </div>
        </div>
      ))}
    </div>
  )
}
