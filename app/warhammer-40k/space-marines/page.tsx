import Image from 'next/image'
import Link from 'next/link'
import { GiKnightBanner } from 'react-icons/gi'

import chapters from '@/app/assets/wh40k/space-marine-chapter-banners.webp'
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
          elite of the Imperium of Man. Also referred to by their formal name,{' '}
          <em>Adeptus Astartes</em>, they can be described as the{' '}
          <em>"default faction"</em> of the WH40k ecosystem. They frequently
          serve as a benchmark against which other factions are compared.
        </p>

        <Image
          className="picture profile-img"
          src={marines}
          alt="An Ultramarines detachment."
          loading="eager"
        />

        <p>
          Games Workshop treats Space Marines as a cornerstone of the 40k
          universe, and a key promotional tool. As a result, they are{' '}
          <strong>widely supported</strong> in starter boxes, painting guides,
          used markets, and usually the first to be adopted in new editions.
          This makes them easy to start, easy to collect, and easy to get advice
          on, thus quite <strong>beginner-friendly</strong>.
        </p>

        <p>
          Let's try to break the faction down, step by step to understand
          whether they are right for you.
        </p>
      </section>

      <section>
        <h2>An elite toolbox army</h2>

        <p>
          Space Marines have the{' '}
          <strong>
            largest amount of{' '}
            <Link href={`${wh40kRoute('Datasheets')}`}>datasheets</Link> of any
            faction
          </strong>
          . They have an answer in almost every battlefield category: infantry
          trading, elite infantry, jump units, bikes, transports, tanks,
          walkers, aircraft, super-heavies, and heroes.
        </p>

        <p>
          The role distribution is very character-heavy which indicates{' '}
          <strong>leader-driven specialization</strong>. Character variety is a
          central method of attaching buffs, creating focused packages, and
          tailoring units to a task.
        </p>

        <p>
          Space Marines have <strong>excellent baseline durability</strong>.
          Nearly all models sit at T4, Sv3+ or better.
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
          . A bit more than two-thirds are ranged weapons, mostly within 24"
          range. This gives them an occupy mid-board
        </p>
      </section>

      <section>
        <h2 id="oath-of-moment">Oath of Moment</h2>

        <p>
          The faction rule, <em>Oath of Moment</em>, shapes the Space Marines
          into a <strong>combined-arms</strong> force. It helps us understand a
          lot of their playstyle.
        </p>

        <blockquote>
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
          This pushes the Marines toward <strong>focus fire</strong>.
        </p>
      </section>

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
    </>
  )
}
