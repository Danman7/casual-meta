import Image from 'next/image'

import knockbackDistance from '@/app/assets/mk1/distance_after_knockback.webp'
import duelStart from '@/app/assets/mk1/duel_start.webp'
import knockback from '@/app/assets/mk1/knockback.webp'
import { MK_TITLE } from '@/app/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 5

export const navTitle = 'Neutral'

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'Understanding the Neutral state in Mortal Kombat 1 and its significance in gameplay.',
)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

      <p>
        <em>Neutral</em> refers to any state of the round where{' '}
        <strong>neither fighter has a clear advantage over the other</strong> -
        both are free to move, attack or block as they please.
      </p>

      <Image
        src={duelStart}
        alt="A neutral position at the start of a duel."
        className="shadow-md"
      />

      <p className="font-bold">
        All rounds start in Neutral with a gap between the characters.
      </p>

      <p>
        The first round of a match is the ideal example – the fighters are the
        default distance apart, at the center of the arena, giving them ample
        space to make decisions. Subsequent rounds depend on where the previous
        one was concluded.
      </p>

      <p>
        Neutral is a time where play can unfold in any direction. Players can
        back away, rush closer, jump around or over each other or probe with
        safe attacks. This can continue for as short or as long as necessary,
        until someone gains a lead.
      </p>

      <p className="font-bold">
        The goal of Neutral is to create advantage where both players have equal
        opportunity.
      </p>

      <h2>Footsies</h2>

      <p>
        <strong>Footsie</strong> or <strong>Footsies</strong> describe the
        contest for controlling space and tempo in Neutral. Both players move in
        and out of each other’s reach, using safe attacks to test reactions and
        provoke mistakes. The term is often used broadly, but the emphasis is
        usually on mobility, hence the name. It’s as much a timing as it is a
        mind game.
      </p>

      <h2>Resetting</h2>

      <p>
        A <em>Reset</em> is a return to Neutral state of play, where each player
        again has equal freedom.
      </p>

      <div className="flex flex-col sm:flex-row">
        <Image
          src={knockback}
          alt="Scorpion knocking back Sub-Zero with a kick."
          className="sm:w-1/2 object-cover shadow-md"
        />

        <Image
          src={knockbackDistance}
          alt="Scorpion and Sub-Zero after the knockback, at a distance."
          className="sm:w-1/2 object-cover shadow-md"
        />
      </div>

      <p>
        A combo ending in knockback can create enough distance between the
        fighters to constitute a reset.
      </p>

      <p>Same goes for a throw that is not interrupted by a Kameo move.</p>
    </>
  )
}
