import Image from 'next/image'
import Link from 'next/link'

import assaultIntercessors from '@/app/assets/wh40k/AssaultIntercessors.webp'
import eliminators from '@/app/assets/wh40k/eliminators.webp'
import heavyIntercessors from '@/app/assets/wh40k/heavyintercessors.webp'
import intercessors from '@/app/assets/wh40k/interfcessors.webp'
import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
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

        <Image
          src={intercessors}
          alt="A squad of Space Marine Intercessors."
          className="profile-img object-[0%_70%]"
        />

        <p>
          <strong>Marine equivalent</strong> profile with{' '}
          <strong>OC2&uarr;</strong> in Tacticus Armor, armed with Bolt Rifles.
          Cost: <strong>80 points for 5 models, 160 for 10</strong>.
        </p>

        <hr />

        <p>
          Intercessors are a <strong>high-utility squad</strong> that scales
          well horizontally and fits into a wide variety of Space Marine lists.
        </p>

        <p>
          Their key ability is{' '}
          <strong>Objective Secured (sticky objectives)</strong>. If an
          Intercessor squad controls an objective marker in your command phase,
          you can move them away without immediately losing control -{' '}
          <strong>forcing opponents to physically contest objectives</strong>{' '}
          rather than just shoot you off them. On the table, they usually rush
          the home objective, then pivot into the midboard to support. In
          essence, they freep up control resources.
        </p>

        <p>
          As ranged firepower, Intercessors are{' '}
          <strong>not primary damage dealers</strong>. They contribute through{' '}
          <strong>volume</strong>, mainly{' '}
          <strong>via Target Elimination</strong>: when selected to shoot, bolt
          rifles gain <strong>+2 attacks</strong> if the whole{' '}
          <strong>squad fires at one unit</strong>. This effectively doubles
          bolt rifle output, to <strong>4 shots per model</strong> at S4, AP-1,
          D1, <strong>making short work of light infantry</strong>. The tradeoff
          is you give up split-fire.
        </p>

        <p>
          Reading trough the data sheet, one in five marines can take a{' '}
          <strong>grenade launcher</strong> without loosing the rifle - only the
          assault keyword. It's <strong>a free upgrade</strong> adding some
          reach into tougher targets or hordes, at the cost of one less shot
          when the squad advances.
        </p>

        <p>
          <strong>
            Melee is just enough to trade or close the deal on already damage
            light infantry
          </strong>
          . Arming the sergeant with a power fist or a thunder hammer, doesn't
          improve that significantly, but it gives the enemy second thoughts
          about charging them.
        </p>

        <p>
          Intercessors <strong>work best when kept cheap</strong>.{' '}
          <em>Armor of Contempt</em> can help if it's imperative for them to
          survive a key turn on a marker. Given their special rules,{' '}
          <strong>5-man squads scale better</strong>. They pressure multiple
          objectives, and align better with the focus-fire requirement for
          double shots, with lower risk of overkill. A 10-man squad can work
          around the idea of high-value damage spike with an attached{' '}
          <em>lieutenant</em>, giving them <em>lethal hits</em> and fall back
          into shoot tactics.
        </p>

        <p>
          <strong>At least one intercessor squad is never a bad idea</strong>{' '}
          for stabilizing objectives and trading into enemy utility units. They
          don’t usually compete for battleline slots. The closest functional
          alternative is shifting points into a dedicated removal unit like{' '}
          <em>hellblasters</em>, depending on whether your list needs more
          killing power or more board control.
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
          Assault intercessors are <strong>cheap, OC-efficient</strong> Space
          Marines battleline infantry built for{' '}
          <strong>close-quarters fights</strong>. As it'll become apparent,
          unlike regular intercessors, they{' '}
          <strong>reach full potential only with proper support</strong>.
        </p>

        <p>
          They can use their <strong>heavy bolt pistols</strong> to{' '}
          <strong>chip away while they approach</strong> their targets. A plasma
          pistol for the sergeant is also available and often a good pick. But
          assault intercessors don't want to fight anywhere. They want to fight
          hand-to-hand on top of objectives because of the{' '}
          <strong>Shock Assault</strong> special rule:
        </p>

        <ul>
          <li>Reroll wound rolls of 1 at all times.</li>

          <li>
            <strong>Reroll all wound rolls when on an objective.</strong>
          </li>
        </ul>

        <p>
          The rerolls to wound, together with the high OC and the large volume
          of S4, D1 <strong>chainsword</strong> attacks (4 per model), secure{' '}
          <strong>
            reliable trades with light to medium infantry on markers
          </strong>
          . They are still not primary damage dealers and tougher targets with
          good armor saves, will give them a hard time.
        </p>

        <p>
          One defining detail is that the{' '}
          <strong>rerolls rule also applies to any attached characters</strong>.
          This makes them <strong>excellent character escorts</strong>. They can
          work well with:
        </p>

        <ul>
          <li>
            <strong>Captain:</strong> High-quality melee, free stratagem, and
            spikes hard on an objective with full wound rerolls.
          </li>

          <li>
            Any monster melee profile like <strong>Ragnar Blackmane</strong>{' '}
            (Space Wolves).
          </li>

          <li>
            Any strong overall character in need of additional protection like{' '}
            <strong>Uriel Ventris</strong> (Ultramarines) or{' '}
            <strong>Azrael</strong> (Dark Angels).
          </li>
        </ul>

        <p>
          Paired with the right leader, assault intercessors can gain some reach
          against tougher targers. But it is in{' '}
          <strong>melee-focused chapters like the Blood Angels</strong> where
          they can <strong>elevate to top-tier</strong>. In a{' '}
          <em>Liberator Assault Group</em> they gain{' '}
          <strong>+2 Strength (to S6)</strong> and{' '}
          <strong>+1 Attack (5 attacks each)</strong>, scaling them greatly both
          horizotally and vertically.
        </p>

        <p>
          Lastly, on the continuous theme of supporting assault intercessors,
          they remain on-foot troops and too <strong>slow</strong> for true
          assault roles. It's often wise to{' '}
          <strong>deliver them with a transport</strong>. The <em>Impulsor</em>{' '}
          is the optimal pick, as a <em>Land Raider</em> will want a scarier
          payload and the <em>Repulsor</em> is better with a shooting one.
        </p>

        <h3 id="heavy-intercessors">Heavy intercessors</h3>

        <Image
          src={heavyIntercessors}
          alt="A squad of Heavy Intercessors."
          className="max-h-60 object-cover object-[0%_58%] rounded shadow-md"
        />

        <div className="flex gap-2 flex-wrap justify-between tracking-wide text-lg">
          <div>
            <strong>Profile:</strong> The Gravis - M5|T6|Sv3+|W3 with OC2&uarr;
          </div>
          <div>
            <strong>Cost:</strong> 100/5, 200/10
          </div>
        </div>

        <hr />

        <p>
          <strong>Unyielding in the Face of the Foe:</strong> +1 to armor saves
          if attacked by a D1 weapon, while near objective.
        </p>

        <hr />

        <p className="lead">Durable for the cost.</p>

        <p>
          Against light arms, the gravis armor is comparable to terminators,
          without the invulnerable saves. It should successfuly hold off weapons
          up to 5 strength and 2 damage, for 20 points per model. Heavier gear,
          like anti-tank weapons, will still delete them quickly.
        </p>

        <p className="lead">Reasonable ranged firepower. Weak hand-to-hand.</p>

        <p>
          They come with a heavier version of the bolt rifle, with superior
          range. Its profile is strong into 4-5 toughness infantry with 2 wounds
          or less, but falters against good armor saves. It's best used for
          chiping at marine equivalents over greater distances.
        </p>

        <p>
          Once the enemy closes into melee range, the heavies' resilient profile
          slows them down, but their weak close combat gives them little
          trouble.
        </p>

        <p className="lead">
          They win on toughness, but lose on flexibility and value.
        </p>

        <p>
          Regular intercessors are cheaper, more consistent with the double
          shots rule, and bring the sticky objectives rule. Heavies remain
          situational, mostly relevant in detachments or with characters that
          further boost their endurance.
        </p>
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
