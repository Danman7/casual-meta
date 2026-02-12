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
              <strong>Profile:</strong> Typical MEQ + OC2 for better objective
              presence
            </li>

            <li>
              <strong>Cost:</strong> 80 for 5, 160 for 10 models
            </li>
          </ul>

          <hr />

          <p>
            <strong>Objective Secured:</strong> If you control an objective in
            your Command phase, it stays yours until the opponent takes it.
          </p>

          <p>
            <strong>Target Elimination:</strong> When shooting, bolt rifles gain
            +2 Attacks, but the squad must shoot at a single unit.
          </p>
        </Callout>

        <p>
          Intercessors are the principal Space Marine infantry. They play well,
          even without support, on various positions around the battlefield,
          making them common among all army lists.
        </p>

        <h4>Sticky objectives - flexibility</h4>

        <p>
          This special rule allows intercessors to capture, then leave an
          objective to play a role elsewhere. For example, you can rush the home
          objective, then contest or support other units in the middle. Or, you
          could rush mid then fall back to defend it from a distance.
        </p>

        <p>
          Either way, the rule forces the opponent to contest objectives
          physically. They can't simply shoot your intercessors off them for you
          to lose control. This works well with more 5-man squads than fewer
          10-man ones.
        </p>

        <h4>Mid-ranged firepower - consistency</h4>

        <p>
          The bolt rifle's profile, plus the double shots rule, produce a large
          volume of attacks, capable of keeping light infantry at bay. The
          requirement for a squad to shoot at a single target for this rule to
          activate also promotes multiple 5-man squads.
        </p>

        <p>
          The grenade launcher is a welcomed free upgrade to one in five rifles.
          Krak grenades can help with chiping wounds off tougher targerts. Frag
          grenades blast hordes.
        </p>

        <h4>Melee and support</h4>

        <p>
          Intercessors are good as they are. Support for them should be kept
          cheap. Situationally, <em>Armor of Contempt</em> can make a difference
          when surviving on an objective matters. Also, <em>Grenades</em> can
          help with mortal wounds in a pinch.
        </p>

        <p>
          Their melee profile is weak and not their focal point. Arm the
          sergeant with a power fist or a thunder hammer to help with trades.
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
              <strong>Profile:</strong> MEQ with OC2
            </li>

            <li>
              <strong>Cost:</strong> 75 for 5, 150 for 10
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
          Assault intercessors bring the same typical marine profile, but with a
          focus on hand-to-hand combat. They are a natural fit for melee-focused
          chapters, like Blood Angels, but also excel as a cheep character
          escort.
        </p>

        <h4>Expendable hand-to-hand profile</h4>

        <p>
          The Astartes chainswords provide a ton of anti-light-infantry attacks.
          Anything with toughness above 4 and/or good armor saves will be
          problematic, but a power fist or thunder hammer on the sergeant can
          help. They are also armed with heavy bolt pistols for chiping damage
          while closing in.
        </p>

        <p>
          With OC2 these marines are effictient for trades on top of objectives,
          but they remain slow. If you depend on striking the middle quickly,
          think about an Impulsor for transportation. Bigger transports usually
          want scarier payloads.
        </p>

        <h4>Bodyguards</h4>

        <p>
          The re-rolls special rule also buffs any leader attached to this
          squad. You might want them to escort:
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

        <h3 id="heavy-intercessor">Heavy intercessor squad</h3>
        <Image
          src={heavyIntercessors}
          alt="A squad of Heavy Intercessors."
          className="max-h-96 object-cover object-[0%_65%]"
        />
        <Callout>
          <ul>
            <li>
              <strong>Profile:</strong> The Gravis - M5|T6|Sv3+|W3 with OC2
            </li>

            <li>
              <strong>Cost:</strong> 100 for 5, 200 for 10
            </li>
          </ul>

          <hr />

          <p>
            <strong>Unyielding in the Face of the Foe:</strong> +1 to armor
            saves if attacked by a D1 weapon, while near objective.
          </p>
        </Callout>

        <p>
          The heavies' profile is a slower, tougher version of the regular
          intercessors, armed with heavier bolt rifles with longer reach. Yet,
          cheaper, more flexible units often outperform them in a larger variety
          of roles, making them rare among optimized army lists.
        </p>

        <h4>Durability - their key trait</h4>

        <p>
          This is the cheapest way to get gravis armor on the battlefield.
          Against high-damage weapons, they are comparable to terminators, but
          without the invulnerable saves. Anti-tank weapons remove them
          efficiently, but the armor performs well against small arms.
        </p>

        <p>
          With their sluggish yet resilient profile, plus the OC2, they are
          designed to sit on objectives and absorb fire. That is until the enemy
          gets close and makes short work of their bad melee profile.
        </p>

        <h4>Ranged firepower</h4>

        <p>
          The heavy bolt rifle is strong into T5|W2 targets. Anything with
          higher toughness or good armor saves will give them a hard time.
        </p>

        <h4>Synergies</h4>

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

        <h4>Competition</h4>

        <p>
          Regular intercessors are cheaper, can perform better in melee with
          sergeant upgrades and have sticky objectives. And even with the
          heavier rifle's better profile, the double shots rule is often more
          consistent. Heavies simply don't bring enough value for most
          scenarios.
        </p>
      </Section>

      <Section title="Specialists" id="specialists">
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
              <strong>Core abilities:</strong> Infiltrators, Stealth
            </li>

            <li>
              <strong>Cost:</strong> 85 for 3
            </li>
          </ul>

          <hr />

          <p>
            <strong>Reposition Under Covering Fire:</strong> After shooting, if
            the sergeant is alive and has an instigator bolt carbine, the unit
            can immediately make a normal move.
          </p>

          <p>
            <strong>Mark the Target:</strong> If the unit remains stationary,
            its weapons gain devastating wounds for the phase.
          </p>
        </Callout>

        <p>
          The eliminators are a small stealthy sniper squad, dedicated to
          hitting high-value targets at long ranges. Each of their weapon
          loadouts is fitted for a different role.
        </p>

        <h4>Bolt sniper rifles for hunting characters</h4>

        <p>
          The sniper rifle has the precision keyword, so it can target
          characters even if they are attached to a unit. It also has the heavy
          keyword, which combined with the target special rule, makes it hit on
          2+ and do mortal wounds on 6 to wound.
        </p>

        <p>
          A stationary squad usually either forces a failed save on a typical 4+
          invulnerable character, or delets support characters on good rolls.
          It's still rare for them to one-shot resilient targets, but they force
          the opponent to respect the threat and reposition.
        </p>

        <h4>Las fusils for hunting heavy infantry</h4>

        <p>
          Las fusils win over sniper rifles on raw damage and armor penetration,
          but lack the precision keyword. That is why they are better suited
          against non-character infantry, although they can chip light vehicles
          as well. You can expect a failed armor save per turn into things like
          Terminators or Rhino-level targets.
        </p>

        <h4>Instigator bolt carbine for some tricks</h4>

        <p>
          The sergeant can sacrifice range and damage to equip an instigator
          bolt carbine that enables some movement gimmicks.
        </p>

        <p>
          Eliminators can pop out, shoot and get back into cover. Or shoot, then
          advance and contest objectives.
        </p>

        <p>There is also the well-known Impulsor gimmick:</p>

        <ul>
          <li>Two Eliminator squads with Instigators embark in an Impulsor.</li>

          <li>Disembark, shoot, then use the Instigator move to re-embark.</li>

          <li>
            The Impulsor then uses Firing Deck to effectively have them shoot
            again.
          </li>
        </ul>

        <p>
          There is so much utility with this that two las fusils + instigator is
          often regarded as default optimized loadout.
        </p>

        <h4>Synergies</h4>

        <ul>
          <li>
            <strong>Vanguard Spearhead detachment:</strong> Extra defense plus
            better stratagems for redeploy and retreat. Move–shoot–move plays
            extra well here.
          </li>

          <li>
            <strong>Anvil Siege Force:</strong> +1 to wound on static.
          </li>

          <li>
            <strong>Deathwatch / Black Spear Strike Force:</strong> You can get
            lethal and sustained hits on a key turn, to transform their shots
            into reliable damage.
          </li>

          <li>
            <strong>Phobos Captain:</strong> A free battle tactic stratagem each
            turn and a strong redeploy ability. This is niche as it makes the
            unit expensive for its durability and output.
          </li>
        </ul>
      </Section>
    </>
  )
}
