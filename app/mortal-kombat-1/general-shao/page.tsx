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
        subtitle="In this new timelineIn this new timeline Shao is not a khan, a ruler of Outworld, but a general in its army, under the rule of queen Sindel."
      />

      <p>
        General Shao is a mid-range brawler with a heavy emphasis on disjointed
        normals with good reach. He is a stance-based fighter, alternating
        between Axe and No Axe stances, each providing a different move set. He
        excels at the <Link href={`${MK1_BASE_URL}/neutral`} /> game with good
        speed and a mix of both standing overheads and lows. If players spend
        some time practicing even his low difficulty combos, they will also find
        him a damaging character.
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
            command grabs
          </>,
        ]}
      />
      <BulletList
        className="text-error"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>Kameo dependent</strong> - needs assists to patch gaps and
            confirm mids.
          </>,
          <>
            <strong>Unsafe pressure</strong> - safe moves have gaps; gapless
            ones are unsafe. neutral.
          </>,
        ]}
      />
    </article>
  )
}
