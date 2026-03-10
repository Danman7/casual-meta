import Image from 'next/image'
import Link from 'next/link'

import datasheet from '@/app/assets/wh40k/datasheet.webp'
import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
import { Section } from '@/app/ui/Section'
import { Table } from '@/app/ui/Table'
import { woundRollColumns, woundRollRows } from '@/app/warhammer-40k/constants'
import { generatePageMetadata } from '@/lib/metadata'
import { createRouteLookup } from '@/lib/routeLinks'

export const navOrder = 4

export const navTitle = 'Datasheets'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${navTitle}`,
  'How to read datasheets in Warhammer 40k, including unit profiles and weapon stats.',
)

const wh40kRoute = createRouteLookup(WH40K_BASE_URL)

export default async function Page() {
  return (
    <>
      <h1 className="page-title">{navTitle}</h1>
      <Section>
        <p>
          A unit's datasheet is a card, that describes it's profile and lists
          available loadouts, special rules and access to support trough
          keywords. Every unit eligible to play has a datasheet.
        </p>

        <Image src={datasheet} alt="Space Marine Terminators Datasheet" />

        <p className="lead">
          All characteristics deal with probability and dice rolls. Better stats
          mean better consistency, not certainty.
        </p>
      </Section>

      <Section title="Unit Profiles" id="unit-profiles">
        <p>
          Underneath the name of the datasheet there are 6 characteristics. They
          form the unit's profile. It gives insight on how well the unit is
          likely to perform during different phases of the{' '}
          <Link href={wh40kRoute('The Battle Round')}>Battle Round</Link>
          {/* <Link href={`${wh40kRoute('The Battle Round')}#battle-shock-tests`}>
            battle-shocked
          </Link> */}
          .
        </p>

        <h3 id="movement">Move (M")</h3>

        <p>Higher is better.</p>

        <p>
          Move is{' '}
          <strong>
            the maximum amount of inches the unit can move, advance or fall back
            in a single turn, without modifiers.
          </strong>{' '}
          A higher number means more options to reposition, following the rules
          of the{' '}
          <Link href={`${wh40kRoute('The Battle Round')}#movement-phase`}>
            movement phase
          </Link>
          . Larger models pay additionaly for pivoting to change direction
          during a move. M" can never be zero.
        </p>

        <p>
          Most infantry has M6" ± 1. Assault troups and skirmish vehicles are
          usually around M12", while flyers - around M20".
        </p>

        <h3 id="toughness">Toughness (T)</h3>

        <p>Higher is better.</p>

        <p>
          When any{' '}
          <Link href={`${wh40kRoute('The Battle Round')}#making-attacks`}>
            attack is made
          </Link>{' '}
          against the model the{' '}
          <strong>
            weapon's Strength is compared to the target's Toughness during wound
            rolls
          </strong>
          .
        </p>

        <Table columns={woundRollColumns} data={woundRollRows} />

        <p>
          The{' '}
          <strong>
            tougher a model is, the stroger the weapon must be to be more likely
            to score a wound
          </strong>
          . Weapons with equal Strength to the target's Toughness have a 50%
          chance to wound. Weapons that have higher Strength than the target's
          Toughness are considered effective at 2/3 chance to wound. Weapons
          with less Strength tend to have a hard time making a dent.
        </p>

        <h3 id="save">Save (Sv) and Invulnerable Save</h3>

        <p>Lower is better.</p>

        <p>
          Save or Armor Save is another check after the weapon has scored a
          wound against the unit, if that wound actually deals damage.
        </p>
      </Section>
    </>
  )
}
