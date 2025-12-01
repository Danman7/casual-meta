import mk1Title from '@/app/assets/mk1/mk1-title.webp'
import { MK1_BASE_URL, MK1_TITLE } from '@/app/constants'
import { BulletList } from '@/app/ui/BulletList'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { SubPageNav } from '@/app/ui/SubPageNav'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  MK1_TITLE,
  'Mortal Kombat 1 or MK1 is the latest chapter in the long-running, celebrated fighting game series.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1>{MK1_TITLE}</h1>

      <p>
        Modern Mortal Kombat is about reading the intentions of your adversary
        and choosing the best course of action in response. Everything any
        character can throw at you can be countered and even punished. But
        things happen so fast!
      </p>

      <p className="text-lg text-light">
        Mortal Kombat is fun, but it can be hard.
      </p>

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

      <div className="text-lg my-8 space-y-4">
        <p>In these pages we will:</p>
        <BulletList
          icon="GiDeathSkull"
          items={[
            'Focus on Player vs Player (PvP)',
            'Give you the toolset to learn any character.',
            "Consolidate the community's knowledge.",
          ]}
        />
      </div>

      <SubPageNav route={MK1_BASE_URL} />
    </article>
  )
}
