import Image from 'next/image'
import Link from 'next/link'
import { FaWrench } from 'react-icons/fa'
import { GiDeathSkull } from 'react-icons/gi'
import { MdChevronRight } from 'react-icons/md'

import arena from '@/app/assets/mk/arena.webp'
import backward from '@/app/assets/mk/backward.webp'
import crouch from '@/app/assets/mk/crouch.webp'
import crouchBlock from '@/app/assets/mk/crouchblock.webp'
import forward from '@/app/assets/mk/forward.webp'
import jump from '@/app/assets/mk/jump.webp'
import knockdown from '@/app/assets/mk/knockdown.webp'
import stand from '@/app/assets/mk/stand.webp'
import standBlock from '@/app/assets/mk/standblock.webp'
import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { Badge } from '@/app/ui/Badge'
import { Diagram } from '@/app/ui/Diagram'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
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
        subtitle="Movement underpins combat. It creates advantage, even before the attacks begin."
        tags={
          <>
            <Badge>
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
          Pressing left or right always moves your character in that direction
          on the screen. Move notation, however, is relative to your opponent.
        </p>

        <ul role="list">
          <li>
            <strong>Forward</strong>: Toward the opponent.
          </li>
          <li>
            <strong>Backward</strong>: Away from the opponent.
          </li>
        </ul>

        <Diagram description="If you are left of your opponent, forward is right. If you are right of your opponent, forward is left.">
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
          In-game move lists auto-adjust. External guides do not. For example:
        </p>

        <ul role="list">
          <li>
            <Pill>F3</Pill>: Toward the opponent, then press 3.
          </li>
          <li>
            <Pill>B2</Pill>: Away from the opponent, then press 2.
          </li>
        </ul>

        <h3 id="dashing">Dashing</h3>

        <p>
          Hold left or right to <em>walk</em> forward or backward. Double-tap
          left or right to <em>dash</em> forward or backward.
        </p>

        <ul role="list">
          <li>
            Walking moves your character cautiously toward or away from the
            opponent.
          </li>
          <li>Dashes quickly close distance or create space.</li>
        </ul>
      </Section>

      <Section title="Stances" id="stances">
        <p>
          <em>Stances</em> describe vertical behavior.
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
          The default state at round start is <em>Standing</em>.
        </p>

        <ul role="list">
          <li>Standing is the most mobile stance.</li>
          <li>You can move, block, attack, jump, or crouch.</li>
        </ul>

        <p>
          Inputs without directions (e.g. <Pill>1</Pill>, <Pill>21</Pill>) are
          performed standing. In some guides, simple annotations like{' '}
          <Pill>1</Pill>( or any other button) are replaces with{' '}
          <Pill>Standing 1</Pill> which means the same.
        </p>

        <h3 id="crouching">Crouching / Ducking</h3>

        <p>
          Hold down to enter <em>crouching</em> or <em>ducking</em> stance.
        </p>

        <ul role="list">
          <li>While crouching you have a smaller hitbox.</li>
          <li>You can block and attack.</li>
          <li>
            But you <strong>cannot move</strong>.
          </li>
        </ul>

        <p>
          Croushing attacks are described with D for Down in front (.e.g.{' '}
          <Pill>D2</Pill>,<Pill>D4</Pill>).
        </p>

        <h3 id="jumping">Jumping</h3>

        <p>
          Pressing up, without holding Block, makes the character <em>jump</em>.
        </p>

        <ul role="list">
          <li>
            Jumping straight up is a <em>neutral jump</em>.
          </li>
          <li>
            Pressing up and forward or backward makes it a <em>forward jump</em>{' '}
            or <em>backward jump</em>.
          </li>
          <li>Jumps follow a fixed arc.</li>
          <li>You can attack in the air.</li>
          <li>
            You <strong>cannot block</strong> until you land.
          </li>
        </ul>

        <p>
          Attacking during a forward jump is a <em>jump-in</em>.
        </p>

        <p>
          Jumping avoids many ground attacks but is risky. You are vulnerable to
          air attacks and landing recovery. Ground moves designed to stop jumps
          are called <em>anti-airs</em>.
        </p>
      </Section>

      <Section title="States" id="states">
        <Diagram>
          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Stand block</div>
            <Image src={standBlock} alt="Character blocking high." />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Crouch block</div>
            <Image src={crouchBlock} alt="Character blocking low." />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Knockdown</div>
            <Image
              src={knockdown}
              alt="Character knocked down on the ground."
            />
          </div>
        </Diagram>

        <h3 id="blocking">Blocking</h3>

        <p>Hold the Block button to block.</p>
        <ul role="list">
          <li>Blocking reduces damage from enemy attacks.</li>
          <li>Can block standing or crouching.</li>
          <li>Cannot block while jumping.</li>
          <li>Cannot move while blocking.</li>
        </ul>

        <h3 id="knockdown">Knockdown</h3>

        <p>
          Certain attacks knock the opponent to the ground. When you are knocked
          down:
        </p>

        <ul role="list">
          <li>You cannot move, block or attack.</li>
          <li>
            You can only <em>recover</em> (stand up).
          </li>
          <li>
            Your opponent's attacks <strong>cannot hit you</strong> until you
            recover.
          </li>
          <li>
            However, your immobility allows them to close the distance
            (pressure) and attack on their terms (setup).
          </li>
        </ul>
      </Section>

      <Section title="Arena limitations" id="arena-limitations">
        <p>All fights occur in a single-level arena.</p>

        <ul role="list">
          <li>Horizontal space with invisible side boundaries.</li>

          <li>Arena size varies within a small range.</li>

          <li>No multi-tier stages like older MK.</li>
        </ul>

        <ImageWithCaption
          src={arena}
          alt="Goro's Lair in Mortal Kombat 11."
          caption="An artist's depiction of Goro's Lair in Mortal Kombat 11."
        />

        <p>A character at the edge of the arena:</p>

        <ul role="list">
          <li>Cannot move farther.</li>
          <li>Cannot be knocked back in that direction.</li>
        </ul>

        <p>Being in the corner is a disadvantage.</p>

        <ul role="list">
          <li>No room to retreat.</li>
          <li>The opponent dictates the space between the fighters.</li>
          <li>
            Because no knockback in the corner, the opponent gains access to
            high damage corner combos.
          </li>
          <li>
            Must jump over the opponent or use a side-switching move to escape.
          </li>
        </ul>
      </Section>

      <Link
        className="flex gap-2 items-center"
        href={mkRoute('Anatomy of attacks')}
      >
        <MdChevronRight /> Next: Anatomy of attacks
      </Link>
    </>
  )
}
