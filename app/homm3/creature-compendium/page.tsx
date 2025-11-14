import { HOMM3_TITLE } from '@/app/constants'
import { CreatureTable } from '@/app/homm3/creature-compendium/CreatureTable'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 50

export const navTitle = 'Creature Compendium'

export const metadata = generatePageMetadata(
  `${HOMM3_TITLE}: ${navTitle}`,
  'A repository of guides for Heroes of Might and Magic 3 and its expansions.',
)

export default function Page() {
  return (
    <article className="max-w-7xl mx-auto">
      <h1>{navTitle}</h1>

      <p>
        Here is a table with all HoMM3 creatures, factions and neutral, and all
        their stats. Feel free to filter and sort them as you like to gain
        insight into how they fare.
      </p>

      <CreatureTable />
    </article>
  )
}
