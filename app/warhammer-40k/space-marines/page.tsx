import Image from 'next/image'
import Link from 'next/link'
import { GiKnightBanner, GiMagnifyingGlass, GiOpenBook } from 'react-icons/gi'

import banners from '@/app/assets/wh40k/chapter_banners.webp'
import marine from '@/app/assets/wh40k/space-marine.webp'
import marines from '@/app/assets/wh40k/Ultramarines.webp'
import { wh40kHref, wh40kMetadata, wh40kPage } from '@/app/siteMap'
import { Paper } from '@/app/ui/Paper'

const page = wh40kPage('spaceMarines')

export const metadata = wh40kMetadata('spaceMarines')

export default async function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <section>
        <Image
          className="float-right ml-4 max-w-1/2"
          src={marine}
          alt="A Space Marine from the Ultramarines chapter."
          loading="eager"
        />

        <p>
          Space Marines are genetically engineered superhuman warriors - the
          best of mankind's Imperium. Fanatically loyal to the Emperor, they're
          given tasks that other human forces fall short of.
        </p>

        <p>
          Being a <em>cornerstone</em> of the WH40K universe, they're{' '}
          <strong>widely supported</strong> in starter boxes, standalone kits,
          used-market listings, and usually the first to be adopted in new
          editions. Models and spare parts are easy to find and paint, and you
          can get a lot of advice on how to list and play them.
        </p>

        <p>
          You can think of them as the <strong>"default faction"</strong> - the
          one that teaches the game. They are around the middle of the ecosystem
          - more elite than horde armies like Guards or Orks, less specialized
          than T'au or World Eaters. All of this makes them{' '}
          <strong>approachable for new players</strong>.
        </p>

        <p>
          On their datasheets, they are referred to by their formal name,{' '}
          <em>
            <strong>Adeptus Astartes</strong>
          </em>
          , which you will also often encounter in media and books. Most
          players, however, just call them <em>Marines</em>.
        </p>
      </section>

      <section>
        <h2 id="faction-rule">Faction rule</h2>

        <p>
          Even before getting into the data, the faction rule alone gives us
          good insight into the Space Marines playstyle.
        </p>

        <Paper icon={GiOpenBook}>
          <p className="font-bold">Oath of Moment (Oath)</p>

          <p>
            At the start of your{' '}
            <Link href={wh40kHref('battleRound', 'command-phase')}>
              command phase
            </Link>
            , select one enemy unit. Until your next command phase:
          </p>

          <ul>
            <li>
              All your models{' '}
              <Link href={wh40kHref('datasheets', 're-rolls')}>re-roll</Link>{' '}
              <Link href={wh40kHref('attackSequence', 'hit-roll')}>
                hit rolls
              </Link>{' '}
              against that target.
            </li>

            <li>
              If using a codex-compliant detachment (excluding divergent
              chapters like Black Templars, Blood Angels, etc.; explained
              below), you also gain +1 to{' '}
              <Link href={wh40kHref('attackSequence', 'wound-roll')}>
                wound rolls
              </Link>{' '}
              against that target.
            </li>
          </ul>
        </Paper>

        <p>
          This shapes Space Marines into a <strong>combined-arms force</strong>{' '}
          where multiple units <em>focus fire</em> priority targets, one at a
          time. This pairs well with weapon keywords related to crits (e.g.{' '}
          <Link href={wh40kHref('datasheets', 'devastating-wounds')}>
            Devastating Wounds
          </Link>
          ,{' '}
          <Link href={wh40kHref('datasheets', 'lethal-hits')}>Lethal Hits</Link>
          ) and{' '}
          <Link href={wh40kHref('datasheets', 're-rolls')}>re-roll access</Link>
          .
        </p>
      </section>

      <section>
        <h2 id="army">A tool for every job</h2>

        <p>
          On the table, Space Marines are{' '}
          <strong>all-around reliable professionals</strong> - not the fastest
          or toughest, but rather the most flexible.
        </p>

        <p>
          There are more Astartes{' '}
          <Link href={wh40kHref('datasheets')}>datasheets</Link> than any other
          faction, with a <em>broad distribution of roles</em>: objective
          pressure, jump infantry, elites, bikes, transports, walkers, aircraft
          etc. Be that as it may, there is a heavy{' '}
          <strong>emphasis on characters</strong> - roughtly 40% of the core
          list. This promotes layered buffs of task forces that work together -{' '}
          <em>troops + leader + Oath + stratagem</em>.
        </p>

        <p>
          Space Marines have <strong>good baseline durability</strong>. Almost
          all models are{' '}
          <Link href={wh40kHref('profileArchetypes', 'meq')}>MEQ</Link>{' '}
          <span className="badge">T4, Sv3+</span> or better, which bestows a
          more forgiving experience. About 70% of the arsenal is ranged, mostly
          D1-D2 weapons within 24" range, with{' '}
          <strong>
            strong{' '}
            <Link href={wh40kHref('datasheets', 'weapon-keywords')}>
              keyword
            </Link>{' '}
            diversity
          </strong>
          .
        </p>

        <p>
          On the flip side, the abundancy of Astartes options fosters{' '}
          <strong>choice overload</strong>. In addition, there is a notable{' '}
          <strong>roster bloat</strong> where multiple units and weapons overlap
          in role.
        </p>

        <p>
          When you are good at everything, you get outmatched by specialized
          forces at their games. Orks and Tyranids may swarm you, World Eaters
          may slaughter you in melee, T'au may outshoot you, and so on.
        </p>
      </section>

      <section>
        <h2 id="chapters" className="flex-center">
          Chapters <GiKnightBanner />
        </h2>

        <Image src={banners} alt="Space Marine Banners" />

        <p>
          Space Marines are segmented into <em>Chapters</em> - independent
          forces of roughly 1,000 Marines with their own traditions and tactics.
          Datasheets that have only the <em>Adeptus Astartes</em> faction are{' '}
          <em>core units</em>. Datasheets that have a second faction keyword are{' '}
          <em>chapter units</em>.
        </p>
        <Paper icon={GiMagnifyingGlass}>
          <p className="text-sm">
            For example, Marneus Calgar has both{' '}
            <strong>Adeptus Astartes</strong> and <strong>Ultramarines</strong>,
            so he is part of the Ultramarines. Intercessors only have the
            Adeptus Astartes keyword, so they can be part of any force.
          </p>
        </Paper>

        <p>
          A chapter says who the given Space Marines are. A detachment specifies
          how the army fights.
        </p>

        <Paper icon={GiOpenBook}>
          <p className="font-bold">Chapter roster rules</p>

          <ul>
            <li>
              An army list can include core units and units from one chapter.
            </li>

            <li>
              <strong>
                Units from different chapters cannot mix together.
              </strong>
            </li>

            <li>
              Including a datasheet with a second faction keyword locks your
              army into that chapter.
            </li>

            <li>
              Some detachments are locked into a specific chapter, but don't
              force you to include chapter units.
            </li>

            <li>
              Black Templars, Space Wolves and Deathwatch have additional
              limitations on what core units they can field.
            </li>
          </ul>
        </Paper>

        <p>
          The most visible trait of a chapter is its color scheme, but what
          defines it on the table are its{' '}
          <Link href={wh40kHref('spaceMarineChapterUnits')}>custom units</Link>{' '}
          and{' '}
          <Link href={wh40kHref('spaceMarineDetachments')}>detachments</Link>.
          Let's go briefly through the official chapters to get a feeling of
          their flavor and support.
        </p>

        <p>
          There are two types of chapter support: lightly supported chapters
          (codex-compliant, few unique units) and divergent chapters (lots of
          unique datasheets and rules).
        </p>

        <h3 id="ultramarines">Ultramarines</h3>

        <Image
          className="picture profile-img"
          src={marines}
          alt="An Ultramarines detachment."
          loading="eager"
        />
      </section>
    </>
  )
}
