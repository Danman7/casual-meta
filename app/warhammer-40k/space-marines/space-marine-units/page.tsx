import Image from 'next/image'
import Link from 'next/link'

import assaultIntercessors from '@/app/assets/wh40k/AssaultIntercessors.webp'
import eliminators from '@/app/assets/wh40k/eliminators.webp'
import heavyIntercessors from '@/app/assets/wh40k/heavyintercessors.webp'
import intercessors from '@/app/assets/wh40k/interfcessors.webp'
import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
import { Callout } from '@/app/ui/Callout'
import { ImageTextSection } from '@/app/ui/ImageTextSection'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'
import { createRouteLookup } from '@/lib/routeLinks'

export const navOrder = 11

export const navTitle = 'Space Marine Units'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${navTitle}`,
  'An overview of the Space Marines units.',
)

const wh40kRoute = createRouteLookup(WH40K_BASE_URL)

export default async function Page() {
  return (
    <>
      <h1 className="page-title">{navTitle}</h1>

      <p>
        Having the datasheets is essential to understanding the information
        bellow. If you are unfamiliar with the profile abbreviations check out
        our{' '}
        <Link href={wh40kRoute('Profile Archetypes')}>Profile Archetypes</Link>{' '}
        page.
      </p>

      <Section title="Battleline" id="battleline">
        <h3 id="intercessors">Intercessors</h3>

        <p>
          The principal Space Marines infantry squad. Changes how objectives are
          contested, freeing up control resources. Keeps light infantry at bay
          and scales well horizontally.
        </p>

        <Image
          src={intercessors}
          alt="A squad of Space Marine Intercessors."
          className="max-h-60 object-cover object-[0%_70%] rounded shadow-md"
        />

        <div className="flex gap-2 flex-wrap justify-between tracking-wide text-lg">
          <div>
            <strong>Profile:</strong> Marine equivalent with OC2&uarr; (Tacticus
            Armor)
          </div>
          <div>
            <strong>Cost:</strong> 80/5, 160/10
          </div>
        </div>

        <hr />

        <p>
          <strong>Target Elimination:</strong> When shooting, bolt rifles gain
          +2 Attacks, but the squad must target a single unit.
        </p>

        <p>
          <strong>Objective Secured:</strong> If you control an objective in
          your Command phase, and this unit is within range, it stays yours
          until the opponent takes it.
        </p>

        <hr />

        <p className="lead">
          Bolt rifles with double shots for consistent firepower.
        </p>

        <p>
          Their strength is not in damage, but volume. To activate double shots,
          no spit fire is allowed. The squad must commit to one target.
          Compensation is 4 attacks per model at 4 strength, -1 armor
          penetration, making short work of gurardsman equivalents.
        </p>

        <p>
          One in five men can attach a grenade launcher to their bolt rifle.
          This is widely considered a free upgrade and taken by default. Frags
          help with hordes, while kraks with tougher targers.
        </p>

        <p>
          Melee is not a focal point here. Give the sergeant a power fist or
          thunder hammer.
        </p>

        <p className="lead">
          Sticky objectives rule means you can tag and move off.
        </p>

        <p>
          No control is lost after intercessors move away from a controlled
          objective. This forces the opponent to physically contest it. They
          can't just shoot you off.
        </p>

        <p>
          In game, intercessors are often used to rush home markers, then move
          out to support the fight in the middle. They can also capture an
          objective, next fall back to defend from some distance. These tactics
          play well with their higher OC.
        </p>

        <p className="lead">Smaller squads are often superior.</p>

        <p>
          5-man squads scale better. They allow for pressure of multiple
          objectives at the same time. They can also retain flexibility in
          double shots rule, while lowering the risk of unnecessary overkill.
        </p>

        <h3 id="assault-intercessors">Assault intercessors</h3>

        <p>
          The most expendable hand-to-hand combat squad. Act as reasonable
          character escorts. Scale well in melee-focused chapters, like Blood
          Angels, but should be kept within reason otherwise.
        </p>

        <Image
          src={assaultIntercessors}
          alt="A squad of Assault Intercessors."
          className="max-h-60 object-cover object-[0%_75%] rounded shadow-md"
        />

        <div className="flex gap-2 flex-wrap justify-between tracking-wide text-lg">
          <div>
            <strong>Profile:</strong> Marine equivalent with OC2&uarr; (Tacticus
            Armor)
          </div>
          <div>
            <strong>Cost:</strong> 75/5, 150/10
          </div>
        </div>

        <hr />

        <p>
          <strong>Shock Assault:</strong> Reroll 1s to wound anywhere. Reroll
          all wounds instead if near objective. Also applies to attached
          characters.
        </p>

        <hr />

        <p className="lead">Resonable for trades over objectives.</p>

        <p>
          The astartes chainsword, with its 4 attacks per model, at 4 strength
          and -1 armor penetration, does well against light infantry. Coupled
          with high OC and rerolls to wound, they can at least give the enemy a
          run for their money.
        </p>

        <p>
          These marines run on foot, thus they are slow for a true assault role.
          Think about a transport, preferably an Impulsor, to improve their
          mobility.
        </p>

        <p className="lead">Cheap but effective bodyguards</p>

        <p>
          The reroll to wound rule buffs attached characters as well. Here are
          some good options.
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

        <h3 id="heavy-intercessors">Heavy intercessors</h3>

        <Image
          src={heavyIntercessors}
          alt="A squad of Heavy Intercessors."
          className="max-h-60 object-cover object-[0%_58%] rounded shadow-md"
        />

        <div className="flex gap-2 flex-wrap justify-between">
          <div>
            <strong>Profile:</strong> The Gravis - M5|T6|Sv3+|W3 with OC2&uarr;
          </div>
          <div>
            <strong>Cost:</strong> 100/5, 200/10
          </div>
        </div>

        <p>
          <strong>Unyielding in the Face of the Foe:</strong> +1 to armor saves
          if attacked by a D1 weapon, while near objective.
        </p>

        <hr />

        <div>
          <div className="lead">Durable for the cost</div>
          <ul>
            <li>
              Armor comparable to terminators without the invulnerable saves for
              20 points per model.
            </li>
            <li>
              Tough, high OC, yet slow. Designed to sit on objectives and absorb
              fire.
            </li>
            <li>Vulnerable to anti-tank weapons.</li>
          </ul>
        </div>

        <h4>Ranged firepower</h4>

        <p>
          The heavy bolt rifle is strong into T5|W2 targets. Anything with
          higher toughness or good armor saves will give them a hard time.
        </p>

        <h4>Competition</h4>

        <ul>
          <li>
            Regular intercessors remain more efficient overall: cheaper, sticky
            objectives, double shots, power fist on sergeant.
          </li>

          <li>
            Heavy Intercessors win on toughness, lose on flexibility and value.
          </li>
        </ul>
      </Section>

      <Section title="Specialists" id="specialists">
        <h3 id="eliminators">Eliminators</h3>

        <ImageTextSection
          image={eliminators}
          imageAlt="A squad of Eliminators."
          text="The eliminators are a small stealthy sniper squad, dedicated to
          hitting high-value targets at long ranges. Each of their weapon
          loadouts is fitted for a different role."
          imageClassName="max-h-96 object-[0%_35%] shadow-sm"
        />

        <Callout>
          <ul>
            <li>
              <strong>Profile:</strong> Pure MEQ{' '}
              <span className="text-foreground-dim text-sm">
                | Infantry, Phobos, Imperium, Grenades
              </span>
            </li>

            <li>
              <strong>Cost:</strong> 85/3{' '}
              <span className="text-foreground-dim text-sm">
                | 1 Sergeant, 2 Eliminators
              </span>
            </li>

            <li>
              <strong>Core abilities:</strong>
              <ul>
                <li>
                  <strong>Infiltrators:</strong> can be deployed anywhere unless
                  too close to enemies.
                </li>

                <li>
                  <strong>Stealth:</strong> -1 to hit on incoming ranged
                  attacks.
                </li>
              </ul>
            </li>

            <li>
              <strong>Loadout:</strong>

              <ul>
                <li>
                  <strong>Bolt sniper rifle</strong> <em>heavy, precision</em>{' '}
                  36"|A1|BS3+|S5|AP-2|D3
                </li>

                <li>
                  <strong>Las fusil</strong> <em>heavy</em>{' '}
                  36"|A1|BS3+|S9|AP-2|Dd6
                </li>

                <li>
                  Sergeant can wield an <strong>Instigator bolt carbine</strong>{' '}
                  <em>precision</em> 24"|A1|BS3+|S4|AP-2|D2
                </li>
              </ul>
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

        <h4>Bolt sniper rifles for hunting characters</h4>

        <ul>
          <li>
            Precision keyword allows targeting characters even if attached to a
            unit.
          </li>

          <li>
            Heavy keyword + Mark the Target rule = flat 3 damage on 2+ and
            mortal wounds on 6 if squad didn't move.
          </li>
        </ul>

        <p>
          A stationary squad usually forces at least one failed save on a
          typical 4+ invulnerable character. They also can straight delete a
          support character on a good roll. It's still rare for them to one-shot
          resilient targets, but they force the opponent to respect the threat
          and influence their positioning.
        </p>

        <h4>Las fusils for hunting heavy infantry</h4>

        <ul>
          <li>Win over sniper rifles on raw damage and armor penetration.</li>
          <li>
            Lack the precision keyword, hence better against elite squads.
          </li>
          <li>Decent chip damage against light vehicles.</li>
        </ul>

        <p>
          You can expect at least one failed armor save per turn into things
          like Terminators or Rhino-level targets.
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

        <h4>Competition</h4>

        <ul>
          <li>
            <strong>Scouts:</strong> Cheaper, more wounds per point, can return
            to reserves, decent damage, and strong objective play.
          </li>
          <li>
            <strong>Infiltrators:</strong> Weaker damage, but deep strike denial
            ability is very strong.
          </li>
          <li>
            <strong>Vindicare Assassin:</strong> Lower average damage than 3
            Eliminators, but harder to shoot and spikes a lot of damage in key
            moments.
          </li>
        </ul>

        <p>
          Overall, scouts and infiltrators appear far more often than
          eliminators in lists. This doesn't prove them bad, just not the
          default choice.
        </p>
      </Section>
    </>
  )
}
