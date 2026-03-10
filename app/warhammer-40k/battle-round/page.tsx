import { TbArrowBigDown } from 'react-icons/tb'

import { WH40K_TITLE } from '@/app/constants'
import { DiceRoll } from '@/app/ui/DiceRoll'
import { Section } from '@/app/ui/Section'
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
      <h1 className="page-title">{navTitle}</h1>

      <Section>
        <div className="md:flex gap-4 items-start">
          <div className="box md:w-1/2 md:text-lg flex flex-col gap-2 place-items-center">
            <div>1. Command Phase</div> <TbArrowBigDown />
            <div>2. Movement Phase</div> <TbArrowBigDown />
            <div>3. Shooting Phase</div> <TbArrowBigDown />
            <div>4. Charge Phase</div> <TbArrowBigDown />
            <div>5. Fight Phase</div>
          </div>

          <div className="md:w-1/2">
            <p>
              All formats of Warhammer 40,000 are played in rounds. Once all
              pre-battle setup is resolved, the first round begins. Depending on
              the mission, the rounds continue until the battle ends (typically
              after a fixed number of rounds).
            </p>

            <p>
              During a round, all players take a turn. Each player's turn is
              divided into a sequence of phases. When it's your turn, you have
              to go through all phases to pass the turn to the next player.
            </p>

            <p>
              In essence, a turn is to generate resources, test morale,
              reposition, utilize ranged firepower, commit to melee, and
              leverage consolidation to control space and objectives.
            </p>
          </div>
        </div>
      </Section>

      <Section title="1. Command Phase" id="command-phase">
        <p>
          Every player's turn starts with the Command Phase. It follows this
          sequence:
        </p>

        <ol>
          <li>
            <strong>All players gain 1 command point (CP).</strong> CPs are a
            resource spent on Stratagems.
          </li>

          <li>
            Resolve any rules that occur in the Command Phase (the rule will
            state so).
          </li>

          <li>
            The active player takes <strong>Battle-shock</strong> tests for{' '}
            <strong>all their units below half-strength</strong>.
          </li>
        </ol>

        <h3 id="battle-shock-tests">Battle-shock tests</h3>

        <p>
          It's the end of your Command Phase. Check if you have any of the
          following:
        </p>

        <ul>
          <li>
            A <strong>single model</strong> (e.g. a character, vehicle) that{' '}
            <strong>has less than half wounds left</strong>.
          </li>

          <li>
            A <strong>multi-model unit</strong> that{' '}
            <strong>has less than half of its starting models left</strong>,
            including attached leaders.
          </li>
        </ul>

        <p>
          If the answer is yes, every such unit must take a battle-shock test.
        </p>

        <DiceRoll
          title="Battle-shock test"
          dice="2D6"
          effect="Compare the result to tested unit's highest Leadership (Ld)."
        />

        <ul>
          <li>If the result is higher than the Ld, nothing happens.</li>
          <li>
            <strong>
              If the result is lower, the unit is shocked: its Objective Control
              (OC) becomes 0 and it cannot be affected by Stratagems.
            </strong>
          </li>
        </ul>

        <p>That is why lower Ld is better.</p>

        <div className="example">
          <p>
            A 10-man squad of Intercessors is down to 4 marines. They take the
            test (4/10 models) and score a 5. Since Intercessors have Ld of 6+,
            they fail and are shocked.
          </p>

          <p>
            Now, we take the same squad but with a Chaplain attached. They take
            the test (5/11 models) and again score a 5. But because the Chaplain
            has Ld of 5+, they would pass with a roll of 5.
          </p>
        </div>

        <p>
          Battle-shock shuts down scoring and support efficiency. One player may
          lock down all objectives, but if their opponent trades in enough
          models, they have a chance to swing control.
        </p>
      </Section>

      <Section title="2. Movement Phase" id="movement-phase">
        <p>
          The active player goes through{' '}
          <strong>all units outside engagement range</strong> (1" horizontal, 5"
          vertical) of an enemy, one at a time, and chooses whether each unit
          will do one of the following:
        </p>

        <ul>
          <li>
            <strong>Make a normal move:</strong> Move up to its Movement (M")
            characteristic in inches.
          </li>

          <li>
            <strong>Advance:</strong> Roll D6 and add the result as inches to
            its M" at the cost of being unable to shoot (unless the weapon has
            Assault) or charge this turn.
          </li>

          <li>
            <strong>Remain stationary:</strong> Do not move this turn. Some
            weapons benefit from this.
          </li>
        </ul>

        <div className="example">
          <p>
            Standard infantry usually move up to 6". If you choose them to
            advance and roll a 4, they can now move up to 10", but can only fire
            weapons with the <em>Assault</em> keyword in the following phase.
          </p>
        </div>

        <p>
          <strong>
            No units that moved can move through or end within engagement range
            of an enemy.
          </strong>{' '}
          Also, models{' '}
          <strong>cannot end a move on top of an objective marker</strong> under
          core rules, and markers have no defined shape. However,{' '}
          <strong>tournaments</strong> standardize objectives as{' '}
          <strong>40mm circular markers</strong> and allow models to end their
          movement on them.
        </p>

        <p>
          Units that already were engaged can either stay put, or fall back.
        </p>

        <h3 id="fall-back">Fall Back</h3>

        <p>
          A fall back move is a normal move (up to the unit's M"), but the unit
          must <strong>skip shoot and charge phases this turn</strong>. Unlike
          normal moves, units falling back may pass through enemies, but if they
          do so, they must take <strong>Desperate Escape Tests</strong>.
        </p>

        <DiceRoll
          title="Desperate escape test"
          dice="D6"
          effect="On a 2 or less, the model is destroyed."
        />

        <p>
          Battle-shocked units always take a desperate escape test if they fall
          back.
        </p>

        <h3 id="pivoting">Pivoting</h3>

        <p>
          Units don't need to move only in straight lines. They can freely pivot
          and change direction as long as the move is within their M". However,{' '}
          <strong>
            Vehicles and Monsters without round bases or Fly keyword, must
            reduce their move by 2" if they pivot
          </strong>
          . This prevents gaining extra distance through rotation tricks.
        </p>

        <h3 id="transports">Transports</h3>

        <p>
          Some units allow other units to <strong>embark</strong> on them{' '}
          <strong>if every model ends a move wholly within 3" of them</strong>.
          Then the embarked unit can benefit from the transport's higher
          mobility and possibly durability.
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
          effect="On a 1 the model suffers a mortal wound. Then the survivors
          disembark and become Battle-shocked and cannot charge that turn."
        />

        <h3 id="strategic-reserves">Strategic Reserves</h3>

        <p>
          Both players may choose{' '}
          <strong>not to deploy some of their units</strong> at the beginning of
          the battle. These go into Strategic Reserves and{' '}
          <strong>cannot exceed 25% of the total army points</strong>.
        </p>

        <p>
          Reserved units may{' '}
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
      </Section>

      <Section title="Making attacks" id="making-attacks">
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
          effect="If result is greater than the Ballistic Skill (BS) for ranged weapons or Weapon Skill (WS) for melee, the attack connects."
        />

        <p>
          An unmodified roll of 6 is a <strong>critical hit</strong>.
        </p>

        <DiceRoll
          title="Roll to wound (only if the attack hits)"
          dice="D6"
          effect="The result follows a table based on how much higher or lower the weapon's Strength (S) is compared to the target's Toughness (T)."
        />

        <p>
          An unmodified roll of 6 is a <strong>critical wound</strong>.
        </p>

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

        <p>
          After all 3 rolls are done, if the attack hits, wounds, and the armor
          save fails, damage is inflicted. The target loses{' '}
          <strong>wounds equal to the Damage (D) of the weapon</strong>. If the
          attack has more D than is required to kill the target model, the
          excess is lost.
        </p>

        <p>
          An unmodified roll of 1, for any of the 3 rolls, is always a{' '}
          <strong>fail</strong>.
        </p>

        <div className="example">
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
      </Section>

      <Section title="3. Shooting Phase" id="shooting-phase">
        <p>
          Shooting follows the "Making attacks" rules from above. You select one
          eligible unit at a time to shoot. Before rolling any dice:
        </p>

        <ul>
          <li>Declare all targets per weapon.</li>
          <li>You may split fire by weapon, but not split individual shots.</li>
        </ul>

        <p>
          To fire at a target you need <strong>line of sight and range.</strong>{' '}
          Range is checked per firing model, but if any model in the target unit
          is within range of firing models, the entire unit counts as in range.
        </p>

        <p>
          A model can only fire either all weapons with the Pistol keyword or
          all without it. Not both. All attacks from the unit resolve
          simultaneously, based on board state at declaration. Once declared to
          shoot, <strong>all weapons must fire</strong>.
        </p>

        <p>
          Some terrain features provide <em>Benefit of Cover</em> to targets
          against ranged attacks. If this is true for the defending unit, it
          gains +1 to armor saves, unless it has Sv3+ or better and the weapon
          has AP0. Multiple instances of cover are not cumulative.
        </p>
      </Section>

      <Section title="4. Charge Phase" id="charge-phase">
        <p>
          Charging is rushing a unit into melee combat. Units within 12" that
          didn't advance this turn may declare a charge.
        </p>

        <DiceRoll
          title="Charge roll"
          dice='2D6"'
          effect='If the total is
          enough to move within 1" (Engagement range), the charge succeeds and the unit may move into position. If it fails, the unit stays put.'
        />

        <p>
          A unit may charge multiple targets, but you must engage every declared
          target for the charge to succeed. Positioning matters. You can block
          follow-up charges with your own units, or you can overcommit a large
          squad and bog down your attack.
        </p>
      </Section>

      <Section title="5. Fight Phase" id="fight-phase">
        <p>
          All units that either{' '}
          <strong>
            made a charge this turn, or are already in Engagement range
          </strong>{' '}
          are eligible to fight. Units that{' '}
          <strong>charged, gain Fights First</strong> ability. There are also
          units that have native Fights First. In this phase the{' '}
          <strong>non-active player goes first</strong> if they have eligable
          units.
        </p>

        <p>Who fights when?</p>

        <ol>
          <li>Non-active player's units that have Fights First.</li>
          <li>Active player's units that have Fights First.</li>
          <li>All other eligable non-active player's units.</li>
          <li>All other eligable active player's units.</li>
        </ol>

        <p>
          What does it mean to fight? When it's your turn to fight, the selected
          unit:
        </p>

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
      </Section>
    </>
  )
}
