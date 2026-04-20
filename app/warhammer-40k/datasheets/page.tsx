import Image from 'next/image'
import Link from 'next/link'
import { LuDices } from 'react-icons/lu'
import { PiDiceSix } from 'react-icons/pi'
import { TbArrowBigUpLines, TbRulerMeasure } from 'react-icons/tb'

import anti from '@/app/assets/wh40k/anti.webp'
import assault from '@/app/assets/wh40k/assault.webp'
import attackNumber from '@/app/assets/wh40k/attacks_number.webp'
import datasheet from '@/app/assets/wh40k/datasheet.webp'
import devastatingWounds from '@/app/assets/wh40k/devastating-wounds.webp'
import durability from '@/app/assets/wh40k/durability.webp'
import keywords from '@/app/assets/wh40k/keywords.webp'
import loadouts from '@/app/assets/wh40k/loadouts.webp'
import movediff from '@/app/assets/wh40k/move_diff.webp'
import multipleProfiles from '@/app/assets/wh40k/multiple_profiles.webp'
import precision from '@/app/assets/wh40k/precision.webp'
import rapidFire from '@/app/assets/wh40k/rapid-fire.webp'
import saves from '@/app/assets/wh40k/saves.webp'
import shooting from '@/app/assets/wh40k/shooting.webp'
import sustainedHits from '@/app/assets/wh40k/sustained-hits.webp'
import torrent from '@/app/assets/wh40k/torrent.webp'
import weapons from '@/app/assets/wh40k/weapons.webp'
import wound from '@/app/assets/wh40k/wound.webp'
import { WH40K_TITLE } from '@/app/constants'
import { wh40kRoute } from '@/app/warhammer-40k/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 4

export const navTitle = 'Datasheets'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${navTitle}`,
  'How to read datasheets in Warhammer 40k, including unit profiles and weapon stats.',
)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

      <section>
        <p>
          Every unit comes with a datasheet. It's a card that describes its
          profile, available loadouts, special rules, composition, and access to
          support through keywords. Think of it as a small rulebook for that
          unit.
        </p>

        <Image
          src={datasheet}
          alt="Space Marine Terminators Datasheet"
          loading="eager"
        />
      </section>

      <section>
        <h2 id="unit-profiles">Profile</h2>

        <p>
          At the top, below the datasheet's name, is the unit's profile: M, T,
          Sv, W, Ld, and OC, or Move, Toughness, Save, Wounds, Leadership, and
          Objective Control. These six numbers give insight into its probable
          perfomance in different scenarios. A datasheet may have more than one
          profile listed, depending on what models the unit is composed of.
        </p>

        <Image
          src={multipleProfiles}
          alt="Multiple profiles on an Ork Boyz datasheet"
          className="picture"
        />

        <p>
          Numbers with a <em>plus at the end represent dice throws</em>. If the
          roll is equal to or higher than the number, the check passes, so{' '}
          <em>lower is better</em>. For the rest, <em>higher is better</em>. All
          characteristics deal in probability. Better stats can mean better
          consistency, not certainty.
        </p>

        <h3 id="move">Move (M)</h3>

        <p>
          Movement in WH40K is measured in <em>inches</em>. Following the rules
          of the{' '}
          <Link href={`${wh40kRoute('The Battle Round')}#movement-phase`}>
            movement phase
          </Link>
          , a unit may only move up to a certain amount per turn, when given the
          opportunity to do so. M is the maximum without modifiers. It can{' '}
          <em>never</em> be 0.
        </p>

        <Image
          src={movediff}
          alt="Movement difference between an Assault Intercessor and one with a jump pack."
        />

        <p>
          A higher number means more options to reposition and a wider range of
          engagement opportunities. For reference, most infantry have M6",
          &#177;1. Assault troops and skirmish vehicles are usually around M12",
          while flyers are around M20".
        </p>

        <h3 id="toughness">Toughness (T)</h3>

        <p>
          Toughness is one of 3 characteristics that shape the model's
          durability. It plays a role during the <em>roll to wound</em> part of
          each{' '}
          <Link href={`${wh40kRoute('The Battle Round')}#attack-sequence`}>
            weapon activation
          </Link>
          . The tougher the model is, the stronger the attacking weapon needs to
          be to have a better chance of wounding.
        </p>

        <Image src={wound} alt="Wound roll probabilities" />

        <blockquote>
          <p>
            The Intercessor, with his T4, represents standard infantry. S3
            weapons like the Cultist's Autopistol wound on 5+. The Ork Loota
            with his S5 Big Shoota wounds on 3+.
          </p>
        </blockquote>

        <p>
          Toughness dictates which tools are effective against which profiles.
          Weapons with lower Strength than the target's Toughness on average
          tend to have a hard time making a dent. Still, nothing protects
          against lucky rolls.
        </p>

        <h3 id="save">Save (Sv)</h3>

        <p>
          Saves are an extra gate against taking damage, after an attack has hit
          and wounded. All datasheets have at least an armor save, which is
          affected by the attacking weapon's Armor Penetration (AP). If the AP
          brings the save above 6+, <em>no armor save</em> is allowed. A save
          can never be better than 2+.
        </p>

        <Image
          src={saves}
          alt="Example in how different AP affects armor saves"
        />

        <p>
          Elite, durable models can also have an additional fixed{' '}
          <em>Invulnerable Save</em> which ignores AP. The defender can choose
          which one to use. If the save check passes, damage is averted.
        </p>

        <blockquote>
          <p>
            The Terminator has a Sv2+ which is optimal to begin with. A Bolt
            Rifle AP-1 attack will be saved on 3+. But an AP-4 Meltagun can only
            be saved with a 6. If attacked by the latter, the Terminator will
            fare better if he uses his 4+ Invulnerable Save instead.
          </p>
        </blockquote>

        <h3 id="wounds">Wounds (W)</h3>

        <p>
          The amount of damage a model can take before being removed from play
          is measured in <em>wounds</em>. When an attack has successfully hit
          and wounded, and any save has failed, the target takes damage equal to
          the weapon's Damage (D) characteristic.{' '}
          <em>On reaching 0 wounds, the model is dead</em>.
        </p>

        <p>
          <em>Excess damage is wasted.</em> If a W1 target takes 3 damage, you
          can't assign the rest to another model. Hence, weapons that deal the
          exact amount of damage needed to kill the target are best against that
          target.
        </p>

        <Image
          src={durability}
          alt="Difference in durability between an Intercessor and a Defiler"
        />

        <p>
          The more wounds a model has, the longer it tends to stay in the fight.
          A durable target with a lot of wounds and good saves requires focused
          fire from multiple attackers to be taken down. It can be referred to
          as an <em>anchor</em> or "answer me or die" unit.
        </p>

        <h3 id="leadership">Leadership (Ld)</h3>

        <p>
          Leadership only comes into play for{' '}
          <Link href={`${wh40kRoute('The Battle Round')}#battle-shock-tests`}>
            battle-shock tests
          </Link>{' '}
          during the Command Phase. Better (lower) Ld means a better chance for
          the unit to remain composed at below half-strength. Ld can never be 4+
          (or better), or 9+ (or worse). This means it can only go between Ld5+
          (83% chance to succeed) and Ld8+ (42% chance to succeed).
        </p>

        <h3 id="objective-control">Objective Control (OC)</h3>

        <p>
          Regardless of the mission you are playing, chances are there are going
          to be objective markers on the table. Players score points by
          controlling them.
        </p>

        <p>
          When you move a unit within 3" of a marker, it exerts control over it
          with its OC attribute, <strong>for every model</strong> still alive.
          At the end of the turn, the player with most accumulated control
          (models times their OC) in range of a marker controls that objective.
        </p>

        <blockquote>
          <p>
            9 Intercessors (OC2) compete for an objective with 17 Chaos Cultists
            (OC1). The cultists are more, but each marine has a higher OC. 9 x 2
            &gt; 17 x 1, so the marines control the marker at the end of the
            turn.
          </p>
        </blockquote>

        <p>
          Units with higher OC are more efficient at controlling objectives.
          You'll need fewer models on top of the marker to score points from it.
        </p>
      </section>

      <section>
        <h2 id="weapons">Weapons</h2>

        <p>Weapons have separate profiles from the units that wield them.</p>

        <Image
          src={weapons}
          alt="Datasheet weapon choices example"
          className="picture"
        />

        <p>
          This symbol <span className="pointer" /> indicates that a weapon has
          multiple modes. One must be chosen prior to declaring an attack. If a
          characteristic has a D6 in it, a dice roll is used to determine the
          current value of the activation.
        </p>

        <p>
          Individual models within a unit may carry different arsenals and even
          carry more than one weapon. The default loadouts and additional weapon
          options are listed in the unit composition sections of the datasheet
          (usually at the back).
        </p>

        <Image
          src={loadouts}
          alt="Datasheet loadouts example"
          className="picture"
        />

        <h3 id="range">Range</h3>

        <p>
          Ranged weapons have a maximum range, measured in <em>inches</em>, at
          which their owners can declare attacks. Referring to the{' '}
          <Link href={`${wh40kRoute('The Battle Round')}#shooting-phase`}>
            shooting phase rules
          </Link>{' '}
          a model must be within range and visual contact of the target to be
          able to shoot at it.
        </p>

        <Image src={shooting} alt="Shooting example" />

        <p>
          Longer range signifies priority of engagement. Far-reaching weapons
          get to deal damage first. As a reference only, most <em>pistols</em>{' '}
          have around 12" range, while the average <em>rifle</em> is around 24".
          36" and above is considered long range.
        </p>

        <h3 id="attacks">Attacks (A)</h3>

        <p>
          This shows how many attacks the weapon makes per activation. You roll
          this many dice per weapon per attack. More attacks mean more chances
          to hit and score a wound. Unlike damage, wounds from multiple attacks
          can be allocated to different models.
        </p>

        <Image
          src={attackNumber}
          alt="Example of difference in attacks per activation"
        />

        <p>
          The problem with activations is variance as dice never guarantee the
          outcome. High power single shots can delete a target, but they may
          also do nothing. A higher number of attacks smooths variance. More
          dice means results trend closer to expectation.
        </p>

        <h3 id="ballistic-skill-weapon-skill">
          Ballistic/Weapon Skill (BS/WS)
        </h3>

        <p>
          BS is for ranged weapons, while WS is for melee weapons. They mean the
          same thing: how likely the weapon is to hit its target. The number
          shows what must be the result of the <em>roll to hit</em> check during
          weapon activations, for the target to be hit. A lower number means a
          better chance to hit.
        </p>

        <blockquote>
          A 20-man squad of Cadian Shock Troops fire 18 Lasguns (the two
          sergeants have laspistols) at a squad of Ork Boyz. The Cadians have
          BS4+, so they need to roll 4 or higher on D6 to hit. On average, they
          will hit with 3 out of 5 shots, so around 11 hits.
        </blockquote>

        <h3 id="strength">Strength (S)</h3>

        <p>
          As discussed at length above, Strength is compared to Toughness during
          the <em>roll to wound</em> phase of each weapon activation, to see how
          high the roll must be for the attack to wound.
        </p>

        <h3 id="armor-penetration">Armor Penetration (AP)</h3>

        <p>
          AP negates <em>armor saves</em>, by reducing the result of the
          target's <em>roll to save</em>. It's powerful but capped by two common
          ceilings. AP cannot push past invulnerable saves, and is wasted on
          weak 5+, 6+ saves.
        </p>

        <blockquote>
          <p>
            A meltagun at AP-4 into a 6+ save model wastes most of its AP value.
            You are paying for penetration that the target cannot meaningfully
            benefit from. AP is most efficient when it meaningfully shifts a
            save bracket. For example, pushing a Sv3+ to a 5+.
          </p>
        </blockquote>

        <h3 id="damage">Damage (D)</h3>

        <p>
          Damage is the amount of <em>wounds</em> the weapon takes away for each
          successful activation. Taking exactly as many wounds required to
          finish off a target is ideal. Excess is lost. Therefore, Damage is a
          way to determine what targets are optimal for the given weapon.
        </p>

        <blockquote>
          <p>
            D2 weapons are best against W2 targets. They are overkill against
            single-wound targets, and even if enough attacks activate against W3
            targets, there is a higher chance of excess.
          </p>
        </blockquote>
      </section>

      <section>
        <h2 id="keywords-and-special-rules">Keywords</h2>

        <p>
          Keywords are <em>tags</em> attached to either a datasheet, or a
          weapon. They don't do anything on their own, but{' '}
          <em>handle interactions</em> with other rules. The relationships
          between units, weapons, stratagems, factions and turn phases are
          numerous. So, verifying a rule with a simple keyword simplifies the
          process.
        </p>

        <Image
          src={keywords}
          alt="Example of keywords listed on a datasheet."
        />

        <blockquote>
          <p>
            Certain rules apply only to <em>Infantry</em> units, others only to{' '}
            <em>Vehicles</em>. Models with the <em>Fly</em> keyword can be moved
            over obstacles and other units. Some units with the{' '}
            <em>Imperium</em> keyword can be mixed together in an army, even if
            they belong to different factions.
          </p>
        </blockquote>

        <p>
          A datasheet always has at least one <em>faction</em> keyword, which
          governs army composition, but some may have more.
        </p>
      </section>

      <section>
        <h2 id="weapon-keywords">Common weapon keywords</h2>

        <p>
          Also called <em>Universal Special Rules</em> (USRs), weapon keywords
          are shared between many of WH40K's arm. They work best when layerd
          with other faction or unit abilities that enhance them further or fill
          the gaps. Here is a not-so-small list of the common ones.
        </p>

        <h3 id="assault">Assault</h3>

        <div className="badge">
          <TbArrowBigUpLines /> Mobility
        </div>

        <p>
          The weapon can be fired, even after the wielder has{' '}
          <Link href={`${wh40kRoute('The Battle Round')}#movement-phase`}>
            advanced
          </Link>{' '}
          this turn. Arms without this keywourd cannot be used after advancing.
          Assault weapons naturally fit a more mobile, agressive play.
        </p>

        <Image src={assault} alt="Boltgun vs Bolt rifle with assault keyword" />

        <h3 id="heavy">Heavy</h3>

        <div className="badge">
          {' '}
          <TbArrowBigUpLines /> Mobility
        </div>

        <p>
          Add +1 to hit rolls if the unit remained stationary this turn. This
          rewards the opposite of assault - staying put - with better accuracy.
          The playstyle is to hold a position rather than gaining ground. Long
          range weapons pair nicely with this keyword.
        </p>

        <h3 id="rapid-fire">Rapid Fire X</h3>

        <div className="badge">
          <TbRulerMeasure /> Range
        </div>

        <p>
          If the target is within half of the weapon's maximum range, add +X to
          the attacks. The longer the range of the weapon, the better the
          coverage of the bonus. This supports situations where volume of fire
          is important, e.g. fighting hordes.
        </p>

        <Image src={rapidFire} alt="Ork Loota with a Rapid Fire 1 Deffgun" />

        <h3 id="melta">Melta X</h3>

        <div className="badge">
          <TbRulerMeasure /> Range
        </div>

        <p>
          If the target is within half of the weapon's maximum range, attacks
          deal +X damage on top. Melta weapons, which are high damage to begin
          with, use a dice roll to determine normal damage. This only makes them
          more powerful at close range.
        </p>

        <h3 id="pistol">Pistol</h3>

        <div className="badge">
          <TbRulerMeasure /> Range
        </div>

        <p>
          There are two distinct rules about pistols who start with a short
          range anyway.
        </p>

        <ul>
          <li>
            One can only shoot their pistols or all other weapons during the
            Shooting Phase.
          </li>

          <li>Pistols can be shot even within Engagement range.</li>
        </ul>

        <h3 id="torrent">Torrent</h3>

        <div className="badge">Hit roll</div>

        <p>
          Attacks with such gear automatically hit their target, effectively
          skipping one of the 3 activation gates - the roll to hit. This is
          frequently balanced with rolling a D6 for number of attacks, as is
          visible with the Pyreblaster example. Torrent improves output
          primarily against targets the given weapon already easily wounds.
        </p>

        <Image
          src={torrent}
          alt="Pyreblaster's fire arc with Torrent keyword"
        />

        <h3 id="sustained-hits">Sustained Hits X</h3>

        <div className="flex-center">
          <div className="badge">Hit roll</div>

          <div className="badge">
            <PiDiceSix /> Critical effect
          </div>
        </div>

        <p>A critical hit (roll of 6 to hit) generates X extra hits.</p>

        <p>
          Purely mathematically, BS 4+ with Sustained Hits 1 matches the
          expected hit output of BS3+, without any other modifiers. With
          additional re-rolls and crit bonuses, they can push even beyond BS3+.
          Nonetheless, a better BS is always more consistent, while Sustained
          Hits tend to occasionally spike.
        </p>

        <Image
          src={sustainedHits}
          alt="A Heavy bolter with Sustained Hits 1 scores a 6"
        />

        <p>
          More hits are better against more targets. Again, like with Torrent,
          Sustained Hits is better when you already have a good chance to wound
          - wound on 4+ (equal strength to toughness) or better.
        </p>

        <p>
          Pairs nicely with re-roll to hit abilities, allowing to <em>fish</em>{' '}
          for crits.
        </p>

        <h3 id="lethal-hits">Lethal Hits</h3>

        <div className="flex-center">
          <div className="badge">Hit roll</div>

          <div className="badge">
            <PiDiceSix /> Critical effect
          </div>
        </div>

        <p>
          A critical hit (roll of 6 to hit) automatically wounds, bypassing
          another activation gate. Compared to Sustained Hits this keyword is
          better when wounding is more difficult - 5+ to wound or worse. Lethal
          Hits help with hunting tougher targets.
        </p>

        <p>Again, pairs nicely with re-roll to hit abilities.</p>

        <h3 id="devastating-wounds">Devastating Wounds</h3>

        <div className="flex-center">
          <div className="badge">Wound roll</div>

          <div className="badge">
            <PiDiceSix /> Critical effect
          </div>
        </div>

        <p>
          A critical wound (roll of 6 to wound) deals <em>mortal wounds</em>{' '}
          equal to the weapon’s Damage. Mortal wounds bypass all saving throws,
          including invulnerable, giving better chances to fight target with
          good saves.
        </p>

        <Image
          src={devastatingWounds}
          alt="Eliminator's special rule Mark the Target gives Devastating Wounds"
        />

        <p>Works really well with re-roll to wound abilities.</p>

        <h3 id="anti-keyword">Anti-KEYWORD X+</h3>

        <div className="flex-center">
          <div className="badge">Wound roll</div>

          <div className="badge">
            <PiDiceSix /> Critical effect
          </div>
        </div>

        <p>
          Against a target with the listed keyword, a wound roll of X+ counts as
          a <em>Critical Wound</em>. For example, Anti-Infantry 4+ means that
          when you roll to wound against infantry, rolls of 4 and above are
          crits. This combines exceptionally well with Devastating Wounds,
          melting the target's saves.
        </p>

        <Image src={anti} alt="Grav-gun firing at a vehicle." />

        <h3 id="twin-linked">Twin-linked</h3>

        <div className="badge">Wound roll</div>

        <p>
          Operator can re-roll wound rolls. Works very well in combination with
          Devastating Wounds and allows for{' '}
          <Link href="#crit-fishing">crit fishing</Link>.
        </p>

        <h3 id="blast">Blast</h3>

        <div className="badge">Target interaction</div>

        <p>
          Blast weapons gain +1 attack for every 5 models in the target unit,
          provided <em>no friendly units are within engagement range</em> of the
          target. This is clearly an anti-horde ability. Be mindful of limiting
          allies with blast weapons by charging into hordes.
        </p>

        <h3 id="precision">Precision</h3>

        <div className="badge">Target interaction</div>

        <p>
          The attacker can choose to allocate wounds from a successful attack
          against a unit with an attached character to that character (if
          visible to the shooter). The normal activation rules state that the
          defender allocates ther wounds. Thus attaching a high-value leader to
          a squad (a.k.a. bodyguards) prtotects them from heavy fire. Precision
          weapons negate that.
        </p>

        <Image
          src={precision}
          alt="Bolt sniper rifle hitting precice target."
        />

        <h3 id="hazardous">Hazardous</h3>

        <div className="badge">Operational risk</div>

        <p>
          After attacking, roll a D6 per hazardous weapon used (not per attack).
          Each roll of 1 causes 3 mortal wounds. They are allocated to any model
          from that squad equipped with a hazardous weapon. This is frequently
          used to balance powerful guns.
        </p>
      </section>

      <section>
        <h2 id="abilities">Abilities</h2>

        <p>
          <em>Keywords</em> are labels that describe what a unit is and require
          a rule to interact with them. <em>Abilities</em> (a.k.a. special
          rules) on the other hand, explain what a unit can do in addition to
          the general rules of the player turn. They are usually listed to the
          side of the available loadouts.
        </p>

        <p>
          Some abilities are always active (passive), some are triggered by
          conditions, and some are activated deliberately. Some are core
          abilities, common among many datasheets, dictating how deployment or
          some of the phases differe for the given unit. Faction abilities are
          shared between members of the same faction. Anything listed bellow
          these is specific only to that datasheet.
        </p>

        <blockquote>
          <p>
            <em>Infiltrators</em> is a core deployment ability that allows the
            unit to begin the battle closer to the enemy than normal.
          </p>

          <p>
            <em>Waaagh!</em> is a faction ability, available to all Orks, that
            buffs their melee weapons and allows them to charge even after
            advancing.
          </p>

          <p>
            <em>Implacable Eradication</em> is unique to{' '}
            <em>Necrons Immortals</em>, allowing them to re-roll certain wound
            rolls under certain conditions.
          </p>
        </blockquote>
      </section>

      <section>
        <h2 id="re-rolls" className="flex-center">
          Re-rolls <LuDices />
        </h2>

        <p>
          To re-roll a check means to pick up the required number of dice and
          roll them again, potentially improving the outcome. This happens
          strictly once per check. If the check said roll 2D6 (e.g. charge
          roll), you re-roll 2 dice once.
        </p>

        <p>
          But if you are rolling many dice for the attack sequence of a whole
          squad, you can choose which of them to re-roll as they are separate
          checks. You can leave the good rolls and re-roll only the bad ones,
          but only once.
        </p>

        <p>
          Both keywords and abilities use re-rolls as a way to buff the units or
          weapon in some situations. Re-rolls are{' '}
          <em>better when the base chance to succeed is better</em>. Rolling
          again on a poor characteristic has disappointing results more often
          than not.
        </p>

        <h3 id="crit-fishing">Crit fishing</h3>

        <p>
          Re-rolls integrate marvelously with keywords and abilities that
          benefit from critical rolls (roll of 6): Sustained Hits, Lethal Hits,
          Devastating Wounds or Anti-KEYWORD. One can re-roll even successful
          rolls in an attempt to get a 6. This is called <em>crit fishing</em>{' '}
          and can be stacked from separate activation gates (to hit, to wound)
          to create powerful spikes.
        </p>
      </section>
    </>
  )
}
