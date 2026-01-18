import Image, { StaticImageData } from 'next/image'

import { Flavor } from '@/app/ui/Flavor'

export const ImageWithCaption: React.FC<{
  src: StaticImageData
  alt: string
  caption: string
  className?: string
}> = ({ src, alt, caption, className }) => {
  return (
    <figure className="text-sm text-light space-y-1">
      <Image src={src} alt={alt} className={`shadow-sm rounded ${className}`} />

      <figcaption>
        <Flavor>{caption}</Flavor>
      </figcaption>
    </figure>
  )
}
