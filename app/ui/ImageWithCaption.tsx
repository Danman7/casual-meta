import Image, { StaticImageData } from 'next/image'
import { useId } from 'react'

export const ImageWithCaption: React.FC<{
  src: StaticImageData
  alt: string
  caption: string
  className?: string
}> = ({ src, alt, caption, className }) => {
  const captionId = useId()

  return (
    <figure className="overflow-hidden rounded-xl shadow-md text-light my-6">
      <Image
        src={src}
        alt={alt}
        aria-describedby={captionId}
        className={`${className}`}
      />

      <figcaption
        className="bg-surface px-4 py-2 border-t-2 border-primary"
        id={captionId}
      >
        <p className="my-0">{caption}</p>
      </figcaption>
    </figure>
  )
}
