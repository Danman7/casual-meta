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
import { mkHref, mkMetadata, mkPage } from '@/app/siteMap'
import { ImageList } from '@/app/ui/ImageList'

const page = mkPage('movement')

export const metadata = mkMetadata('movement')

export default async function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <section>
        <h2 id="horizontal">Horizontal</h2>

        <p>
          Pressing left or right always moves your character in that direction
          on the screen. Move notation, however, is relative to your opponent.{' '}
          <em>Forward</em> is toward the opponent. <em>Backward</em> is away
          from the opponent.
        </p>

        <ImageList
          items={[
            { title: 'Forward', image: forward },
            { title: 'Backward', image: backward },
            {
              title: 'Forward',
              image: forward,
              imageClassName: 'transform-[scale(-1,1)]',
            },
            {
              title: 'Backward',
              image: backward,
              imageClassName: 'transform-[scale(-1,1)]',
            },
          ]}
        />

        <p>
          In-game move lists auto-adjust, but external guides do not. For
          example:
        </p>

        <ul role="list">
          <li>
            <strong>F3</strong> means press toward the opponent, then press 3.
          </li>
          <li>
            <strong>B2</strong> means press away from the opponent, then press
            2.
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

        <ImageList
          items={[
            { title: 'Standing', image: stand },
            { title: 'Crouching', image: crouch },
            { title: 'Jumping', image: jump },
          ]}
        />

        <h3 id="standing">Standing</h3>

        <p>
          <em>Standing</em> is the default stance when no direction is pressed.
          All characters start the round standing. This is the most{' '}
          <em>mobile</em> of the stances, as the player can move, block, attack,
          jump, or crouch freely.
        </p>

        <p>
          Inputs without directions (e.g. <strong>1</strong>,{' '}
          <strong>21</strong>) are performed standing. Some sources add{' '}
          <em>Standing</em> in front of the input for clarity (
          <strong>Standing 1</strong> = <strong>1</strong>).
        </p>

        <h3 id="crouching">Crouching / Ducking</h3>

        <p>
          Hold down to duck and enter <em>crouching</em> stance. This reduces
          your character's hitbox, making{' '}
          <Link href={mkHref('anatomyOfAttacks', 'high')}>high attacks</Link>{' '}
          miss, but <strong>prevents movement</strong>. Blocking and attacking
          work as expected. Crouching attacks are described with D for Down in
          front (e.g., <strong>D2</strong>, <strong>D4</strong>).
        </p>

        <h3 id="jumping">Jumping</h3>

        <p>
          Pressing up, without holding Block, makes the character <em>jump</em>.
          Jumping straight up is a <em>neutral jump</em>. Pressing up and
          forward or backward makes it a <em>forward jump</em> or{' '}
          <em>backward jump</em>.
        </p>

        <ul role="list">
          <li>Jumps follow a fixed arc.</li>
          <li>You can attack in the air.</li>
          <li>
            You <strong>cannot block</strong> until you land.
          </li>
        </ul>

        <p>
          Attacking during a forward jump is a <em>jump-in</em>. Jumping avoids
          many ground attacks but is risky. You are vulnerable to air attacks
          and landing recovery. Ground moves designed to stop jumps are called{' '}
          <em>anti-airs</em>.
        </p>
      </section>

      <section>
        <h2 id="states">States</h2>

        <ImageList
          items={[
            { title: 'High block', image: standBlock },
            { title: 'Low block', image: crouchBlock },
            { title: 'Knockdown', image: knockdown },
          ]}
        />

        <h3 id="blocking">Blocking</h3>

        <p>
          While holding the block button, incoming attacks that connect with
          your hitbox have reduced damage. But they do still deal damage, called{' '}
          <em>chip damage</em>.
        </p>
        <ul role="list">
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
          <li>You cannot move, block, or attack.</li>
          <li>
            You can only <em>recover</em> (stand up).
          </li>
          <li>
            Your opponent's attacks <strong>cannot hit you</strong> until you
            recover.
          </li>
        </ul>

        <p>
          Knocking the opponent down is about gaining tempo. Their immobility
          allows you to close the distance (pressure) and attack on your terms
          (setup).
        </p>
      </section>

      <section>
        <h2 id="arena-limitations">Arena Limitations</h2>

        <p>
          All fights occur in a single-level arena - a horizontal space with
          invisible side boundaries. Arena size varies within a small range, but
          none are multi-tier like older MK.
        </p>

        <Image
          src={arena}
          alt="Goro's Lair in Mortal Kombat 11."
          className="picture"
        />

        <p>
          When a character moves too far left or right, they hit the arena edge.
          They cannot move or be knocked back further in that direction. Being
          in the corner is a disadvantage since there is no room to retreat, and
          the opponent can control the space between the fighters. And because
          there is no knockback, the opponent also gains access to high-damage
          corner combos.
        </p>
      </section>
    </>
  )
}
