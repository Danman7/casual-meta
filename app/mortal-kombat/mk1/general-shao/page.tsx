import Image from 'next/image'
import Link from 'next/link'

import Shao from '@/app/assets/mk1/shao.webp'
import shao2 from '@/app/assets/mk1/shao_2.webp'
import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { Flavor } from '@/app/ui/Flavor'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { PageTitle } from '@/app/ui/PageTitle'
import { Pill } from '@/app/ui/Pill'
import { ProsConsList } from '@/app/ui/ProsConsList'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 10

export const navTitle = 'General Shao'

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'A breakdown of General Shao in Mortal Kombat 1.',
)

export default async function Page() {
  return (
    <>
      <PageTitle title={navTitle} subtitle="Character overview & guide" />

      <Section className="md:flex items-center gap-4">
        <Image
          className="max-h-72 object-cover object-[0%_0%]  md:w-1/2 md:max-h-full"
          src={Shao}
          alt="General Shao in Mortal Kombat 1"
        />

        <p className="md:w-1/2">
          General Shao is a <em>stance</em> based bruiser that excels at
          scouting and bullying his opponents in{' '}
          <Link href={`${MK_BASE_URL}/neutral`}>Neutral</Link>. His axe controls
          space with far-reaching disjointed normals, while the unarmed stance
          gives him faster and safer mix-ups with plus frames. At the same time
          he lacks good full screen moves and has punishable gaps in his
          offense. Both issues can be addressed with the right Kameo partner.
        </p>
      </Section>

      <ProsConsList
        pros={[
          <>
            <p className="font-semibold">Very strong close-range offense.</p>
            <Flavor>
              Some of the best normals in the game in Axe stance. Strong mix-up
              in both stances. Excellent pressure, especially in the corner.
              Armored options.
            </Flavor>
          </>,
          <>
            <p className="font-semibold">Decent defense.</p>
            <Flavor>
              Superb durability at 1100 HP. Good air control due to his height.
            </Flavor>
          </>,
          <>
            <p className="font-semibold">Kameos synergy.</p>
            <Flavor>
              Because of his high health and versatile move set, he has good
              Kameo choices.
            </Flavor>
          </>,
        ]}
        cons={[
          <>
            <p className="font-semibold">Poor at long range.</p>
            <Flavor>
              He has no projectiles or teleports. His only full-screen special
              is slow.
            </Flavor>
          </>,
          <>
            <p className="font-semibold">Stances have to be managed.</p>
            <Flavor>
              The transition from Axe to Unarmed can make or break a round.
            </Flavor>
          </>,
          <>
            <p className="font-semibold">Openings in his attacks.</p>
            <Flavor>
              Some of his moves have punishable gaps. Primarily at higher
              levels.
            </Flavor>
          </>,
        ]}
      />

      <Section title="Axe stance" id="axe-stance">
        <Flavor>
          In this section we will look at a simple way to play Shao with the axe
          in hand.
        </Flavor>

        <p className="font-bold">
          The Axe is your primary Neutral tool. Shao's pressure peaks in Unarmed
          stance, but he looses his reach. How you transitions between the two
          can make or break a round. So this is where we start.
        </p>

        <p>
          <Pill>Standing 2</Pill> is one of the best standing normals in the
          game. It is a fast, safe, disjointed high attack with excellent reach.
          Begin by practicing with a CPU to stay a few steps away from them and
          poke at its maximum reach.
        </p>

        <ImageWithCaption
          className="shadow-md max-h-96 object-cover object-[0%_50%]"
          src={shao2}
          alt="General Shao doing standing 2 attack."
          caption="Shao's Standing 2 controls a big chunk of space in front of him. No opponent can comfortably approach without respecting it."
        />
      </Section>
    </>
  )
}
