import Image from 'next/image'
import Link from 'next/link'
import { IoIosThumbsDown, IoIosThumbsUp } from 'react-icons/io'

import Shao from '@/app/assets/mk1/shao.webp'
import shao2 from '@/app/assets/mk1/shao_2.webp'
import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { Callout } from '@/app/ui/Callout'
import { Emphasis } from '@/app/ui/Emphasis'
import { Flavor } from '@/app/ui/Flavor'
import { FlexWrapper } from '@/app/ui/FlexWrapper'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { PageTitle } from '@/app/ui/PageTitle'
import { Pill } from '@/app/ui/Pill'
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

      <div className="md:flex items-center gap-4">
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
      </div>

      <Callout className="space-y-4">
        <h2 id="play-or-skip" className="pt-0! mt-0! border-t-0">
          Play or skip?
        </h2>

        <Flavor className="mb-4">Should you try General Shao?</Flavor>

        <div className="md:flex gap-4">
          <div className="md:w-1/2">
            <FlexWrapper className="font-bold text-success">
              <IoIosThumbsUp /> Maybe, yes
            </FlexWrapper>

            <ul className="divide-y space-y-4 *:pb-2 *:last:pb-0 md:mb-0! mb-8">
              <li>Shao has a strong mix-up in both stances.</li>

              <li>At 1100 HP he is durable.</li>

              <li>Some of the best normals in Axe stance.</li>

              <li>Good air control due to his height.</li>

              <li>
                His close-range pressure is excellent, especially in the corner.
              </li>
            </ul>
          </div>

          <div className="md:w-1/2">
            <FlexWrapper className="font-bold text-error">
              <IoIosThumbsDown /> Maybe, no
            </FlexWrapper>

            <ul className="divide-y space-y-4 *:pb-2 *:last:pb-0 mb-0!">
              <li>Transition between axe and no axe has to be managed well.</li>

              <li>
                Some of his key moves have gaps that can be exploited by
                experienced players.
              </li>

              <li>
                He has no projectiles or teleports. His only full-screen special
                is slow.
              </li>
            </ul>
          </div>
        </div>
      </Callout>

      <h2 id="the-axe">The Axe</h2>

      <Flavor>
        In this section we will look at a simple way to play Shao with the axe
        in hand.
      </Flavor>

      <Emphasis>
        The Axe is your primary Neutral tool. Shao's pressure peaks in Unarmed
        stance, but he looses his reach. How you transitions between the two can
        make or break a round. So this is where we start.
      </Emphasis>

      <p>
        <Pill>Standing 2</Pill> is one of the best standing normals in the game.
        It is a fast, safe, disjointed high attack with excellent reach. Begin
        by practicing with a CPU to stay a few steps away from them and poke at
        its maximum reach.
      </p>

      <ImageWithCaption
        className="shadow-md max-h-96 object-cover object-[0%_50%]"
        src={shao2}
        alt="General Shao doing standing 2 attack."
        caption="Shao's Standing 2 controls a big chunk of space in front of him. No opponent can comfortably approach without respecting it."
      />

      <h2 id="unarmed">Unarmed stance</h2>
    </>
  )
}
