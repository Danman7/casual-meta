import Image, { StaticImageData } from 'next/image'

import { Section } from '@/app/ui/Section'

export const ImageTextSection: React.FC<{
  image: StaticImageData
  imageAlt: string
  text: React.ReactNode
  imageClassName?: string
}> = ({ image, imageAlt, text, imageClassName }) => (
  <Section className="md:flex items-center gap-4">
    <Image
      className={`max-h-72 object-cover object-[0%_0%]  md:w-1/2 md:max-h-full ${imageClassName}`}
      src={image}
      alt={imageAlt}
      loading="eager"
    />

    <div className="md:w-1/2">
      <p>{text}</p>
    </div>
  </Section>
)
