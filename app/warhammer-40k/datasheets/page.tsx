import Link from 'next/link'

import battleround from '@/app/assets/wh40k/battleround.webp'
import { WH40K_TITLE } from '@/app/constants'
import { ImageTextSection } from '@/app/ui/ImageTextSection'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 2

export const navTitle = 'Turns and datasheets'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${navTitle}`,
  'How to read the stats of units and their weapons in Warhammer 40k and how to understand the sequence of turns.',
)

export default async function Page() {
  return (
    <>
      <h1 className="page-title">{navTitle}</h1>

      <Section>
        <p>
          We will attempt to clarify, as briefly as it's reasonable, the battle
          round and unit datasheets - two very connected core concepts.
        </p>

        <ul>
          <li>
            A <strong>datasheet</strong> explains how a unit and its loadouts
            perform based on common characteristics.
          </li>

          <li>
            A <strong>round</strong> describes the sequence of actions these
            same characteristics take place in resolving.
          </li>
        </ul>

        <p>
          For details around disputes on the table, refer to the{' '}
          <Link href="https://assets.warhammer-community.com/warhammer40000_core&key_corerules_eng_24.09-5xfayxjekm.pdf">
            Core Rules
          </Link>
          .
        </p>
      </Section>

      <Section id="battleround" title="The battle round in turns">
        <ImageTextSection
          image={battleround}
          imageAlt="The battle round sequence of phases from the core rulebook."
          imageClassName="max-h-full"
          text="A game of WH40k can be played in various formats (missions, army
            point limits, etc.), but is always played in a series of rounds.
            All players take a turn within a single battle round. And a player's turn is
            divided into a sequence of phases: command into movement into shooting into charge into fight phase. Then the turn switches. Understand the phases and you
            will understand the flow of the game."
        />
      </Section>
    </>
  )
}
