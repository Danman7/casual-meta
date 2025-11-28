import Image, { StaticImageData } from 'next/image'

export const ImageWithCaption: React.FC<{
  src: StaticImageData
  alt: string
  caption: string
  className?: string
}> = ({ src, alt, caption, className }) => {
  return (
    <figure className="text-sm text-light text-center">
      <Image src={src} alt={alt} className={`shadow-md ${className}`} />

      <figcaption>{caption}</figcaption>
    </figure>
  )
}
