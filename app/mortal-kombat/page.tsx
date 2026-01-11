import Image from 'next/image'

import attackPhases from '@/app/assets/mk/attack_phases.webp'
import MKMonk from '@/app/assets/mk/monk.webp'
import Arena from '@/app/assets/mk/shang_tung_arena.webp'
import duelStart from '@/app/assets/mk1/duel_start.webp'
import { MK_TITLE } from '@/app/constants'
import { Callout } from '@/app/ui/Callout'
import { Diagram } from '@/app/ui/Diagram'
import { Flavor } from '@/app/ui/Flavor'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { PageTitle } from '@/app/ui/PageTitle'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  MK_TITLE,
  'Mortal Kombat 1 (MK1) is the latest chapter in the long-running, celebrated fighting game series.',
)

export default async function Page() {
  return (
    <>
      <PageTitle title={MK_TITLE} />

      <Section>
        <Flavor>
          This section is dedicated to the modern Mortal Kombat series - the
          NetherRealm Studios (NRS) era.
        </Flavor>

        <Callout>
          <Flavor>
            NetherRealm Studios acquired all rights to the Mortal Kombat
            trademark in 2009. This led to the creation of Mortal Kombat (MK9),
            Mortal Kombat X, Mortal Kombat 11, and Mortal Kombat 1.
          </Flavor>
        </Callout>
      </Section>

      <Section title="What is Mortal Kombat?" id="what-is-mk">
        <p>
          Mortal Kombat (MK) is a popular franchise of fighting games best known
          for fast-paced action and gory graphics. At its core, it's a duel to
          the death where two players try to outsmart each other within the
          allotted time and space. Whoever's life drops to zero points, loses a
          round. Win two rounds and you win the duel.
        </p>

        <ImageWithCaption
          src={duelStart}
          alt='The "Fight" screen from the start of a duel.'
          caption="A duel in Mortal Kombat 1 between Liu Kang and Raiden is about to begin. They are classic series characters, appearing in every game."
        />

        <p>
          MK is a long runing series. The first game saw the world in 1992 and
          since then over 25 games, spinoffs and version have been released.
          There is a wide variety of characters and fighting styles to explore,
          which keeps attracting new players.
        </p>

        <Image
          src={MKMonk}
          alt="A Shadow Priest from the classical Evil Tower stage."
          className="mx-auto"
        />
      </Section>

      <Section>
        <p>
          The essence of learning Mortal Kombat is adapting to how quickly
          action unfolds, which makes mastery an arduous journey. Nevertheless,
          it comes down to simple mechanics that can be broken down and learned.
        </p>

        <p className="font-bold">
          You may not have someone else's reflexes, but you can understand how
          they make decisions.
        </p>

        <ImageWithCaption
          src={Arena}
          alt="Shang Tsung's arena."
          caption="Shang Tsung, sitting on his throne, watching the combatants is a classic Mortal Kombat scene."
        />

        <p>
          Online play can be rough for beginners - you might go 15-20 games
          without a win. This can be very discouraging. We will try to explain
          the game's quirks and teach you about reading and conditioning your
          opponent. It's as much about quick reactions as it is about mind
          games. We will focus on the online Player vs Player (PvP) aspect,
          giving you the tools to learn any character.
        </p>
      </Section>

      <Section title="Diagrams" id="diagrams">
        <p>
          To better visualise mechanics, we use sprites from the older MK games
          to form diagrams. They are primitive, but easy to read and color-code.
        </p>

        <Diagram description="We can split any attack into three sections - start-up in blue, active in red and recovery in green.">
          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>
              <span className="text-blue-700">Start-up</span> &rarr;{' '}
              <span className="text-red-700">Active</span>
              &rarr; <span className="text-green-700">Recovery</span>
            </div>

            <Image
              src={attackPhases}
              alt="The three phases of the basic punch."
            />
          </div>
        </Diagram>
      </Section>
    </>
  )
}
