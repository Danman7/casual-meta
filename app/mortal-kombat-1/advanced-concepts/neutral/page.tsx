import { Metadata } from 'next'
import Image from 'next/image'

import duelStart from '@/app/assets/mk1/duel_start.webp'
import kockback from '@/app/assets/mk1/knockback.gif'
import { PageTitle } from '@/app/ui/PageTitle'

export const metadata: Metadata = {
  title: 'Mortal Kombat 1: Neutral | Casual Meta',
  description:
    'Understanding the Neutral state in Mortal Kombat 1 and its significance in gameplay.',
}

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle title="Neutral" />

      <p>
        Neutral is a state of the round where{' '}
        <strong>neither fighter has advantage over the other</strong>. Both are
        free to move, attack or block as they please.
      </p>

      <Image src={duelStart} alt="A neutral position at the start of a duel." />

      <p>
        To give you an idea of how this looks,{' '}
        <strong>all game rounds start in Neutral</strong> state. If it is the
        first round, fighters are positioned at the center of the arena with the
        default space between them. Subsequent rounds depend on where the
        previous one ended. In any case, both combatants start some distance
        apart.
      </p>

      <p>
        From here play can continue in any direction, but so far as no advantage
        is gained by either character, the state remains Neutral. Players can
        back away or come closer, dash, jump around or over each other, probe
        with safe attacks and this can go on for some time. Eventually one of
        them will take a risk trying to gain the upper hand.
      </p>

      <p className="font-bold">
        The goal of Neutral for both fighters is to gain a lead in the fight.
      </p>

      <p>
        If you can, you want to land a hit before your foe does. Maybe even
        start a combo. Perhaps you would like to observe how they react to your
        actions before committing. Even if you can’t strike them, you may be
        able to push them closer to a corner of the arena, limiting their
        movement.
      </p>

      <h2>Footsies</h2>
      <p>
        <strong>Footsies</strong> describes the game for controlling the space
        in front of your fighter using movement and the range of your attacks.
      </p>

      <h2>Transitioning away from Neutral</h2>

      <p>
        If the timer hits zero and both characters are at equal health, the
        round concludes in a <em>draw</em>. No matter how long or elaborate the
        Neutral phase is, eventually and always at least one of the players is
        going to take a risk to try and gain the upper hand. If they succeed or
        make a mistake and get punished by their foe, we conclude the Neutral
        game and enter either Pressure or Punishment.
      </p>

      <p className="italic">What does that look like?</p>

      <p>
        If you land a hit, even if it’s blocked, both your and your opponent’s
        movement become limited for a time. If you knock them down, even if you
        can’t initiate a combo, they are stuck recovering while you can continue
        moving. You can faint an attack to bait them into committing an unsafe
        move. All of these are examples of one fighter having an advantage over
        the other.
      </p>

      <h2>Resetting</h2>

      <p>
        <strong>Resetting</strong> or a <strong>Reset</strong> is the transition
        from whatever pressure or damaging sequence the fight is in back to
        Neutral.
      </p>

      <Image
        src={kockback}
        alt="An animation of Scorpion doing a knockback combo on Sub-Zero."
      />

      <p>
        A Reset can be a combo ending in a knockback, creating some distance
        between the fighters.
      </p>
    </article>
  )
}
