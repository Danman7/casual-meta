import Link from 'next/link'

import { MK1_BASE_URL, MK1_TITLE } from '@/app/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 6

export const navTitle = 'Pressure'

export const metadata = generatePageMetadata(
  `${MK1_TITLE}: ${navTitle}`,
  'Mind games and conditioning in Mortal Kombat.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1>{navTitle}</h1>

      <p className="text-lg text-light">
        Every move any character can do can be countered successfully provided
        you can react in time. Too bad everything happens so quickly.
      </p>

      <p>
        In this page we will explain the many mind games and frame traps that go
        into converting a good{' '}
        <Link href={`${MK1_BASE_URL}/neutral`}>neutral</Link> position into
        actual damage. You should read the{' '}
        <Link href={`${MK1_BASE_URL}/anatomy-of-an-attack`}>
          Anatomy of an attack
        </Link>{' '}
        page first if you haven’t already.
      </p>

      <p>
        Mortal Kombat is about reading intentions. To manage with the fast pace
        of the game, players enter a state of flow. They scout and act according
        to how they predict their opponent will react. Here we will mention some
        approaches to throwing your opponent’s flow off balance.
      </p>

      <h2>Mix-ups</h2>

      <p>
        As you know, the standing position gives fighters the best mobility.
        That is why most of the time blocking high and staying on the move is a
        good choice. The idea of a mix-up is to break this specific rhythm.
      </p>

      <p>
        This is done by throwing low attacks into the mix of your offense. It
        will either catch them off-guard or force them to keep blocking low,
        which in turn limits their mobility. Then you add an overhead to your
        moves which force them to block high again. And to top it off, combine
        your lows and overheads with the occasional throw. If you vary the block
        types of your attacks your foe will have to spend more effort to defend
        properly.
      </p>

      <p>
        With this in mind, there are characters that are more effective at
        mix-ups than others. These are the ones with standing lows and overheads
        as they won’t require a jump-in or a duck. This limits their mobility
        less thus producing better pressure. There are characters that have not
        such moves and struggle more with optimal offense.
      </p>

      <h3>50/50s</h3>

      <p>
        Some characters can throw both an overhead and a low attack at the same
        time in given scenarios. This makes it very difficult for the opponent
        to predict which one is coming and adjust their block stance. For
        example, they are right next to you, and you know their character has a
        standing overhead which means they don’t need to jump to do one. So,
        should you block high or prepare for a quick low poke? This is called a
        true 50/50 as it forces the defender to guess either one or the other.
      </p>

      <h3>Shimmys</h3>

      <p>
        A Shimmy is a 50/50 that involves throws. Pressing up against a knocked
        down opponent can indicate an attempt to grab them. They can react
        either by attempting to tech the throw with a button press or crouching
        without blocking to make it miss. If you predict them to duck under it,
        doing a mid will catch them off-guard. If you expect a tech, back dash
        will make them whiff, which can be followed by an attack of your own.
      </p>

      <p>
        This is not a true 50/50 as it requires the attacker to also guess the
        defenders’ intentions. If you throw a mid into them teching you might
        get punched and backing away from a ducking opponent will not gain
        progress. It is more of a mind game.
      </p>
    </article>
  )
}
