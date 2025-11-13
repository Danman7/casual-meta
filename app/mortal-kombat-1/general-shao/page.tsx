import Link from 'next/link'

import { MK1_BASE_URL, MK1_TITLE } from '@/app/constants'
import { BulletList } from '@/app/ui/BulletList'
import { PageTitle } from '@/app/ui/PageTitle'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 10

export const navTitle = 'General Shao'

export const metadata = generatePageMetadata(
  `${MK1_TITLE}: ${navTitle}`,
  'A breakdown of General Shao in Mortal Kombat 1.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle
        title={navTitle}
        subtitle="Born weak but forged through brutal training, General Shao became Outworld’s strongest warrior and a tactical genius. Though sworn to serve Sindel, his true loyalty lies with Outworld itself."
      />

      <p>
        General Shao is a mid-range brawler with a heavy emphasis on disjointed
        normals with good reach. He is a stance-based fighter, alternating
        between Axe and No Axe stances, each providing a different move set. He
        excels at the <Link href={`${MK1_BASE_URL}/neutral`}>Neutral</Link> game
        with good speed and a mix of both standing overheads and lows. If
        players spend some time practicing even his low difficulty combos, they
        will also find him a damaging character.
      </p>

      <h2>Why play or skip General Shao?</h2>
      <BulletList
        className="text-success"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>Durable</strong> - highest health in the game.
          </>,
          <>
            <strong>Long reach</strong> - disjointed mids and aerials dominate
            neutral.
          </>,
          <>
            <strong>Strong mixup</strong> - multiple overheads, lows, and
            command grabs.
          </>,
          'Shao is a good step away from pure beginner characters into more technical ones - managing the stances without demanding complexity.',
        ]}
      />
      <BulletList
        className="text-warning"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>Armor</strong> - Multiple armored options, including wakeups
            and launches, but some are very punishable.
          </>,
          <>
            <strong>Kameo versatility and dependency</strong> - Shao works well
            a lot of Kameos but is also very dependent on them to patch gaps and
            confirm mids.
          </>,
          <>
            <strong>Stances</strong> - The Axe gives you superb space, while
            unarmed is devastating up close. At the same time playing outside a
            stance’s forte can be difficult.
          </>,
        ]}
      />
      <BulletList
        className="text-error"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>Unsafe pressure</strong> - safe moves have gaps; gapless
            ones are unsafe.
          </>,
        ]}
      />
    </article>
  )
}
