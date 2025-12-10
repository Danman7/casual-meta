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

      <p>
        In this page we will look at how moves work in detail. You can pause all
        game modes to bring up your chosen character's move list and follow
        along.
      </p>

      <h2>Hit vs block vs miss</h2>

      <p>
        Every attack takes some time to execute during which the attacker won’t
        be able to do anything else. Both characters can attack at the same
        time.
      </p>

      <p>
        If one of them happens to be within reach of an attack at the time it is
        active, it will register a hit. This will cause damage and hit stun. The
        one being hit will not be able to do anything for a period. How much is
        determined by the frame data. This leaves time for the attacker to move
        or follow up with another attack.
      </p>

      <p>
        If both players happen to be within reach of each other’s attack while
        they are active, they will both take a hit. This is called a{' '}
        <strong>trade</strong>. It is possible for one of them to recover
        quicker. Which one depends on the attack’s frame data.
      </p>

      <p>
        If an attack from one player connects with another, but the target is
        blocking, it will only cause block (aka. chip) damage. It is
        significantly less than normal damage. The stun from blocking is also
        much shorter than the one from taking a hit. The target may or may not
        have time to counterattack. This is the essence of safe vs unsafe
        attacks.
      </p>

      <p>
        If one player throws an attack, but the other one is not within reach,
        the attack will miss. This is the best possible outcome for the target.
        While the attacker will have to recover to be able to block, the other
        side is free to do anything.
      </p>

      <h2>Block type</h2>

      <p>
        Underneath the frame data there is a basic rock-paper-scissors game
        based on stances. Next to every move in any fighter’s move list is a
        Block Type column (or section if you are in advanced view). This
        determines how each move must be blocked.
      </p>

      <p>
        A <strong>High</strong> attack{' '}
        <strong>will connect with any standing target</strong>, blocking or not.
        It will also do so with one that is crouching and holding block. If,
        however, the{' '}
        <strong>
          target ducks and doesn’t press block the high attack will miss them
        </strong>
        . This will give them an opportunity to counterattack. High attacks are
        common among move lists for all characters.
      </p>

      <p>
        A <strong>Mid</strong> (short for Middle) attack{' '}
        <strong>must be blocked both ways.</strong> The duck maneuver from above
        won't work. That is why Mids are considered the best at checking your
        opponent’s block. They are among the most common attacks for all
        fighters.
      </p>

      <p>
        A <strong>Low</strong> attack <strong>must be blocked low</strong>. If
        the target is standing, blocking or not, a Low attack will hit them.
        While every character has at least a few low attacks in the form of a
        down + button move, these are much less common than highs and mids.
      </p>

      <p>
        Up to this point, low blocking counters every attack type. This is where
        overheads come in. An <strong>Overhead</strong> attack{' '}
        <strong>must be blocked high</strong>. It will hit any crouching foe,
        blocking or not. Sanding overheads are rare, but same as with lows, each
        character can do a jump-in attack. These are considered overhead.
      </p>

      <p>
        So low blocking will defer any attacks but an overhead. And overheads
        are usually slower than mids and lows. This gives the defender time to
        spot the overhead, let go of down while still holding block and meet the
        attack with a standing block. If he predicts a low attack afterwards, he
        can keep holding block and press down again. This is called{' '}
        <strong>fuzzy blocking</strong> (or fuzzing, or block os, or block
        switching, or fuzzy os etc.).
      </p>

      <p>
        If a player is good at fuzzy blocking, they will still take chip damage,
        but no attack will get through. This is where throws come in. A{' '}
        <strong>Throw</strong> move grabs any blocking opponent, both standing
        or ducking, within reach and causes damage (and usually results in a
        knockdown) same as a regular attack. This is a dedicated anti-block
        move. It can be ducked under, however, same as a high attack. Also, if
        one presses the correct buttons in time, they can break away from the
        throw, canceling it. This is called <em>to tech the throw</em>.
      </p>

      <p>
        Every character has a forward throw and a back throw. But some have
        special throws that are usually a part of some string. These are{' '}
        <em>command grabs or command throws</em>. They cannot be teched and if
        they catch the target, it must take the damage.
      </p>

      <p>
        If the block type next to a move states <strong>Unblockable</strong> the
        target will always take damage if the attack connects. To avoid it the
        attack must miss completely.
      </p>

      <h2>Frame data</h2>

      <p>
        Frame data looks intimidating but understanding it will help you judge
        characters and situations better without the help of online guides. The
        in-game tutorial explains it in a nice visual way.
      </p>

      <p>
        To grasp the numbers, we must review that MK is fixed to 60 frames per
        second because it uses frame-based animations, instead of time-based
        ones (same as most fighting and all souls-borne games). This gives
        another degree of accuracy as you know just how many frames each move
        takes and you can calculate relative to one second.
      </p>

      <h3>Fast vs slow moves</h3>

      <p>
        Each move has three segments - startup, active and recovery. They are
        executed in the same sequence. When a player presses a button the start
        sequence begins.
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
