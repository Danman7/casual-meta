import Image from 'next/image'
import Link from 'next/link'
import { GiKnightBanner } from 'react-icons/gi'

import chapters from '@/app/assets/wh40k/space-marine-chapter-banners.webp'
import wh40kTitle from '@/app/assets/wh40k/Ultramarines.webp'
import { WH40K_TITLE } from '@/app/constants'
import { PlayOrSkip } from '@/app/ui/PlayOrSkip'
import { wh40kRoute } from '@/app/warhammer-40k/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 10

export const navTitle = 'Space Marines'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${navTitle}`,
  'An overview of the Space Marines faction in Warhammer 40k.',
)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

      <section>
        <Image
          src={wh40kTitle}
          alt="A small detachment of Space Marines"
          className="picture"
        />

        <p>
          Space Marines are engineered superhuman soldiers - the{' '}
          <em>elite of mankind's Imperium</em>. They take a central position in
          the fictional universe of WH40k. Whether on the cover of a novel, a
          magazine, or somewhere online, chances are a Space Marine was the
          first thing many fans saw related to the hobby.
        </p>
      </section>

      <PlayOrSkip
        pros={
          <>
            <div>
              <div className="font-bold">Beginner-friendly</div>
              <div className="flavor">
                Models are easy to find and paint. Clear rules. Start small,
                expand gradually, and remain competitive without complex
                mechanics.
              </div>
            </div>

            <div>
              <div className="font-bold">Jacks-of-all-trades</div>
              <div className="flavor">
                Flexible detachments and leaders. Unit choices cover shooting,
                melee, durability, mobility, and support.
              </div>
            </div>

            <div>
              <div className="font-bold">Widely played</div>
              <div className="flavor">
                Early adoption in new codexes. A lot of competative army list
                examples.
              </div>
            </div>
          </>
        }
        cons={
          <>
            <div>
              <div className="font-bold">Roster bloat</div>
              <div className="flavor">
                Many units overlap, where some struggle to find a role.
              </div>
            </div>

            <div>
              <div className="font-bold">Frequent changes</div>
              <div className="flavor">
                They get many releases, which means many updates. Strong
                combinations get nerfed quickly.
              </div>
            </div>

            <div>
              <div className="font-bold">Low specialization</div>
              <div className="flavor">
                Marines win through combined arms and focus fire (Oath of
                Moment), not dominating a certain phase or aspect of the game.
              </div>
            </div>
          </>
        }
      />

      <section>
        <h2 id="chapters" className="flex-center">
          Chapters <GiKnightBanner />
        </h2>

        <Image
          src={chapters}
          alt="An image of magnets formed as banners of different Space Marine Chapters."
        />

        <p>
          Space Marine forces are segmented into <em>Chapters</em>. All core
          units have the <em>Adeptus Astartes</em> faction keyword on their{' '}
          <Link href={`${wh40kRoute('datasheets')}`}>datasheets</Link>. But some
          may also have a second faction keyword. These are chapter specific
          units.
        </p>

        <ul>
          <li>
            An army list can include core units and units from one chapter.
          </li>

          <li>
            <strong>Units from different chapters cannot mix together.</strong>
          </li>

          <li>
            Black Templars, Space Wolves and Deathwatch have limitations on what
            core units they can field.
          </li>
        </ul>

        <p>
          These restrictions shape list-building more than battlefield tactics.
          Choosing a chapter determines synergies and detachment options before
          the game begins.
        </p>
      </section>

      <section>
        <h2 id="oath-of-moment">Oath of Moment</h2>

        <small>Faction ability</small>

        <p>
          At the start of your{' '}
          <Link href={`${wh40kRoute('The Battle Round')}#command-phase`}>
            command phase
          </Link>
          , select one enemy unit. Until your next command phase:
        </p>

        <ul>
          <li>All your models re-roll hit rolls against that target.</li>

          <li>
            If using a Codex Space Marines detachment and excluding divergent
            chapters (Black Templars, Blood Angels, Dark Angels, Deathwatch,
            Space Wolves), you also gain +1 to wound rolls against that target.
          </li>
        </ul>

        <p>
          Oath of Moment is avaliable to all Space Marine units and shapes a lot
          of the faction's playstyle. It encourages players to identify{' '}
          <em>priority units</em> and concentrate on them, one at a time. In
          turn, the opponent must be careful how they expose key assets.
        </p>
      </section>
    </>
  )
}
