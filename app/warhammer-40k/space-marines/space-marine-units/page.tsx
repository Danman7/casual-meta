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
import { Pill } from '@/app/ui/Pill'
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
        Having the datasheets is essential to understanding the comments bellow.
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
              <strong>Profile:</strong> MEQ with OC2{' '}
              <Pill>Infantry, Battleline, Imperium, Grenades, Tacticus</Pill>
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
          Intercessors are the principal Space Marine ranged infantry. Their
          pilars are the consistent firepower and the utility the sticky
          objectives rule brings.
        </p>

        <p>
          They are not primary damage dealers, yet the bolt rifle holds its own.
          The double shots rule is ruinous to light infantry because of the
          sheer shots volume. The single-target requirement naturally promotes
          5-man squads over 10-man ones.
        </p>

        <p>
          One in five can attach an Astartes grenade launcher to their bolt
          rifle. It is a useful enough upgrade on its own that most players take
          it by default.
        </p>

        <p>
          The squad's melee capabilities are very limited. Arm the sergeant with
          a power fist or a thunder hammer to help win close combat trades.
        </p>

        <p>
          The sticky objectives allow them to capture an objective, then move on
          to play a role elsewhere. It also forces the opponent to physically
          contest controlled objectives.
        </p>

        <p>
          Support for the Intercessors should be within measure. They are
          efficient as they are and should be kept cheap. You can try:
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

        <h3 id="assault-intercessor">Assault intercessor squad</h3>
        <Image
          src={assaultIntercessors}
          alt="A squad of Assault Intercessors."
          className="max-h-96 object-cover object-[0%_65%]"
        />
        <Callout>
          <ul>
            <li>
              <strong>Profile:</strong> MEQ with OC2{' '}
              <Pill>Infantry, Battleline, Imperium, Grenades, Tacticus</Pill>
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
          This is the standard close combat squad outside dedicated melee
          chapters. They are expendable midfield traders or character escorts.
        </p>

        <p>
          The Astartes chainswords give 4 hand-to-hand attacks per marine. That
          is 20 attacks per default squad, although it might be best to give the
          sergeant a power fist or thunder hammer. They do well against foes up
          to Toughness 4 with rather weak armor.
        </p>

        <p>
          The heavy bolt pistol also helps doing chip damage to target while the
          intercessors close in.
        </p>

        <p>
          The special rule pushes them to dive objectives. But because it also
          buffs a joint leader's wounds, they are a fair bodyguard option for:
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
          Assault intercessors on foot are slow and transportation is advised if
          they are to quickky dive the mid objectives. An Impulsor is the most
          reasonable choice, as bigger transports want scarier payloads.
        </p>

        <p>
          In chapters like Blood Angels, they become more serious of a threat.
          But because they don't bring much utility, they compete with
          Intercessors, Scouts, Infiltrators and Incursors which bring deploy
          tricks, denial, or hit buffs.
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
              <strong>Profile:</strong> M5|T6|Sv3+|W3|OC2 between MEQ and TEQ{' '}
              <Pill>Infantry, Battleline, Imperium, Grenades, Gravis</Pill>
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
          Heavy Intercessors struggle finding a core position in the Space
          Marines roster. With their slow yet durable for the cost profile,
          special rule, and OC2, they're designed to sit on objectives and
          absorb fire. They do this effectively from D1 weapons, up to S5.
        </p>

        <p>
          The heavy bolt rifles have excellent range. They are daunting to
          targets up to T5|W2, provided they don't have good armor saves. Still,
          these weapons are not designed to be major damage dealers. And their
          durable profile won't last long once the enemy gets within melee
          reach.
        </p>

        <p>Heavy intercessors play well with:</p>

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
          They can support your army by absorbing shots and chipping infantry,
          but they remain rare in competative lists. Regular intercessors are
          simply cheaper, more efficient and flexible.
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
