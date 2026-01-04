import Image from 'next/image'
import Link from 'next/link'

import wh40kTitle from '@/app/assets/wh40k/wh40k-battle.webp'
import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
import { BulletList } from '@/app/ui/BulletList'
import { SubPageNav } from '@/app/ui/SubPageNav'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  WH40K_TITLE,
  'In the grim darkness of the far future, there is only war.',
)

export default async function Page() {
  return (
    <>
      <h1>{WH40K_TITLE}</h1>

      <p>
        The{' '}
        <Link href="https://assets.warhammer-community.com/warhammer40000_core&key_corerules_eng_24.09-5xfayxjekm.pdf">
          Core Rulebook
        </Link>{' '}
        describes Warhammer 40,000 as a tabletop war game in which players
        command armies of Citadel miniatures and attempt to defeat their
        opponent through a mixture of skill, tactics and luck.
      </p>

      <Image
        src={wh40kTitle}
        alt="A small detachment of Space Marines"
        className="shadow-md"
      />

      <p>
        That very rulebook should be the primary source of information regarding
        Warhammer 40k’s rules as they tend to periodically change. Furthermore,
        the table-top nature of the game tends to bring about disputes about how
        a situation is to be resolved. The latter argument is a central cause
        for the detailed instructions that accompany each and every Warhammer
        40k rule, data sheet or ability.
      </p>

      <div className="text-lg my-8 space-y-4">
        <p>We will try to:</p>
        <BulletList
          icon="GiDeathSkull"
          items={[
            'Shed the lore and painting.',
            'Simplify the rules.',
            'Introduce concepts that may not be in the rulebook.',
          ]}
        />
      </div>
    </>
  )
}
