import Image from 'next/image'
import Link from 'next/link'

import datasheet from '@/app/assets/wh40k/datasheet.webp'
import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
import { Section } from '@/app/ui/Section'
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
          For every unit there is a datasheet. It clarifies the rules that unit
          follows and its available loadouts.{' '}
          <Link href={wh40kRoute('The Battle Round')}>The Battle Round</Link> is
          tightly connected to datasheets. One explains the phases of the game,
          while the other describes how well the given unit is likely to perform
          in each phase.
        </p>
        <Image src={datasheet} alt="Space Marine Terminators Datasheet" />
        <p className="lead">
          All stats deal with probability and dice roll gates. Better
          characteristics mean better consistency, not certainty.
        </p>
      </Section>

      <Section title="Unit Profiles" id="unit-profiles">
        <p>
          Underneath the unit name, there are 6 characteristics. They tell the
          tale of its durability, speed, objective pressure and how likely it is
          to become{' '}
          <Link href={`${wh40kRoute('The Battle Round')}#battle-shock-tests`}>
            battle-shocked
          </Link>
          .
        </p>

        <h3 id="movement">Movement (M")</h3>

        <p>
          This is the{' '}
          <strong>
            maximum amount of inches the unit can move without modifiers
          </strong>{' '}
          during the{' '}
          <Link href={`${wh40kRoute('The Battle Round')}#movement-phase`}>
            movement phase
          </Link>
          . Even with debuffs, it can never be less than 1". Most infantry has a
          M6" plus-minus 1". Assault troups and skirmish vehicles are usually
          around M12". Flyers - around M20".
        </p>

        <h3 id="toughness">Toughness (T)</h3>

        <p>
          The{' '}
          <strong>
            tougher a model is, the stroger the weapon must be to be more likely
            score a wound
          </strong>
          . Unit Toughness is directly related to the Strength of the weapon
          that is being used against it.
        </p>
      </Section>
    </>
  )
}
