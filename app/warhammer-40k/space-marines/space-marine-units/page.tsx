import Image from 'next/image'
import Link from 'next/link'
import { BsShadows } from 'react-icons/bs'
import { FaCrosshairs } from 'react-icons/fa'
import { FaShield } from 'react-icons/fa6'
import { IoIosMan } from 'react-icons/io'
import { LuSword } from 'react-icons/lu'
import { TbRulerMeasure } from 'react-icons/tb'

import assaultIntercessors from '@/app/assets/wh40k/AssaultIntercessors.webp'
import eliminators from '@/app/assets/wh40k/eliminators.webp'
import heavyIntercessors from '@/app/assets/wh40k/heavyintercessors.webp'
import intercessors from '@/app/assets/wh40k/interfcessors.webp'
import { WH40K_TITLE } from '@/app/constants'
import { Section } from '@/app/ui/Section'
import { wh40kRoute } from '@/app/warhammer-40k/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 11

export const navTitle = 'Space Marine Units'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${navTitle}`,
  'An overview of the Space Marines units.',
)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

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

        <div className="relative">
          <div className="absolute top-2 left-2 right-2 flex-center">
            <div className="badge">
              <FaCrosshairs /> Ranged
            </div>

            <div className="badge">
              <IoIosMan /> Infantry
            </div>
          </div>

          <div className="badge absolute bottom-2 left-2">
            <strong>MEQ</strong> with OC2&uarr;
          </div>

          <div className="badge absolute bottom-2 right-2">
            <strong>Cost:</strong> 80/5; 160/10
          </div>

          <Image
            src={intercessors}
            alt="A squad of Space Marine Intercessors."
            className="picture profile-img object-[0%_70%]"
          />
        </div>

        <div className="box">
          <p>
            <strong>Objective Secured:</strong> If the squad holds an objective,
            it remains yours even after it moves away.
          </p>

          <p>
            <strong>Target Elimination:</strong> Bolt Rifles get + 2 attacks if
            the whole squad shoots at a single target.
          </p>
        </div>

        <p>
          Intercessors are the backbone of the Space Marines. They are a{' '}
          <em>flexible utility</em> unit, that fits a wide range of playstyles,
          yet holds their own in combat. If you are unsure of how to fill your
          troop slots, a squad of these is generally never a bad choice.
        </p>

        <p>
          The sticky objectives ability frees up control resources, as
          Intercessors can tag and walk. You can quickly capture home and pivot
          to contribute in the middle. Or rush middle and step back to defend
          from a distance. Now, the opponent can't just shoot you off a marker -
          they must physically contest it.
        </p>

        <p>
          The versatile <em>Bolt Rifle</em>{' '}
          <small>(Assault, Heavy, 24", A2, S4, AP-1, D1)</small> deals quickly
          with light infantry, and is viable against MEQ when the double-shots
          rule activates. Naturally, this promotes 5-man squads over 10-man as
          they can focus fire different targets with less risk of overkill.
        </p>

        <p>
          One-in-five rifles can attach a grenade launcher, which more often
          helps than not (frag grenades against hordes, krak against high
          toughness). So does equiping the sergeant with a Power fist{' '}
          <small>(Melee, S8, AP-2, D2)</small>.
        </p>

        <p>
          The whole package supports whatever you need - mobile agressivness,
          static defense (if they skip moving, they hit on 2+), or anti-swarm,
          but avoid using them in melee apart from clean up. Intercessors are
          good as they are and support for them should be kept cheap.
        </p>

        <blockquote>
          <p>
            <em>Armor of Contempt</em> comes in handy for surviving a critical
            turn on an objective. A <em>lieutenant</em> with{' '}
            <Link href={`${wh40kRoute('Datasheets')}#lethal-hits`}>
              Lethal Hits
            </Link>{' '}
            can make a 10-man squad more viable.
          </p>
        </blockquote>

        <h3 id="assault-intercessors">Assault Intercessors</h3>

        <div className="relative">
          <div className="absolute top-2 left-2 right-2 flex-center">
            <div className="badge">
              <LuSword /> Melee
            </div>

            <div className="badge">
              <IoIosMan /> Infantry
            </div>
          </div>

          <div className="badge absolute bottom-2 left-2">
            <strong>MEQ</strong> with OC2&uarr;
          </div>

          <div className="badge absolute bottom-2 right-2">
            <strong>Cost:</strong> 75/5; 150/10
          </div>

          <Image
            src={assaultIntercessors}
            alt="A squad of Assault Intercessors."
            className="picture profile-img object-[0%_75%]"
          />
        </div>

        <div className="box">
          <p>
            <strong>Shock Assault:</strong> Re-roll melee wound rolls of 1
            anywhere. Re-roll all melee wound rolls when on an objective.{' '}
            <em>This applies to any character attached to the squad.</em>
          </p>
        </div>

        <p>
          Adding "assault" in front of the name signifies a focus on
          hand-to-hand combat. And the package you get is a cheaper, melee
          version of regular intercessors. This is the closest to an expendable
          unit you'll get with the Space Marines - a natural fit for melee-heavy
          detachments.
        </p>

        <blockquote>
          <p>
            The <em>Blood Angels</em> chapter elevate Assault Intercessors to a
            proper threat. As part of a <em>Liberator Assault Group</em>{' '}
            detachment they gain +2S (to S6) and +1A (A5 for each chainsword),
            scaling both horizontally and vertically.
          </p>
        </blockquote>

        <p>
          Assault Intercessors have two good fits. First, at 15 points per
          model, 4 attacks (unmodified) per Astartes chainsword{' '}
          <small>(S4, AP-1, D1)</small>, and the Shock Assault ability, they are
          good at trades against light infantry on top of objectives.
        </p>

        <p>
          Secondly, since the wound re-rolls also apply to any attached leader,
          they are also cost efficient bodyguards. And because the squad's
          performance is more dependent on the support they get, it's often a
          good idea to have someone appropriate in the list that they can
          escort.
        </p>

        <blockquote>
          <p>
            Characters with crit abilities, like the <em>Lieutenant's</em>{' '}
            Lethal Hits, and <em>Azrael</em> (Dark Angels){' '}
            <Link href={`${wh40kRoute('Datasheets')}#sustained-hits`}>
              Sustained Hits
            </Link>
            , benefit from the re-rolls alot.
          </p>

          <p>
            Good melee profile like the <em>Captain</em>, or{' '}
            <em>Ragnar Blackmane</em> (Space Wolves) are an exceptional fit.
          </p>
        </blockquote>

        <p>
          Speaking of support, Assault Intercessors are slow at getting to the
          front where they might engage the enemy. If your plan is to trade
          agressively at the middle, think about a transport (an Impulsor is
          often ideal).
        </p>

        <h3 id="heavy-intercessors">Heavy Intercessors</h3>

        <div className="relative">
          <div className="absolute top-2 left-2 right-2 flex-center">
            <div className="badge">
              <FaShield /> Durable
            </div>

            <div className="badge">
              <FaCrosshairs /> Ranged
            </div>

            <div className="badge">
              <IoIosMan /> Infantry
            </div>
          </div>

          <div className="badge absolute bottom-2 left-2">
            <strong>Gravis</strong> (M5, T6, Sv3+, W3)
          </div>

          <div className="badge absolute bottom-2 right-2">
            <strong>Cost:</strong> 100/5; 200/10
          </div>

          <Image
            src={heavyIntercessors}
            alt="A squad of Heavy Intercessors."
            className="picture profile-img object-[0%_56%]"
          />
        </div>

        <div className="box">
          <p>
            <strong>Unyielding in the Face of the Foe:</strong> +1 to Save
            against D1 attacks while on an objective.
          </p>
        </div>

        <p>
          Heavy Intercessors are the cheapest <em>anchors</em> available to the
          Space Marines. At 20 points per model, the Gravis armor will
          consistently survive anti-MEQ attacks, but is not quite TEQ
          (suboptimal saves). With the unique ability, plus sluggish movement,
          they're designed to sit on objectives and absorb fire, until the enemy
          dedicates proper resources.
        </p>

        <p>
          They come with <em>Heavy bolt rifles</em>{' '}
          <small>(A2, S5, AP-1, D2)</small>, and one-in-five marines can (and
          should) field with a <em>Heavy bolter</em>{' '}
          <small>(same profile +1 attacks and +1 hits on a crit)</small>. Both
          weapons hit on 2+ if stationary (Heavy keyword) and are effective into
          anything up to MEQ.
        </p>

        <p>
          Heavies face stern competition from cheaper, more flexible units.
          Regular Intercessors are more consistent in range, better in melee,
          and bring objectives control utility. If you want to find a fit for
          them, think about support that improves their coherency.
        </p>

        <blockquote>
          <p>
            The <em>Anvil Siege Force</em> detachment with its stratagems around
            remaining stationary, supports static play with the Heavy keyword.
          </p>

          <p>
            If you're playing <em>Iron Hands</em> chapter,{' '}
            <em>Iron Father Feirros</em> fills some of the squad's gaps. 5+ Feel
            No Pain dramatically increases durability, while his melee profile
            makes charges against them daunting.
          </p>
        </blockquote>
      </Section>

      <Section title="Specialists" id="specialists">
        <h3 id="eliminators">Eliminators</h3>

        <div className="relative">
          <div className="absolute top-2 left-2 right-2 flex-center">
            <div className="badge">
              <BsShadows /> Covert
            </div>

            <div className="badge">
              <TbRulerMeasure /> Long-ranged
            </div>

            <div className="badge">
              <IoIosMan /> Infantry
            </div>
          </div>

          <div className="badge absolute bottom-2 left-2 font-bold">MEQ</div>

          <div className="badge absolute bottom-2 right-2">
            <strong>Cost:</strong> 85/3
          </div>

          <Image
            src={eliminators}
            alt="A squad of eliminators."
            className="picture profile-img object-[0%_33%]"
          />
        </div>

        <div className="box">
          <p>
            <strong>Mark the Target:</strong> Get{' '}
            <Link href={`${wh40kRoute('Datasheets')}#devastating-wounds`}>
              devastating wounds
            </Link>{' '}
            when shooting, if squad remained stationary durig movement phase
            this turn.
          </p>

          <p>
            <strong>Reposition Under Covering Fire:</strong> Get an additional,
            optional, normal move after shooting, if the sergeant is alive and
            has an Instigator Bolt Carbine.
          </p>
        </div>

        <p>
          Eliminators are a stealthy micro-squad, that carries an array of
          high-strength, far-reaching (36"), single-shot weapons. They get to
          deploy closer to the enemy, with reduced accuracy from incoming ranged
          attacks, and some movement tricks.
        </p>

        <p>
          Each of their loadouts supports a slightly different playstyle, but
          they all are designed for harassing high-value targets at some
          distance. It's rare for them to straight one-shot durable models, yet
          their presence impels the opponent to respect the threat when
          positioning.
        </p>

        <p>
          <em>Las Fusils</em> <small>(S9, AP-3, Dd6)</small> are the consistent
          choice against elite infantry and light vehicles, winning trough raw
          power. <em>Bolt Sniper Rifles</em> <small>(S5, AP-2, D3)</small> lack
          the strength and penetration of fusils, but have{' '}
          <Link href={`${wh40kRoute('Datasheets')}#precision`}>Precision</Link>,
          making them natural, albeit situational, character hunters. If the
          squad skips movement, both weapons hit on 2+ (
          <Link href={`${wh40kRoute('Datasheets')}#heavy`}>Heavy</Link> keyword)
          and gain mortal wounds on crits (Mark the Target).
        </p>
      </Section>
    </>
  )
}
