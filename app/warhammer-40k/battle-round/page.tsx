import Image from 'next/image'
import Link from 'next/link'
import { FaCrosshairs } from 'react-icons/fa'
import { IoDiceOutline } from 'react-icons/io5'
import { LuCrown } from 'react-icons/lu'
import { RiInformation2Line, RiSwordLine } from 'react-icons/ri'
import { RxDoubleArrowUp } from 'react-icons/rx'
import { TbArrowBigUpLines } from 'react-icons/tb'

import attack from '@/app/assets/wh40k/attack.webp'
import movement from '@/app/assets/wh40k/move.webp'
import pivot from '@/app/assets/wh40k/pivot.webp'
import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
import { DiceRoll } from '@/app/ui/DiceRoll'
import { Table } from '@/app/ui/Table'
import { woundRollColumns, woundRollRows } from '@/app/warhammer-40k/constants'
import { generatePageMetadata } from '@/lib/metadata'
import { createRouteLookup } from '@/lib/routeLinks'

export const navOrder = 3

export const navTitle = 'The Battle Round'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${navTitle}`,
  'Understand the sequence of turns in Warhammer 40k.',
)

const wh40kRoute = createRouteLookup(WH40K_BASE_URL)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

      <section className="md:flex gap-4 items-start *:md:w-1/2">
        <section>
          <p>
            All formats of WH40K are played in a series of rounds. The round is
            a cycle of player turns. All players (usually two) take a turn to
            complete a round. A turn is a sequence of actions grouped in phases.
            A phase dictates what actions can be executed and in what
            arrangement.
          </p>

          <p>
            On your turn, you go through each phase in order. Once you complete
            all, the turn passes to the next player. When all players have had a
            turn, the round ends. Many formats end after a set number of rounds
            (usually 5).
          </p>
        </section>

        <div className="box flex flex-col">
          <p className="lead flex-center">
            <RiInformation2Line /> The player turn sequence
          </p>

          <div className="flex flex-col">
            <div className="flex-center">
              1. Command Phase <LuCrown />
            </div>
            <small>Gain Command Points and check Leadership</small>
          </div>

          <div className="flex flex-col">
            <div className="flex-center">
              2. Movement Phase <TbArrowBigUpLines />
            </div>
            <small>Reposition</small>
          </div>

          <div className="flex flex-col">
            <div className="flex-center">
              3. Shooting Phase <FaCrosshairs />
            </div>
            <small>Resolve ranged attacks</small>
          </div>

          <div className="flex flex-col">
            <div className="flex-center">
              4. Charge Phase <RxDoubleArrowUp />
            </div>
            <small>Declare charges and move into melee</small>
          </div>

          <div className="flex flex-col">
            <div className="flex-center">
              5. Fight Phase <RiSwordLine />
            </div>
            <small>Resolve melee attacks</small>
          </div>
        </div>
      </section>

      <section>
        <h2 id="command-phase">1. Command Phase</h2>

        <ol>
          <li>
            Before everything else,{' '}
            <strong>all players gain 1 command point (CP).</strong> CPs are a
            resource spent to activate <em>Stratagems</em>.
          </li>

          <li>
            After that resolve any rules that occur in the Command Phase (the
            rule will state so).
          </li>

          <li>
            Finally, the active player takes <em>Battle-shock</em> tests if any
            are required.
          </li>
        </ol>

        <h3 id="battle-shock-tests">Battle-shock tests</h3>

        <p>
          At the very end of your Command Phase, check whether you have units
          that are below half of their <em>starting</em> strength.
        </p>

        <div className="box">
          <p className="lead flex-center">
            <RiInformation2Line /> Below Half-strength
          </p>

          <p>A unit is below half-strength if:</p>

          <ul>
            <li>
              It started as a <strong>single model</strong> (e.g. a character,
              monster, or vehicle) and it has less than half its wounds left.
            </li>

            <li>
              Started as a <strong>multi-model</strong> unit (e.g. a squad), and
              it has fewer than half of its models left.
            </li>
          </ul>

          <p>
            If a leader is attached to a squad, it counts as a single unit, and
            you check against the total amount of starting models.
          </p>
        </div>

        <blockquote>
          <p>
            If a 5-man squad of Intercessors is down to 2 models, they must take
            a battle-shock test as they are 2/5. However, if the same squad had
            a Chaplain attached, they would not be required to take a test as
            they are 3/6.
          </p>
        </blockquote>

        <p>
          If you have units bellow half-strength, every such unit must take a
          battle-shock test.
        </p>

        <div className="box">
          <p className="lead flex-center">
            <IoDiceOutline /> Battle-shock test
          </p>

          <p>
            <strong>Roll 2D6.</strong> If the result is higher than the unit's{' '}
            <strong>highest Leadership (Ld)</strong> attribute, the test passes.
            But, if it's lower, the test fails.
          </p>
        </div>

        <blockquote>
          <p>
            A squad of Intercessors takes a battle-shock test and scores a 5.
            Since they have Ld6+, they fail and are shocked. Yet, with a
            Chaplain attached if they score a 5, they will pass, because the
            Chaplain has Ld5+.
          </p>
        </blockquote>

        <p>
          If a unit fails the test it's Battle-shocked until the start of your
          next Command Phase:
        </p>

        <ul>
          <li>Its Objective Control (OC) becomes 0.</li>

          <li>It cannot be affected by Stratagems.</li>
        </ul>

        <p>
          Battle-shock is a mechanic that shuts down scoring and support
          efficiency. In a situation where one player has locked down all
          objectives, their opponent still has a chance if they bring down
          enough models.
        </p>
      </section>

      <section>
        <h2 id="movement-phase">2. Movement phase</h2>

        <p>
          All active player's units that wish to reposition and are{' '}
          <strong>outside engagement range</strong> (1" of an enemy) can do so
          one at a time. If the owner declares that a unit will move it can
          either:
        </p>

        <ul>
          <li>
            Move normally up to its Movement (M") characteristic in inches.
          </li>

          <li>
            Make an <em>advance</em>, moving further, giving up the ability to
            shoot during the Shooting Phase with all weapons that don't have the{' '}
            <em>Assault</em> keyword.
          </li>
        </ul>

        <div className="box">
          <p className="lead flex-center">
            <IoDiceOutline /> Advance
          </p>

          <p>
            <strong>Roll a D6.</strong> Add the result as inches to the unit's
            M" and move up to that distance.
          </p>
        </div>

        <Image src={movement} alt="Movement example" />

        <p>
          No unit can move through enemies or stop within engagement range of an
          enemy. Under core rules, models also cannot end a move on top of an
          objective. Even so, tournaments standardize them as{' '}
          <em>40mm circular markers</em> and allow finishing a move on top.
        </p>

        <p>
          A unit may also skip movement, even if eligible to move, and{' '}
          <em>remain stationary</em>. Some weapon keywords and special rules
          generate benefits for units that didn't move.
        </p>

        <p>
          Units that are already engaged can only stay put, or{' '}
          <em>fall back</em>.
        </p>

        <h3 id="fall-back">Fall Back</h3>

        <p>
          A fall back is an optional move available to units engaged in close
          combat that want to get out. Any such unit can fall back during the
          Movement Phase, making a normal move away from the enemy. Units that
          fell back:
        </p>

        <ul>
          <li>Cannot shoot or declare a charge the same turn.</li>
          <li>Cannot end the move within engagement range of a foe.</li>
        </ul>

        <p>
          Unlike normal moves and advances, falling back allow passing through
          enemies, but the unit must take a <em>Desperate Escape</em> test.
          Units that are falling back and are also battle-shocked always take
          the test.
        </p>

        <div className="box">
          <p className="lead flex-center">
            <IoDiceOutline /> Desperate Escape test
          </p>

          <p>
            <strong>Roll a D6.</strong> On a 2 or less, the model is destroyed.
          </p>
        </div>

        <h3 id="pivoting">Pivoting</h3>

        <p>
          Units don't need to move only in straight lines. They can freely pivot
          and change direction as long as the move is within their M". However,{' '}
          <strong>
            Vehicles and Monsters without round bases or the <em>Fly</em>{' '}
            keyword, must reduce their move by 2" every time they pivot
          </strong>
          . This prevents gaining extra distance through rotation tricks.
        </p>

        <Image src={pivot} alt="Pivoting example" />

        <h3 id="transports">Transports</h3>

        <p>
          Some units, like the Rhino above, allow other units to{' '}
          <strong>embark</strong> on them{' '}
          <strong>if every model ends a move wholly within 3" of them</strong>.
          Then the embarked unit can benefit from the transport's higher
          mobility, durability or both.
        </p>

        <p>
          In the particular case of the Rhino, that unit is a{' '}
          <strong>dedicated transport</strong>. This means that it cannot be
          deployed on the battlefield empty. There must be at least one unit
          embarked on a dedicated transport at the start of the battle.
        </p>

        <ul>
          <li>
            If the embarked unit disembarks before the transport has moved that
            turn, they can also move.
          </li>

          <li>
            If they disembark after the transport has already moved for the
            turn, they cannot move further.
          </li>
        </ul>

        <DiceRoll
          title="If the transport is destroyed"
          dice="D6"
          effect="On a 1, the model suffers a mortal wound. Then the survivors
          disembark and become Battle-shocked and cannot charge that turn."
        />

        <h3 id="strategic-reserves">Strategic Reserves</h3>

        <p>
          Both players may choose{' '}
          <strong>not to deploy some of their units</strong> at the beginning of
          the battle. These go into Strategic Reserves and{' '}
          <strong>cannot exceed 25% of the total army points</strong>. Reserved
          units may{' '}
          <strong>
            join the battle, only at the very end of the movement phase
          </strong>
          , after all other units have moved or stayed put, following these
          rules:
        </p>

        <ul>
          <li>All units must deploy more than 9" from enemy units.</li>

          <li>
            Round 2: Within 6" of a table edge, not in enemy deployment zone.
          </li>

          <li>Round 3+: Within 6" of any table edge.</li>
        </ul>

        <p>
          Reserve play is about timing and pressure. Late arrivals can threaten
          flanks or objectives but must respect screening and positioning.
        </p>
      </section>

      <section title="Making attacks" id="making-attacks">
        <p>
          Two of the three remaining phases involve making attacks - either
          ranged or melee. They follow the same sequence of steps:
        </p>
        <ol>
          <li>
            <strong>Roll to hit</strong>.
          </li>
          <li>
            <strong>Roll to wound</strong>.
          </li>
          <li>Allocate wounds.</li>
          <li>
            <strong>Roll to save</strong> - either armor or invulnerable.
          </li>
          <li>Inflict damage.</li>
        </ol>

        <DiceRoll
          title="Roll to hit"
          dice="D6"
          effect={
            <>
              If result is greater than the Ballistic Skill (BS) for ranged
              weapons or Weapon Skill (WS) for melee, the attack connects. An
              unmodified roll of 6 is a <strong>critical hit</strong>.
            </>
          }
        />

        <DiceRoll
          title="Roll to wound (only if the attack hits)"
          dice="D6"
          effect={
            <>
              The result follows a table based on how much higher or lower the
              weapon's Strength (S) is compared to the target's Toughness (T).
              An unmodified roll of 6 is a <strong>critical wound</strong>.
            </>
          }
        />

        <Table columns={woundRollColumns} data={woundRollRows} />

        <p>
          Only after the attack hits and wounds can the{' '}
          <strong>defender allocate wounds</strong> (unless the weapon has
          Precision). They decide which models take the hits. Models which
          already lost wounds or had attacks allocated this phase must be
          selected first. After wounds are allocated, the defender can make
          saving throws:{' '}
          <strong>either armor saves or invulnerable saves</strong> if the
          target has them.
        </p>

        <p>
          <strong>
            The owner of the target, not the attacker, allocates which models
            take the wounds.
          </strong>
        </p>

        <DiceRoll
          title="Roll to save"
          dice="D6"
          effect="Modify the roll by the Armor Penetration (AP) of the weapon. If the result is equal or greater to the target's Save (Sv) damage is not inflicted."
        />

        <DiceRoll
          title="Roll for an invulnerable save if the target has one and chooses not to use an armor save"
          dice="D6"
          effect="If the result is equal or greater to the target's Invulnerable Save (Sv) damage is not inflicted. Invulnerable saves are not affected by the weapon's AP."
        />

        <Image src={attack} alt="Attack sequence example" className="my-6" />

        <p>
          After all 3 rolls are done, if the attack hits, wounds, and the armor
          save fails, damage is inflicted. The target loses{' '}
          <strong>wounds equal to the Damage (D) of the weapon</strong>. If the
          attack has more D than is required to kill the target model, the
          excess is lost. An unmodified{' '}
          <strong>roll of 1, for any of the 3 rolls, is always a fail</strong>.
          This <strong>whole sequence</strong> for a given weapon is often
          called <strong>an activation</strong>. The more attacks a weapon
          makes, the more activations it has, thus a better chance to score a
          wound.
        </p>

        <div className="box example">
          <p>
            Heavy Intercessors fire 5 heavy bolt rifles at a squad of Ork Boyz
            after moving. That rifle has two Attacks (A2) and BS3+, so the
            attacker throws 10D6 to hit. 7 of them score a 3 or higher.
          </p>

          <p>
            Now the attacker rolls to wound. The heavy rifle has S5 while the
            Boyz have T5 so a roll of 4+ wounds. The attacker rolls 7D6 because
            7 attacks hit. 4 of those rolls score a wound.
          </p>

          <p>
            It's time for the defender to select which Boyz take the wounds. He
            skips the Nob (the leader) and allocates 4 wounds to the others.
            They then make a saving throw. Boyz have Sv5+. Out of the 4 saving
            rolls, 2 score 5 or higher.
          </p>

          <p>
            In the end two attacks inflict damage. Since the heavy rifle has D2
            and the Ork Boy has W1, two Boyz are removed from battle and the
            excess damage is lost.
          </p>
        </div>
      </section>

      <section title="3. Shooting phase" id="shooting-phase">
        <p>
          After all your units are done with repositioning, it's time to resolve
          ranged attacks. Go through each unit that:
        </p>

        <ul>
          <li>Is not engaged in close combat.</li>
          <li>Has at least one ranged weapon within range of an enemy.</li>
          <li>Has line of sight to the target enemy unit.</li>
        </ul>

        <p>
          For any unit that meets those criteria, you can declare ranged
          attacks.
        </p>

        <ul>
          <li>Declare which weapon fires at which target.</li>
          <li>You may split fire by weapon, but not split individual shots.</li>
          <li>Units that are out of range don't shoot.</li>
          <li>
            But the entire targeted unit counts as within range, so wounds can
            be allocated to any model.
          </li>
          <li>
            A model can only fire either all <em>Pistols</em> or everything
            else. Not both.
          </li>

          <li>
            All attacks from the unit resolve simultaneously, based on board
            state at declaration. Once declared to shoot,{' '}
            <strong>all weapons must fire</strong>.
          </li>
        </ul>

        <p>
          Some terrain features provide <strong>Benefit of Cover</strong> to
          targets against ranged attacks. If this is true for the defending
          unit, it gains <strong>+1 to armor saves</strong>, unless it has Sv3+
          or better and the weapon has AP0. Multiple instances of cover are not
          cumulative.
        </p>

        <p>
          All attacks are{' '}
          <strong>resolved according to the "Making attacks"</strong> section
          above. Go through all shooting units, remove casualties from play, and
          move on to the next phase.
        </p>

        <p>
          To make an educated decision on what to shoot with what you'll need to
          have a decent understanding of{' '}
          <Link href={wh40kRoute('Datasheets')}>Datasheets</Link>. But as a rule
          of thumb:
        </p>

        <ul>
          <li>
            Prioritize high-value enemies - units that can make an impact on the
            following turn.
          </li>

          <li>
            Shoot with units that have fewer target options first to avoid
            wasting attacks.
          </li>

          <li>Focus fire with the aim to destroy outright, not just weaken.</li>

          <li>
            Against Infantry, resolve Blast weapons first for bonus attacks.
          </li>

          <li>
            Use weapons against optimal targets as much as possible. Don't waste
            Damage or AP.
          </li>
        </ul>
      </section>

      <section title="4. Charge phase" id="charge-phase">
        <p>
          The Charge phase is where any of your units that are{' '}
          <strong>within 12" of an enemy and didn't advance this turn</strong>{' '}
          may declare a charge move into that enemy. If you wish for a unit to
          charge, you do a charge roll.
        </p>

        <DiceRoll
          title="Charge roll"
          dice='2D6"'
          effect='If the total is
          enough to move within 1" (Engagement range) of the target, the charge succeeds and the unit may move into position. If it fails, the unit stays put.'
        />

        <p>
          On success, that unit may move and engage the enemy in close combat. A
          unit may charge multiple targets, but you must engage every declared
          target for the charge to succeed.
        </p>

        <p>
          Units that are better at melee, naturally want to engage the enemy
          earlier. It's often better to skip advancing, which might gain up to
          6", and do a regular move + charge, which might gain up to 12". Watch
          your positioning. You may find your forward troops bottlenecking
          follow-up charges.
        </p>
      </section>

      <section title="5. Fight phase" id="fight-phase">
        <p>
          At the very end of your turn, you resolve hand-to-hand attacks. All
          units that either{' '}
          <strong>made a charge this turn, or are already engaged</strong>{' '}
          fight. Units that <strong>charged, gain Fights First</strong> ability.
          There are also units that have native Fights First. In this phase, the{' '}
          <strong>non-active player goes first</strong> if they have eligible
          units.
        </p>

        <p>Who fights when?</p>

        <ol>
          <li>Non-active player's units that have Fights First.</li>
          <li>Active player's units that have Fights First.</li>
          <li>All other eligible non-active player's units.</li>
          <li>All other eligible active player's units.</li>
        </ol>

        <p>When it's your turn to fight, the selected unit:</p>

        <ol>
          <li>
            <strong>Pile in - move up to 3", ending in Engagement range</strong>
            . If base-to-base contact is possible, it must be made.
          </li>

          <li>
            Execute all attacks with melee weapons according to the Making
            attacks rules.
          </li>

          <li>
            <strong>Consolidate - move another 3"</strong> only if there are
            models that are outside Engagement range and may move into it, or
            within range of an objective marker.
          </li>
        </ol>

        <p>
          Pile-ins and consolidations are powerful for repositioning, tagging
          units, and stealing objectives.
        </p>
      </section>
    </>
  )
}
