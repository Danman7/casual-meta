import { WH40K_TITLE } from '@/app/constants'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 2

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
          A game of WH40k can be played in various formats (mission types, army
          size limits, etc.), but is always played in a series of rounds. All
          players take a turn within a single battle round. Each player's turn
          is divided into a sequence of phases. After all phases are complete,
          the turn switches.
        </p>

        <div className="box md:text-lg">
          <span>1. Command Phase</span> &rarr; <span>2. Movement Phase</span>{' '}
          &rarr; <span>3. Shooting Phase</span> &rarr;{' '}
          <span>4. Charge Phase</span> &rarr; <span>5. Fight Phase</span>
        </div>
      </Section>

      <Section title="Command Phase" id="command-phase">
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
            The active player only takes <strong>Battle-shock</strong> tests for{' '}
            <strong>all their units below half-strength</strong>.
          </li>
        </ol>

        <h3 id="battle-shock-tests">Battle-shock tests</h3>

        <p>Below half-strength means:</p>

        <ul>
          <li>
            <strong>Single model units</strong> (e.g. characters, vehicles):
            Less than half wounds left.
          </li>

          <li>
            <strong>Multi-model units</strong> (e.g. squads): Less than half of
            the starting models left. Attached characters add +1 to the count.
          </li>
        </ul>

        <p>
          If you have units that fit the description, <strong>roll 2D6</strong>{' '}
          for each and{' '}
          <strong>compare the result to their Leadership (Ld)</strong> (the best
          Ld for squads with attached leaders). If the roll is lower than the Ld
          the unit is shocked. That is why <strong>lower Ld is better</strong>.
        </p>

        <div className="example">
          <p>
            A 10-man squad of Intercessors is down to 4 marines after the
            opponent's last turn. Now, when its your Command Phase. They must
            take the test because its 4 out of 10 models left. You roll 2D6 and
            score a 5. Since Intercessors have Ld of 6+, they fail and are
            shocked.
          </p>

          <p>
            If it's the same squad with a Chaplain attached, they must still
            take the test: 5 out of 11 models. But because the Chaplain has Ld
            of 5+, they would pass the same roll.
          </p>
        </div>

        <p>
          If a unit is battle-shocked{' '}
          <strong>
            its Objective Control (OC) becomes 0 and it cannot be affected by
            Stratagems
          </strong>
          . This effectively shuts down scoring and support efficiency. One
          player may lock down all objectives, but if their opponent trades in
          enough models, they have a chance to swing control.
        </p>
      </Section>

      <Section title="Movement Phase" id="movement-phase">
        <p>
          The active player goes trough{' '}
          <strong>all units outside engagement range</strong> (1" horizontal, 5"
          vertical) of an enemy (outside melee combat), one at a time, an
          chooses weather they will:
        </p>

        <ul>
          <li>
            <strong>Make a normal move:</strong> Move up to its Movement (M")
            characteristic in inches.
          </li>

          <li>
            <strong>Advance:</strong> Roll D6 and add the result as inches to
            its Movement at the cost of limited shooting capabilities during the
            following phase.
          </li>

          <li>
            <strong>Remain stationary:</strong> Do not move this turn. Some
            weapons benefit from this.
          </li>
        </ul>

        <p>
          No units that moved can end within engagement range of an enemy. Units
          that already were can either stay put, or fall back.
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
          Some units may carry other units within them, usually for the benefit
          of much higher M".
        </p>
      </Section>
    </>
  )
}
