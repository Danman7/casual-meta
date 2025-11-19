import Image from 'next/image'
import Link from 'next/link'
import {
  GiBlackHandShield,
  GiBolterGun,
  GiCrocSword,
  GiFist,
  GiFlyingFlag,
  GiPencilRuler,
  GiShadowFollower,
  GiSkullCrack,
  GiSnail,
  GiSpikedHalo,
  GiTwoCoins,
} from 'react-icons/gi'
import { IoPeople } from 'react-icons/io5'

import assaultIntercessors from '@/app/assets/wh40k/AssaultIntercessors.webp'
import intercessors from '@/app/assets/wh40k/interfcessors.webp'
import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
import { Badge } from '@/app/ui/Badge'
import { Callout } from '@/app/ui/Callout'
import { FlexWrapper } from '@/app/ui/FlexWrapper'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 11

export const navTitle = 'Space Marines Units'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${navTitle}`,
  'An overview of the Space Marines battleline infantry units.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1>{navTitle}</h1>

      <p>
        If you are unfamiliar with the profile abbreviations check out our{' '}
        <Link href={`${WH40K_BASE_URL}/profile-archetypes`}>
          Profile Archetypes
        </Link>{' '}
        page.
      </p>

      <h2>Battleline</h2>

      <p>
        Battleline is a keyword appearing on some datasheets allowing you to
        take twice as many units of the same name as non-battleline units in an
        army list depending on the mission you are playing.
      </p>

      <h3>Intercessor Squad</h3>
      <FlexWrapper className="mt-2">
        <Badge className="text-success border-success">
          <GiPencilRuler /> Best Utility
        </Badge>

        <Badge className="text-success border-success">
          <GiFlyingFlag /> Sticky Objectives
        </Badge>

        <Badge className="text-success border-success">
          <GiBolterGun /> Consistent ranged damage
        </Badge>

        <Badge className="text-success border-success">
          <GiSkullCrack /> Good vs GEQ
        </Badge>

        <Badge>
          <GiSkullCrack /> OK vs MEQ
        </Badge>

        <Badge className="text-error border-error!">
          <GiBlackHandShield /> Weak vs T5+
        </Badge>
      </FlexWrapper>

      <Image
        src={intercessors}
        alt="A squad of Space Marine Intercessors advancing."
        className="shadow-md max-h-96 object-cover object-[0%_65%]"
      />

      <Callout>
        <div className="text-base">
          MEQ with OC2 |{' '}
          <span className="text-light">
            Infantry, Battleline, Imperium, Grenades, Tacticus
          </span>
        </div>

        <p>
          80 pts. for 5 models or 160 pts. for 10 models{' '}
          <span className="text-light">
            armed with a bolt pistol, a bolt rifle, and a close combat weapon
          </span>
        </p>

        <p>
          <strong>Objective Secured</strong> a.k.a. Sticky Objectives: Cap an
          objective once it stays yours until the enemy takes it.
        </p>

        <p>
          <strong>Target Elimination</strong>: +2 attacks per bolt rifle if all
          shoot the same target.
        </p>
      </Callout>

      <p>
        This is the principle Adeptus Astartes battleline squad. A sergeant
        leads either four or nine <em>Primaris</em> marines armed with{' '}
        <em>Bolt Rifles</em>. By Primaris we mean the "new generation" of
        marines, making an appearance since the 8th edition of the codex, where{' '}
        <em>Firstborn</em> is used to describe the "old" one.
      </p>

      <p>
        Intercessors are the most overall consistent infantry squad available to
        the Space Marines. Assault Intercessors hit harder in melee, Tacticals
        have a wide array of special weapons, while Hellblasters are better
        killers. But the 2 points of Objective Control along with the Sticky
        Objectives rule, and the Assault weapon trait with the Target
        Elimination rule give them such utility that it is never a bat idea to
        have at leas one of these in your army list.
      </p>

      <Callout>
        <FlexWrapper className="text-base">
          <GiBolterGun /> <span>The Bolt Rifle</span>
        </FlexWrapper>
        <p className="font-bold">
          24"|A2|BS3+|S4|AP-1|D1{' '}
          <span className="text-light">/ Assault, Heavy</span>
        </p>

        <p className="font-bold">
          One in five squad members can attach a Grenade Launcher to their Bolt
          Rifle, loosing the Assault trait.
        </p>

        <p>
          The Assault and Heavy keywords give flexibility both for staying put
          or moving forward, playing well with their Sticky Objectives rule. The
          rifle erases GEQ units but also performs respectably against MEQs.
          Even without Target Elimination and Heavy kicking in, a five-man squad
          can be expected to kill 7-8 GEQ, or 2 MEQ, or 1 TEQ per volley. With
          Target Elimination you get 4 shots per model with 4 Strength -1 Armor
          Penetration giving you an edge over anything below heavy/elite
          infantry. The weapon’s effectiveness falls off against Toughness 5+
          Armor Save 2+ foes, but the grenade launcher in krak mode can help
          with that. And the grenade launcher in frag mode further annihilates
          GEQ swarms.
        </p>

        <p>
          With Target Elimination you get 4 shots per model with 4 Strength -1
          Armor Penetration giving you an edge over anything below heavy/elite
          infantry.
        </p>
      </Callout>

      <p>
        With this weapon profile and the special rules, a five-man squad is
        always optimal. This gives you 20 bolt shots with Target Elimination
        which is plenty and you can trade or hide the squad better. Intercessors
        should never be your primary damage dealers, but a ten-man squad paired
        with a Lieutenant giving them Lethal Hits and fall back and shoot
        ability can be fun. This would also improve engagements with tougher
        targets.
      </p>

      <p>
        Sticky Objectives rule should be used to its full extent as it helps the
        entire army. You can quickly tag the home objective and either advance
        to the middle ones or anticipate a deep enemy strike by moving away to a
        better defensive position. Either way the Assault keyword allows them to
        contribute to the shooting phase on the move. Don’t be afraid to engage
        or even charge light infantry at any time.
      </p>

      <Callout>
        <FlexWrapper className="text-base">
          <GiFist /> <span>Hand-to-hand combat and the Sergeant</span>
        </FlexWrapper>

        <p className="font-bold">Close combat weapon: A3|WS3+|S4|AP0|D1</p>
        <p className="font-bold">Power Fist: A3|WS3+|S8|AP-2|D2</p>

        <p>
          Intercessors get 3 Attacks with their Close Combat weapons. At 4
          Strength they deal just fine with models up to Toughness 3, so don’t
          shy away with GEQ melee engagements. The Sergeant has the broadest
          selection of weaponry among the Primaris infantry, but a Power Fist is
          often the most successful option giving some leverage against more
          resilient targets.
        </p>
      </Callout>

      <h3>Assault Intercessor Squad</h3>

      <FlexWrapper className="mt-2">
        <Badge className="text-success border-success">
          <GiTwoCoins /> Expendable
        </Badge>

        <Badge className="text-success border-success">
          <GiSkullCrack /> Good vs GEQ
        </Badge>

        <Badge className="text-success border-success">
          <IoPeople /> Strong Character Support
        </Badge>

        <Badge className="text-error border-error!">
          <GiBlackHandShield /> Weak vs T5+
        </Badge>

        <Badge className="text-error border-error!">
          <GiSnail /> Slow for role
        </Badge>

        <Badge className="text-error border-error!">
          <GiShadowFollower /> Better Alternatives
        </Badge>
      </FlexWrapper>
      <Image
        src={assaultIntercessors}
        alt="A squad of Assault Intercessors."
        className="shadow-md max-h-96 object-cover object-[0%_65%]"
      />

      <Callout>
        <div className="text-base">
          MEQ with OC2 |{' '}
          <span className="text-light">
            Infantry, Battleline, Imperium, Grenades, Tacticus
          </span>
        </div>

        <p>
          75 pts. for 5 models or 150 pts. for 10 models{' '}
          <span className="text-light">
            armed with a heavy bolt pistol and a Astartes chainsword.
          </span>
        </p>

        <p>
          <strong>Shock Assault</strong>: Re-roll a melee wound roll of 1. If
          the target is within range of an objective, re-roll any wound roll
          instead. This translates to any attached characters.
        </p>
      </Callout>

      <p>
        <em>Assault Intercessors</em> are hand-to-hand combat adepts, meant to
        act as an aggressive battleline for the Space Marines. As durable as any
        MEQ yet cheaper than regular Intercessors, they act best by rushing in
        to meet the enemy at the midfield objectives. At the same time, they
        lack the speed of true assault troops, and their melee profile is
        overshadowed by other specialized squads.
      </p>

      <Callout>
        <FlexWrapper className="text-base">
          <GiCrocSword /> <span>The Chainsword and melee damage</span>
        </FlexWrapper>

        <p className="font-bold"> Astartes chainsword: A4|WS3+|S4|AP-1|D1</p>

        <p>
          The equivalent of a five-man Bolt Rifle squad with Target Elimination
          in close combat - 20 Chainsword attacks per Fight phase. At 4 Strength
          and -1 AP these are dangerous to T3 and T4 units with average or below
          armor saves. Standing close to objectives, because of the special
          rule, you can expect on average 8-10 GEQ, or 2-3 MEQ kills and 2-3
          wounds on TEQs.
        </p>

        <p>As always, the Power Fist is a good choice for the Sergeant. </p>
      </Callout>

      <p>
        Assault Intercessors are not prime damage dealers. They are cheap units
        for contesting the mid objectives, but they also do a fine job as
        bodyguards. Pairing them with a Captain or a Lieutenant can spike their
        damage to face mid-tiers or even vehicles -{' '}
        <em>
          Oath of Moment + Lethal Hits + Re-roll Wounds on Objective + Better
          Leader Equipment
        </em>
        . Naturally these marines appear frequently on the lists of chapters
        that buff close combat like the Blood Angels, Black Templars, or Space
        Wolves.
      </p>

      <Callout>
        <FlexWrapper className="text-base">
          <GiSpikedHalo /> <span>Character and Chapter Combos</span>
        </FlexWrapper>

        <p>
          A Captain with The Honor Vehement gives +1 Attack +1 Strength to any
          melee weapons.
        </p>

        <p>
          Blood Angels with the Liberator Assault Group gives +2 Strength, +1
          Attack, Advance & Charge, Lethal Hits.
        </p>

        <p>
          Black Templars can re-roll charges, and give melee buffs from Vows,
          and stratagem support.
        </p>

        <p>
          Space Wolves with Ragnar gain massive synergy from wound rerolls of
          Assault Intercessors and his S8 attacks.
        </p>
      </Callout>

      <p>
        Finally, with or without a specialized chapter, give some consideration
        to transportation of the Assault Intercessors to the midfield. You
        should be thinking about five over ten-man squads so an Impulsor should
        be the fastest taxi option. If not a Land Raider or a Repulsor will do.
      </p>

      <p>
        In perspective they are competitively average. They can do well in melee
        focused army lists, but are inefficient compared to their Jump Pack
        equivalent.
      </p>
    </article>
  )
}
