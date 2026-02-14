import { HOMM3_TITLE } from '@/app/constants'
import { CreatureTable } from '@/app/homm3/creature-compendium/CreatureTable'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 50

export const navTitle = 'Creature Compendium'

export const metadata = generatePageMetadata(
  `${HOMM3_TITLE}: ${navTitle}`,
  'A repository of guides for Heroes of Might and Magic 3 and its expansions.',
)

export default function Page() {
  return (
    <>
      <h1 className="page-title">{navTitle}</h1>

      <Section>
        <p>
          This table lists all HoMM3 creatures (factions and neutrals), along
          with their stats. Filter and sort to compare them.
        </p>
      </Section>

      <CreatureTable />
    </>
  )
}
