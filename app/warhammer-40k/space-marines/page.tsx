import Image from 'next/image'
import Link from 'next/link'
import { GiKnightBanner } from 'react-icons/gi'

import marine from '@/app/assets/wh40k/space-marine.webp'
import marines from '@/app/assets/wh40k/Ultramarines.webp'
import { WH40K_TITLE } from '@/app/constants'
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
        <p>
          Space Marines are genetically engineered superhuman warriors - the
          best of mankind's Imperium. Fanatically loyal to the Emperor, they're
          given tasks which other human forces fall short of.
        </p>

        <Image
          className="picture profile-img"
          src={marines}
          alt="An Ultramarines detachment."
          loading="eager"
        />

        <p>
          Being a <em>key cornerstone</em> of the WH40k universe, they're{' '}
          <strong>widely supported</strong> in starter boxes, standalone kits,
          used markets, and usually the first to be adopted in new editions.
          Models and spare parts are easy to find and paint, and you can get a
          lot of advice on how to list and play them.
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
        <h2 id="oath-of-moment">Oath of Moment</h2>

        <p>
          Before getting into the data, the faction rule alone gives us good
          insight on their playstyle.
        </p>

        <blockquote>
          <p className="font-bold">Oath of Moment (Oath)</p>

          <p>
            At the start of your{' '}
            <Link href={`${wh40kRoute('The Battle Round')}#command-phase`}>
              command phase
            </Link>
            , select one enemy unit. Until your next command phase:
          </p>

          <ul>
            <li>
              All your models{' '}
              <Link href={`${wh40kRoute('Datasheets')}#re-rolls`}>re-roll</Link>{' '}
              <Link href={`${wh40kRoute('The Battle Round')}#hit-roll`}>
                hit rolls
              </Link>{' '}
              against that target.
            </li>

            <li>
              If using a Codex Space Marines detachment and excluding divergent
              chapters (Black Templars, Blood Angels, Dark Angels, Deathwatch,
              Space Wolves), you also gain +1 to{' '}
              <Link href={`${wh40kRoute('The Battle Round')}#wound-roll`}>
                wound rolls
              </Link>{' '}
              against that target.
            </li>
          </ul>
        </blockquote>

        <p>
          This shapes Space Marines into a <strong>combined-arms force</strong>{' '}
          where multiple units <em>focus fire</em> priority targets, one at a
          time. This pairs well with weapon keywords related to crits (e.g.{' '}
          <Link href={`${wh40kRoute('Datasheets')}#devastating-wounds`}>
            Devastating Wounds
          </Link>
          ,{' '}
          <Link href={`${wh40kRoute('Datasheets')}#lethal-hits`}>
            Lethal Hits
          </Link>
          ) and{' '}
          <Link href={`${wh40kRoute('Datasheets')}#re-rolls`}>
            reroll access
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="army">A tool for every job</h2>
        <Image
          className="float-right ml-4 max-w-1/2"
          src={marine}
          alt="A Space Marine."
        />
        <p>
          On the table, Space Marines are{' '}
          <strong>all-around reliable professionals</strong> - not the fastest
          or toughest, but rather the most flexible.
        </p>

        <p>
          There are more Astartes{' '}
          <Link href={`${wh40kRoute('Datasheets')}`}>datasheets</Link> than any
          other faction, with a <em>broad distribution of roles</em>: objective
          pressure, jump infantry, elites, bikes, transports, walkers, aircraft
          etc. Be that as it may, there is a heavy{' '}
          <strong>emphasis on characters</strong> - roughtly 40% of the core
          list. This promotes layered buffs of taskforces that work together -
          <em>troops + leader + Oath + stratagem</em>.
        </p>

        <p>
          Space Marines have <strong>good baseline durability</strong>. Almost
          all models are{' '}
          <Link href={`${wh40kRoute('Profile Archetypes')}#meq`}>MEQ</Link>{' '}
          <span className="badge">T4, Sv3+</span> or better, which bestows a
          more forgiving experience. About 70% of the arsenal is ranged, mostly
          D1-D2 weapons within 24" range, with{' '}
          <strong>
            strong{' '}
            <Link href={`${wh40kRoute('Datasheets')}#weapon-keywords`}>
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
          may slaugher you in melee, T'au may outshoot you, and so on.
        </p>
      </section>

      <section>
        <h2 id="chapters" className="flex-center">
          Chapters <GiKnightBanner />
        </h2>
        <p>
          Space Marines are segmented into <em>Chapters</em> - independent
          forces of roughly 1,000 Marines with their own traditions and tactics.
          They play a role in both the lore and the game.
        </p>
        <p>
          Datasheets that have only the <em>Adeptus Astartes</em> faction are{' '}
          <em>core units</em>. Datasheets that have a second faction keyword are{' '}
          <em>chapter units</em>.
        </p>
        <blockquote className="example">
          For example, Marneus Calgar has both Adeptus Astartes and
          Ultramarines, so he is part of the Ultramarines. Intercessors only
          have the Adeptus Astartes keyword, so they can be part of any force.
        </blockquote>

        <p>
          A chapter says who the given Space Marines are. A detachment specifies
          how the army fights.
        </p>

        <blockquote>
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
        </blockquote>

        <p>
          The game also allows players to create and paint their own{' '}
          <em>cosmetic chapters</em>, as long as they follow the rules of the
          models included. The paint does not force the rules. The datasheets
          and keywords do.
        </p>
      </section>
    </>
  )
}
