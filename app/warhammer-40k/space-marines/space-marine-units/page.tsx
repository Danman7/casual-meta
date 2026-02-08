import Image from 'next/image'
import Link from 'next/link'
import { GiBolterGun } from 'react-icons/gi'
import { PiPersonArmsSpreadFill } from 'react-icons/pi'

import assaultIntercessors from '@/app/assets/wh40k/AssaultIntercessors.webp'
import intercessors from '@/app/assets/wh40k/interfcessors.webp'
import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
import { Badge } from '@/app/ui/Badge'
import { Callout } from '@/app/ui/Callout'
import { PageTitle } from '@/app/ui/PageTitle'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'
import { createRouteLookup } from '@/lib/routeLinks'

export const navOrder = 11

export const navTitle = 'Space Marines Units'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${navTitle}`,
  'An overview of the Space Marines battleline infantry units.',
)

const wh40kRoute = createRouteLookup(WH40K_BASE_URL)

export default async function Page() {
  return (
    <>
      <PageTitle
        title={navTitle}
        tags={
          <>
            <Badge>
              <GiBolterGun />
              Warhammer 40,000
            </Badge>

            <Badge>
              <PiPersonArmsSpreadFill />
              Units overview
            </Badge>
          </>
        }
      />

      <p>
        If you are unfamiliar with the profile abbreviations check out our{' '}
        <Link href={wh40kRoute('Profile Archetypes')}>Profile Archetypes</Link>{' '}
        page.
      </p>

      <Section title="Battleline" id="battleline">
        <h3 id="intercessor">Intercessor squad</h3>
        <Image
          src={intercessors}
          alt="A squad of Space Marine Intercessors advancing."
          className="max-h-96 object-cover object-[0%_65%]"
        />
        <Callout>
          <ul>
            <li>
              <strong>Profile:</strong> MEQ with OC2
            </li>

            <li>
              <strong>Keywords:</strong> Infantry, Battleline, Imperium,
              Grenades, Tacticus
            </li>

            <li>
              <strong>Cost:</strong> 80 pts. for 5 or 160 pts. for 10 models
            </li>
          </ul>

          <hr />

          <p>
            <strong>Objective Secured:</strong> If you control an objective in
            your Command phase, it stays yours until the opponent takes it.
          </p>

          <p>
            <strong>Target Elimination:</strong> When shooting, bolt rifles gain
            +2 Attacks, but the unit must shoot a single unit.
          </p>
        </Callout>
        <p>
          Intercessors are currently the principal Primaris battleline infantry,
          replacing the old Tactical Squad role. They lack the large arsenal,
          but compensate with flexibility and dependability.
        </p>
        <p>
          The sticky objectives rule allows these marines to leave an objective
          and play a role elsewhere. It also forces the opponent to physically
          contest the objective.
        </p>
        <p>
          Intercessors are primarily a ranged squad. The bolt rifle is daunting
          against GEQ, adequate against MEQ and at least playable against TEQ.
          The double shots special rule's requirement to shoot at one target
          promotes 5 over 10-man ones. The grenade launcher is never a bad idea,
          even if one marine looses the assault keyword. Frags further help
          againts horedes, while Kraks gives some leverage against tougher
          targets.
        </p>
        <p>
          Melee-wise the squad is nothing exceptional. It will stugggle againts
          anything beyond GEQ. Arm the sergeant with a power fist or a thunder
          hammer to help win trades.
        </p>
        <p>
          Support for the Intercessors should be within measure. They are
          efficient as they are and should be kept cheap.
        </p>
        <ul>
          <li>
            <strong>Armor of Contempt</strong> when surviving on an objective
            matters.
          </li>

          <li>
            <strong>Grenades</strong> when extra punch is needed.
          </li>

          <li>
            <strong>Overwatch</strong> or a <strong>Lieutenant</strong> are
            situational and usually best with 10-man squads.
          </li>
        </ul>
        <p>Intercessors are common among competitive army lists.</p>
        <ul>
          <li>Prefer 5-man squads.</li>

          <li>Rush home objective then move out.</li>

          <li>Good OC and just enough melee to contest the midfield.</li>

          <li>High volume of fire that holds light infantry at bay.</li>

          <li>Sub-optimal as character escorts.</li>
        </ul>
        <h3 id="assault-intercessor">Assault Intercessor squad</h3>
        <Image
          src={assaultIntercessors}
          alt="A squad of Assault Intercessors."
          className="max-h-96 object-cover object-[0%_65%]"
        />
        <Callout>
          <ul>
            <li>
              <strong>Profile:</strong> MEQ with OC2
            </li>

            <li>
              <strong>Keywords:</strong> Infantry, Battleline, Imperium,
              Grenades, Tacticus
            </li>

            <li>
              <strong>Cost:</strong> 75 pts. for 5 or 150 pts. for 10 models
            </li>
          </ul>

          <hr />

          <p>
            <strong>Shock Assault:</strong> Reroll all 1s to wound. Reroll all
            wounds on objective. Also{' '}
            <strong>applies to attached characters</strong>.
          </p>
        </Callout>

        <p>
          This is the standard close combat option outside dedicated melee
          chapters. The same intercessor profile without bolt rifles, sticky
          objectives or double shots rule.
        </p>

        <p>
          The Astartes chainswords give lots of S4|AP-1|D1 hand-to-hand attacks:
          4 per marine. That is 20 attacks per default squad, although it might
          be best to sacrifice one of them to give a power fist or thunder
          hammer to the sergeant for better wound consistency. They do well
          against foes up to Toughness 4 with rather weak armor.
        </p>

        <p>
          The heavy bolt pistol also helps doing chip damage to target while the
          intercessors close in.
        </p>

        <p>The special rule</p>
      </Section>
    </>
  )
}
