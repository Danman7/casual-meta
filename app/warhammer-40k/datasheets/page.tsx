import Image from 'next/image'
import Link from 'next/link'

import datasheet from '@/app/assets/wh40k/datasheet.webp'
import movediff from '@/app/assets/wh40k/move_diff.webp'
import wound from '@/app/assets/wh40k/wound.webp'
import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
import { DiceRoll } from '@/app/ui/DiceRoll'
import { Table } from '@/app/ui/Table'
import { woundRollColumns, woundRollRows } from '@/app/warhammer-40k/constants'
import { generatePageMetadata } from '@/lib/metadata'
import { createRouteLookup } from '@/lib/routeLinks'

export const navOrder = 3

export const navTitle = 'Datasheets'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${navTitle}`,
  'How to read datasheets in Warhammer 40k, including unit profiles and weapon stats.',
)

const wh40kRoute = createRouteLookup(WH40K_BASE_URL)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>
      <section>
        <p>
          A unit's datasheet is a card that describes its profile and lists
          available loadouts, special rules, and access to support through
          keywords. Every unit has a datasheet. All characteristics deal in
          probability. Better stats mean better consistency, not certainty.
        </p>

        <Image src={datasheet} alt="Space Marine Terminators Datasheet" />
      </section>

      <section>
        <h2 id="unit-profiles">Profile</h2>
        <p>
          The datasheet's name stands at the top. It's immediately followed by
          six numbers forming the unit's profile. These characteristics give
          insight into how likely the unit is to perform in different scenarios.
        </p>

        <h3 id="movement">Move (M")</h3>
        <small>Higher is better.</small>
        <p>
          Move is{' '}
          <strong>
            the maximum amount of inches the unit can move, advance or fall back
            in a single turn, without modifiers.
          </strong>{' '}
          A higher number means more options to reposition, following the rules
          of the{' '}
          <Link href={`${wh40kRoute('The Battle Round')}#movement-phase`}>
            movement phase
          </Link>
          . Larger models pay additionally for pivoting to change direction
          during a move. M" can never be zero.
        </p>
        <Image
          src={movediff}
          alt="Movement difference between an Assault Intercessor and one with a jump pack."
        />
        <p>
          Most infantry has M6" +/- 1. Assault troops and skirmish vehicles are
          usually around M12", while flyers are around M20".
        </p>
        <h3 id="toughness">Toughness (T)</h3>
        <p>Higher is better.</p>
        <p>
          1. Roll to hit &rarr; <strong>2. Roll to wound</strong> &rarr; 3. Roll
          to save &rarr; 4. Deal damage
        </p>
        <p>
          When any{' '}
          <Link href={`${wh40kRoute('The Battle Round')}#making-attacks`}>
            attack is made
          </Link>{' '}
          against the model, and the attack has scored a hit, the{' '}
          <strong>
            weapon's Strength is compared to the target's Toughness to see if it
            wounds
          </strong>
          .
        </p>
        <Table columns={woundRollColumns} data={woundRollRows} />
        <p>
          The{' '}
          <strong>
            tougher a model is, the stronger the weapon must be to be more
            likely to score a wound
          </strong>
          . Weapons with equal Strength to the target's Toughness have a 50%
          chance to wound. Weapons that have higher Strength than the target's
          Toughness are considered effective at 2/3 chance to wound. Weapons
          with less Strength tend to have a hard time making a dent.
        </p>
        <Image src={wound} alt="Wound roll probabilities" />
        <div className="box example">
          <p>
            A Toughness of 4 (T4) means that a weapon with Strength 4 (S4) has a
            50% chance to wound, a weapon with Strength 5 (S5) has a 2/3 chance
            to wound, while a weapon with Strength 3 (S3) has only a 1/3 chance
            to wound.
          </p>
        </div>
        <h3 id="save">Saves (Sv) (Sv++)</h3>
        <p>Lower is better.</p>
        <p>
          1. Roll to hit &rarr; 2. Roll to wound &rarr;{' '}
          <strong>3. Roll to save</strong> &rarr; 4. Deal damage
        </p>
        <p>
          After an attack has hit and has wounded, a <strong>Save</strong> or{' '}
          <em>Armor Save</em> check is made to see if the target's armor can
          avert the damage.
        </p>
        <DiceRoll
          dice="D6"
          title="Save roll"
          effect={
            <>
              <strong>Substract the weapon's AP from the roll</strong>. If the
              result is still more than the target's Save, the attack fails.
            </>
          }
        />
        <div className="box example">
          <p>
            The owner of a targeted unit with Sv4+ makes one saving roll per
            affected model in that unit. The attacking weapon has AP-1, so all
            results are modified by -1. Thus, all rolls of 4 or less are
            modified to 3 or less and fail. Rolls of 5 or 6 still succeed, and
            no damage is allocated for them.
          </p>
        </div>
        <p>
          Some units have an additional{' '}
          <strong>Invulnerable Save (Sv++)</strong> which is{' '}
          <strong>not affected by Armor Penetration (AP)</strong>. The defender
          can choose to use it instead of the regular Save, but they{' '}
          <strong>can't use both saves</strong>. Invulnerable saves come in
          handy against attacks with high AP.
        </p>
        <p>
          When the unit has an Invulnerable Save it will be marked like
          SvN+/N++. For example, Sv4+/6++ means the unit has a regular Save of
          4+ and an Invulnerable Save of 6++.
        </p>
        <h3 id="wounds">Wounds (W)</h3>
        <p>Higher is better.</p>
        <p>
          1. Roll to hit &rarr; 2. Roll to wound &rarr; 3. Roll to save &rarr;{' '}
          <strong>4. Deal damage</strong>
        </p>
        <p>
          Wounds are the{' '}
          <strong>
            amount of damage a model can take before being removed from play
          </strong>
          . When a weapon has successfully hit, wounded, and penetrated the
          target's armor, you substract its Damage characteristic from the
          target's Wounds. If the target has no Wounds left, it's removed from
          play.
        </p>
        <h3 id="leadership">Leadership (Ld)</h3>
        <p>Lower is better.</p>
        <p>
          Leadership only comes into play for{' '}
          <Link href={`${wh40kRoute('The Battle Round')}#battle-shock-tests`}>
            battle-shock tests
          </Link>{' '}
          during the Command Phase. If a unit is below half strength during that
          phase, it must roll (2D6) and score equal or higher than its Ld stat.
          Otherwise it{' '}
          <strong>
            loses the ability to exert control over objectives or receive
            support from stratagems
          </strong>
          .
        </p>
        <p>
          Lower Ld means <strong>lower chance for the unit to panic</strong> and
          become battle-shocked. It can never be 4+ (or better), or 9+ (or
          worse). This means it can only go between Ld5+ (83% chance to succeed)
          and Ld8+ (42% chance to succeed).
        </p>
        <h3 id="objective-control">Objective Control (OC)</h3>
        <p>Higher is better.</p>
        <p>
          When a model comes within 3" horizontally and 5" vertically of that
          objective marker, it exerts control over it with its OC attribute. To
          measure your control of an objective, multiply all models within
          contact by their OC. At the end of the turn,{' '}
          <strong>
            the player with more accumulated OC controls that objective
          </strong>
          .
        </p>
        <p>
          <strong>
            Higher OC means the unit is more efficient at controlling
            objectives.
          </strong>{' '}
          You need less models on top of the marker to score points from it.
        </p>
        <p>Most units have either OC1 or OC2.</p>
      </section>

      <section>
        <h2 id="keywords-and-special-rules">Keywords and Special Rules</h2>
        <p>
          <strong>Keywords handle interactions.</strong> For example, some
          abilities and weapons can target only units that have the{' '}
          <em>Infantry</em> keyword. Some stratagems may be used only by units
          with the <em>Grenade</em> keyword. Units from different factions with
          the <em>Imperium</em> keyword can be mixed in the same army list. The
          relationships are numerous and keywords simplify this.
        </p>

        <p>
          <strong>
            Special rules handle abilities unique for the given unit.
          </strong>{' '}
          For example, <em>Implacable Eradication</em> allows{' '}
          <em>Necrons Immortals</em>, and only them, to re-roll certain wound
          rolls under certain conditions. Many of the
        </p>
      </section>

      <section>
        <h2 id="weapon-profiles">Weapon Profiles</h2>

        <p>
          Every unit has several weapons available. Who and when can equip them
          depends on what's written on the datasheet. All weapons, however, have
          six attributes of their own, different from the unit profile. Think of
          it as "what weapon is good against which profile."
        </p>

        <h3 id="range">Range</h3>

        <p>Higher is better.</p>

        <p>
          Range is the <strong>reach of the weapon in inches</strong>. It's
          written as numbers like 12", 18", etc. As per{' '}
          <Link href={`${wh40kRoute('The Battle Round')}#shooting-phase`}>
            shooting phase rules
          </Link>
          , a unit must be able to{' '}
          <strong>see and reach the target to shoot at it</strong>. It's
          possible that only a portion of the given unit are within range of the
          target. Then only those models shoot.
        </p>

        <ul>
          <li>
            Most <strong>pistols</strong> have a range of 12".
          </li>

          <li>
            Most <strong>rifles</strong> have a range of 24".
          </li>

          <li>
            Most <strong>long range</strong> weapons have a range of 36".
          </li>
        </ul>

        <p>
          Hand-to-hand weapons have Melee written as range in their profiles.
          These fight according to the{' '}
          <Link href={`${wh40kRoute('The Battle Round')}#fight-phase`}>
            fight phase rules
          </Link>
          .
        </p>

        <h3 id="attacks">Attacks (A)</h3>

        <p>Higher is better.</p>

        <p>
          This attribute tells you <strong>how many attacks</strong> this weapon
          makes (be it ranged or melee) every time it's used.{' '}
          <strong>
            More attacks mean more chances to score a wound and deal damage on a
            larger amount of viable targets.
          </strong>
        </p>

        <p>
          Attacks <strong>can be split between multiple models</strong> from a
          targeted unit. So more attacks are better against hordes.
        </p>

        <p>
          The problem is variance. With only one attack, a failed hit, failed
          wound, or successful invulnerable save can waste the entire
          activation. Dice never guarantee outcomes, but averages are more
          difficult to achieve in small samples. A higher number of attacks
          smooths variance. More dice means results trend closer to statistical
          expectation. It also increases flexibility across target types.
        </p>

        <p>
          For some weapons, the number of attacks is determined by a dice roll
          (e.g. 2D6).
        </p>

        <h3 id="ballistic-skill-weapon-skill">
          Ballistic/Weapon Skill (BS/WS)
        </h3>

        <p>Lower is better.</p>

        <p>
          BS is used for ranged attacks, while WS is used for melee attacks. A{' '}
          <strong>
            lower number indicates a higher chance to hit the target
          </strong>{' '}
          with each attack. This is a single check gate, unaffected by the
          profile of the target.
        </p>

        <p>
          <strong>1. Roll to hit</strong> &rarr; 2. Roll to wound &rarr; 3. Roll
          to save &rarr; 4. Deal damage
        </p>

        <div className="box example">
          A 20-man squad of Cadian Shock Troops fire 18 Lasguns (the two
          sergeants have laspistols) at a squad of Ork Boyz. The Cadians have
          BS4+, so they need to roll 4 or higher on D6 to hit. On average, they
          will hit with 3 out of 5 shots, so around 11 hits.
        </div>

        <h3 id="strength">Strength (S)</h3>

        <p>Higher is better.</p>

        <p>
          As discussed at length above,{' '}
          <strong>
            strength determines how effective a weapon is at wounding a target
          </strong>{' '}
          with each attack. A weapon with higher Strength than the target's
          Toughness is more likely to wound.
        </p>

        <h3 id="armor-penetration">Armor Penetration (AP)</h3>

        <p>Lower (negative) is better up to a point.</p>

        <p>
          The AP of a weapon is subtracted from the target's armor save roll
          (only regular saves). A weapon with{' '}
          <strong>
            higher AP (lower negative) is more likely to penetrate armor and
            deal damage
          </strong>
          .
        </p>

        <p>
          Armor Penetration is powerful but capped in value. There are two
          common ceilings:
        </p>

        <ul>
          <li>
            <strong>Invulnerable saves</strong>: AP cannot push past them.
          </li>
          <li>
            <strong>Low base saves</strong>: Excess AP is wasted.
          </li>
        </ul>

        <div className="box example">
          <p>
            A meltagun at AP-4 into a 6+ save model wastes most of its AP value.
            You are paying for penetration that the target cannot meaningfully
            benefit from. AP is most efficient when it meaningfully shifts a
            save bracket. For example, pushing a Sv3+ to a 5+.
          </p>
        </div>

        <h3 id="damage">Damage (D)</h3>

        <p>Higher is better up to a point.</p>

        <p>
          Damage indicates <strong>how many Wounds</strong> the target subtracts
          on a successful activation (after everything else has failed). If the
          target has Wounds left after the attack, it's still in the fight. But
          if the attack has more Damage than necessary, the excess is wasted.
        </p>

        <p>
          Damage is different from Attacks. More attacks mean more chances or a
          larger number of targets affected. Damage is most effective when it's
          exact.
        </p>

        <div className="box example">
          <p>
            D2 weapons are best against W2 targets. They are overkill against
            single-wound targets, and even if enough attacks activate against W3
            targets, there is a higher chance of excess.
          </p>
        </div>
      </section>

      <section>
        <h2 id="weapon-abilities">Common weapon abilities</h2>

        <p>
          Next to the names of some weapons on a datasheet you may see keywords
          with no description like "Assault" or "Blast". These are common
          abilities or <em>Universal Special Rules</em> (USRs) that are shared
          between many weapons.
        </p>

        <p>
          These always apply only to models that have equipped the given weapon
          with the specific keyword.
        </p>

        <h3 id="movement-based">Movement based</h3>

        <ul>
          <li>
            <strong>Assault</strong>: Can be fired even after Advancing.
          </li>

          <li>
            <strong>Heavy</strong>: If the unit didn't move during Movement
            Phase, add +1 to Hit.
          </li>
        </ul>

        <h3 id="range-based">Range based</h3>

        <ul>
          <li>
            <strong>Rapid Fire X</strong>: If the target is within half range,
            add +X attacks.
          </li>

          <li>
            <strong>Melta X</strong>: If the target is within half range, add +X
            damage.
          </li>

          <li>
            <strong>Pistol</strong>: Can be fired even in Engagement range.
          </li>
        </ul>

        <h3 id="hit-roll-effects">Hit Roll Effects</h3>

        <ul>
          <li>
            <strong>Torrent</strong>: Attacks automatically hit.
          </li>

          <li>
            <strong>Sustained Hits X</strong>: Critical Hit (roll of 6)
            generates X extra hits.
          </li>

          <li>
            <strong>Lethal Hits</strong>: Critical Hit automatically wounds.
          </li>
        </ul>

        <h3 id="wound-roll-effects">Wound Roll Effects</h3>

        <ul>
          <li>
            <strong>Devastating Wounds</strong>: Critical Wounds deal mortal
            wounds equal to the weapon’s damage. No saves allowed.
          </li>

          <li>
            <strong>Twin-linked</strong>: Re-roll wound rolls.
          </li>

          <li>
            <strong>Anti-KEYWORD X+</strong>: When rolling to wound against a
            unit that has that keyword in their datasheet, rolls of X+ become
            critical Wounds.
          </li>
        </ul>

        <h3 id="attack-generation">Attack Generation</h3>

        <ul>
          <li>
            <strong>Blast</strong>: +1 attack per 5 models in target unit.
            Cannot target units in Engagement Range.
          </li>

          <li>
            <strong>Extra Attacks</strong>: Allows attacking with this weapon in
            addition to the main melee weapon during Fight Phase.
          </li>
        </ul>

        <h3 id="others">Others</h3>

        <ul>
          <li>
            <strong>Precision</strong>: When attacking an Attached unit, you may
            allocate the wound to a visible character. Normally this is done by
            the defening player.
          </li>

          <li>
            <strong>Hazardous</strong>: After attacking, roll 1D6 per Hazardous
            weapon used. On 1 deal 3 mortal wounds to the bearer.
          </li>
        </ul>
      </section>

      <section>
        <h2 id="tactical-overview">Tactical overview</h2>

        <p>
          After knowing how the{' '}
          <Link href={wh40kRoute('The Battle Round')}>Battle Round</Link> works,
          combining it with the profiles can give you a bigger picture of the
          game flow. Even with changes between editions, some core mechanics
          remain.
        </p>

        <h3 id="attack-sequence">The attack sequence</h3>

        <p>
          Warhammer 40,000 is built on <strong>layered dice rolls</strong>. Even
          before positioning and range, a standard attack must pass through at
          least a{' '}
          <strong>
            Hit, Wound and Save roll. Each step can cause the attack to fail.
          </strong>
        </p>

        <p>Some abilities bypass parts of the sequence:</p>

        <ul>
          <li>Torrent skips the hit roll.</li>

          <li>Lethal Hits can bypass the wound roll on critical hits.</li>

          <li>High AP can effectively bypass armor saves.</li>
        </ul>

        <p>
          Even so, nothing is guaranteed. An attack hitting on 2+, wounding on
          2+, with no save allowed, still only succeeds about two-thirds of the
          time. That is reliable, but not certain. In competitive play,
          consistent output is often more valuable than theoretical maximum
          damage. That is why, as discussed, more dice throws even out the
          variances.
        </p>

        <h3 id="sustained-vs-lethal">Sustained Hits vs. Lethal Hits</h3>

        <ul>
          <li>
            <strong>Sustained Hits</strong> increases total hits. It is
            strongest when you are already wounding efficiently (4+ or better)
            and against multi-model units.
          </li>

          <li>
            <strong>Lethal Hits</strong> bypasses the wound roll on critical
            hits. It is stronger when wounding is difficult (5+ or worse).
          </li>
        </ul>

        <h3 id="rerolls-and-criticals">Rerolls and criticals</h3>

        <p>
          <strong>
            Re-rolls are stronger when the starting value is better.
          </strong>{' '}
          Re-rolling a 3+ is more valuable than re-rolling a 5+, because more of
          your initial results are already successes. That also means re-rolls
          scale extremely well when layered onto already efficient profiles.
        </p>

        <p>
          Re-rolls{' '}
          <strong>
            gain additional value when paired with critical-triggered abilities
          </strong>{' '}
          (roll of 6) like Sustained Hits X, Lethal Hits, and Devastating
          Wounds.
        </p>

        <p>
          Re-rolling to hit increases the number of critical hits you generate.
          One can try to re-roll even successful non-critical hits to convert
          them into criticals ones. This is referred to as "fishing".
        </p>

        <p>
          Re-rolling wound rolls increases the chance to trigger Devastating
          Wound, making combinations like Devastating Wounds, Twin-linke rare
          but extremely powerful.
        </p>
      </section>
    </>
  )
}
