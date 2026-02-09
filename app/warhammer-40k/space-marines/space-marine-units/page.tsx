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
        If you are unfamiliar with the profile abbreviations check out our{' '}
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
              <strong>Profile:</strong> MEQ with OC2
            </li>

            <li>
              <strong>Keywords:</strong> Infantry, Battleline, Imperium,
              Grenades, Tacticus
            </li>

            <li>
              <strong>Cost:</strong> 80 pts. for 5 or 160 pts. for 10 models
            </li>
          </ul>

          <hr />

          <p>
            <strong>Objective Secured:</strong> If you control an objective in
            your Command phase, it stays yours until the opponent takes it.
          </p>

          <p>
            <strong>Target Elimination:</strong> When shooting, bolt rifles gain
            +2 Attacks, but the unit must shoot a single unit.
          </p>
        </Callout>
        <p>
          Intercessors are currently the principal Primaris battleline infantry,
          replacing the old Tactical Squad role. They lack the large arsenal,
          but compensate with flexibility and dependability.
        </p>
        <p>
          The sticky objectives rule allows these marines to rush the home
          objective, then leave it and play a role elsewhere. It also forces the
          opponent to physically contest controlled objectives.
        </p>
        <p>
          Intercessors are primarily a ranged squad. The bolt rifle is daunting
          against GEQ, adequate against MEQ and at least playable against TEQ.
          The double shots special rule's requirement to shoot at one target
          promotes 5 over 10-man squads. The sheer volume of shots hold light
          infantry at bay. The grenade launcher is never a bad idea, even if one
          marine looses the assault keyword. Frags further help againts horedes,
          while Kraks gives some leverage against tougher targets.
        </p>
        <p>
          Melee-wise the squad is nothing exceptional. It will stugggle againts
          anything beyond GEQ. Arm the sergeant with a power fist or a thunder
          hammer to help win trades.
        </p>
        <p>
          Support for the Intercessors should be within measure. They are
          efficient as they are and should be kept cheap.
        </p>
        <ul>
          <li>
            <strong>Armor of Contempt</strong> when surviving on an objective
            matters.
          </li>

          <li>
            <strong>Grenades</strong> when extra punch is needed.
          </li>

          <li>
            <strong>Overwatch</strong> or a <strong>Lieutenant</strong> are
            situational and usually best with 10-man squads.
          </li>
        </ul>
        <p>
          Intercessors are common among competitive army lists. They have a lot
          of utility, but are not key character escorts.
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
              <strong>Keywords:</strong> Infantry, Battleline, Imperium,
              Grenades, Tacticus
            </li>

            <li>
              <strong>Cost:</strong> 75 pts. for 5 or 150 pts. for 10 models
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
          This is the standard close combat option outside dedicated melee
          chapters.
        </p>

        <p>
          The Astartes chainswords give lots of S4|AP-1|D1 hand-to-hand attacks:
          4 per marine. That is 20 attacks per default squad, although it might
          be best to sacrifice an attack to give the sergeant a power fist or
          thunder hammer. They do well against foes up to Toughness 4 with
          rather weak armor.
        </p>

        <p>
          The heavy bolt pistol also helps doing chip damage to target while the
          intercessors close in.
        </p>

        <p>
          The special rule pushes them to dive objectives. But because it buffs
          a joint leader's wounds, they are also a fair inexpensive bodyguard
          option:
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

        <p>
          With ther regular on-foot speed, they are slow for a real assault
          role. To quickly dive the mid objective, transportation is advised. An
          Impulsor is the most reasonable, as bigger transports want scarier
          payloads.
        </p>

        <p>
          Even if slow, Assault Intercessors are still a cheap melee units that
          can both trade with light infantry in the middle and bodyguard
          characters. Especially in chapters like Blood Angels, where they
          become more serious of a hand-to-hand threat. But because they don't
          bring much mission utility, they can compete with Scouts, Infiltrators
          and Incursors which bring deploy tricks, denial, or hit buffs.
        </p>

        <h3 id="heavy-intercessor">Heavy intercessor squad</h3>

        <Image
          src={heavyIntercessors}
          alt="A squad of Heavy Intercessors."
          className="max-h-96 object-cover object-[0%_65%]"
        />

        <Callout>
          <ul>
            <li>
              <strong>Profile:</strong> M5|T6|Sv3+|W3|OC2 between MEQ and TEQ.
            </li>

            <li>
              <strong>Keywords:</strong> Infantry, Battleline, Imperium,
              Grenades, Gravis
            </li>

            <li>
              <strong>Cost:</strong> 100 pts. for 5 or 200 pts. for 10 models
            </li>
          </ul>

          <hr />

          <p>
            <strong>Unyielding in the Face of the Foe:</strong> +1 to armore
            saves if attacked by a D1, while near objective.
          </p>
        </Callout>

        <p>
          Heavy Intercessors struggle finding a role in Space Marines army. They
          are sluggish, tough, objective-focused shooters and they face heavy
          competition from cheaper, more flexible units. Even with balance
          updates, they are still situational.
        </p>

        <p>
          Their profile is very durable for the cost. With their special rule,
          low speed and OC2, they're designed to sit on objectives and absorb
          fire. Which they do effectively from D1 weapons, up to S5. Against
          high-damage weapons they're comparable to Terminators without the
          invulnerable saves. Anti-tank arms still remove them efficiently, but
          their cost is probably not worth the effort from your opponent.
        </p>

        <p>
          The D2 heavy bolt rifles threaten MEQ and beyond up to T5|W2, but good
          armor saves with burden them. And they do have excellent range. Still,
          these weapons are not designed to be primary damage dealers. And even
          with the tough gravis armor, once the enemy gets into melee with them,
          they will not hold their own.
        </p>

        <p>Heavy intercessors can play with:</p>

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

        <p>
          Heavy intercessors support your army by absorbing shots and chipping
          infantry, but they remain rare in competative lists. Regular
          intercessors are simply cheaper, more efficient and flexible.
        </p>
      </Section>

      <Section title="Specialist" id="specialist">
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
              <strong>Keywords:</strong> Infantry, Grenades, Imperium, Phobos.
            </li>

            <li>
              <strong>Core abilities:</strong> Infiltrators, Stealth
            </li>

            <li>
              <strong>Cost:</strong> 85 pts. for 3 models
            </li>
          </ul>

          <hr />

          <p>
            <strong>Reposition Under Covering Fire:</strong> After shooting, if
            the sergeant is alive and has an instigator bolt carbine, the unit
            can immediately make a normal move.
          </p>

          <p>
            <strong>Target Elimination:</strong> If the unit remains stationary,
            its weapons gain devastating wounds for the phase.
          </p>
        </Callout>

        <p>
          Eliminators are a small squad of dedicated stealthy long-range
          high-value targets hunters. Because of the core abilities, they can
          deploy ahead of the main force and enemies have a harder time hittig
          them with ranged attacks. As expected, they are far from durable, so
          Infiltrators, Stealth and the instigator trick have to be used to
          their full potential. Each of their weapon choices encourage a
          different playstyle.
        </p>

        <p>
          The Bolt sniper rifle is a S5|AP-2|D3|A1 36" heavy precision weapon,
          that is meant to handle single multi-wound targets at long range. If
          the squad doesn't move, with the target special rule and heavy
          keyword, the weapon hits on 2+ roll, does flat 3 damage and
          devastating wounds on 6s. A stationary squad usually forces one failed
          save on a typical 4+ invulnerable character. It's very rare for them
          to one-shot resilient foes, but they do threaten to delete support
          characters with good rolls. This can force the opponent to respect
          them and reposition.
        </p>

        <p>
          If you expect to run into more heavy infantry than characters, you can
          arm the squad with las fusils. The are better at picking off
          non-character elite infantry and light vehicles, where precission is
          less important than raw damage. Often they procure a failed save per
          turn into things like Terminators or Rhino-level targets.
        </p>

        <p>
          The sergeant also can equip an instigator bolt carbine. It sacrifices
          range and damage for some movement tricks. It enables the squad to pop
          and shoot from and back into cover, or perform long repositions where
          they avance shoot, then contest objectives. This is especially useful
          if las fusil are equipped to handle non-characters. Many players take
          this trade as you can often see two las fusils paired with a carabine
          sergeant in competative lists.
        </p>

        <p>
          Eliminators are a low-investment unit that likes buffs, but don't
          often deserve the best of them:
        </p>
      </Section>
    </>
  )
}
