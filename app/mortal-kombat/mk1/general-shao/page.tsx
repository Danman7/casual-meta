import Image from 'next/image'
import Link from 'next/link'

import Shao from '@/app/assets/mk1/shao.webp'
import shao2 from '@/app/assets/mk1/shao_2.webp'
import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { Flavor } from '@/app/ui/Flavor'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { Pill } from '@/app/ui/Pill'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'
import { createRouteLookup } from '@/lib/routeLinks'

export const navOrder = 10

export const navTitle = 'General Shao'

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'A breakdown of General Shao in Mortal Kombat 1.',
)

const mkRoute = createRouteLookup(MK_BASE_URL)

export default async function Page() {
  return (
    <>
      <h1 className="page-title">{navTitle}</h1>

      <Section className="md:flex items-center gap-4">
        <Image
          className="max-h-72 object-cover object-[0%_0%]  md:w-1/2 md:max-h-full"
          src={Shao}
          alt="General Shao in Mortal Kombat 1"
        />

        <p className="md:w-1/2">
          General Shao is a <em>stance</em> based bruiser that excels at
          scouting and bullying his opponents in{' '}
          <Link href={mkRoute('Neutral')}>Neutral</Link>. His axe controls space
          with far-reaching disjointed normals, while the unarmed stance gives
          him faster and safer mix-ups with plus frames. At the same time he
          lacks good full screen moves and has punishable gaps in his offense.
          Both issues can be addressed with the right Kameo partner.
        </p>
      </Section>

      <Section title="Axe stance" id="axe-stance">
        <Flavor>Simple tactics for Axe stance.</Flavor>

        <p className="font-bold">
          The Axe is your primary Neutral tool. Shao's pressure peaks in Unarmed
          stance, but he looses his reach. How you transitions between the two
          can make or break a round.
        </p>

        <p>
          <Pill>Standing 2</Pill> is one of the best standing normals in the
          game. It is a fast, safe, disjointed high attack with excellent reach.
          Begin by practicing with a CPU to stay a few steps away from them and
          poke at its maximum reach.
        </p>

        <ImageWithCaption
          className="max-h-96 object-cover object-[0%_50%]"
          src={shao2}
          alt="General Shao doing standing 2 attack."
          caption="Shao's Standing 2 controls a big chunk of space in front of him. No opponent can comfortably approach without respecting it."
        />
      </Section>
    </>
  )
}
