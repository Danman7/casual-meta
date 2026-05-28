import Link from 'next/link'

import duelStart from '@/app/assets/mk1/duel_start.webp'
import { MK_TITLE } from '@/app/constants'
import { mkRoute } from '@/app/mortal-kombat/constants'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
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

      <section>
        <div className="flavor">
          This page aims to describe the somewhat hazy concept of Neutral in
          fighting games in general, and in Mortal Kombat in particular.
        </div>

        <p>
          As a result of experience, players have found ways to explain how the
          game works beyond solid concepts like frame data and hit-boxes. One
          such area is the division of a round into micro-states. The fight can
          be in a state of <em>Pressure</em> and that can evolve into a state of{' '}
          <em>Punish</em>. If neither applies, you are probably in the state of{' '}
          <em>Neutral.</em>
        </p>
      </section>

      <section>
        <h2 id="what-is-neutral">What is Neutral?</h2>

        <p className="font-bold">
          Neutral refers to any state of the round where neither fighter has a
          clear advantage over the other - both are free to move, attack or
          block as they please.
        </p>

        <ImageWithCaption
          src={duelStart}
          alt="A neutral position at the start of a duel between Liu Kang and Raiden."
          caption="The beginning of the first round is a perfect example of Neutral."
        />

        <p className="font-bold">All rounds start in Neutral.</p>

        <p>
          The first round of a match is the ideal example – the fighters are the
          default distance apart, at the center of the arena, giving them ample
          space to make decisions. Subsequent rounds depend on where the
          previous one was concluded.
        </p>

        <p>
          Neutral is a time where play can unfold in any direction. Players can
          back away, rush closer, jump around or over each other, or probe with
          safe attacks. This can continue for as short or as long as necessary,
          until someone gains a lead.
        </p>

        <p className="font-bold">
          The goal of Neutral is to create advantage where both players have
          equal opportunity.
        </p>
      </section>

      <section>
        <h2 id="footsies">Footsies</h2>
        <p>
          <strong>Footsie</strong> or <strong>Footsies</strong> describe the
          contest for controlling space and tempo in Neutral. Both players move
          in and out of each other’s reach, using safe attacks to test reactions
          and provoke mistakes. The term is often used broadly, but the emphasis
          is usually on mobility, hence the name. It’s as much a timing game as
          it is a mind game.
        </p>
      </section>

      <section>
        <h2 id="whiff-punish">Whiff punish</h2>

        <p>
          We know that a{' '}
          <Link href={`${mkRoute('Anatomy of attacks')}#hit-vs-block-vs-miss`}>
            whiff
          </Link>{' '}
          is when an attack misses completely. A <em>whiff punish</em> is
          hitting the attacker during the missed attack's{' '}
          <Link href={`${mkRoute('Anatomy of attacks')}#move-phases`}>
            recovery
          </Link>
          , before they can block again. It's a core layer of neutral and sits
          between pure spacing and direct pressure.
        </p>

        <h3>Baiting</h3>

        <p>
          <em>Baiting</em> is intentionally presenting an opening in a
          predictable manner, to provoke a response from the opponent.
        </p>
      </section>

      <section>
        <h2 id="resetting">Resetting</h2>
        <p className="font-bold">
          A <em>Reset</em> is any return to Neutral state after Pressure or
          Punish.
        </p>

        <p>It can favor both the aggressor and the defender.</p>

        <p>
          A combo ending in knockback can create enough distance between the
          fighters to constitute a reset.
        </p>

        <p>Same goes for a throw that is not interrupted by a Kameo move.</p>
      </section>
    </>
  )
}
