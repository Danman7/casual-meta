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
    <figure className="text-sm text-light space-y-2 my-6">
      <Image
        src={src}
        alt={alt}
        aria-describedby={captionId}
        className={`article-img ${className}`}
      />

      <figcaption id={captionId}>
        <div className="flavor">{caption}</div>
      </figcaption>
    </figure>
  )
}
