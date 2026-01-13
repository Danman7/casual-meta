import Image from 'next/image'
import { TbXboxX, TbXboxY } from 'react-icons/tb'

import attackPhases from '@/app/assets/mk/attack_phases.webp'
import mkLogo from '@/app/assets/mk/mk_logo.webp'
import MKMonk from '@/app/assets/mk/monk.webp'
import duelStart from '@/app/assets/mk1/duel_start.webp'
import { MK_TITLE } from '@/app/constants'
import { Diagram } from '@/app/ui/Diagram'
import { Flavor } from '@/app/ui/Flavor'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { PageTitle } from '@/app/ui/PageTitle'
import { Pill } from '@/app/ui/Pill'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  MK_TITLE,
  'Mortal Kombat 1 (MK1) is the latest chapter in the long-running, celebrated fighting game series.',
)

export default async function Page() {
  return (
    <>
      <Section>
        <PageTitle title={MK_TITLE} />

        <Flavor>
          This section is dedicated to the modern Mortal Kombat series - the
          NetherRealm Studios (NRS) era.
        </Flavor>
      </Section>

      <Section title="What is Mortal Kombat?" id="what-is-mk">
        <Image
          src={mkLogo}
          alt="The Mortal Kombat logo, a dragon in a circle."
          className="float-left pr-4 mb-0! max-w-32 md:max-w-full"
        />
        <p className="text-lg">
          Mortal Kombat (MK) is a long-running franchise of fighting games (and
          comic books, TV shows, etc.), popular for fast-paced action and gory
          graphics. It's recognized by the many versions of its famous dragon
          logo.
        </p>
        <p>
          The first Mortal Kombat game was made by Midway Games and released in
          1992. In 2009, the development team was acquired by Warner Bros. and
          re-established as NetherRealm Studios. This led to the creation of
          Mortal Kombat (MK9), Mortal Kombat X, Mortal Kombat 11, and Mortal
          Kombat 1. These titles form what is known as the{' '}
          <em>modern MK era</em>.
        </p>

        <ImageWithCaption
          src={duelStart}
          alt="Start of a duel between Liu Kang and Raiden."
          caption="The well known 'Fight' screen signals the start of a duel in Mortal Kombat 1 between Liu Kang and Raiden - classic series characters appearing in almos every game."
        />

        <div className="space-y-2">
          <p>At its core, Mortal Kombat keeps most of it original formula:</p>
          <ul className="list-disc list-inside">
            <li>One-on-one combat to the death.</li>
            <li>
              Players try to outplay each other within the alloted time and
              space.
            </li>
            <li>Delpete your opponent's health bar to win a round.</li>

            <li>Win two rounds to win the match.</li>
          </ul>
        </div>

        <p>
          Modern games add new mechanics on top of that, but you can expect all
          the basics to be the same.
        </p>

        <Image
          src={MKMonk}
          alt="A Shadow Priest from the classical Evil Tower stage."
          className="mx-auto max-w-96"
        />
      </Section>

      <Section>
        <p>
          The essence of learning Mortal Kombat is adapting to how quickly
          action unfolds. There is a learning curve and often a skill gap
          between players. Nevertheless, it comes down to simple mechanics that
          can be broken down and learned. Once you understand these you can
          begin to read your opponent's intentions and even influence their
          habits.
        </p>

        <p className="font-bold">
          You may not have someone else's reflexes, but you can understand how
          they make decisions.
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

      <Section title="Move annotations" id="move-annotations">
        <p className="font-bold">
          Because Mortal Kombat games run on multiple platforms, using different
          controllers, the community has agreed on a simplified notation using
          numbers instead.
        </p>

        <p>
          It is important to learn how to read those notations to understand how
          to perform the moves. Most controllers have four buttons somewhere on
          the right side. These are called <em>face buttons</em>. For xbox they
          are A, B, X and Y. For PlayStation they are Cross, Circle, Square and
          Triangle.
        </p>

        <Diagram description="Gamepad layout with d-pad directions and attack buttons.">
          <div className="w-6 h-6 relative">
            <TbXboxX className="left-0 top-3 absolute" />

            <TbXboxY className="top-0 left-3 absolute" />
          </div>
        </Diagram>

        <div className="space-y-2">
          <p>These are mapped like so:</p>

          <ul className="list-disc list-inside">
            <li>1 - Front Punch (X / Square)</li>
            <li>2 - Back Punch (Y / Triangle)</li>
            <li>3 - Front Kick (A / Cross)</li>
            <li>4 - Back Kick (B / Circle)</li>
          </ul>
        </div>

        <div className="space-y-2">
          <p>
            The D-Pad on a gamepad is universal. Directions are described
            related to the position of the enemy like so:
          </p>

          <ul className="list-disc list-inside">
            <li>F - Forward / Towards your foe</li>
            <li>B - Backward / Away from your foe</li>
            <li>D - Down / Crouch</li>
            <li>J - Jump / Up usually followed by a string</li>
          </ul>
        </div>

        <p>
          And finally we have whatever special commands are assigned to the
          rear/paddle buttons like block, grab, etc. described as they are.
        </p>

        <p>
          This documentation uses <Pill>Pills</Pill> to mark button strings. So
          if you see <Pill>1</Pill> that means press Front Punch / X / Square
          button without any direction. If you see <Pill>F3</Pill> that means
          press Forward and Front Kick / A / Cross. <Pill>DB2</Pill> means press
          Down then Back then Rear Punch / Y / Triangle.
        </p>

        <p>
          If you are playing on a PC with a keyboard, or are using another type
          of device, refer to the in-game button mapping.
        </p>
      </Section>
    </>
  )
}
