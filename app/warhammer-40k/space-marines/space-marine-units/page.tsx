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

        <div className="flex-center">
          <div className="badge">
            <FaCrosshairs /> Ranged
          </div>

          <div className="badge">
            <IoIosMan /> Infantry
          </div>

          <div className="badge">Tacticus Armor</div>
        </div>

        <Image
          src={intercessors}
          alt="A squad of Space Marine Intercessors."
          className="picture profile-img object-[0%_70%]"
        />

        <div className="box">
          <div className="flex-list justify-between">
            <div>
              <strong>MEQ</strong> with <em>OC2&uarr;</em> armed with Bolt
              Rifles
            </div>

            <div>
              <strong>Cost:</strong> 80/5 160/10
            </div>
          </div>

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
          static defense (if they skip moving, they hit on 2+.), anti-swarm -
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

        <div className="flex-center">
          <div className="badge">
            <LuSword /> Melee
          </div>

          <div className="badge">
            <IoIosMan /> Infantry
          </div>

          <div className="badge">Tacticus Armor</div>
        </div>

        <Image
          src={assaultIntercessors}
          alt="A squad of Assault Intercessors."
          className="picture profile-img object-[0%_75%]"
        />

        <div className="box">
          <div className="flex-list justify-between">
            <div>
              <strong>MEQ</strong> with <em>OC2&uarr;</em> armed with Astartes
              chainswords
            </div>

            <div>
              <strong>Cost:</strong> 75/5 150/10
            </div>
          </div>

          <p>
            <strong>Shock Assault:</strong> Re-roll melee wound rolls of 1
            anywhere. Re-roll all melee wound rolls when on an objective.{' '}
            <em>This applies to any character attached to the squad.</em>
          </p>
        </div>

        <p>
          A note on names: adding the assault in front of squads signifies a
          focus on melee combat. And this is the package you acquire: a cheaper,
          hand-to-hand version of regular intercessors. This is the closest to
          an expendable unit you'll get with the Space Marines - a natural fit
          for melee-heavy detachments.
        </p>

        <blockquote>
          <p>
            Blood Angels elevate Assault Intercessors to a proper threat. As
            part of a Liberator Assault Group detachment they gain +2 Strength
            (to S6) and +1 Attack (5 attacks each).
          </p>
        </blockquote>

        <p>
          Lots of attacks on the chainsword's anti-GEQ profile{' '}
          <small>(S4, AP-1, D1)</small> implicates good results against swarms.
          Because of the re-rolls, these marines want to fight on top of
          objectives, but are slow at getting there. If your plan is to trade
          agressively at the middle, think about a transport (an Impulsor is
          often ideal).
        </p>

        <p>
          Speaking of which, Assault intercessors scale with difficulty unless
          properly supported. But, because of the fact that the re-rolls ability
          also applies to attached leaders, they don't necessarily need to
          scale. They fill the role of cheap character escors well enough to
          consider some options.
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

        <h3 id="heavy-intercessors">Heavy Intercessors</h3>

        <div className="flex-center">
          <div className="badge">
            <FaShield /> Durable
          </div>

          <div className="badge">
            <FaCrosshairs /> Ranged
          </div>

          <div className="badge">
            <IoIosMan /> Infantry
          </div>

          <div className="badge">Gravis Armor</div>
        </div>

        <Image
          src={heavyIntercessors}
          alt="A squad of Heavy Intercessors."
          className="picture profile-img object-[0%_56%]"
        />

        <div className="box">
          <div className="flex-list justify-between">
            <div>
              <strong>Gravis</strong> <small>(M5, T6, Sv3+, W3)</small> armed
              with heavy bolt rifles
            </div>

            <div>
              <strong>Cost:</strong> 100/5 200/10
            </div>
          </div>

          <p>
            <strong>Unyielding in the Face of the Foe:</strong> +1 to Save
            against D1 attacks while on an objective.
          </p>
        </div>

        <p>
          Heavy Intercessors are the cheapest anchors available to the Space
          Marines. They're designed to sit on objectives and absorb fire.
          Durable but slow, and not quite TEQ without the exceptional saves,
          they struggle finding a dedicated role in most lists.
        </p>

        <p>
          At 20 points per model, you get a squad that will consistently survive
          most anti-MEQ gear, with a special rule the discourages D1 attacks.
          Their goal is to get to a marker and stay there until the enemy
          dedicates proper resources. But don't expect great feats when they get
          into melee.
        </p>

        <p>
          The <em>Heavy bolt rifle</em>{' '}
          <small>(Assault, Heavy, 30", A2, S5, AP-1, D2)</small> is a proper
          all-around anti-MEQ weapon, proided they're not in cover. The{' '}
          <em>Heavy bolter</em> available to 1-in-5 marines, is essentially the
          same weapon with +1 attacks and +1 hits on a crit. In practice, the
          squad is strongest into standard Marines and other two-wound bodies,
          but struggles to threaten tougher targets.
        </p>

        <p>
          The issue with heavies is that they face stern competition from
          cheaper, more flexible units. Regular Intercessors are more consistent
          in range, better in melee, and bring objectives control utility. If
          you want to try them out, think about support that improves their
          coherency.
        </p>

        <blockquote>
          <p>
            The <em>Anvil Siege Force</em> detachment with its stratagems around
            remaining stationary, supports static play with the Heavy keyword
            (hit on 2+ if they stay put).
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
          <div className="absolute top-4 left-4 right-4 flex-center">
            <div className="badge">
              <BsShadows /> Covert
            </div>

            <div className="badge">
              <TbRulerMeasure /> Long-ranged
            </div>

            <div className="badge">
              <IoIosMan /> Infantry
            </div>

            <div className="badge">Phobos Armor</div>
          </div>

          <div className="badge absolute bottom-4 left-4 font-bold">MEQ</div>

          <div className="badge absolute bottom-4 right-4">
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
          high-strength, far-reaching, single-shot weapons. They get to deploy
          closer to the enemy, with reduced incomming accuracy from ranged
          attacks, and some movement tricks.
        </p>

        <p>
          Each of their loadouts supports a slightly different playstyle, but
          they all are designed for harassing high-value targets at some
          distance. It's rare for them to straight one-shot durable models, yet
          their presence impels the opponent to respect the threat when making
          decisions.
        </p>

        <p>
          <em>Las Fusils</em> <small>(36", S9, AP-3, Dd6)</small> are the
          default choice against elite infantry and light vehicles, winning
          trough consistency in raw power. <em>Bolt Sniper Rifles</em>{' '}
          <small>(36", S5, AP-2, D3)</small> lack the strength and penetration
          of the fusils, but have{' '}
          <Link href={`${wh40kRoute('Datasheets')}#precision`}>precision</Link>,
          making them natural, albeit situational, character hunters.
        </p>

        <p>
          Both weapon choices have the{' '}
          <Link href={`${wh40kRoute('Datasheets')}#heavy`}>heavy</Link> keyword,
          hitting on 2+ and gaining mortal wounds on crits, ignoring the
          target's saves, if they remain stationary.
        </p>
      </Section>
    </>
  )
}
