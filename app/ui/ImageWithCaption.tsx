import Image, { StaticImageData } from 'next/image'
import { useId } from 'react'

import { Flavor } from '@/app/ui/Flavor'

export const ImageWithCaption: React.FC<{
  src: StaticImageData
  alt: string
  caption: string
  className?: string
}> = ({ src, alt, caption, className }) => {
  const captionId = useId()

  return (
    <figure className="text-sm text-light space-y-1">
      <Image
        src={src}
        alt={alt}
        aria-describedby={captionId}
        className={`shadow-sm rounded ${className}`}
      />

      <figcaption id={captionId}>
        <Flavor>{caption}</Flavor>
      </figcaption>
    </figure>
  )
}
