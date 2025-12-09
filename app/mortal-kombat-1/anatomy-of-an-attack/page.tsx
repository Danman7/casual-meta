import { MK1_TITLE } from '@/app/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 3

export const navTitle = 'Anatomy of an attack'

export const metadata = generatePageMetadata(
  `${MK1_TITLE}: ${navTitle}`,
  'How moves work in Mortal Kombat.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1>{navTitle}</h1>
      <p className="text-lg text-light">
        If you must read only a single article in the MK section, let it be this
        one.
      </p>

      <p>
        In this page we will look at how moves work in detail. You can use this
        to better judge characters and situations. You can pause all game modes
        to bring up your chosen character's move list and follow along.
      </p>

      <h2>Hit vs block vs miss</h2>

      <p>
        Every attack takes some time to execute during which you won’t be able
        to do anything else.
      </p>
      <p>
        If a character happens to be within reach of an attack at the time it is
        active, it will register a hit. This will cause the appropriate damage
        and hit stun. The target will not be able to do anything for a period,
        while the attacker moves or follows up with another attack.
      </p>

      <p>
        If the same occurs, but the target is blocking, the attack will connect
        but will only do block (aka. chip) damage. It is significantly less than
        normal damage. The stun from blocking is also much shorter than the one
        from taking a hit. The target may or may not have time to counterattack.
        This is the essence of safe vs unsafe attacks.
      </p>

      <p>
        If the target is not in range of the attack, the latter will miss. This
        is the best possible effect for the target. While the attacker will
        still have to recover to be able to block, the other side is free to do
        anything.
      </p>

      <p>
        The frame data determines how much damage and time in a scenario each
        side has.
      </p>

      <h2>Block type</h2>

      <p>
        Underneath the frame data there is a basic rock-paper-scissors game
        based on stances. Next to every move in any fighter’s move list is a
        Block Type column (or section if you are in advanced view).
      </p>

      <p>
        A <strong>High</strong> attack{' '}
        <strong>can be blocked while standing or crouching</strong>. It,
        however,{' '}
        <strong>
          will miss if the opponent ducks underneath without blocking
        </strong>
        . This allows you to follow up with a quick attack.
      </p>

      <p>
        A <strong>Mid</strong> (short for Middle) attack{' '}
        <strong>must be blocked both ways.</strong> If you try the duck maneuver
        from above it will still hit you.
      </p>

      <p>
        A <strong>Low</strong> attack <strong>must be blocked low</strong>. It
        will hit a standing opponent, even if blocking.
      </p>

      <p>
        An <strong>Overhead</strong> attack{' '}
        <strong>must be blocked high</strong>. It will hit a low blocking
        player. All basic jump-in attacks are overheads. If the defender
        counters an overhead with a high block they will instantly recover and
        can counterattack.
      </p>

      <p>
        A <strong>Throw</strong> connects the same way as a high attack -
        standing and crouching if they are pressing block. But it will do its
        damage even if the opponent is blocking. It is an anti-block move. It
        can be ducked under same as a high attack.
      </p>

      <p>
        <strong>Unblockable</strong> means that the attack will do its damage
        any time it connects, no matter the stance. To avoid the damage it must
        miss completely.{' '}
      </p>

      <h2>Beyond the move list</h2>

      <p>
        There are some attack characteristics that are not mentioned in the data
        sheets.
      </p>

      <h2>Other Terms</h2>
      <p>
        This section aims to clarify community terms related to attacks. Some
        are general for all fighting games.
      </p>

      <h3>Pokes</h3>
      <p>
        A poke can be any single low-commitment attack - either safe on block or
        safe from a distance. It’s a check. Is their mind in the game? Are they
        judging distance correctly. Poking is scouting your opponent’s habits
        and reactions. It may start combos, but that is not the focus.
      </p>

      <p>
        Because you are testing them,{' '}
        <strong>mids are usually the best pokes</strong> as they can’t be
        ducked. The further reaching the better but also speed and safety are
        considerations.
      </p>
    </article>
  )
}
