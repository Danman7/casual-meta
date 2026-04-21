import Image from 'next/image'
import Link from 'next/link'

import arena from '@/app/assets/mk/arena.webp'
import backward from '@/app/assets/mk/backward.webp'
import crouch from '@/app/assets/mk/crouch.webp'
import crouchBlock from '@/app/assets/mk/crouchblock.webp'
import forward from '@/app/assets/mk/forward.webp'
import jump from '@/app/assets/mk/jump.webp'
import knockdown from '@/app/assets/mk/knockdown.webp'
import stand from '@/app/assets/mk/stand.webp'
import standBlock from '@/app/assets/mk/standblock.webp'
import { MK_TITLE } from '@/app/constants'
import { mkRoute } from '@/app/mortal-kombat/constants'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 1

export const navTitle = 'Movement'

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'How to move around the arenas in Mortal Kombat.',
)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

      <section>
        <h2 id="horizontal">Horizontal</h2>

        <p>
          Pressing left or right always moves your character in that direction
          on the screen. Move notation, however, is relative to your opponent.{' '}
          <em>Forward</em> is towards the opponent. <em>Backward</em> is away
          from the opponent.
        </p>

        <div className="flex-list font-bold justify-center">
          <div className="flex-center flex-col w-full md:w-auto">
            <div>Forward</div>
            <Image src={forward} alt="Character stepping forward." />
          </div>

          <div className="flex-center flex-col w-full md:w-auto">
            <div>Backward</div>
            <Image src={backward} alt="Character stepping backward." />
          </div>

          <div className="flex-list font-bold">
            <div className="flex-center flex-col w-full md:w-auto">
              <div>Forward</div>
              <Image
                src={forward}
                alt="Character stepping forward."
                className="transform-[scale(-1,1)]"
              />
            </div>

            <div className="flex-center flex-col w-full md:w-auto">
              <div>Backward</div>
              <Image
                src={backward}
                alt="Character stepping backward."
                className="transform-[scale(-1,1)]"
              />
            </div>
          </div>
        </div>

        <p>
          In-game move lists auto-adjust, but external guides do not. For
          example:
        </p>

        <ul role="list">
          <li>
            <span className="input">F3</span> means press toward the opponent,
            then press 3.
          </li>
          <li>
            <span className="input">B2</span> means press away from the
            opponent, then press 2.
          </li>
        </ul>

        <h3 id="dashing">Dashing</h3>

        <p>
          Holding left or right is called <em>walking</em> or to walk up to or
          away from the opponent. Double-tap left or right to <em>dash</em>{' '}
          forward or backward. Dashes quickly close the distance or create space
          when time is of the essence.
        </p>
      </section>

      <section>
        <h2 id="stances">Stances (Vertical)</h2>

        <div className="flex-list font-bold justify-center">
          <div className="flex-center flex-col w-full md:w-auto">
            <div>Standing</div>
            <div className="md:h-46 flex items-end">
              <Image
                src={stand}
                alt="Characters standing in a neutral stance."
              />
            </div>
          </div>

          <div className="flex-center flex-col w-full md:w-auto">
            <div>Crouching</div>
            <div className="md:h-46 flex items-end">
              <Image
                src={crouch}
                alt="One character standing, one crouching low."
              />
            </div>
          </div>

          <div className="flex-center flex-col w-full md:w-auto">
            <div>Jumping</div>
            <div className="md:h-46 flex items-end">
              <Image src={jump} alt="Character jumping upward." />
            </div>
          </div>
        </div>

        <h3 id="standing">Standing</h3>

        <p>
          <em>Standing</em> is the default stance when no direction is pressed.
          All characters start the round standing. This is the most{' '}
          <em>mobile</em> of the stance, as the player can move, block, attack,
          jump, or crouch freely.
        </p>

        <p>
          Inputs without directions (e.g. <span className="input">1</span>,{' '}
          <span className="input">21</span>) are performed standing. Some
          sources add <em>Standing</em> in front of the input for clarity (
          <span className="input">Standing 1</span> ={' '}
          <span className="input">1</span>).
        </p>

        <h3 id="crouching">Crouching / Ducking</h3>

        <p>
          Hold down to duck and enter <em>crouching</em> stance. This reduces
          your character's hitbox, making{' '}
          <Link href={`${mkRoute('Anatomy of attacks')}#high`}>
            high attacks
          </Link>{' '}
          miss, but <strong>prevents movement</strong>. Blocking and attacking
          works as expected. Croushing attacks are described with D for Down in
          front (.e.g. <span className="input">D2</span>,
          <span className="input">D4</span>).
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
      </section>

      <section>
        <h2 id="states">States</h2>

        <div className="flex-list font-bold justify-center">
          <div className="flex-center flex-col w-full md:w-auto">
            <div>High block</div>
            <Image src={standBlock} alt="Character blocking high." />
          </div>

          <div className="flex-center flex-col w-full md:w-auto">
            <div>Low block</div>
            <Image src={crouchBlock} alt="Character blocking low." />
          </div>

          <div className="flex-center flex-col w-full md:w-auto">
            <div>Knockdown</div>
            <Image
              src={knockdown}
              alt="Character knocked down on the ground."
            />
          </div>
        </div>

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
      </section>

      <section title="Arena limitations" id="arena-limitations">
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
      </section>
    </>
  )
}
