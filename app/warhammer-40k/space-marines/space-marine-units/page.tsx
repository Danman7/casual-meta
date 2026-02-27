import Image from 'next/image'
import Link from 'next/link'
import { FaCrosshairs } from 'react-icons/fa'
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
          Intercerssors are a{' '}
          <strong>high-utility, flexible ranged unit</strong>, compatible with
          most army lists. A squad is <strong>never a waste</strong> if you need
          stability around objectives or are unsure how to fill your troop
          slots.
        </p>

        <p>
          Normally, only units within 3" of an objective exert control with
          their OC stats. <strong>Objective Secured (sticky objectives)</strong>{' '}
          says that{' '}
          <strong>
            if an intercessor squad holds a marker, it remains yours even after
            they move away
          </strong>
          . This frees up control resources, because intercessors can tag and
          walk. Now, the opponent can't just shoot your units off an objective.
          They must physically contest it.
        </p>

        <Example>
          <div>
            On the board, it's common for intercessors to quickly capture the
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
          requirement with less risk of overkill. In general, intercessors are
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
          Assault intercessors <RiSwordFill className="circle-icon" />
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
          In terms of profile, durability and weapon output, assault
          intercessors are very close to a <strong>melee</strong> version of
          regular intercessors. They drop objectives utility and ranged
          flexibility, for being <strong>cheaper</strong> with higher{' '}
          <strong>trading value</strong>. They are very dependent on their
          support and the flavor of the army list.
        </p>

        <Example>
          <div>
            Blood Angels elevate assault intercessors to a proper threat. As
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
          Assault intercessors want to fight on objectives and do that{' '}
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
          Heavy Intercessors <FaCrosshairs className="circle-icon" />
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
          <strong>+1 to saves against D1 attacks on top of objecives</strong>.
          They are not quite terminator equivalents, but still push the opponent
          to allocate anti-tank weapons (plasma, lascannons, etc.) to deal with
          them quickly.
        </p>

        <p>
          Their weapons at 30+ inches, S5, D2 are appropriate for engaging
          two-wound marine equivalents at long distances. On the other hand the
          low AP limist how they perform against infantry in cover.
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
            Feirros seriously spikes havies' durability and adds vehicle
            support.
          </div>
        </Example>
      </Section>

      <Section title="Specialists" id="specialists">
        <h3 id="eliminators">Eliminators</h3>

        <p>
          A small squad of stealthy snipers with optional mobility tricks. They
          may not easily kill high-value targets, but chip them consistently
          before they reach your main force.
        </p>

        <Image
          src={eliminators}
          alt="A squad of Eliminators."
          className="max-h-60 object-cover object-[0%_33%] shadow-sm"
        />

        <div className="flex gap-2 flex-wrap justify-between tracking-wide text-lg">
          <div>
            <strong>Profile:</strong> Pure marine equivalent (Phobos armor)
          </div>
          <div>
            <strong>Cost:</strong> 85/3
          </div>
        </div>

        <hr />

        <p>
          <strong>Reposition Under Covering Fire:</strong> After shooting, if
          the sergeant is alive and has an instigator bolt carbine, the unit can
          immediately make a normal move.
        </p>

        <p>
          <strong>Mark the Target:</strong> If the unit remains stationary, its
          weapons gain devastating wounds for the phase.
        </p>

        <hr />

        <p className="lead">Bolt sniper rifles for hunting characters.</p>

        <p>
          Sniper rifles deal flat 3 damage per wound and have the heavy keyword.
          With devastating wounds, a stationary squad hits on 2+ and generates
          mortal wounds on 6. This usually forces at least one failed save
          against a 4+ invulnerable character-rarely a one-shot, but enough to
          make opponents reposition.
        </p>

        <p>
          Their key mechanic is precision, letting them target characters even
          inside attached squads.
        </p>

        <p className="lead">Las fusils for hunting heavy infantry.</p>

        <p>
          Las fusils deal more damage with better AP but lack precision. Better
          against elite infantry and light vehicles-expect at least one failed
          save per turn against Terminators or Rhino-level targets.
        </p>

        <p className="lead">Instigator bolt carbine for some tricks</p>

        <p>
          The sergeant can swap range and damage for an instigator bolt carbine
          to enable movement tricks: pop out, shoot, and retreat to cover, or
          shoot and advance to contest objectives.
        </p>

        <p>There's also the Impulsor gimmick:</p>

        <ul>
          <li>Two Eliminator squads with Instigators embark in an Impulsor.</li>

          <li>Disembark, shoot, then use the Instigator move to re-embark.</li>

          <li>
            The Impulsor then uses Firing Deck to effectively have them shoot
            again.
          </li>
        </ul>

        <p>
          The utility here is strong enough that two las fusils + instigator is
          often the default loadout.
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
          Scouts and infiltrators appear far more often in lists-not proof that
          eliminators are bad, just not the default choice.
        </p>
      </Section>
    </>
  )
}
