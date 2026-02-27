import Image from 'next/image'
import Link from 'next/link'

import assaultIntercessors from '@/app/assets/wh40k/AssaultIntercessors.webp'
import eliminators from '@/app/assets/wh40k/eliminators.webp'
import heavyIntercessors from '@/app/assets/wh40k/heavyintercessors.webp'
import intercessors from '@/app/assets/wh40k/interfcessors.webp'
import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
import { Example } from '@/app/ui/Example'
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
        Having the datasheets is not essential, but recommended. If you are
        unfamiliar with profile abbreviations, check out{' '}
        <Link href={wh40kRoute('Profile Archetypes')}>Profile Archetypes</Link>.
      </p>

      <Section title="Battleline" id="battleline">
        <p>
          Troops with the battleline keyword on their sheets have relaxed
          restrictions on how many of the same type can be in an army list.
        </p>

        <h3 id="intercessors">Intercessors</h3>

        <Image
          src={intercessors}
          alt="A squad of Space Marine Intercessors."
          className="profile-img object-[0%_70%]"
        />

        <div className="flex flex-wrap content-stretch justify-between gap-2 py-2">
          <div>
            <div className="flavor">Profile:</div>
            <div>
              <strong>Marine equivalent</strong> with <strong>OC2&uarr;</strong>{' '}
              in Tacticus Armor
            </div>
            <div>
              <strong>Bolt Rifles</strong>{' '}
              <span className="flavor">S4, AP-1, D1</span>
            </div>
          </div>
          {/* <div>
            <strong>Marine equivalent</strong> profile with{' '}
            <strong>OC2&uarr;</strong> in Tacticus Armor, armed with Bolt
            Rifles. Cost: <strong>80 points for 5 models, 160 for 10</strong>.
          </div> */}
          <div>
            <div className="flavor">Cost:</div>
            <div className="font-bold">80/5 160/10</div>
          </div>
        </div>

        <hr />

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
          battleline infantry built for <strong>melee</strong>. Their value
          depends on list flavor and support.
        </p>

        <p>
          They want to <strong>fight on objectives</strong>. Heavy pistols chip
          targets until their chainswords engage. <strong>Shock Assault</strong>{' '}
          lets them reroll wound rolls of 1, or all wound rolls{' '}
          <strong>when on an objective.</strong> They're <strong>slow</strong>{' '}
          on foot, so a transport-preferably an <em>Impulsor</em>-is usually
          needed.
        </p>

        <p>
          Chainswords handle <strong>light infantry</strong> well, and with
          Shock Assault can manage lightly armored equivalents. Their real
          strength, though, is as <strong>affordable bodyguards</strong>-the{' '}
          <strong>wound rerolls apply to attached characters</strong> too.
        </p>

        <Example>
          <div>
            Look for strong melee profiles (e.g. Captain or Ragnar Blackmane)
            that explode with wound rerolls, or characters that benefit from
            surviving longer (e.g. Azrael or Uriel Ventris).
          </div>

          <div>
            In <strong>melee-focused chapters like Blood Angels</strong> they
            become a real threat. A <em>Liberator Assault Group</em> adds{' '}
            <strong>+2 Strength (S6)</strong> and{' '}
            <strong>+1 Attack (5 each)</strong>, scaling well both horizontally
            and vertically.
          </div>
        </Example>

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
          Heavies are <strong>slower, tougher</strong> intercessors built to{' '}
          <strong>sit on objectives and absorb fire</strong>. Situational, and
          rare in competitive lists.
        </p>

        <p>
          At 20 points per model, they blunt common anti-marine weapons (S5,
          D2)-lighter arms fare even worse.{' '}
          <strong>Unyielding in the Face of the Foe</strong> grants{' '}
          <strong>+1 to saves against D1 attacks</strong>. Not quite
          terminators, but they force opponents to commit anti-tank weapons
          (plasma, lascannons, etc.) to answer.
        </p>

        <p>
          Their weapons can cope with T4-T5 double-wound infantry at range on
          paper, but low AP chips rather than hurts.{' '}
          <strong>They're grinders</strong>.
        </p>
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
