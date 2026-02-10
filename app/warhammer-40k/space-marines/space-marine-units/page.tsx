import Image from 'next/image'
import Link from 'next/link'
import { GiBolterGun } from 'react-icons/gi'
import { PiPersonArmsSpreadFill } from 'react-icons/pi'

import assaultIntercessors from '@/app/assets/wh40k/AssaultIntercessors.webp'
import eliminators from '@/app/assets/wh40k/eliminators.webp'
import heavyIntercessors from '@/app/assets/wh40k/heavyintercessors.webp'
import intercessors from '@/app/assets/wh40k/interfcessors.webp'
import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
import { Badge } from '@/app/ui/Badge'
import { Callout } from '@/app/ui/Callout'
import { Flavor } from '@/app/ui/Flavor'
import { PageTitle } from '@/app/ui/PageTitle'
import { Pill } from '@/app/ui/Pill'
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
        Having the datasheets is essential to understanding the information
        bellow. If you are unfamiliar with the profile abbreviations check out
        our{' '}
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
              <strong>Profile:</strong> MEQ with OC2{' '}
              <Flavor className="inline">
                | Infantry, Battleline, Imperium, Grenades, Tacticus
              </Flavor>
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
          Intercessors are the principal Space Marine infantry. They are both
          flexible because of the <em>sticky objectives</em> rule, and
          consistend because of the <em>double shots</em> rule. This makes them
          common among competition army lists.
        </p>

        <p>
          With the bolt rifle{' '}
          <Flavor className="inline">
            assault heavy 24"|A2|BS3+|S4|AP-1|D1
          </Flavor>{' '}
          they are not designed as major damage dealers. However, the sheer
          volume of attacks they get from double shots makes them a menace to
          light infantry. The single-target requirement for double shots
          naturally promotes 5-man squads over 10-man ones. Also, the grenade
          launcher always helps in a pinch against both tougher targets and
          hordes, so taking one goes by default.
        </p>

        <p>
          Their melee profile is weak. Arm the sergeant with a power fist or a
          thunder hammer to help with trades, but don't expect coherency there.
        </p>

        <p>
          The sticky objectives rule is what gives intercessors great utility.
          It allows them to capture an objective, then move on to play a role
          elsewhere. You can tag home then screen or even contest the midfield.
          The rule also forces the opponent to physically contest controlled
          objectives. This is also a reason to go with 5-man squads.
        </p>

        <p>
          Intercessors are efficient as they are, so support for them should be
          cheap. You can try <em>Armor of Contempt</em> when surviving on an
          objective matters or <em>Grenades</em> when extra punch is needed.
        </p>

        <h3 id="assault-intercessor">Assault intercessor squad</h3>

        <Image
          src={assaultIntercessors}
          alt="A squad of Assault Intercessors."
          className="max-h-96 object-cover object-[0%_65%]"
        />
        <Callout>
          <ul>
            <li>
              <strong>Profile:</strong> MEQ with OC2{' '}
              <Flavor className="inline">
                | Infantry, Battleline, Imperium, Grenades, Tacticus
              </Flavor>
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
          Assault intercessors are the standard hand-to-hand combat squad. They
          are a natural fit for melee-focused chapters like the Blood Angels.
          Outside those, they remain a cheap option for diving in on midfield
          objectives, or escorting characters.
        </p>

        <p>
          The Astartes chainswords{' '}
          <Flavor className="inline">A4|WS3+|S4|AP-1|D1</Flavor> allow for 20
          attacks per default squad. They do well against foes up to T4 with
          rather weak armor, but you might still want to give the sergeant the
          customary power fist or thunder hammer.
        </p>

        <p>
          The wound rerolls, coupled with OC2, are sufficient for contesting
          objectives. But the rerolls being applied to the leader is what makes
          them good expendable bodyguards. Some characters pairings that work
          well are:
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
          Finally, even with assault in their name, these intercessors are slow.
          If you depend on striking an objective quickly, think about an
          Impulsor to transport them. Bigger transports usually want scarier
          payloads.
        </p>

        <h3 id="heavy-intercessor">Heavy intercessor squad</h3>

        <Image
          src={heavyIntercessors}
          alt="A squad of Heavy Intercessors."
          className="max-h-96 object-cover object-[0%_65%]"
        />

        <Callout>
          <ul>
            <li>
              <strong>Profile:</strong> M5|T6|Sv3+|W3|OC2 a.k.a. Gravis profile{' '}
              <Flavor className="inline">
                | Infantry, Battleline, Imperium, Grenades, Gravis
              </Flavor>
            </li>

            <li>
              <strong>Cost:</strong> 100 pts. for 5 or 200 pts. for 10 models
            </li>
          </ul>

          <hr />

          <p>
            <strong>Unyielding in the Face of the Foe:</strong> +1 to armor
            saves if attacked by a D1 weapon, while near objective.
          </p>
        </Callout>

        <p>
          Heavy Intercessors struggle with finding a dedicated role in the Space
          Marines. With their durable profile, low speed, armor saves rule, and
          OC2, they're fitted for sitting on objectives and absorbing fire. Yet,
          cheaper, more flexible infantry units, push heavies into being
          situational, making them rare among optimized army lists.
        </p>

        <p>
          The key trait of this squad is its high resilience for the cost. The
          gravis armor performs great against D1 weapons and reasonably well
          against anything up to S5. They are comparable to TEQ without the
          invulnerable saves and are efficiently removed by anti-tank weapons.
        </p>

        <p>
          The heavy bolt rifle{' '}
          <Flavor className="inline">
            assault heavy 30"|A2|BS3+|S5|AP-1|D2
          </Flavor>{' '}
          is strong into up to T5 infantry, even MEQ with W2, but is tamed by
          good armor saves or larger hordes. It's best used for chip damage, not
          as primary damage dealer.
        </p>

        <p>Heavy intercessors play well with:</p>

        <ul>
          <li>
            <strong>Anvil Siege Force:</strong> +1 to wound when stationary
            plays well with durability and range.
          </li>

          <li>
            <strong>Gladius Task Force:</strong> adds some flexibility to
            advance or fallback and shoot.
          </li>

          <li>
            <strong>Vanguard Spearhead:</strong> the stealth can help with home
            objectives.
          </li>

          <li>
            Often better without a character attached but you can try{' '}
            <strong>Iron Father Feirros</strong> (Iron Hands) for the 5+ Feel No
            Pain.
          </li>
        </ul>
      </Section>

      <Section title="Specialist" id="specialist">
        <h3 id="eliminators">Eliminators</h3>

        <Image
          src={eliminators}
          alt="A squad of Eliminators."
          className="max-h-96 object-cover object-[0%_35%]"
        />

        <Callout>
          <ul>
            <li>
              <strong>Profile:</strong> Pure MEQ.
            </li>

            <li>
              <strong>Keywords:</strong> Infantry, Grenades, Imperium, Phobos.
            </li>

            <li>
              <strong>Core abilities:</strong> Infiltrators, Stealth
            </li>

            <li>
              <strong>Cost:</strong> 85 pts. for 3 models
            </li>
          </ul>

          <hr />

          <p>
            <strong>Reposition Under Covering Fire:</strong> After shooting, if
            the sergeant is alive and has an instigator bolt carbine, the unit
            can immediately make a normal move.
          </p>

          <p>
            <strong>Target Elimination:</strong> If the unit remains stationary,
            its weapons gain devastating wounds for the phase.
          </p>
        </Callout>

        <p>
          Eliminators are a small squad of dedicated stealthy long-range
          high-value targets hunters. Because of the core abilities, they can
          deploy ahead of the main force and enemies have a harder time hittig
          them with ranged attacks. As expected, they are far from durable, so
          Infiltrators, Stealth and the instigator trick have to be used to
          their full potential. Each of their weapon choices encourage a
          different playstyle.
        </p>

        <p>
          The Bolt sniper rifle is a S5|AP-2|D3|A1 36" heavy precision weapon,
          that is meant to handle single multi-wound targets at long range. If
          the squad doesn't move, with the target special rule and heavy
          keyword, the weapon hits on 2+ roll, does flat 3 damage and
          devastating wounds on 6s. A stationary squad usually forces one failed
          save on a typical 4+ invulnerable character. It's very rare for them
          to one-shot resilient foes, but they do threaten to delete support
          characters with good rolls. This can force the opponent to respect
          them and reposition.
        </p>

        <p>
          If you expect to run into more heavy infantry than characters, you can
          arm the squad with las fusils. The are better at picking off
          non-character elite infantry and light vehicles, where precission is
          less important than raw damage. Often they procure a failed save per
          turn into things like Terminators or Rhino-level targets.
        </p>

        <p>
          The sergeant also can equip an instigator bolt carbine. It sacrifices
          range and damage for some movement tricks. It enables the squad to pop
          and shoot from and back into cover, or perform long repositions where
          they avance shoot, then contest objectives. This is especially useful
          if las fusil are equipped to handle non-characters. Many players take
          this trade as you can often see two las fusils paired with a carabine
          sergeant in competative lists.
        </p>

        <p>
          Eliminators are a low-investment unit that likes buffs, but don't
          often deserve the best of them:
        </p>
      </Section>
    </>
  )
}
