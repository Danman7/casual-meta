import Image from 'next/image'
import Link from 'next/link'
import { BsShadows } from 'react-icons/bs'
import { FaCrosshairs } from 'react-icons/fa'
import { FaShield } from 'react-icons/fa6'
import { RiSwordFill } from 'react-icons/ri'

import assaultIntercessors from '@/app/assets/wh40k/AssaultIntercessors.webp'
import eliminators from '@/app/assets/wh40k/eliminators.webp'
import heavyIntercessors from '@/app/assets/wh40k/heavyintercessors.webp'
import intercessors from '@/app/assets/wh40k/interfcessors.webp'
import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
import { Example } from '@/app/ui/Example'
import { Section } from '@/app/ui/Section'
import { WarhammerProfile } from '@/app/ui/WarhammerProfile'
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
        Having the datasheets is not essential, but recommended. If you are
        unfamiliar with profile abbreviations, check out{' '}
        <Link href={wh40kRoute('Profile Archetypes')}>Profile Archetypes</Link>.
      </p>

      <Section title="Battleline" id="battleline">
        <p>
          Troops with the battleline keyword on their sheets have relaxed
          restrictions on how many of the same type can be in an army list.
        </p>

        <h3 id="intercessors" className="flex-wrapper">
          Intercessors <FaCrosshairs className="circle-icon" />
        </h3>

        <Image
          src={intercessors}
          alt="A squad of Space Marine Intercessors."
          className="profile-img object-[0%_70%]"
        />

        <WarhammerProfile
          profile={
            <>
              <div>
                <strong>Marine equivalent</strong> with{' '}
                <strong>OC2&uarr;</strong> in Tacticus Armor
              </div>
              <div>
                <strong>Bolt Rifles</strong>{' '}
                <span className="flavor">
                  Assault, Heavy, 24", A2, BS3+, S4, AP-1, D1
                </span>
              </div>
            </>
          }
          cost="80/5 160/10"
        />

        <p>
          Intercessors are a <strong>high-utility, flexible ranged unit</strong>
          , compatible with most army lists. A squad is{' '}
          <strong>never a waste</strong> if you need stability around objectives
          or are unsure how to fill your troop slots.
        </p>

        <p>
          Normally, only units within 3" of an objective exert control with
          their OC stats. <strong>Objective Secured (sticky objectives)</strong>{' '}
          says that{' '}
          <strong>
            if an intercessor squad holds a marker, it remains yours even after
            they move away
          </strong>
          . This frees up control resources, because Intercessors can tag and
          walk. Now, the opponent can't just shoot your units off an objective.
          They must physically contest it.
        </p>

        <Example>
          <div>
            On the board, it's common for Intercessors to quickly capture the
            home objective and pivot to contribute in the middle. They can also
            rush midfield, then step back to defend from a distance.
          </div>
        </Example>

        <p>
          While they are <strong>not primary damage dealers</strong>, their
          other special rule, <strong>Target Elimination</strong>, gives all
          bolt rifles{' '}
          <strong>
            + 2 attacks if the whole squad shoots at a single target
          </strong>
          . The rifle itself has the standard{' '}
          <strong>anti-light-infantry</strong> profile, but because of the
          volume, they are consistent against anything that isn't armored up.
          The free <strong>grenade launcher</strong> helps in pinches versus
          tougher targets and swarms.
        </p>

        <p>
          <strong>5-man squads scale better</strong> than 10-man ones. They can
          pressure several objectives at the same time and manage the focus-fire
          requirement with less risk of overkill. In general, Intercessors are
          good as they are. They should be <strong>kept cheap</strong> in terms
          of support.
        </p>

        <Example>
          <div>
            <em>Armor of Contempt</em> can come in handy for surviving a
            critical turn on an objective. A <em>lieutenant</em> with lethal
            hits can make a 10-man squad more viable.
          </div>
        </Example>

        <h3 id="assault-intercessors" className="flex-wrapper">
          Assault Intercessors <RiSwordFill className="circle-icon" />
        </h3>

        <Image
          src={assaultIntercessors}
          alt="A squad of Assault Intercessors."
          className="profile-img object-[0%_75%]"
        />

        <WarhammerProfile
          profile={
            <>
              <div>
                <strong>Marine equivalent</strong> with{' '}
                <strong>OC2&uarr;</strong> in Tacticus Armor
              </div>
              <div>
                <strong>Astartes chainswords</strong>{' '}
                <span className="flavor">A4, S4, AP-1, D1</span>
              </div>
              <div>
                <strong>Heavy bolt pistols</strong>{' '}
                <span className="flavor">18", A1, BS3+ S4, AP-1, D1</span>
              </div>
            </>
          }
          cost="75/5 150/10"
        />

        <p>
          In terms of profile, durability and weapon output, Assault
          Intercessors are very close to a <strong>melee</strong> version of
          regular Intercessors. They drop objectives utility and ranged
          flexibility, for being <strong>cheaper</strong> with higher{' '}
          <strong>trading value</strong>. They are very dependent on their
          support and the flavor of the army list.
        </p>

        <Example>
          <div>
            Blood Angels elevate Assault Intercessors to a proper threat. As
            part of a Liberator Assault Group detachment they gain +2 Strength
            (to S6) and +1 Attack (5 attacks each), scaling both horizontally
            and vertically.
          </div>
        </Example>

        <p>
          Their special rule, <strong>Shock Assault</strong>, works like this:
        </p>

        <ul>
          <li>Reroll wound rolls of 1 anywhere.</li>
          <li className="font-bold">
            Reroll all wound rolls when on an objective.
          </li>
          <li className="font-bold">
            This applies to any character attached to the squad.
          </li>
        </ul>

        <p>
          Assault Intercessors want to fight on objectives and do that{' '}
          <strong>better if escorting a character</strong>. The heavy pistols
          can chip targets until their chainswords engage. Both weapons perform{' '}
          <strong>primarily against light infantry</strong>. They are also{' '}
          <strong>slow for assault</strong> troops. A transport might be
          necessary.
        </p>

        <Example>
          <div>Here are some examples of character synergy:</div>

          <ul>
            <li>
              A Captain is likely the best fit. Adds high-quality melee, free
              stratagem potential, and spikes hard on an objective with full
              wound rerolls.
            </li>

            <li>A Lieutenant adds lethal hits and solid output.</li>

            <li>
              Uriel Ventris (Ultramarines) has an efficient melee profile plus
              utility. Assault Intercessors provide a cheap, durable escort that
              benefits from objective-based rerolls.
            </li>

            <li>
              Azrael (Dark Angels) also has strong synergy. He wants to exist
              safely early and fight later. The squad appreciates his
              invulnerable save and Sustained Hits.
            </li>

            <li>
              Any monster melee profile like Ragnar Blackmane (Space Wolves) is
              an exceptional fit. High-volume, high-strength melee with wound
              rerolls into monsters and vehicles becomes a major threat.
            </li>
          </ul>
        </Example>

        <h3 id="heavy-intercessors" className="flex-wrapper">
          Heavy Intercessors <FaCrosshairs className="circle-icon" />{' '}
          <FaShield className="circle-icon" />
        </h3>

        <Image
          src={heavyIntercessors}
          alt="A squad of Heavy Intercessors."
          className="profile-img object-[0%_58%]"
        />

        <WarhammerProfile
          profile={
            <>
              <div>
                <strong>Gravis</strong> profile{' '}
                <span className="flavor">M5, T6, Sv3+, W3</span> with{' '}
                <strong>OC2&uarr;</strong>
              </div>

              <div>
                <strong>Heavy Bolt Rifles</strong>{' '}
                <span className="flavor">
                  Assault, Heavy, 30", A2, BS3+, S5, AP-1, D2
                </span>
              </div>

              <div>
                <strong>Heavy Bolter</strong>{' '}
                <span className="flavor">
                  Assault, Heavy, Sustained Hits 1, 36", A3, BS3+, S5, AP-1, D2
                </span>
              </div>
            </>
          }
          cost="100/5 200/10"
        />

        <p>
          Heavies are <strong>slower, tougher</strong> intercessors built to{' '}
          <strong>sit on objectives and absorb fire</strong>.
        </p>

        <p>
          Their headline is <strong>high durability for the cost</strong>. At 20
          points per model, they blunt common anti-marine weapons (S5, D2).{' '}
          <strong>Unyielding in the Face of the Foe</strong> grants them{' '}
          <strong>+1 to saves against D1 attacks on top of objectives</strong>.
          They are not quite terminator equivalents, but still push the opponent
          to allocate anti-tank arms (plasma, lascannons, etc.) to deal with
          them quickly.
        </p>

        <p>
          Their weapons at 30+ inches, S5, D2 are appropriate for engaging
          two-wound marine equivalents at long distances. On the other hand, the
          low AP limits how they perform against infantry in cover.
        </p>

        <p>
          Heavy intercessors face stern competition from cheaper, more flexible
          units - especially regular intercessors, who provide more utility and
          damage per point. They're grinders that can chip and slow down the
          enemy, but remain <strong>situational</strong>. Support that improves
          their consistency is a best fit.
        </p>

        <Example>
          <div>
            Anvil Siege Force detachment has multiple buffs for squads that
            remain stationary. Apothecary Biologis adds lethal hits. Iron Father
            Feirros seriously spikes heavies' durability and adds vehicle
            support.
          </div>
        </Example>
      </Section>

      <Section title="Specialists" id="specialists">
        <h3 id="eliminators" className="flex-wrapper">
          Eliminators <FaCrosshairs className="circle-icon" />{' '}
          <BsShadows className="circle-icon" />
        </h3>

        <Image
          src={eliminators}
          alt="A squad of eliminators."
          className="profile-img object-[0%_33%]"
        />

        <WarhammerProfile
          profile={
            <>
              <div>
                <strong>Marine equivalent</strong> in Phobos armor
              </div>

              <div>
                <strong>Bolt sniper rifle</strong>{' '}
                <span className="flavor">
                  Heavy, Precision, 36", A1, BS3+, S5, AP-2, D3
                </span>
              </div>

              <div>
                <strong>Las fusil</strong>{' '}
                <span className="flavor">
                  Heavy, 36", A1, BS3+, S9, AP-3, Dd3
                </span>
              </div>

              <div>
                <strong>Instigator bolt carbine</strong>{' '}
                <span className="flavor">
                  Precision, 24", A1, BS3+, S4, AP-2, D2
                </span>
              </div>
            </>
          }
          cost="85/5"
          core="Infiltrators, Stealth"
        />

        <p>
          Eliminators are a small <strong>stealthy</strong> (forward deploy, -1
          to hit from ranged attacks) squad, dedicated to{' '}
          <strong>hitting high-value units at long ranges</strong>. It's rare
          for them to straight one-shot a durable target, but their presence
          impels the opponent to{' '}
          <strong>respect the threat and reposition</strong>. Scouts and
          Infiltrators are more common for midfield roles, having lower
          firepower but better utility. This doesn't prove eliminators bad, just
          not the default choice.
        </p>

        <Example>
          <div>
            On the board, they often start near the middle objectives, as far as
            cover could support them. This allows them to establish firing lanes
            between obstacles early and control the tempo. Standing in the open,
            trading shots is bad. Peek, shoot, get back. Advance into objectives
            only if the situation allows.
          </div>
        </Example>

        <p>
          If the squad doesn't move, <strong>Mark the Target</strong> activates
          and gives them <strong>devastating wounds</strong>. All weapon choices
          are single attack, multi-wound arms with good reach, but each loadout
          supports a different playstyle.
        </p>

        <p>
          <strong>Sniper rifles are for hunting characters.</strong> The
          precision keyword allows them to select a specific target even when
          attached to a squad. Plus, the heavy keyword works well with
          stationary devastating wounds.
        </p>

        <Example>
          <div>
            If stationary, sniper rifles hit on 2+. If you roll a 6, that's 3
            flat damage. It's not rare to score at least one failed
            armor/invulnerable save per squad, per turn.
          </div>
        </Example>

        <p>
          <strong>Las fusils</strong> win over rifles on raw damage and
          penetration, but lack the precision keyword. This makes them more
          appropriate versus <strong>elite infantry and light vehicles</strong>.
        </p>

        <p>
          The <strong>instigator bolt carbine</strong> for the sergeant enables{' '}
          <strong>Reposition Under Covering Fire</strong>. You sacrifice range
          and damage, but get to{' '}
          <strong>
            make a normal move after shooting, if the sergeant is alive
          </strong>
          . That is 12" of effective repositioning per turn.
        </p>

        <Example>
          <div>
            You can often see 2 las fusils + instigator in competitive lists
            because of the safety and consistency. For example, eliminators can
            pop out, shoot, then retreat back into cover. Or they can finish off
            an already damaged unit and advance to contest an objective.
          </div>

          <div>
            There's also the <strong>Impulsor gimmick</strong>. Two Eliminator
            squads with Instigators embark in an Impulsor. Disembark, shoot,
            then use the Instigator move to re-embark. The Impulsor then uses
            Firing Deck to effectively have them shoot again.
          </div>
        </Example>

        <Example>
          <div>
            Eliminators work well with any support that improves either their
            stationary or mobile performance. Anvil Siege Force gives +1 to
            wound when stationary (generally detachment that promotes static
            positions). Vanguard Spearhead has synergy with their reactive style
            and defensive improvements for Phobos armor. The Instigator works
            well with Gladius or Firestorm lists that often focus around
            mobility.
          </div>

          <div>
            A Phobos Librarian grants Lone Operative (cannot be shot beyond 12
            inches) creating a mobile, difficult-to-target objective unit. A
            Phobos Captain grants a free Battle Tactic Stratagem each turn and
            allows Phobos troops to redeploy.
          </div>
        </Example>
      </Section>
    </>
  )
}
