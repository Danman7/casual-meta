import Image from 'next/image'
import Link from 'next/link'
import { FaWrench } from 'react-icons/fa'
import { GiDeathSkull } from 'react-icons/gi'
import { MdChevronRight } from 'react-icons/md'

import backward from '@/app/assets/mk/backward.webp'
import crouch from '@/app/assets/mk/crouch.webp'
import forward from '@/app/assets/mk/forward.webp'
import jump from '@/app/assets/mk/jump.webp'
import stand from '@/app/assets/mk/stand.webp'
import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { Badge } from '@/app/ui/Badge'
import { Diagram } from '@/app/ui/Diagram'
import { PageTitle } from '@/app/ui/PageTitle'
import { Pill } from '@/app/ui/Pill'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'
import { createRouteLookup } from '@/lib/routeLinks'

export const navOrder = 1

export const navTitle = 'Movement'

const mkRoute = createRouteLookup(MK_BASE_URL)

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'How to move around the arenas in Mortal Kombat.',
)

export default async function Page() {
  return (
    <>
      <PageTitle
        title={navTitle}
        subtitle="Movement forms the basis of combat and creates advantage even before attacks are thrown."
        tags={
          <>
            <Badge primary>
              <GiDeathSkull /> Mortal Kombat
            </Badge>
            <Badge>
              <FaWrench /> Core Mechanics
            </Badge>
          </>
        }
      />

      <Section title="Forward and backward" id="forward-and-backward">
        <p>
          Pressing left or right on the d-pad or thumbstick always moves your
          character to the corresponding side in MK. But <strong>moves</strong>{' '}
          like attacks and specials <strong>are position-sensitive</strong>{' '}
          relative to your opponent. They are described as forward or backward
          on the horizontal pane.
        </p>

        <Diagram
          description="If you are to the left your opponent, forward is
          right. If you are to the right - forward is left."
        >
          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Forward</div>
            <Image src={forward} alt="Character stepping forward." />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Backward</div>
            <Image src={backward} alt="Character stepping backward." />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Forward</div>
            <Image
              src={forward}
              alt="Character stepping forward (mirrored)."
              className="transform-[scale(-1,1)]"
            />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Backward</div>
            <Image
              src={backward}
              alt="Character stepping backward (mirrored)."
              className="transform-[scale(-1,1)]"
            />
          </div>
        </Diagram>

        <p>
          This is accounted for in the in-game moves lists. They update based on
          your position relative to your foe. But when reading external
          resources you will see <Pill>F3</Pill> which means <em>towards</em>{' '}
          them or forward then press 3. <Pill>B2</Pill> reads <em>away</em> from
          them or back then press 2.
        </p>

        <h3 id="dashing">Dashing</h3>

        <p>
          Holding a direction is known as <em>walking</em>. You walk up to or
          away from your foe. In modern MK you can{' '}
          <strong>double tap a horizontal direction</strong> to dash forward or
          backward. This propels your character quickly in the chosen direction
          and can be used to close distance or retreat.
        </p>
      </Section>

      <Section title="Stances" id="stances">
        <p>
          If walking and dashing portray level movement, <em>stances</em>{' '}
          narrate how characters behave vertically.
        </p>

        <Diagram>
          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Standing</div>
            <Image src={stand} alt="Character standing in a neutral stance." />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Crouching</div>
            <Image src={crouch} alt="Character crouching low." />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Jumping</div>
            <Image src={jump} alt="Character jumping upward." />
          </div>
        </Diagram>

        <h3 id="standing">Standing</h3>

        <p>
          If you are not pressing up or down your character is <em>Standing</em>
          . This is the initial stance when a round starts. It offers the most
          freedom - you can move, block, attack, jump and crouch. If a move
          notation is not acompanied by a direction input, for example{' '}
          <Pill>1</Pill> or <Pill>21</Pill>, it is performed from standing.
        </p>

        <h3 id="crouching">Crouching / Ducking</h3>

        <p>
          Pressing down enters <em>Crouching</em> or <em>Ducking</em> stance.
          This reduces the size of your character's hitbox, making them harder
          to hit as describe in{' '}
          <Link href={`${mkRoute('Anatomy of attacks')}#block-type`}>
            Block Type
          </Link>
          . While crouching you can block or attack, but you{' '}
          <strong>can't move</strong>, limiting your options.
        </p>

        <h3 id="jumping">Jumping</h3>

        <p>
          Pressing up makes the character <em>Jump</em>. Jumping vertically is
          called a <em>neutral jump</em>. Pressing a horizontal direction while
          jumping makes it a <em>forward</em> or <em>backward jump</em>. While
          in the air you can attack, but you <strong>can't block</strong>. And
          while you are technically moving, it happens on a predefined parabola.
        </p>

        <p>
          Attacking while jumping forward is known as a jump attack or a{' '}
          <em>jump-in</em>.
        </p>

        <p>
          A jump is a more serious commitment than walking, dashing or ducking.
          While the character can evade many ground attacks, including high or
          low ones, because they can't block, they are vulnerable to air attacks
          or being caught on landing. Ground attacks that are effective at
          countering jump-ins are called <em>anti-airs</em>.
        </p>
      </Section>

      <Section title="Arena limitations" id="arena-limitations"></Section>

      <Link
        className="flex gap-2 items-center"
        href={mkRoute('Anatomy of attacks')}
      >
        <MdChevronRight /> Next: Anatomy of attacks
      </Link>
    </>
  )
}
