import mk1Title from '@/app/assets/mk1/mk1-title.webp'
import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { SubPageNav } from '@/app/ui/SubPageNav'
import { generatePageMetadata } from '@/lib/metadata'

export const navTitle = 'Mortal Kombat 1'

export const metadata = generatePageMetadata(
  MK_TITLE,
  'Mortal Kombat 1 or MK1 is the latest chapter in the long-running, celebrated fighting game series.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1>{MK_TITLE}</h1>

      <ImageWithCaption
        src={mk1Title}
        alt="Mortal Kombat 1 Title Screen"
        className="shadow-md"
        caption="Mortal Kombat 1 is the 2023 installment - a new era, shaped by the Fire God Liu Kang."
      />

      <p>
        As a fighting game MK1 has both similarities and differences from other
        titles in the genre or even titles in the series. The game has a steep
        learning curve and takes effort to grasp. The extensive in-game tutorial
        does a good job at explaining the mechanics, both basic and advanced.
        However, it lacks some community terms, overall strategy and
        per-character breakdowns.
      </p>

      <SubPageNav route={`${MK_BASE_URL}/mk1`} />
    </article>
  )
}
