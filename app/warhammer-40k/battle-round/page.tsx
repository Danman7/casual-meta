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
        <div className="box md:text-lg">
          <span>1. Command Phase</span> &rarr; <span>2. Movement Phase</span>{' '}
          &rarr; <span>3. Shooting Phase</span> &rarr;{' '}
          <span>4. Charge Phase</span> &rarr; <span>5. Fight Phase</span>
        </div>
        <p>
          A game of WH40k can be played in various formats (missions, army point
          limits, etc.), but is always played in a series of rounds. All players
          take a turn within a single battle round. The mission will tell you
          how to determine who goes first.
        </p>

        <p>
          A player's turn is divided into a sequence of phases. After all phases
          are complete, the turn switches. Understand the phases and you will
          understand the flow of the game.
        </p>
      </Section>

      <Section title="Command Phase" id="command-phase">
        <p>
          Every player's turn starts with the Command Phase. It follows this
          sequence in exact order:
        </p>

        <ol>
          <li>
            <strong>Both players gain 1 command point (CP).</strong> CPs are a
            resource spent on Stratagems.
          </li>

          <li>Resolve any rules that occur in the Command Phase.</li>

          <li>Take Battle-shock tests.</li>
        </ol>

        <h3 id="battle-shock-tests">Battle-shock tests</h3>

        <p>
          <strong>
            All units below half-strength take a Battle-shock test
          </strong>
          . Below half-strength means:
        </p>

        <ul>
          <li>
            <strong>Single model units:</strong> Less than half wounds left.
          </li>

          <li>
            <strong>Multi-model units:</strong> Less than half of the models
            left (including attached characters).
          </li>
        </ul>

        <p>
          If you have units that fit the descriptions above during your Command
          Phase, <strong>roll 2D6</strong> for each and{' '}
          <strong>compare the result to their Leadership (Ld)</strong>. If it's
          a squad with an attached character, you take the best Ld between the
          models. If the result is lower than that, the unit is Battle-shocked
          until the start of your next Command Phase:
        </p>

        <ul>
          <li>It's OC becomes 0.</li>

          <li>It cannot be affected by Stratagems.</li>
        </ul>

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
      </Section>

      <Section title="Movement Phase" id="movement-phase">
        <p>
          After the Command Phase is over, the active player decides how each of
          their units will change its position. If that unit is outside of
          Engagement Range (1" horizontal, 5" vertical) of an enemy it may
          either:
        </p>

        <ul>
          <li>
            <strong>Make a normal move:</strong> Send its
          </li>
        </ul>
      </Section>
    </>
  )
}
