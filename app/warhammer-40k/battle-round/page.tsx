import Image from 'next/image'
import { FaCheck, FaCrosshairs } from 'react-icons/fa'
import { IoDiceOutline } from 'react-icons/io5'
import { LuCrown } from 'react-icons/lu'
import { RiInformation2Line, RiSwordLine } from 'react-icons/ri'
import { RxDoubleArrowUp } from 'react-icons/rx'
import { TbArrowBigUpLines } from 'react-icons/tb'

import attack from '@/app/assets/wh40k/attack.webp'
import movement from '@/app/assets/wh40k/move.webp'
import pivot from '@/app/assets/wh40k/pivot.webp'
import shooting from '@/app/assets/wh40k/shooting.webp'
import { WH40K_TITLE } from '@/app/constants'
import { Table } from '@/app/ui/Table'
import { woundRollColumns, woundRollRows } from '@/app/warhammer-40k/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 3

export const navTitle = 'The Battle Round'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${navTitle}`,
  'Understand the sequence of turns in Warhammer 40k.',
)

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
            After that, resolve any rules that occur in the Command Phase (the
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
            you check against the total number of starting models.
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
          If you have units below half-strength, every such unit must take a
          battle-shock test.
        </p>

        <div className="box">
          <p className="lead flex-center">
            <IoDiceOutline /> Battle-shock test
          </p>

          <p>
            <strong>Roll 2D6.</strong> If the result is higher than the unit's{' '}
            <strong>highest Leadership (Ld)</strong> attribute, the test passes.
          </p>
        </div>

        <blockquote>
          <p>
            A squad of Intercessors takes a battle-shock test and scores a 5.
            Since they have Ld6+, they fail. Yet, with a Chaplain attached if
            they score a 5, they will pass, because the Chaplain has Ld5+.
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

        <blockquote>
          <p>
            Heavy Intercessors have M5". If they choose to advance during the
            movement phase, they can move up to 11" (if D6 scores 6). By
            comparison, Assault Intercessors with Jump Packs have M12" and
            advance up to 18" on a perfect roll.
          </p>
        </blockquote>

        <p>
          No unit can move through enemies or stop within engagement range of an
          enemy. Under core rules, models also cannot end a move on top of an
          objective, but tournaments usually allow this.
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
          Unlike normal moves and advances, falling back allows passing through
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
            keyword must reduce their move by 2" every time they pivot
          </strong>
          . This prevents gaining extra distance through rotation tricks.
        </p>

        <Image src={pivot} alt="Pivoting example" />

        <h3 id="transports">Transports</h3>

        <p>
          If a unit has the <em>Transport</em> keyword, they allow other units
          to <em>embark</em> on them if every model ends a move within 3" of
          them or deploy embarked.
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

        <div className="box">
          <p className="lead flex-center">
            <IoDiceOutline /> If the transport is destroyed
          </p>

          <p>
            <strong>Roll a D6.</strong> On a 1, the model suffers a mortal
            wound. Then the survivors disembark and become Battle-shocked and
            cannot charge that turn.
          </p>
        </div>

        <p>
          Transports let you move units safely and efficiently across the board.
          They trade points for speed, protection, and positioning control.
        </p>

        <h3 id="strategic-reserves">Strategic Reserves</h3>

        <p>
          Players may choose not to deploy some of their units at the beginning
          of the battle. These go into <em>Strategic Reserves</em> and cannot
          exceed 25% of the total army points. They can join the battle later,
          at the very end of the movement phase, following these rules:
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

      <section>
        <h2 id="making-attacks">Making attacks</h2>

        <p>
          Two of the three remaining phases involve making attacks - either
          ranged or melee. The owner of a unit can declare a target during the
          Shooting or Fight phases. Then they resolves the attack sequence for
          each and every weapon used:
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

        <div className="box">
          <p className="lead flex-center">
            <IoDiceOutline /> 1. Roll to hit
          </p>

          <p>
            <strong>Roll a D6.</strong> If result is higher than the Ballistic
            Skill (BS) for ranged weapons or Weapon Skill (WS) for melee, the
            attack connects. An unmodified roll of 6 is a <em>critical hit</em>.
          </p>
        </div>

        <blockquote>
          <p>
            A squad of Heavy Intercessors declares a ranged attack against some
            Ork Boyz. They fire 5 heavy bolt rifles (A2, BS3+) after moving. Two
            attacks means rolling 10D6 to hit. They must score 3+.
          </p>
        </blockquote>

        <div className="box">
          <p className="lead flex-center">
            <IoDiceOutline /> 2. Roll to wound (only if the attack hits)
          </p>

          <p>
            <strong>Roll a D6.</strong> The result follows a table based on how
            much higher or lower the weapon's Strength (S) is compared to the
            target's Toughness (T). An unmodified roll of 6 is a{' '}
            <em>critical wound</em>.
          </p>
        </div>

        <Table columns={woundRollColumns} data={woundRollRows} />

        <blockquote>
          <p>
            Let's say that out of the 10 attacks from the previous example, 7
            hit. The heavy rifle has S5 while the Boyz have T5 so a roll of 4+
            wounds. The attacker rolls 7D6.
          </p>
        </blockquote>

        <p>
          If the attack hits <strong>and</strong> wounds the{' '}
          <strong>defender</strong> allocates which models take the wounds and
          makes saving throws. Models which already lost wounds or had attacks
          allocated this phase must be selected first. Saves represent the
          target's armor.
        </p>

        <div className="box">
          <p className="lead flex-center">
            <IoDiceOutline /> Roll to save
          </p>

          <p>
            <strong>Roll a D6.</strong> Modify the roll by the Armor Penetration
            (AP) of the weapon. If the result is equal or greater to the
            target's Save (Sv), damage is not inflicted.
          </p>
        </div>

        <p>
          The target may also have an <em>Invulnerable Save</em> (Inv) which
          ignores the weapon's AP. It comes in handy when facing weapons with
          high AP. If available, the defender may choose to roll for it instead
          of the armor save, but <strong>not both</strong>.
        </p>

        <div className="box">
          <p className="lead flex-center">
            <IoDiceOutline /> Invulnerable save
          </p>

          <p>
            <strong>Roll a D6.</strong> If the result is equal or greater to the
            target's Invulnerable Save, damage is not inflicted.
          </p>
        </div>

        <blockquote>
          <p>
            Continuing the example, if the attacker scores 4 wounds, the
            defender selects which Boyz take the wounds. He skips the Nob (the
            leader) and allocates 4 wounds to the others. Boyz have Sv5+ so they
            throw 4D6.
          </p>
        </blockquote>

        <p>For all rolls above, an unmodified roll of 1 is always a fail.</p>

        <Image src={attack} alt="Attack sequence example" className="my-6" />

        <p>
          After all 3 rolls are done, if the attack hits, wounds, and the armor
          save fails, damage is inflicted. The target loses wounds equal to the
          Damage (D) of the weapon. If the attack has more D than is required to
          kill the target model, the excess is lost.
        </p>

        <blockquote>
          <p>
            In the end two attacks inflict damage. Since the heavy rifle has D2
            and the Ork Boy has W1, two Boyz are removed from battle and the
            excess damage is lost.
          </p>
        </blockquote>

        <p>
          The whole sequence is called an <em>activation</em>. The more attacks
          a weapon makes, the more activations it has, thus a better average
          chance to score a wound.
        </p>

        <p>
          You will often hear the term <em>to chip</em>, which means to deal
          small amounts of damage. You are chipping someone / something when
          they lose a wound or a model, but not enough to make a difference.
          Chip damage accumulates over time.
        </p>
      </section>

      <section title="3. Shooting phase">
        <h2 id="shooting-phase">3. Shooting phase</h2>

        <p>Go through each unit that:</p>

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
            A model can only fire either all <em>Pistols</em> or everything
            else. Not both.
          </li>

          <li>
            All attacks from the unit resolve simultaneously. All weapons must
            fire.
          </li>
        </ul>

        <p>
          Some terrain features provide <em>Benefit of Cover</em> against ranged
          attacks. The unit behind cover gains +1 to armor saves, unless it has
          Sv3+ or better and the weapon has AP0.
        </p>

        <Image src={shooting} alt="Shooting example" />

        <div className="box">
          <p className="lead flex-center">
            <FaCheck /> Rules of thumb for selecting a target
          </p>

          <ul>
            <li>
              Prioritize high-value enemies - units that can make an impact on
              the following turn.
            </li>

            <li>
              Shoot with units that have fewer target options first to avoid
              wasting attacks.
            </li>

            <li>Focus fire with the aim to destroy outright, not chip.</li>

            <li>
              Against Infantry, resolve Blast weapons first for bonus attacks.
            </li>

            <li>
              Use weapons against optimal targets. Don't waste Damage or AP.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 id="charge-phase">4. Charge phase</h2>

        <p>
          Any unit that wishes to engage in melee, that{' '}
          <strong>didn't advance this turn</strong>, and is within 12" of a foe
          may declare a charge into that foe. A unit may charge multiple
          targets, but you must successfully engage every declared target.
        </p>

        <div className="box">
          <p className="lead flex-center">
            <IoDiceOutline /> Charge roll
          </p>

          <p>
            <strong>Roll 2D6".</strong> If the result is enough to move within
            1" (engagement range) of the target, the charge succeeds and the
            unit may move into position. If it fails, the unit stays put.
          </p>
        </div>

        <p>
          Units that are better at melee, naturally want to engage the enemy
          earlier. It's often better to skip advancing, which might gain up to
          6", and do a regular move + charge, which might gain up to 12". Watch
          your positioning. You may find your forward troops a bottleneck for
          follow-up charges.
        </p>
      </section>

      <section>
        <h2 id="fight-phase">5. Fight phase</h2>

        <p>
          It's time to resolve hand-to-hand attacks. All units that completed a
          successful charge this turn, or were already engaged participate.
          Units that charged, gain <em>Fights First</em> (some have it
          natively). The non-active player goes first if they have eligible
          units.
        </p>

        <p className="font-bold">Who fights when?</p>

        <ol>
          <li>Non-active player's units that have Fights First.</li>
          <li>Active player's units that have Fights First.</li>
          <li>All other eligible non-active player's units.</li>
          <li>All other eligible active player's units.</li>
        </ol>

        <p>When it's your turn to fight, the selected unit:</p>

        <ol>
          <li>Piles in - moves up to 3", ending in engagement range.</li>

          <li>Executes all attacks with melee weapons.</li>

          <li>
            Consolidates - moves another 3" if there are models outside
            engagement or may move within range of an objective.
          </li>
        </ol>

        <p>
          Pile-ins and consolidations are tools for jamming units, and stealing
          objectives.
        </p>
      </section>
    </>
  )
}
