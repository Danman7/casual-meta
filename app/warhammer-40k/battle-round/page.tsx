import Image from 'next/image'
import Link from 'next/link'
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
import {
  wh40kRoute,
  woundRollColumns,
  woundRollRows,
} from '@/app/warhammer-40k/constants'
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

      <section>
        <p>
          All formats of WH40K are played in a series of rounds. All players
          (usually two) take a turn to complete a round. A turn is a sequence of
          actions grouped in 5 phases - each dictating what happens when. Most
          games end after a set number of rounds (usually 5).
        </p>

        <p>
          To complete your turn go through each of the following phases in
          order, following the sequence of actions as described. Then you pass
          the turn to your opponent.
        </p>
      </section>

      <section>
        <h2 id="command-phase" className="flex-center">
          1. Command Phase <LuCrown />
        </h2>

        <ol>
          <li>
            All players gain 1 command point (CP). CPs are a resource spent to
            activate <em>Stratagems</em>.
          </li>

          <li>
            Resolve any rules that occur in the Command Phase but don't specify
            a precise timing.
          </li>

          <li>
            Settle <em>Battle-shock</em> tests if any are required.
          </li>
        </ol>

        <h3 id="battle-shock-tests">Battle-shock tests</h3>

        <p>
          At the end of your Command Phase, check if you have units that are{' '}
          <em>below half-strength</em>. If the answer is yes, every such unit
          must take a battle-shock test.
        </p>

        <div className="box">
          <p className="font-bold flex-center">
            <RiInformation2Line /> Below Half-strength
          </p>

          <p>A unit is below half-strength if:</p>

          <ul>
            <li>
              It started as a <strong>single model</strong> (e.g. a character,
              monster, or vehicle) and it has less than half its wounds left.
            </li>

            <li>
              It started as a <strong>multi-model</strong> unit (e.g. a squad),
              and it has fewer than half of its models left.
            </li>
          </ul>

          <p>
            If a unit has a character attached to it, the whole thing counts as
            a single unit, and you check against the total number of starting
            models (squad + character).
          </p>
        </div>

        <div className="box">
          <p className="font-bold flex-center">
            <IoDiceOutline /> Battle-shock test
          </p>

          <p>
            <strong>Roll 2D6.</strong> If the result is higher than the unit's
            highest{' '}
            <Link href={`${wh40kRoute('Datasheets')}#leadership`}>
              Leadership (Ld)
            </Link>{' '}
            attribute, the test passes.
          </p>
        </div>

        <blockquote>
          <p>
            If a 5-man squad of Intercessors is down to 2 models (2/5), they
            must take the test. Their Ld is 6+, so if they roll a 5 they fail.
          </p>

          <p>
            Now, if the same squad had a Chaplain attached, they would be at 3/6
            models and won't require a test. But if they did, rolling a 5 this
            time will pass as the Chaplain has Ld5+.
          </p>
        </blockquote>

        <p>
          If the test fails, the unit is Battle-shocked until the start of your
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
        <h2 id="movement-phase" className="flex-center">
          2. Movement phase <TbArrowBigUpLines />
        </h2>

        <p>
          Every allied unit outside <em> engagement range</em> (1" of an enemy)
          can either:
        </p>

        <ul>
          <li>
            Move normally up to its{' '}
            <Link href={`${wh40kRoute('Datasheets')}#move`}>Move (M)</Link>{' '}
            characteristic in inches.
          </li>

          <li>
            Make an <em>advance</em>, moving further, but giving up the ability
            to shoot and declare charges that turn.
          </li>
        </ul>

        <div className="box">
          <p className="font-bold flex-center">
            <IoDiceOutline /> Advance roll
          </p>

          <p>
            <strong>Roll a D6.</strong> Add the result as inches to the unit's M
            and move up to the new distance.
          </p>
        </div>

        <Image src={movement} alt="Movement example" />

        <p>
          Units are not allowed to move through enemies or end within engagement
          range of an enemy. Under core rules, models also cannot end a move on
          top of an objective, but tournaments usually allow this.
        </p>

        <p>
          A unit is allowed to skip movement altogether. If it does it's
          considered as <em>remained stationary</em>, generating potential
          benefits under some rules.
        </p>

        <h3 id="fall-back">Fall Back</h3>

        <p>
          During this phase, units that are already engaged in melee can either
          stay put, or if they wish to get away from the enemy, declare a{' '}
          <em>fall back</em> move. It's a normal move (up to M inches) with
          these caveats:
        </p>

        <ul>
          <li>The unit cannot shoot or declare a charge the same turn.</li>
          <li>
            The unit cannot end the move within engagement range of a foe.
          </li>
          <li>
            The unit can pass through enemies, but they must take a{' '}
            <em>Desperate Escape</em> test.
          </li>
        </ul>

        <div className="box">
          <p className="font-bold flex-center">
            <IoDiceOutline /> Desperate Escape test
          </p>

          <p>
            <strong>Roll a D6.</strong> On a 2 or less, the model is destroyed.
          </p>
        </div>

        <p>
          Units that are falling back and are also battle-shocked always take
          the test.
        </p>

        <h3 id="pivoting">Pivoting</h3>

        <p>
          Units are not restricted to moving only in straight lines. They can
          freely change direction as long as the move is within their M.
          However, Vehicles and Monsters without round bases or the <em>Fly</em>{' '}
          keyword must <em>reduce their move by 2"</em> every time they pivot .
          This prevents gaining extra distance through rotation tricks.
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
          <p className="font-bold flex-center">
            <IoDiceOutline /> If the transport is destroyed
          </p>

          <p>
            <strong>Roll a D6</strong> per embarked model. On a 1, the model
            suffers a mortal wound. Then the survivors disembark and become
            Battle-shocked and cannot charge that turn.
          </p>
        </div>

        <p>
          Transports let you move units safely and efficiently across the board.
          They trade points for speed, protection, and positioning control.
        </p>

        <h3 id="strategic-reserves">Strategic Reserves</h3>

        <p>
          Players are allowed to not deploy all of their units at the beginning
          of the battle. Up to <em>25% of your total army points</em> can be
          held as <em>strategic reserves</em>. They may join the battle later,
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
          Reserve play is about timing and pressure. Late arrivals threaten
          flanks or objectives but must respect what is already on the table.
        </p>
      </section>

      <section title="3. Shooting phase">
        <h2 id="shooting-phase" className="flex-center">
          3. Shooting phase <FaCrosshairs />
        </h2>

        <p>If a unit:</p>

        <ul>
          <li>Is not engaged in close combat.</li>
          <li>Has at least one ranged weapon within range of an enemy.</li>
          <li>Has line of sight to the target enemy unit.</li>
        </ul>

        <p>It can declare a ranged attack.</p>

        <ul>
          <li>State which weapon fires at which target.</li>
          <li>You may split fire by weapon, but not split individual shots.</li>
          <li>
            A model can only fire either all <em>Pistols</em> or everything
            else. Not both.
          </li>

          <li>
            All attacks from the unit resolve simultaneously. All weapons must
            fire.
          </li>
        </ul>

        <Image src={shooting} alt="Shooting example" />

        <p>
          Declared attacks are resolved following the{' '}
          <Link href="#attack-sequence">attack sequence</Link>.
        </p>

        <p>
          Some terrain features provide <em>Benefit of Cover</em> against ranged
          attacks. The unit behind cover gains +1 to armor saves, unless it has
          Sv3+ or better and the weapon has AP0.
        </p>

        <div className="box">
          <p className="font-bold flex-center">
            <FaCheck /> Selecting a target
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
        <h2 id="charge-phase" className="flex-center">
          4. Charge phase <RxDoubleArrowUp />
        </h2>

        <p>
          When a unit wishes to close the distance, it can declare a charge
          towards an enemy if:
        </p>

        <ul>
          <li>It didn't advance this turn.</li>

          <li>Is within 12" of the target.</li>
        </ul>

        <p>
          To see if the charge is successful, a charge roll is made. It's
          possible to charge multiple targets with a single unit, but you must
          successfully engage every declared target.
        </p>

        <div className="box">
          <p className="lead flex-center">
            <IoDiceOutline /> Charge roll
          </p>

          <p>
            <strong>Roll 2D6.</strong> If the result is enough in inches to move
            within engagement range (1") of the target, the charge succeeds. If
            not, the unit stays put.
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
        <h2 id="fight-phase" className="flex-center">
          5. Fight phase <RiSwordLine />
        </h2>

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

          <li>
            Executes all attacks with melee weapons following the attack
            sequence.
          </li>

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

      <section>
        <h2 id="attack-sequence">Attack sequence (Activation)</h2>

        <p>
          Attacks can be declared during the{' '}
          <Link href="#shooting-phase">Shooting</Link> and{' '}
          <Link href="#fight-phase">Fight</Link> phases, following the rules of
          those phases. They are declared by units, but executed by the weapons
          they carry. The process of executing an attack is called an{' '}
          <em>attack sequence</em> or an <em>activation</em> for short.
        </p>

        <p>
          A weapon activation is a series of steps where its profile
          (specifically Strength, Armor Penetration, and Damage) is compared to
          the target's profile (specifically Toughness, Save, and Wounds). Both
          ranged and melee weapons go through the same sequence:
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
            <strong>Roll a D6</strong> for each attack the weapon does. If
            result is higher than the Ballistic Skill (BS) for ranged weapons or
            Weapon Skill (WS) for melee, the attack connects. An unmodified roll
            of 6 is a <em>critical hit</em>.
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
            <IoDiceOutline /> 2. Roll to wound
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
            <IoDiceOutline /> 4a. Roll to save
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
            <IoDiceOutline /> 4b. Invulnerable save
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
          In most cases, only one activation is allowed per model per turn, but
          under some rules there might be more.
        </p>
      </section>
    </>
  )
}
