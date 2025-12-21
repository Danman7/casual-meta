import Image from 'next/image'

import mk1Title from '@/app/assets/mk1/mk1-title.webp'
import { MK_BASE_URL } from '@/app/constants'
import { SubPageNav } from '@/app/ui/SubPageNav'
import { generatePageMetadata } from '@/lib/metadata'

export const navTitle = 'Mortal Kombat 1'

export const metadata = generatePageMetadata(
  navTitle,
  'Mortal Kombat 1 or MK1 is the latest chapter in the long-running, celebrated fighting game series.',
)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

      <Image
        src={mk1Title}
        alt="Mortal Kombat 1 Title Screen"
        className="shadow-md"
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
    </>
  )
}
