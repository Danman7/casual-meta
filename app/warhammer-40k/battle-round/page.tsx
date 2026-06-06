import Image from 'next/image'
import Link from 'next/link'
import { FaCrosshairs } from 'react-icons/fa'
import {
  GiBookCover,
  GiMagnifyingGlass,
  GiPerspectiveDiceSixFacesFive,
} from 'react-icons/gi'
import { HiOutlineAcademicCap } from 'react-icons/hi2'
import { LuCrown, LuDices } from 'react-icons/lu'
import { RiSwordLine } from 'react-icons/ri'
import { RxDoubleArrowUp } from 'react-icons/rx'
import { TbArrowBigUpLines } from 'react-icons/tb'

import movement from '@/app/assets/wh40k/move.webp'
import pivot from '@/app/assets/wh40k/pivot.webp'
import shooting from '@/app/assets/wh40k/shooting.webp'
import { wh40kHref, wh40kMetadata, wh40kPage } from '@/app/siteMap'
import { OrDivider } from '@/app/ui/OrDivider'
import { Paper } from '@/app/ui/Paper'
import { Strip } from '@/app/ui/Strip'

const page = wh40kPage('battleRound')

export const metadata = wh40kMetadata('battleRound')

export default async function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <section>
        <p>
          WH40K is played in a series of rounds. All players (usually two) take
          a turn to complete a round. A turn is a sequence of actions grouped in
          5 phases - each dictating what happens when. Most games end after a
          set number of rounds (usually 5). These are the rules that dictate how
          the game is actually played.
        </p>

        <Paper icon={GiBookCover} title="Phase sequence">
          <p>
            1. Command Phase &rarr; 2. Movement Phase &rarr; 3. Shooting Phase
            &rarr; 4. Charge Phase &rarr; 5. Fight Phase
          </p>

          <OrDivider />

          <p>
            1. Gain resource and check morale &rarr; 2. Reposition &rarr; 3.
            Shoot &rarr; 4. Charge &rarr; 5. Melee combat
          </p>
        </Paper>
      </section>

      <section>
        <h2 id="command-phase" className="flex-center">
          1. Command Phase <LuCrown />
        </h2>

        <p>Your turn always starts with the following sequence:</p>

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
          At the end of your Command Phase, if you sustained casulties during
          the previous turns, check if you have{' '}
          <strong>units below half-strength</strong>. These{' '}
          <strong>must take a battle-shock test</strong>. Below Half-strength
          means:
        </p>

        <ul>
          <li>
            It's a <strong>single model</strong> (e.g. a character, monster, or
            vehicle) and{' '}
            <strong>
              has less than half its{' '}
              <Link href={wh40kHref('datasheets', 'wounds')}>wounds (W)</Link>{' '}
              left
            </strong>
            .
          </li>

          <li>
            It's a <strong>squad</strong> and{' '}
            <strong>has fewer than half of its models left</strong>.
          </li>
        </ul>

        <p>
          If a character is attached to a squad, the check is made against total
          number of models. If the escorting squad dies, checks are made against
          wounds again.
        </p>

        <Paper icon={LuDices} title="Battle-shock test">
          <Strip
            items={[
              {
                label: 'Roll',
                value: (
                  <>
                    <p>
                      2D6{' '}
                      <GiPerspectiveDiceSixFacesFive className="inline text-2xl" />{' '}
                      <GiPerspectiveDiceSixFacesFive className="inline text-2xl" />
                    </p>
                  </>
                ),
              },
              {
                label: 'Check if',
                value: (
                  <p>
                    Result is higher than the unit's highest{' '}
                    <Link href={wh40kHref('datasheets', 'leadership')}>
                      Leadership (Ld)
                    </Link>
                    .
                  </p>
                ),
              },
              {
                label: 'On fail',
                value: (
                  <p>
                    Unit is <strong>Battle-shocked</strong> until the start of
                    your next Command Phase:{' '}
                    <strong>
                      <Link href={wh40kHref('datasheets', 'objective-control')}>
                        Objective Control (OC)
                      </Link>{' '}
                      becomes 0 and cannot be affected by Stratagems
                    </strong>
                    .
                  </p>
                ),
              },
            ]}
          />
        </Paper>

        <Paper icon={GiMagnifyingGlass}>
          <p>
            For example, if a 5-man squad of Intercessors is down to 2 models
            (2/5), they must take the test. Their Ld is 6+, so if they roll a 5
            they fail.
          </p>

          <p>
            Now, if the same squad had a Chaplain attached, they would be at 3/6
            models and wouldn't require a test. But if they did, rolling a 5
            this time would pass, as the Chaplain has Ld5+. Leaders play a big
            role on morale.
          </p>

          <p>
            If the Chaplain is alone, they take the test only after dropping to
            1 wound, since they start with 4.
          </p>
        </Paper>

        <p>
          Battle-shock is a mechanic that shuts down scoring and support for
          units that have sustained enough losses. Even if one player has locked
          down all objectives, their opponent has a chance at reverting the
          game, if they bring down sufficient models.
        </p>
      </section>

      <section>
        <h2 id="movement-phase" className="flex-center">
          2. Movement phase <TbArrowBigUpLines />
        </h2>

        <p>
          Your real turn starts with repositioning. It's pehaps the phase with
          the most nuisances. Every unit outside of melee (a.k.a{' '}
          <em>engagement range</em>: 1" of an enemy) can either:
        </p>

        <ul>
          <li>
            Declare a <strong>normal move</strong> and go any distance up to its{' '}
            <Link href={wh40kHref('datasheets', 'move')}>Move (M)</Link>{' '}
            characteristic in inches.
          </li>

          <li>
            Declare an <strong>advance</strong>, roll a die, and move further.
            The unit then becomes{' '}
            <strong>unable to charge and shoot this turn</strong> unless with
            weapons that have the{' '}
            <Link href={wh40kHref('datasheets', 'assault')}>Assault</Link>{' '}
            keyword.
          </li>
        </ul>

        <Paper icon={LuDices} title="Advance roll">
          <Strip
            items={[
              {
                label: 'Roll',
                value: (
                  <>
                    <p>
                      D6{' '}
                      <GiPerspectiveDiceSixFacesFive className="inline text-2xl" />
                    </p>
                  </>
                ),
              },
              {
                label: 'Effect',
                value: (
                  <p>
                    Add the result to the unit's M and move that distance
                    instead.
                  </p>
                ),
              },
            ]}
          />
        </Paper>

        <Image src={movement} alt="Movement example" />

        <Paper icon={GiMagnifyingGlass}>
          <p>
            For example, the bulky Heavy Intercessors can make a normal move up
            to 5". But if they declare an advance and roll a 6, they can{' '}
            <strong>move up to 11"</strong> instead. And because the{' '}
            <strong>Heavy bolt rifles have Assault</strong>, they may also shoot
            that turn.
          </p>
        </Paper>

        <p>During the Movement Phase units are not allowed to:</p>

        <ul>
          <li>Move through enemies.</li>
          <li>End a move within engagement range of an enemy</li>
          <li>
            End a move on top of an objective under core rules,{' '}
            <em>but tournaments usually allow this</em>.
          </li>
        </ul>

        <p>
          If a unit skips movement altogether, it's considered to have{' '}
          <strong>remained stationary</strong>. Some rules, like the{' '}
          <Link href={wh40kHref('datasheets', 'heavy')}>Heavy</Link> keyword,
          interact with units that remained stationary.
        </p>

        <h3 id="fall-back">Fall Back</h3>

        <p>
          What about units that are already engaged in melee prior the Movement
          Phase? They can only{' '}
          <strong>
            either stay put, or declare a <em>fall back</em>
          </strong>{' '}
          move. It's the same as a normal move with these caveats:
        </p>

        <ul>
          <li>
            The unit cannot shoot or declare a charge the same turn (same as if
            it advanced).
          </li>

          <li>
            The unit <strong> can pass through enemies</strong> unlike a normal
            move or advance, but they must take a <em>Desperate Escape</em>{' '}
            test.
          </li>

          <li>
            Units that are falling back and are <em>also battle-shocked</em>{' '}
            always take a Desperate Escape test, even when not passing through
            enemies.
          </li>
        </ul>

        <Paper icon={LuDices} title="Desperate Escape test">
          <Strip
            items={[
              {
                label: 'Roll',
                value: (
                  <div>
                    <p>
                      D6{' '}
                      <GiPerspectiveDiceSixFacesFive className="inline text-2xl" />{' '}
                      per model in unit falling back.
                    </p>
                  </div>
                ),
              },
              {
                label: 'Passes if',
                value: 'Result is 3 or above.',
              },
              {
                label: 'On fail',
                value: 'The model is destroyed.',
              },
            ]}
          />
        </Paper>

        <h3 id="pivoting">Pivoting</h3>

        <p>
          Units are not restricted to moving only in straight lines. They can
          change direction as long as they don't go over the allowed inches.{' '}
          <strong>Vehicles and Monsters</strong> without round bases or the{' '}
          <em>Fly</em> keyword, however, must{' '}
          <strong>reduce their move by 2"</strong> every time they pivot, to
          prevent gaining extra distance through rotation tricks.
        </p>

        <Image src={pivot} alt="Pivoting example" />

        <h3 id="transports">Transports</h3>

        <p>
          Infantry units and characters may{' '}
          <strong>
            embark onto units with the <em>Transport</em> keyword
          </strong>{' '}
          during the Movement Phase. Doing so benefits the embarked unit with
          the transport's speed and protection. Disembarking happes during one
          of the following Movement phases.
        </p>

        <ul>
          <li>
            If disembark happens before the transport has moved that turn, they
            can also move.
          </li>

          <li>
            If they disembark after the transport has already moved for the
            turn, they cannot move further.
          </li>
        </ul>

        <Paper
          icon={LuDices}
          title="If the transport is destroyed while holding a unit"
        >
          <Strip
            items={[
              {
                label: 'Roll',
                value: (
                  <div>
                    <p>
                      D6{' '}
                      <GiPerspectiveDiceSixFacesFive className="inline text-2xl" />{' '}
                      per embarked model.
                    </p>
                  </div>
                ),
              },
              {
                label: 'Passes if',
                value: 'Result is 2 or above.',
              },
              {
                label: 'On fail',
                value:
                  'The model suffers a mortal wound. Then the survivors disembark and become Battle-shocked and cannot charge that turn.',
              },
            ]}
          />
        </Paper>

        <h3 id="strategic-reserves">Strategic Reserves</h3>

        <p>
          Players may choose not to deploy all of their units at the beginning
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
          flanks and objectives, but must respect what is already on the table.
        </p>
      </section>

      <section>
        <h2 id="shooting-phase" className="flex-center">
          3. Shooting phase <FaCrosshairs />
        </h2>

        <p>
          After everybody moves, it's time to shoot. A unit may declare ranged
          attacks if:
        </p>

        <ul>
          <li>It is not engaged in melee.</li>
          <li>
            Has at least one <em>ranged</em> weapon within range and in sight of
            an enemy.
          </li>
        </ul>

        <p>
          First, you state which weapon fires at which target. You may split
          fire by weapon, but not by individual shots. A model can only fire
          either all <em>Pistols</em> or everything else. Not both. All attacks
          from the unit resolve simultaneously. All eligible weapons must fire.
        </p>

        <p>
          Then, attacks are resolved following the{' '}
          <Link href={wh40kHref('attackSequence')}>attack sequence</Link>.
        </p>

        <Image src={shooting} alt="Shooting example" />

        <Paper
          icon={HiOutlineAcademicCap}
          title="Is this your first shooting phase?"
        >
          <ul>
            <li>
              First, shoot with units that have fewer target options. It'll be
              easier to choose a target and to avoid wasting attacks.
            </li>

            <li>
              Is there an enemy within reach of multiple of your units? You can
              try to focus fire and remove them from play, which will simplify
              you target selection in the future.
            </li>

            <li>
              Do you have Blast weapons? They are best used against large groups
              of infantry. Hit with Blast first for the maximum amount of
              attacks, then shoot the survivors down.
            </li>

            <li>
              Which weapons' Damage and AP hit which targets best? If you can,
              use D1 weapons against single-wound targets, D2 against W2 targets
              ect. Don't waste high AP on targets with poor saves or
              invulnerable saves.
            </li>
          </ul>
        </Paper>
      </section>

      <section>
        <h2 id="charge-phase" className="flex-center">
          4. Charge phase <RxDoubleArrowUp />
        </h2>

        <p>
          After shooting, it's time to rush into melee. This is perhaps the
          simplest phase. All units that didn't advance this turn and are{' '}
          <strong>
            within 12" of an enemy, may declare a charge against that enemy
          </strong>
          . To see if the charge succeeds, you make a roll.
        </p>

        <Paper icon={LuDices} title="Charge roll">
          <Strip
            items={[
              {
                label: 'Roll',
                value: (
                  <div>
                    <p>
                      2D6{' '}
                      <GiPerspectiveDiceSixFacesFive className="inline text-2xl" />{' '}
                      <GiPerspectiveDiceSixFacesFive className="inline text-2xl" />{' '}
                    </p>
                  </div>
                ),
              },
              {
                label: 'Check if',
                flexBasis: '34rem',
                maxWidth: '38rem',
                value:
                  'Result is enough in inches to move within engagement range (1") of the target.',
              },
              {
                label: 'On Success',
                value: 'Move your unit within range of its target.',
              },
              {
                label: 'On Fail',
                value: 'Nothing happens.',
              },
            ]}
          />
        </Paper>

        <p>
          Units that are better at melee naturally want to engage the enemy
          earlier. It's often better to skip advancing, which might gain up to
          6", and do a regular move + charge, which might gain up to 12". Don't
          turn your forward troops into a bottleneck for the rest of your army.
        </p>
      </section>

      <section>
        <h2 id="fight-phase" className="flex-center">
          5. Fight phase <RiSwordLine />
        </h2>

        <p>
          Hand-to-hand attacks are resolved at the very end of your turn. All
          engaged units participate.{' '}
          <strong>
            Units that charged this turn gain <em>Fights First</em>
          </strong>{' '}
          (some have it natively). This is one phase where the non-active player
          goes first .
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
            Executes all attacks with melee weapons following the{' '}
            <Link href={wh40kHref('attackSequence')}>attack sequence</Link>.
          </li>

          <li>
            Consolidates - moves another 3" if there are models outside
            engagement or may move within range of an objective.
          </li>
        </ol>

        <p>
          Pile-ins and consolidations are tools for jamming units and stealing
          objectives.
        </p>

        <p>After this ordeal is done, pass the turn to your opponent.</p>
      </section>
    </>
  )
}
