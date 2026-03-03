import { WH40K_TITLE } from '@/app/constants'
import { Section } from '@/app/ui/Section'
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
        <p>
          A game of WH40k can be played in various formats, but it's always
          played in a series of rounds. All players take a turn within a single
          battle round. Each player's turn is divided into a sequence of phases.
          After all phases are complete, the turn switches.
        </p>

        <div className="box md:text-lg">
          <span>1. Command</span> &rarr; <span>2. Movement</span> &rarr;{' '}
          <span>3. Shooting</span> &rarr; <span>4. Charge</span> &rarr;{' '}
          <span>5. Fight</span>
        </div>
      </Section>

      <Section title="1. Command Phase" id="command-phase">
        <p>Every player's turn starts with the Command Phase.</p>

        <ol>
          <li>
            <strong>Both players gain 1 command point (CP).</strong> CPs are a
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

        <p>Below half-strength means:</p>

        <ul>
          <li>
            <strong>Single model</strong> (e.g. characters, vehicles): Less than
            half wounds left.
          </li>

          <li>
            <strong>Multi-model units</strong> (e.g. squads): Less than half of
            the starting models left. Attached characters add +1 to the count.
          </li>
        </ul>

        <p>
          If it's your Command Phase and you have units that fit these
          descriptions, <strong>roll 2D6</strong> for each and{' '}
          <strong>compare the result to their Leadership (Ld)</strong> (the best
          Ld for squads with attached leaders). If the roll is lower than the Ld
          the unit is shocked. That is why <strong>lower Ld is better</strong>.
        </p>

        <div className="example">
          <p>
            A 10-man squad of Intercessors is down to 4 marines after the
            opponent's last turn. Now, its your Command Phase and they must take
            a battle-shocked test: 4 out of 10 models left. You roll 2D6 and
            score a 5. Since Intercessors have Ld of 6+, they fail and are
            shocked.
          </p>

          <p>
            If it's the same squad with a Chaplain attached, they must still
            take the test: 5 out of 11 models. But because the Chaplain has Ld
            of 5+, they would pass with a roll of 5.
          </p>
        </div>

        <p>
          If a unit is battle-shocked{' '}
          <strong>
            its Objective Control (OC) becomes 0 and it cannot be affected by
            Stratagems
          </strong>
          . This shuts down scoring and support efficiency. One player may lock
          down all objectives, but if their opponent trades in enough models,
          they have a chance to swing control.
        </p>
      </Section>

      <Section title="2. Movement Phase" id="movement-phase">
        <p>
          The active player goes through{' '}
          <strong>all units outside engagement range</strong> (1" horizontal, 5"
          vertical) of an enemy, one at a time, an chooses weather the given
          unit will do one of the following:
        </p>

        <ul>
          <li>
            <strong>Make a normal move:</strong> Move up to its Movement (M")
            characteristic in inches.
          </li>

          <li>
            <strong>Advance:</strong> Roll D6 and add the result as inches to
            its M" at the cost of limited shooting capabilities during the
            following phase.
          </li>

          <li>
            <strong>Remain stationary:</strong> Do not move this turn. Some
            weapons benefit from this.
          </li>
        </ul>

        <p>
          <strong>
            No units that moved can end within engagement range of or move
            trough enemies.
          </strong>{' '}
          Units that already were engaged can either stay put, or fall back.
        </p>

        <p>
          Also, models{' '}
          <strong>cannot end a move on top of an objective marker</strong> under
          core rules, and markers have no defined shape. However,{' '}
          <strong>tournaments</strong> standardize objectives as{' '}
          <strong>40mm circular markers</strong> and allow models to end their
          movement on them.
        </p>

        <h3 id="fall-back">Fall Back</h3>

        <p>
          A fall back move is a normal move (up to the units M"), but the unit
          must <strong>skip shoot and charge phases this turn</strong>. Unlike
          normal moves, units falling back may pass trough enemies, but they
          must take <strong>Desperate Escape Tests</strong>. This means{' '}
          <strong>rolling D6 for every "desperate" model</strong>. On a{' '}
          <strong>2 or less that model is destroyed</strong> (not just taking a
          wound). Units that are{' '}
          <strong>battle-shocked, always take a desperate escape test</strong>.
        </p>

        <h3 id="pivoting">Pivoting</h3>

        <p>
          Moving units on straight lines is self explanatory. But units may also
          pivot and change direction during their move within their M" range.
          This looks like multiple smaller lines when a unit goes around an
          obstacle. However,{' '}
          <strong>
            Vehicles and Monsters without round bases or Fly keyword, must
            reduce their move by 2" if they pivot
          </strong>
          . This prevents gaining extra distance through rotation tricks.
        </p>

        <h3 id="transports">Transports</h3>

        <p>
          Some units may carry other units within them. The benefit is that the
          transports usually has much higher mobility and durability. The risk
          is that it may be destroyed while delivering its payload.
        </p>

        <p>
          A unit can{' '}
          <strong>
            embark if every model ends a move wholly within 3" of the transport
          </strong>
          . Then the transport carries them to their destination where they can
          disembark. If they <strong>disembark</strong> during a turn where the{' '}
          <strong>transport has already moved, they can only shoot</strong>.
          Otherwise they can also move.
        </p>

        <p>
          If the <strong>transport is destroyed</strong>, roll D6 per embarked
          model. On a 1 the model suffers a mortal wound. Then the survivors
          disembark and become Battle-shocked and cannot charge that turn.
        </p>

        <h3 id="strategic-reserves">Strategic Reserves</h3>

        <p>
          Both players may choose{' '}
          <strong>not to deploy some of their units</strong> at the begining of
          the battle. These go into Strategic Reserves and{' '}
          <strong>cannot exceeed 25% of the total army points</strong>.
        </p>

        <p>
          Reserved units may{' '}
          <strong>
            join the battle, only at the very end of the movement phase
          </strong>
          , after all other units have moved or stayed put, folling these rules:
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
    </>
  )
}
