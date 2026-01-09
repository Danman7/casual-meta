import { HOMM3_TITLE } from '@/app/constants'
import { Callout } from '@/app/ui/Callout'
import { Flavor } from '@/app/ui/Flavor'
import { PageTitle } from '@/app/ui/PageTitle'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  HOMM3_TITLE,
  'A repository of guides for Heroes of Might and Magic 3 and its expansions.',
)

export default async function Page() {
  return (
    <>
      <PageTitle title={HOMM3_TITLE} />

      <Section>
        <Flavor>
          This section is dedicated to Heroes of Might and Magic 3 and its
          expansions - primarily the official ones.
        </Flavor>
      </Section>

      <Section id="what-is-homm3" title="What is HoMM3?">
        <p>
          Heroes of Might and Magic 3 (HoMM3) is a classic 2D turn-based
          strategy game from 1999. In an era where online play was nonexistent
          in many parts of the world, the simple yet genius hot-seat multiplayer
          thrived. Even if you haven’t played it, you likely have heard tales of
          many long afternoons and evenings, where people huddled together in
          front of a single CRT screen.
        </p>

        <h3 id="why-third-title">Why the third title?</h3>

        <p>
          The HoMM series started in 1995 and concluded in 2015 with its sevent
          installment. While regarded as a part of the general Might and Magic
          fantasy franchise, sharing some of the lore, the turn based games are
          a thing of their own.
        </p>

        <Callout>
          <Flavor>
            Heroes of Might and Magic: Olden Era is an upcoming title. It is an
            official installment developed by Unfrozen under an agreement with
            Ubisoft. It is coming out in 2026 and we are yet to see how it will
            hold up.
          </Flavor>
        </Callout>

        <p>
          The first three Heroes of Might and Magic titles are viewed as the
          classical era. The visual and gameplay styles took a different turn
          with the fourth game and have had several direction changes since
          then. HoMM 3 is widely considered to embody the best of the first two
          installments and build on top of them. Yet when it comes to a classic,
          nostalgia alone is not enough.
        </p>

        <p className="font-bold">
          Heroes of Might and Magic 3 has withstood the test of time.{' '}
        </p>

        <p>
          It's support was discontinued in 2000, but many popular community
          projects have materialized since then. Mods like In the Wake of Gods
          (known as HoMM 3.5), Horn of the Abyss and HoMM3 HD (not the official
          HD Edition) have kept the game alive. These still receive updates. On
          top of additional content, they have made it accessible on newer
          hardware and revitalized the multiplayer.
        </p>

        <p>But mostly it's because players continue to play it.</p>
      </Section>

      <Section title="Key focal points" id="our-focus">
        <p>
          In sync with Casual Meta practices, we will focus on the gameplay,
          skipping almost all of the lore. Our interest lies mostly in Player vs
          Player, maybe even competative, play.
        </p>

        <ul className="list-inside list-disc">
          <li>Explain game mechanics and concepts</li>
          <li>Focus on the multiplayer</li>
          <li>
            Focus on random generated map templates - the core of today's
            multiplayer.
          </li>
          <li>Consolidate the community's knowledge and experience</li>
        </ul>
      </Section>
    </>
  )
}
