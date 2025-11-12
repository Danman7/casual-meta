import Image from 'next/image'

import mk1Title from '@/app/assets/mk1/mk1-title.webp'
import { MK1_BASE_URL, MK1_TITLE } from '@/app/constants'
import { BulletList } from '@/app/ui/BulletList'
import { PageTitle } from '@/app/ui/PageTitle'
import { SubPageNav } from '@/app/ui/SubPageNav'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  MK1_TITLE,
  'Mortal Kombat 1 or MK1 is the latest chapter in the long-running, celebrated fighting game series.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle
        title="Mortal Kombat 1"
        subtitle="There are fates worse than death."
      />

      <p>
        Mortal Kombat 1 or MK1 is the latest chapter in the long-running,
        celebrated fighting game series. Following its predecessors, it is
        distinguished by gory visuals and fast-paced dueling action.
      </p>

      <Image src={mk1Title} alt="Mortal Kombat 1 Title Screen" />

      <p>
        As a fighting game it has both similarities and differences from other
        titles in the genre such as Street Fighter and Tekken, as well as other
        titles in the series. The game has a steep learning cure and takes time
        to grasp. The extensive in-game tutorial does a good job at explaining
        the mechanics, both basic and advanced. However, it lacks some community
        terms, overall strategy and per-character breakdowns.
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
