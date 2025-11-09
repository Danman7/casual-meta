import { Metadata } from 'next'
import Image from 'next/image'

import knockbackDistance from '@/app/assets/mk1/distance_after_knockback.webp'
import duelStart from '@/app/assets/mk1/duel_start.webp'
import knockback from '@/app/assets/mk1/knockback.webp'
import { PageTitle } from '@/app/ui/PageTitle'

export const metadata: Metadata = {
  title: 'Mortal Kombat 1: Neutral | Casual Meta',
  description:
    'Understanding the Neutral state in Mortal Kombat 1 and its significance in gameplay.',
}

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle
        title="Neutral"
        subtitle="If no one is taking or blocking a hit, being knocked down or pushed in the corner, you’re probably in Neutral."
      />

      <p>
        <em>Neutral</em> refers to any state of the round where{' '}
        <strong>neither fighter has a clear advantage over the other</strong> -
        both are free to move, attack or block as they please.
      </p>

      <Image src={duelStart} alt="A neutral position at the start of a duel." />

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
        <strong>Resetting</strong> or a <strong>Reset</strong> is the transition
        from whatever pressure or damaging sequence the fight is in back to
        Neutral.
      </p>

      <div className="flex">
        <Image
          src={knockback}
          alt="Scorpion knocking back Sub-Zero with a kick."
          className="w-1/2 object-cover"
        />

        <Image
          src={knockbackDistance}
          alt="Scorpion and Sub-Zero after the knockback, at a distance."
          className="w-1/2 object-cover"
        />
      </div>

      <p>
        A Reset can be a combo ending in a knockback, creating some distance
        between the fighters.
      </p>

      <p>All throws, if not interrupted by a Kameo move, are also a Reset.</p>
    </article>
  )
}
