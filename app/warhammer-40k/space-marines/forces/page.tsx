import Image from 'next/image'

import ultramarines from '@/app/assets/wh40k/ultramarines-banner.webp'
import { WH40K_TITLE } from '@/app/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 11

export const navTitle = 'Space Marine forces'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${navTitle}`,
  'An overview of the Space Marine chapters and detachments.',
)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

      <section>
        <h2 id="chapters" className="flex-center">
          Chapters and detachments
        </h2>

        <p>
          In lore, a Chapter is an{' '}
          <strong>autonomous Space Marine military order</strong>. A
          Codex-compliant Chapter is usually around 1,000 battle-brothers,
          traditionally split into 10 companies of roughly 100 Marines, plus
          command staff, specialists, vehicles, fleet assets, Chaplains,
          Librarians, etc.
        </p>

        <p>
          In gameplay, all Space Marines are marked as <em>Adeptus Astartes</em>
          . But if a datasheet has a <strong>second faction keyword</strong>,
          that marks the <strong>unit's Chapter</strong>.
        </p>

        <blockquote className="example">
          For example, Marneus Calgar has both Adeptus Astartes and
          Ultramarines, so he is part of the Ultramarines.
        </blockquote>

        <p>
          <strong>
            Units from different chapters cannot be mixed together in the same
            army
          </strong>
          . You can list core units as much as you want, but as soon as you
          select a unit belonging to a chapter, you are locked to that chapter's
          rules.
        </p>

        <p>
          <strong>
            Where a Chapter is who your Space Marines are, a detachment is how
            your army fights.
          </strong>
          There are generic and chapter-flavored detachments.
        </p>
      </section>

      <section>
        <h2 id="ultramarines">Ultramarines</h2>

        <Image
          className="float-right ml-4"
          src={ultramarines}
          alt="Ultramarines banner."
        />

        <p className="font-bold">
          Have the right tool active at the right time.
        </p>

        <p>
          We start with the Ultramarines, because their <em>Macragge Blue</em>{' '}
          is the most recognized color for Space Marines, but they are not a
          major supplement chapter in terms of models and rules. They bring a
          total of <strong>8 datasheets</strong> (6 characters, 2 elites) with
          some unique gear, and <strong>2 detachments</strong> to the game
          table.
        </p>

        <p>
          Gameplay-wise, they are <strong>generalists</strong> (like vanilla
          armies) with added <strong>character and stratagem support</strong>.
        </p>
      </section>
    </>
  )
}
