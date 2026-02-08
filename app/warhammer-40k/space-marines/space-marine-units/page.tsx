import Image from 'next/image'
import Link from 'next/link'
import { GiBolterGun } from 'react-icons/gi'
import { PiPersonArmsSpreadFill } from 'react-icons/pi'

import assaultIntercessors from '@/app/assets/wh40k/AssaultIntercessors.webp'
import heavyIntercessors from '@/app/assets/wh40k/heavyintercessors.webp'
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
        <h3 id="assault-intercessor">Assault intercessor squad</h3>
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
          chapters.
        </p>

        <p>
          The Astartes chainswords give lots of S4|AP-1|D1 hand-to-hand attacks:
          4 per marine. That is 20 attacks per default squad, although it might
          be best to sacrifice an attack to give the sergeant a power fist or
          thunder hammer. They do well against foes up to Toughness 4 with
          rather weak armor.
        </p>

        <p>
          The heavy bolt pistol also helps doing chip damage to target while the
          intercessors close in.
        </p>

        <p>
          The special rule pushes them to dive objectives. But because it buffs
          a joint leader's wounds, they are also a fair inexpensive bodyguard
          option:
        </p>

        <ul>
          <li>
            <strong>Captain:</strong> heavy melee hitter and free stratagem
            support.
          </li>
          <li>
            <strong>Lieutenant:</strong> his lethal hits give extra punch,
            although they do overlap somewhat with rerolls.
          </li>

          <li>
            <strong>Chaplain:</strong> +1 to wound can help with tougher
            targets.
          </li>

          <li>
            <strong>Azrael (Dark Angels):</strong> multiple buffs to led unit.
          </li>

          <li>
            Any big melee profile character, e.g.{' '}
            <strong>Ragnar Blackmane</strong> (Space Wolves), that will benefit
            from the rerolls.
          </li>

          <li>
            Any character who is strong on their own, e.g.{' '}
            <strong>Uriel Ventris</strong> (Ultramarines), that could use the
            extra cheap protection.
          </li>
        </ul>

        <p>
          With ther regular on-foot speed, they are slow for a real assault
          role. To quickly dive the mid objective, transportation is advised. An
          Impulsor is the most reasonable, as bigger transports want scarier
          payloads.
        </p>

        <p>
          Assault intercessors are customary HQ escorts, especially in chapters
          like the Blood Angels, where they become more serious of a
          hand-to-hand threat.
        </p>

        <ul>
          <li>
            Cheap trading unit that clears light to medium infantry off
            objectives.
          </li>

          <li>Decent bodyguards.</li>

          <li>Slow. Need help reaching the midfield fast.</li>

          <li>Struggle with high toughness targets. Need a good leader.</li>

          <li>
            Less mission utility than Scouts/Infiltrators/Incursors (which bring
            deploy tricks, denial, or hit buffs).
          </li>
        </ul>

        <h3 id="heavy-intercessor">Heavy intercessor squad</h3>

        <Image
          src={heavyIntercessors}
          alt="A squad of Heavy Intercessors."
          className="max-h-96 object-cover object-[0%_65%]"
        />

        <Callout>
          <ul>
            <li>
              <strong>Profile:</strong> M5|T6|Sv3+|W3|OC2 between MEQ and TEQ.
            </li>

            <li>
              <strong>Keywords:</strong> Infantry, Battleline, Imperium,
              Grenades, Gravis
            </li>

            <li>
              <strong>Cost:</strong> 100 pts. for 5 or 200 pts. for 10 models
            </li>
          </ul>

          <hr />

          <p>
            <strong>Unyielding in the Face of the Foe:</strong> +1 to armore
            saves if attacked by a D1, while near objective.
          </p>
        </Callout>

        <p>
          Heavy Intercessors struggle finding a role in 10th edition. They are
          sluggish, tough for their cost, objective-focused shooters. Yet, they
          face heavy competition from cheaper, more flexible units. Even with
          the balance updates, they are still situational.
        </p>
      </Section>
    </>
  )
}
