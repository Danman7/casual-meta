import { CreatureTable } from '@/app/homm3/creature-compendium/CreatureTable'
import { homm3Metadata, homm3Page } from '@/app/siteMap'

const page = homm3Page('creatureCompendium')

export const metadata = homm3Metadata('creatureCompendium')

export default function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <section>
        <p>
          This table lists all HoMM3 creatures (factions and neutrals), along
          with their stats. Filter and sort to compare them.
        </p>
      </section>

      <CreatureTable />
    </>
  )
}
