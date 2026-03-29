import Image from 'next/image'

import title from '@/app/assets/homm3/title.webp'
import { HOMM3_TITLE } from '@/app/constants'
import { Section } from '@/app/ui/Section'
import { SourceLink } from '@/app/ui/SourceLink'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  HOMM3_TITLE,
  'A repository of guides for Heroes of Might and Magic 3 and its expansions.',
)

export default async function Page() {
  return (
    <>
      <h1>{HOMM3_TITLE}</h1>

      <Section>
        <Image
          src={title}
          alt="Box art of Heroes of Might and Magic 3"
          className="float-left mt-2 mr-4 max-w-1/2 md:max-w-48"
        />

        <p>
          Heroes of Might and Magic 3 (HoMM3) is a classic 2D turn-based
          strategy game from 1999. In an era where online play was nonexistent
          in many parts of the world, the simple yet ingenious hot-seat
          multiplayer thrived. Even if you have not played it, you have likely
          heard tales of many long afternoons and evenings, where people huddled
          together in front of a single CRT screen.
        </p>

        <p>
          The HoMM series started in 1995 and concluded in 2015 with its seventh
          installment. While regarded as a part of the general Might and Magic
          fantasy franchise, sharing some of the lore, the turn-based games are
          a thing of their own.
        </p>

        <p>
          The first three Heroes of Might and Magic titles are viewed as the
          classic era. The visual and gameplay styles took a different turn with
          the fourth game and have had several direction changes since then.
          HoMM 3 is widely considered to embody the best of the first two
          installments and build on them. Yet when it comes to a classic,
          nostalgia alone is not enough.
        </p>

        <p className="font-bold">
          Heroes of Might and Magic 3 has withstood the test of time.
        </p>

        <p>
          Its support was discontinued in 2000, but many popular community
          projects have materialized since then. Mods like In the Wake of Gods
          (known as HoMM 3.5), Horn of the Abyss, and HoMM3 HD (not the official
          HD Edition) have kept the game alive. These still receive updates. On
          top of additional content, they have made it accessible on newer
          hardware and revitalized the multiplayer.
        </p>

        <p>Mostly, it is because players continue to play it.</p>
      </Section>

      <Section title="Our sources" id="our-sources">
        <div className="flex-wrapper">
          <SourceLink
            href="http://heroescommunity.com/forumdisplay.php3?FID=6"
            text="Library of Enlightenment"
          />

          <SourceLink
            href="https://homm.miraheze.org/wiki/Main_Page"
            text="HoMM 3 Wiki"
          />

          <SourceLink
            href="http://www.heroesofmightandmagic.com/heroes3/heroesofmightandmagic3iii.shtml"
            text="Age of Heroes"
          />

          <SourceLink
            href="https://www.youtube.com/@Lexiav"
            text="Lexiav"
            type="youtube"
          />

          <SourceLink
            href="https://www.youtube.com/@Norovo"
            text="Norovo"
            type="youtube"
          />

          <SourceLink
            href="https://www.reddit.com/r/heroes3/"
            text="r/heroes3"
            type="reddit"
          />
        </div>
      </Section>

      <Section title="About this documentation" id="our-focus">
        <p>
          In sync with Casual Meta practices, we will focus on the gameplay,
          skipping almost all of the lore. Our interest lies mostly in Player vs
          Player, maybe even competitive, play.
        </p>

        <ul className="list-inside list-disc">
          <li>Explain game mechanics and concepts</li>
          <li>Focus on the multiplayer</li>
          <li>
            Focus on randomly generated map templates - the core of today's
            multiplayer.
          </li>
          <li>Consolidate the community's knowledge and experience</li>
        </ul>

        <h3 id="in-game-time">In-game time notation</h3>

        <p>
          HoMM3 is a turn-based strategy game. Games may take several hours, or
          entire weeks in real life. But in the game,{' '}
          <strong>time is measured by the game calendar</strong> in days, weeks
          and months. Populations, bonuses, and curses resolve on the first day
          of each week.
        </p>

        <p>
          A lot of strategies revolve around proper timing. This means something
          should happen at or have happened before a certain week or month.
          Players often say something like "get your tier 7 creature up to week
          3 day 7". To simplify this, the community has adopted a{' '}
          <strong>day-week-month notation</strong>.
        </p>

        <p>
          For example,{' '}
          <strong>
            1-1-6 means day 6 of the first week. 2-1-7 means by the end of the
            first week of the second month.
          </strong>{' '}
          and so on.
        </p>
      </Section>
    </>
  )
}
