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
import { ImageTextSection } from '@/app/ui/ImageTextSection'
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

        <ImageTextSection
          image={intercessors}
          imageAlt="A squad of Space Marine Intercessors advancing."
          text="Intercessors are the principal Space Marines infantry. Among their battleline units, no one scales horizontaly better. Their flexibility and mission utility supports a wide variety of army lists."
          imageClassName="max-h-96 object-[0%_65%] shadow-sm"
        />

        <Callout>
          <ul>
            <li>
              <strong>Profile:</strong> MEQ (Tacticus Armor) with improved OC2{' '}
              <span className="text-foreground-dim text-sm">
                | Infantry, Battleline, Tacticus, Imperium, Grenades
              </span>
            </li>

            <li>
              <strong>Cost:</strong> 80/5, 160/10{' '}
              <span className="text-foreground-dim text-sm">
                | 1 Sergeant, 4/9 Intercessors
              </span>
            </li>

            <li>
              <strong>Loadout:</strong>

              <ul>
                <li>
                  <strong>Bolt rifle:</strong> <em>assault heavy</em>{' '}
                  24"|A2|BS3+|S4|AP-1|D1
                </li>
                <li>
                  <strong>Bolt pistol:</strong> 12"|A1|BS3+|S4|AP0|D1
                </li>
                <li>
                  One in five can attach a grenade launcher to their bolt rifle:
                  lose assault keyword, get krak/frag grenades.
                </li>
                <li>The sergeant can equip selection of melee weapons.</li>
              </ul>
            </li>
          </ul>

          <hr />

          <p>
            <strong>Objective Secured:</strong> If you control an objective in
            your Command phase, it stays yours until the opponent takes it.
          </p>

          <p>
            <strong>Target Elimination:</strong> When shooting, bolt rifles gain
            +2 Attacks, but the squad must target a single unit.
          </p>
        </Callout>

        <h4>Consistent firepower</h4>

        <p>
          The bolt rifle is flexible: can advance and shoot, or remain
          stationary and hit on 2+. Its strength is not damage, but volume. When
          the Target Elimination rule applies, it doubles the number of shots
          per bolt rifle. This makes the unit a proper threat to light infantry.
          The rule requires no split fire. The squad must commit to one target.
        </p>

        <p>
          The grenade launcher is a free upgrade. No reason to skip it. Krak
          grenades gives some vertical reach against tougher targerts. Frag
          grenades can help with hordes.
        </p>

        <p>
          Intercessors' melee profile is not their focal point. A power fist on
          the sergeant meaningfully increases trading value while retaining the
          bolt rifle.
        </p>

        <h4>Sticky objectives</h4>

        <p>The Objective Secured rule changes how objectives are contested.</p>

        <ul>
          <li>You can tag an objective and leave it. No control is lost.</li>
          <li>
            The opponent must physically contest the objective. Not just shoot
            your men off it.
          </li>
          <li>You can rush home, then move out and support the midfield.</li>
          <li>
            Or rush the middle objectives, then fall back to defend from a
            distance.
          </li>
          <li>Effectively frees up control resources.</li>
        </ul>

        <h4>5-man over 10-man squads</h4>

        <ul>
          <li>Pressure multiple objectives.</li>
          <li>Retain flexibility for double shots focus fire.</li>
          <li>Lower risk of overkill.</li>
        </ul>

        <h3 id="assault-intercessor">Assault intercessor squad</h3>

        <ImageTextSection
          image={assaultIntercessors}
          imageAlt="A squad of Assault Intercessors."
          text="Replace the bolt rifles with chainswords, and you get an intercessor squad with
          focus on hand-to-hand combat. They are a natural fit for melee-focused
          chapters, like Blood Angels, but also excel as a cheap character
          escorts or objective divers."
          imageClassName="max-h-96 object-[0%_65%] shadow-sm"
        />

        <Callout>
          <ul>
            <li>
              <strong>Profile:</strong> MEQ with OC2
              <span className="text-foreground-dim text-sm">
                | Infantry, Battleline, Tacticus, Imperium, Grenades
              </span>
            </li>

            <li>
              <strong>Cost:</strong> 75/5, 150/10{' '}
              <span className="text-foreground-dim text-sm">
                | 1 Sergeant, 4/9 Intercessors
              </span>
            </li>

            <li>
              <strong>Loadout:</strong>

              <ul>
                <li>
                  <strong>Astartes chainsword:</strong> A4|WS3+|S4|AP-1|D1
                </li>

                <li>
                  <strong>Heavy bolt pistol:</strong> 18"|A1|BS3+|S4|AP-1|D1
                </li>

                <li>The sergeant can equip selection of melee weapons.</li>
              </ul>
            </li>
          </ul>

          <hr />

          <p>
            <strong>Shock Assault:</strong> Reroll 1s to wound anywhere. Reroll
            all wounds instead if near objective. Also applies to attached
            characters.
          </p>
        </Callout>

        <h4>Expendable hand-to-hand profile</h4>

        <ul>
          <li>
            High volume of attacks + high OC + wound rerolls rule = clear light
            infantry off objectives for 75 points.
          </li>

          <li>Always arm the sergeant with a power fist or thunder hammer.</li>

          <li>
            Don't expect to trade well with elite infantry without support.
          </li>

          <li>
            Slow for true assault troops. Think about an Impulsor for
            transportation.
          </li>
        </ul>

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

        <ImageTextSection
          image={heavyIntercessors}
          imageAlt="A squad of Heavy Intercessors."
          text="Instead of the standard power armor, these marines don the heavier Gravis armor, making them slugish, yet resilient objective holders. They are tough for their cost and wield improved versions of the bolt rifle. Still, cheaper, more supple units oftern outperform them in a wider array of tasks, giving Heavy Intercessors a hard time finding a dedicated role."
          imageClassName="max-h-96 object-[0%_65%] shadow-sm"
        />

        <Callout>
          <ul>
            <li>
              <strong>Profile:</strong> The Gravis - M5|T6|Sv3+|W3 with OC2{' '}
              <span className="text-foreground-dim text-sm">
                | Infantry, Battleline, Gravis, Imperium, Grenades
              </span>
            </li>

            <li>
              <strong>Cost:</strong> 100/5, 200/10{' '}
              <span className="text-foreground-dim text-sm">
                | 1 Sergeant, 4/9 Intercessors
              </span>
            </li>

            <li>
              <strong>Loadout:</strong>

              <ul>
                <li>
                  <strong>Heavy bolt rifle</strong> <em>assault heavy</em>{' '}
                  30"|A2|BS3+|S5|AP-1|D2
                </li>

                <li>
                  One in five can equip a <strong>Heavy bolter</strong>{' '}
                  <em>assault, heavy, sustained hits 1</em>{' '}
                  36"|A3|BS3+|S5|AP-1|D2
                </li>
              </ul>
            </li>
          </ul>

          <hr />

          <p>
            <strong>Unyielding in the Face of the Foe:</strong> +1 to armor
            saves if attacked by a D1 weapon, while near objective.
          </p>
        </Callout>

        <h4>Durability</h4>

        <ul>
          <li>T6, three wounds, 3+ save for 20 points per model.</li>
          <li>Excellent versus small arms.</li>
          <li>Designed to sit in the open and absorb fire.</li>
        </ul>

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
      </Section>
    </>
  )
}
