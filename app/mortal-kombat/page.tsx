import Image from 'next/image'
import Link from 'next/link'
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
  TbPlaystationCircle,
  TbPlaystationSquare,
  TbPlaystationTriangle,
  TbPlaystationX,
  TbXboxA,
  TbXboxB,
  TbXboxX,
  TbXboxY,
} from 'react-icons/tb'

import attackPhases from '@/app/assets/mk/attack_phases.webp'
import mkLogo from '@/app/assets/mk/mk_logo.webp'
import duelStart from '@/app/assets/mk1/duel_start.webp'
import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { Diagram } from '@/app/ui/Diagram'
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
      <PageTitle
        title={MK_TITLE}
        subtitle="Mortal Kombat (MK) is a long-running franchise of fighting games, popular for fast-paced action and gory graphics."
      />

      <Section>
        <Image
          src={mkLogo}
          alt="The Mortal Kombat logo, a dragon in a circle."
          className="float-left pr-4 mb-0! max-w-32"
        />

        <p>
          The dragon logo marks a duel of skill that often ends in virtual
          death, ever since the first MK was released by Midway Games in 1992.
          Thenceforth, the series has expanded in characters, timelines,
          mechanics, and popularity.
        </p>

        <p>
          In 2009, the development team was acquired by Warner Bros. and
          re-established as NetherRealm Studios. This led to the creation of
          Mortal Kombat (MK9), Mortal Kombat X, Mortal Kombat 11, and Mortal
          Kombat 1. These titles form what is known as the <em>modern MK</em> or{' '}
          <em>NRS</em> era, which will be the focus of this documentation.
        </p>
      </Section>

      <Section title="Fundamentals" id="fundamentals">
        <p>At its core, modern MK remains:</p>

        <ul className="ml-4.5 list-disc">
          <li>One-on-one combat</li>
          <li>
            Players outplaying each other within the allotted time and space
          </li>
          <li>Losing your health bar loses the round</li>
          <li>Win two rounds to win the match</li>
        </ul>

        <ImageWithCaption
          src={duelStart}
          alt="Start of a duel between Liu Kang and Raiden."
          caption="The 'Fight' screen signals the start of a duel. The returning characters of Liu Kang and Raiden are about to show off their skills in Mortal Kombat 1."
        />

        {/* <Image
          src={MKMonk}
          alt="A Shadow Priest from the classical Evil Tower stage."
          className="mx-auto max-w-96 w-full"
        /> */}

        <p>
          New players flock to the series because of the cinematic visuals, the
          growing popularity in esports, the large roster of both classic MK and
          guest characters from other franchises, and the chance to combat
          friends. However, the games' difficulty seems to falter their spirits
          after some time. MK <em>feels hard</em> because:
        </p>

        <ul className="ml-4.5 list-disc">
          <li>Action unfolds very quickly</li>
          <li>Skill gap between players</li>
          <li>Learning curve can feel steep</li>
        </ul>

        <p>At the same time:</p>

        <ul className="ml-4.5 list-disc">
          <li>Each mechanic can be broken down into simple parts</li>
          <li>
            Mastering basic moves often yields better results than long combos
          </li>
          <li>
            Players can learn to read and predict their opponent's moves instead
            of reacting quickly
          </li>
          <li>Some characters are simpler than others</li>
        </ul>

        <p>
          <em>
            You may not have someone else's reflexes, but you can understand how
            they make decisions.
          </em>
        </p>
      </Section>

      <Section title="About this documentation" id="about">
        <h3 id="diagrams">Diagrams</h3>

        <p>
          To better visualize mechanics, we use sprites from the older MK games
          to form diagrams. They are primitive, but easy to read and color-code.
        </p>

        <Diagram description="We can split any attack into three sections - start-up in blue, active in red and recovery in green.">
          <div className="flex flex-col gap-4 font-semibold items-center">
            <div>Start-up &rarr; Active &rarr; Recovery</div>

            <Image
              src={attackPhases}
              alt="The three phases of the basic punch."
            />
          </div>
        </Diagram>

        <h3 id="move-annotations">Move annotations</h3>

        <p>
          Because Mortal Kombat games run on multiple platforms, using different
          controllers, the community has agreed on a simplified notation using
          numbers instead. It is important to learn how to read those to
          understand how to perform the moves.
        </p>

        <p>
          Most controllers have four buttons somewhere on the right side. These
          are called <em>face buttons</em>. For xbox they are A, B, X, and Y.
          For PlayStation they are Cross, Circle, Square, and Triangle.
        </p>

        <Diagram
          className="text-4xl"
          description="This is how the face buttons look on Xbox, PlayStation and the number notation used in Mortal Kombat."
        >
          <div className="w-20 h-20 grid grid-cols-3 grid-rows-3">
            <div></div>
            <TbXboxX />
            <div></div>
            <TbXboxY />
            <div></div>
            <TbXboxB />
            <div></div>
            <TbXboxA />
          </div>

          <div className="w-20 h-20 grid grid-cols-3 grid-rows-3">
            <div></div>
            <TbPlaystationTriangle />
            <div></div>
            <TbPlaystationSquare />
            <div></div>
            <TbPlaystationCircle />
            <div></div>
            <TbPlaystationX />
          </div>

          <div className="w-20 h-20 grid grid-cols-3 grid-rows-3">
            <div></div>
            <TbCircleNumber2 />
            <div></div>
            <TbCircleNumber1 />
            <div></div>
            <TbCircleNumber4 />
            <div></div>
            <TbCircleNumber3 />
          </div>
        </Diagram>

        <p>The buttons are mapped like so:</p>

        <ul className="ml-4.5 list-disc">
          <li>1 - Front Punch (X / Square)</li>
          <li>2 - Back Punch (Y / Triangle)</li>
          <li>3 - Front Kick (A / Cross)</li>
          <li>4 - Back Kick (B / Circle)</li>
        </ul>

        <p>
          The D-Pad on a gamepad is universal. Directions are described in
          relation to the position of the enemy like so:
        </p>

        <ul className="ml-4.5 list-disc">
          <li>F - Forward / Towards your foe</li>
          <li>B - Backward / Away from your foe</li>
          <li>D - Down / Crouch</li>
          <li>J - Jump / Up, usually followed by a string</li>
        </ul>

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

      <Section title="First steps" id="next-steps">
        <p>
          It is recommended to begin with the in-game tutorials. MK11 and MK1
          have in-depth tutorial modes that explain even advanced mechanics.
          Even MKX has a few basic lessons.
        </p>

        <p>
          You can start at the beginning with{' '}
          <Link href={`${MK_BASE_URL}/movement`}>Movement</Link>, although the
          most elaborate piece of the puzzle among fundamentals is the{' '}
          <Link href={`${MK_BASE_URL}/anatomy-of-an-attack`}>
            Anatomy of attacks
          </Link>
          .
        </p>

        <p>
          If you feel you have a grasp on core mechanics, you can start with
          advanced concepts like{' '}
          <Link href={`${MK_BASE_URL}/neutral`}>Neutral</Link>.
        </p>
      </Section>
    </>
  )
}
