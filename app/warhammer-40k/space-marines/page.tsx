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
        <Image
          className="picture profile-img"
          src={marines}
          alt="An Ultramarines detachment."
          loading="eager"
        />

        <p>
          Space Marines are genetically engineered superhuman warriors - the
          best of mankind's Imperium. Fanatically loyal to the Emperor, they're
          given tasks which other human forces fall short of.
        </p>

        <p>
          You can think of them as the <strong>"default faction"</strong>.
        </p>

        <p>
          Games Workshop treats them as a <em>key cornerstone</em> of the WH40k
          universe. As a result, they're <strong>widely supported</strong> in
          starter boxes, used markets, and usually the first to be adopted in
          new editions. Models are easy to find, easy to paint, and you can get
          a lot of advice on how to list and play them. Plus, they are around
          the middle of the factions ecosystem - more elite than horde armies
          like Guards or Orks, less specialized than T'au or World Eaters. All
          of this makes them <strong>approachable for new players</strong>.
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
          className="float-right ml-4"
          src={marine}
          alt="A Space Marine."
        />

        <p>
          In a sentence, Space Marines are{' '}
          <strong>all-around reliable professionals</strong> - not the fastest
          or toughest, but rather the most flexible. Your goal is to identify
          the most important enemy piece, declare Oath on it, and use infantry,
          characters and vehicles together to bring it down. They teach the
          whole game rather than one gimmick.
        </p>

        <p>
          Space Marines have the largest amount of{' '}
          <Link href={`${wh40kRoute('Datasheets')}`}>datasheets</Link> of any
          faction . They have an answer in almost every battlefield category:
          infantry trading, elite infantry, jump units, bikes, transports,
          tanks, walkers, aircraft, super-heavies, and heroes. There is a{' '}
          <strong>tool for every job</strong>, but that comes with some
          downsides.
        </p>

        <p>
          For one, many units <strong>overlap in roles</strong>, which is roster
          bloat. In turn this leads to choice overload. Also, this premium
          versatility frequently loses to specialist units dedicated to specific
          jobs. For example, the average ranged Marine shoots well, but not
          quite as the T'au.
        </p>

        <p>
          The role distribution in the army is very character-heavy which
          indicates <strong>leader-driven specialization</strong>. Marines are
          less about standalone profiles and more about packages (character +
          bodyguards + support). Units that are merely solid on their own become
          dangerous whith the right leader.
        </p>

        <p>
          Space Marines have <strong>excellent baseline durability</strong>.
          Nearly all models sit at T4, Sv3+ or better. This bestows a more
          forgiving experience, furthering the beginner-friendly aspect of the
          faction.
        </p>

        <p>
          The Astartes arsenal consists of{' '}
          <strong>primarily D1-D2 weapons</strong> with very{' '}
          <strong>
            strong{' '}
            <Link href={`${wh40kRoute('Datasheets')}#weapon-keywords`}>
              keyword
            </Link>{' '}
            diversity
          </strong>
          . Over two-thirds of the weapons are ranged, mostly within 24" range.
        </p>
      </section>

      <section>
        <h2 id="chapters" className="flex-center">
          Chapters <GiKnightBanner />
        </h2>

        <p>
          Space Marine forces are segmented into <em>Chapters</em>. All core
          units have the <em>Adeptus Astartes</em> faction keyword on their{' '}
          datasheets, but some may also have a second faction keyword. These are
          chapter specific units. Part of the faction's profile breadth comes
          from these.
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
          Chapters push the generalistic Adeptus Astartes into sharper
          identities. Selecting a single unit with a second faction keyword,
          locks your army into that chapter.
        </p>

        <p>
          You can read more on chapters on the{' '}
          <Link href={wh40kRoute('Space Marine forces')}>
            Space Marine forces
          </Link>{' '}
          page. The game also allows players to create and paint their own{' '}
          <em>cosmetic chapters</em>, as long as they follow the rules of the
          models included. The paint does not force the rules. The datasheets
          and keywords do.
        </p>
      </section>
    </>
  )
}
