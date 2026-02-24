import Image from 'next/image'
import Link from 'next/link'

import assaultIntercessors from '@/app/assets/wh40k/AssaultIntercessors.webp'
import eliminators from '@/app/assets/wh40k/eliminators.webp'
import heavyIntercessors from '@/app/assets/wh40k/heavyintercessors.webp'
import intercessors from '@/app/assets/wh40k/interfcessors.webp'
import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
import { Callout } from '@/app/ui/Callout'
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
        Having the datasheets is not essential, but recommended for
        understanding the information below. If you are unfamiliar with the
        profile abbreviations, check out our{' '}
        <Link href={wh40kRoute('Profile Archetypes')}>Profile Archetypes</Link>{' '}
        page.
      </p>

      <Section title="Battleline" id="battleline">
        <h3 id="intercessors">Intercessors</h3>

        <Image
          src={intercessors}
          alt="A squad of Space Marine Intercessors."
          className="profile-img object-[0%_70%]"
        />

        <p className="lead">
          <strong>Marine equivalent</strong> profile with{' '}
          <strong>OC2&uarr;</strong> in Tacticus Armor, armed with Bolt Rifles.
          Cost: <strong>80 points for 5 models, 160 for 10</strong>.
        </p>

        <hr />

        <p>
          Intercerssors are a{' '}
          <strong>high-utility, flexible, ranged unit</strong> that is
          compatible with a wide variety of army lists. Usually, at least a
          squad is <strong>never a waste</strong> of troop slots because of
          their two key rules.
        </p>

        <p>
          <strong>Objective Secured (a.k.a. sticky objectives)</strong> changes
          how objectives are held and{' '}
          <strong>frees up control resources</strong>. Normally, a unit within
          3" of a marker exerts control with its OC stat. However, if an{' '}
          <strong>intercessor squad holds an objective</strong>, it{' '}
          <strong>remains yours, even if they move away</strong>. This opens up
          new tactical routes. Intercessors can tag the home objective and
          advance to contribute in the center, or tag the center and fall back
          to defend from a distance.
        </p>

        <p>
          They are <strong>not primary damage dealers</strong>. The bolt rifle
          has the standard mediocre <strong>anti-light-infantry</strong> (two
          attacks, single-wound) profile. But trough their other special rule,{' '}
          <strong>Target Elimination</strong>, the rifles get{' '}
          <strong>
            double attacks if the whole squad shoots at a single target
          </strong>
          . This gives them actual leverage not trough damage, but volume. Plus,
          one in five can attach a <strong>grenade launcher</strong> to the
          rifle. It's considered a <strong>free upgrade</strong>, giving some
          punch against elites (krak grenades) and swarms (frag grenades), at
          the cost of fewer attacks after advancing (assault keyword).
        </p>

        <p>
          Intercessors <strong>work best when kept cheap</strong> and{' '}
          <strong>multiple 5-man squads scale better</strong> than 10-man ones.
          They can pressure several objectives, and better manage the focus-fire
          requirement for double shots with less risk of overkill. In a key turn{' '}
          <em>Armor of Contempt</em> can help if surviving on an objective is
          imperative. Also, if you must, a lieutenant with lethal hits can make
          a situational 10-man squad more viable. Otherwise, they are good as
          they are.
        </p>

        <h3 id="assault-intercessors">Assault intercessors</h3>

        <Image
          src={assaultIntercessors}
          alt="A squad of Assault Intercessors."
          className="profile-img object-[0%_75%]"
        />

        <p>
          <strong>Marine equivalent</strong> profile with{' '}
          <strong>OC2&uarr;</strong> in Tacticus Armor, armed with Astartes
          chainswords and heavy bolt pistols. Cost:{' '}
          <strong>75 points for 5 models, 150 for 10</strong>.
        </p>

        <hr />

        <p>
          Assault intercessors are <strong>cheap, OC-efficient</strong>{' '}
          battleline infantry built for <strong>hand-to-hand</strong> combat.
          They are dependent on the army list's flavor, and on the support
          assigned to them.
        </p>

        <p>
          These marines <strong>want to fight on top of objectives</strong>. The
          heavy pistols can chip at their targets, until their chainswords start
          hacking. Only when they engage in melee can their{' '}
          <strong>Shock Assault</strong> rule come in to play. They get to
          reroll wound rolls of 1, or instead{' '}
          <strong>reroll all wound rolls when on an objective.</strong> Just
          keep in mind that they are <strong>slow</strong> on foot. A transport,
          preferably an <em>Impulsor</em>, is often necessary to get them into
          position quickly.
        </p>

        <p>
          The chainsword profile is suited for{' '}
          <strong>fighting light infantry</strong>, and with shock assault it
          can be adequate even against other lightly armored marine equivalents.
          However, because the{' '}
          <strong>rerolls also apply to any attached characters</strong> assault
          intercessors shine as <strong>affordable bodyguards</strong>.
        </p>

        <Callout className="text-sm">
          <div className="font-bold">Character Synergy</div>
          <ul>
            <li>
              Captain — Likely the best fit. Adds high-quality melee, free
              stratagem potential, and spikes hard on an objective with full
              wound rerolls.
            </li>

            <li>
              Uriel Ventris — Efficient melee profile plus utility. Assault
              Intercessors provide a cheap, durable escort that benefits from
              objective-based rerolls.
            </li>
            <li>
              Azrael — Strong synergy. He wants to exist safely early and fight
              later. The squad appreciates his invulnerable save and Sustained
              Hits.
            </li>
            <li>
              Ragnar Blackmane — Exceptional fit. High-volume, high-strength
              melee with wound rerolls into monsters and vehicles becomes a
              major threat.
            </li>
          </ul>
        </Callout>

        <p>
          While this gives them purpose, it is in{' '}
          <strong>melee-focused chapters like the Blood Angels</strong> where
          they become a proper threat. In a <em>Liberator Assault Group</em>{' '}
          they gain <strong>+2 Strength (to S6)</strong> and{' '}
          <strong>+1 Attack (5 attacks each)</strong>, scaling greatly both
          horizotally and vertically.
        </p>

        <h3 id="heavy-intercessors">Heavy intercessors</h3>

        <Image
          src={heavyIntercessors}
          alt="A squad of Heavy Intercessors."
          className="max-h-60 object-cover object-[0%_58%] rounded shadow-md"
        />

        <p className="lead">
          <strong>Gravis</strong> armor profile (M5, T6, Sv3+, W3) with{' '}
          <strong>OC2&uarr;</strong>, armed with Heavy Bolt Rifles. Cost:{' '}
          <strong>100 points for 5 models, 200 for 10</strong>.
        </p>

        <hr />

        <p>
          Heavies are <strong>slower</strong>, more <strong>durable</strong>{' '}
          intercessors,{' '}
          <strong>designed to sit on objectives and absorb fire</strong>. They
          are very situational, and aren't common among competitive lists.
        </p>

        <p></p>
      </Section>

      <Section title="Specialists" id="specialists">
        <h3 id="eliminators">Eliminators</h3>

        <p>
          A small squad of stealthy snipers with optional mobility tricks. Even
          if they don't easily kill high-value targets, they can still chip them
          consistently, until they close into your main force.
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
          Sniper rifles deliver flat 3 damage per wound. They have the heavy
          keyword. Coupled with the devastating wounds rule, they hit on 2+ and
          do mortal wounds on 6 if the squad didn't move. A stationary squad
          usually procures a failed save on a typical 4+ invulnerable character.
          On a good roll, they can even delete a support character. In reality,
          it's rare for them to one-shot resilient targets, but they force the
          opponent to respect the threat and reposition.
        </p>

        <p>
          The central mechanic here, however, is the precision keyword. It
          allows them to choose an exact target within a unit, allowing them to
          hit characters even if they are attached to a squad.
        </p>

        <p className="lead">Las fusils for hunting heavy infantry.</p>

        <p>
          Las fusils win over sniper rifles on raw damage and armor penetration,
          but lack the precision keyword. This makes them better against elite
          infantry and light vehicles. You can expect at least one failed armor
          save per turn into things like Terminators or Rhino-level targets.
        </p>

        <p className="lead">Instigator bolt carbine for some tricks</p>

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
