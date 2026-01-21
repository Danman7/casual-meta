import Image from 'next/image'
import Link from 'next/link'
import { FaWrench } from 'react-icons/fa'
import { GiDeathSkull } from 'react-icons/gi'
import { MdChevronRight } from 'react-icons/md'

import attackPhases from '@/app/assets/mk/attack_phases.webp'
import blockHigh from '@/app/assets/mk/block_high.webp'
import blockHighLow from '@/app/assets/mk/block_high_low.webp'
import duckUnderHigh from '@/app/assets/mk/duck_under_high.webp'
import duckUnderThrow from '@/app/assets/mk/duck_under_throw.webp'
import jumpHitLow from '@/app/assets/mk/jump_hit_low.webp'
import lowBlock from '@/app/assets/mk/low_block.webp'
import lowHit from '@/app/assets/mk/low_hit.webp'
import midBlockLow from '@/app/assets/mk/mid_block_low.webp'
import midHitLow from '@/app/assets/mk/mid_hit_low.webp'
import midHitStanding from '@/app/assets/mk/mid_hit_standing.webp'
import overheadBlock from '@/app/assets/mk/overhead_block.webp'
import overheadHit from '@/app/assets/mk/overhead_hit_low.webp'
import standingHit from '@/app/assets/mk/stand_hit.webp'
import throwGrab from '@/app/assets/mk/throw.webp'
import throwTech from '@/app/assets/mk/throw_tech.webp'
import trade1 from '@/app/assets/mk/trade1.webp'
import trade2 from '@/app/assets/mk/trade2.webp'
import unblockable from '@/app/assets/mk/unblockable.webp'
import liMeiAdvancedView from '@/app/assets/mk1/advanced_view.webp'
import raidenMoveList from '@/app/assets/mk1/raiden_movelist.webp'
import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { Badge } from '@/app/ui/Badge'
import { Callout } from '@/app/ui/Callout'
import { Diagram } from '@/app/ui/Diagram'
import { Flavor } from '@/app/ui/Flavor'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { PageTitle } from '@/app/ui/PageTitle'
import { Pill } from '@/app/ui/Pill'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'
import { createRouteLookup } from '@/lib/routeLinks'

export const navOrder = 3

export const navTitle = 'Anatomy of attacks'

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'How moves work in Mortal Kombat.',
)

const mkRoute = createRouteLookup(MK_BASE_URL)

export default async function Page() {
  return (
    <>
      <PageTitle
        title={navTitle}
        subtitle="Every attack is a commitment. A round is a sequence of commitments.
          Your goal is to come out ahead."
        tags={
          <>
            <Badge primary>
              <GiDeathSkull /> Mortal Kombat
            </Badge>
            <Badge>
              <FaWrench /> Core Mechanics
            </Badge>
          </>
        }
      />

      <Section>
        <p>
          Modern MK games expose each move's <em>frame data</em>. It tells how a
          move works in detail. First, we cover basic attack concepts.
        </p>
      </Section>

      <Section title="Hit vs block vs miss" id="hit-vs-block-vs-miss">
        <p>
          Pressing any of the{' '}
          <Link href={`${MK_BASE_URL}#move-annotations`}>face buttons</Link> or
          the separate Throw button results in an attack. So is any combinations
          of directions and an attack button. For example, <Pill>4</Pill>,{' '}
          <Pill>2</Pill>, <Pill>F3</Pill>, <Pill>B2</Pill> and
          <Pill>BF1</Pill> are all attacks.
        </p>

        <p>
          When one of the characters executes an attack, they can't do anything
          else until the attack finishes. During that time one of three things
          can happen:
        </p>

        <ul className="mb-4 ml-4.5 list-disc">
          <li>
            The attack can <em>hit</em> if the opponent is withing reach and
            isn't blocking.
          </li>

          <li>
            The attack can be <em>blocked</em> if the opponent is within reach
            but is pressing block.
          </li>

          <li>
            The attack can <em>miss</em> if the opponent is not within reach.
          </li>
        </ul>

        <Diagram>
          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Hit</div>
            <Image
              src={standingHit}
              alt="A high punch hitting a standing opponent."
            />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Block</div>
            <Image src={blockHigh} alt="A high punch being blocked." />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Miss</div>
            <Image src={duckUnderHigh} alt="A high punch being ducked under." />
          </div>
        </Diagram>

        <p>
          Also, it is possible for both players to hit each other at the same
          time. This is called a <em>trade</em>.
        </p>

        <Diagram>
          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Punching at the same time</div>
            <Image
              src={trade1}
              alt="A high punch hitting a standing opponent."
            />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>...results in a trade</div>
            <Image src={trade2} alt="A high punch being ducked under." />
          </div>
        </Diagram>

        <ul className="mb-4 ml-4.5 list-disc">
          <li>
            If the attack hits, the target suffers the appropriate damage and{' '}
            <em>hit stun</em>: they cannot act for a period of time. Usually on
            hit, the attacker recovers much sooner than the target.
          </li>

          <li>
            If the attack is blocked, the target suffers block or <em>chip</em>{' '}
            damage and <em>block stun</em>. Both damage and stun are usually
            much lower/shorter than taking a hit. Wether the attacker or target
            recovers faster on block is dependent on the move's frame data.
          </li>

          <li>
            If the attack misses, the target suffers neither damage nor stun,
            but the attacker must still recover. Baiting a miss is central to
            mind games.
          </li>
        </ul>
      </Section>

      <Section title="Block type" id="block-type">
        <p>
          Every move has a Block Type determining how it must be blocked. It's a
          basic rock-paper-scissors game based on{' '}
          <Link href={`${mkRoute('Movement')}#stances`}>stances</Link>.
        </p>

        <ImageWithCaption
          src={raidenMoveList}
          alt="Raiden's MK1 move list in basic view."
          caption="In Mortal Kombat 1, the basic move list of a character shows each move's damage and block type. This is xbox annotations."
          className="max-h-96 object-cover"
        />

        <p>The common attacks based on their block types are:</p>

        <ul className="mb-4 ml-4.5 list-disc">
          <li>
            <strong>High</strong> attacks which{' '}
            <strong>must be blocked standing</strong> but{' '}
            <strong>miss if the target is crouching and not blocking</strong>.
          </li>

          <li>
            <strong>Mid</strong> attacks{' '}
            <strong>must be blocked both if standing or crouching.</strong>
          </li>

          <li>
            <strong>Low</strong> attacks <strong>must be blocked low</strong>.
          </li>

          <li>
            <strong>Overhead</strong> attacks{' '}
            <strong>must be blocked standing</strong>. They{' '}
            <strong>hit crouching targets</strong> even if they are blocking.
          </li>

          <li>
            <strong>Throws connect with standing targers</strong> regardless of
            block, and with{' '}
            <strong>crouching targers if they are blocking</strong>, but{' '}
            <strong>miss crouching targets if they are not blocking</strong>.
            Throws can be escape by pressing 2/4 for forward and 1/3 for
            backward throws. This is called to <em>tech</em> a throw.
          </li>

          <li>
            If the attack has <strong>Unblockable</strong> listed on it block
            type, it will{' '}
            <strong>always cause full damage if it connects</strong>.
          </li>
        </ul>

        <Diagram description="A high attack will still connect if blocked low. A crouching defender must take the risk of not blocking at all to evade it. You can say these are the 'natural' attacks as the most basic standing attacks are usually high. They are very common.">
          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Hit</div>
            <Image
              src={standingHit}
              alt="A high punch hitting a standing opponent."
            />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Block</div>
            <Image src={blockHigh} alt="A high punch being blocked." />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Block</div>
            <Image src={blockHighLow} alt="A high kick being low blocked." />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Miss</div>
            <Image src={duckUnderHigh} alt="A high punch being ducked under." />
          </div>
        </Diagram>

        <Diagram description="Mids are also very common. They cover both standing and crouching targets. This makes ducking under a high attack risky of getting hit by a mid.">
          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Hit</div>
            <Image
              src={midHitStanding}
              alt="A mid kick hitting a standing opponent."
            />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Hit</div>
            <Image
              src={midHitLow}
              alt="A mid kick hitting a crouching opponent."
            />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Block</div>
            <Image src={midBlockLow} alt="A mid kick being low blocked." />
          </div>
        </Diagram>

        <Diagram description="Standing block counters highs and mids. Lows however catch a standing target off guard and often knocks them down. Although every character has a low option, they are less common and mostly performed crouching.">
          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Hit</div>
            <Image
              src={lowHit}
              alt="A low kick hitting a crouching opponent."
            />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Block</div>
            <Image src={lowBlock} alt="A low kick being low blocked." />
          </div>
        </Diagram>

        <Diagram description="A player can hold low block and counter all incomming high, mid and low attacks. This is where overheads come in - they force a high block. All jump-ins are overheads. Standing overheads are rare.">
          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Hit</div>
            <Image
              src={jumpHitLow}
              alt="A jump kick hitting a crouching opponent."
            />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Hit</div>
            <Image
              src={overheadHit}
              alt="An overhead attack hitting a crouching opponent."
            />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Block</div>
            <Image
              src={overheadBlock}
              alt="An overhead attack being blocked."
            />
          </div>
        </Diagram>

        <Diagram description="Throws are block punishes. They mix things up for players who tend to hold block.">
          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Throw</div>
            <Image src={throwGrab} alt="Throw grabbing an opponent." />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Tech</div>
            <Image
              src={throwTech}
              alt="A throw being teched by the opponent."
            />
          </div>

          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Miss</div>
            <Image src={duckUnderThrow} alt="A throw being ducked under." />
          </div>
        </Diagram>

        <Diagram description="Unblockables are mostly special moves. They have a hitbox that must be avoided to skip damage.">
          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Guaranteed damage on hit</div>

            <Image
              src={unblockable}
              alt="A representation of an unblockable attack."
            />
          </div>
        </Diagram>

        <ul className="mb-4 ml-4.5 list-disc">
          <li>Standing block counters all attacks except lows.</li>
          <li>Crouching block counters all attacks except overheads.</li>
          <li>
            Highs are naturally performed standing, lows crouching and overheads
            jumping.
          </li>
          <li>
            Standing low and overhead attacks are rare and valuable as they
            don't require jump-ins or ducking and can be performed on the move.
          </li>
        </ul>

        <p>
          If they keep blocking high, mix in a low attack. If they keep blocking
          low, throw in an overhead. If they keep guessing correctly, trick them
          with a throw.
        </p>

        <h3 id="command-grabs">Command grabs</h3>

        <p>
          Some special moves are throws, and some strings end with a throw.
          These are called <strong>command grabs</strong>. They can be avoided
          but <strong>can't be teched</strong>. If the target is grabbed, they
          take damage. Needless to say, these are rare.
        </p>
      </Section>

      <Section title="Frame data" id="frame-data">
        <p>
          Pressing the advanced view button opens a move's frame data and notes.
        </p>

        <ImageWithCaption
          src={liMeiAdvancedView}
          alt="Li Mei's move list showing frame data."
          caption="The move list's advanced view shows frame data and notes for each move. This is PC anotations."
        />

        <p>
          Frame data measures how long a character takes to execute and recover
          from a move based on whether the move hit, missed, or was blocked. MK,
          same as most fighting games, runs at 60 frames per second using
          frame-based animations instead of time-based ones. This additional
          layer of precision evens out how many frames each move takes.
        </p>

        <h3 id="move-phases">Move phases</h3>

        <p>
          Every attack has a <em>beginning</em>, <em>middle</em>, and{' '}
          <em>end</em>. In the game, these are called <em>start-up</em>,{' '}
          <em>active</em>, and <em>recovery</em> frames. The beginning is
          start-up: the time in frames from pressing the button until the attack
          becomes active. Active frames follow - how long the attack can hit.
          Recovery is the time after hitting until the character can act again.
        </p>

        <Diagram description="We can split any attack into three sections - start-up in blue, active in red and recovery in green.">
          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Start-up &rarr; Active &rarr; Recovery</div>

            <Image
              src={attackPhases}
              alt="The three phases of the basic punch."
            />
          </div>
        </Diagram>

        <h3 id="fast-vs-slow">Fast vs slow</h3>

        <p>
          The speed of a move is determined by its start-up frames or how much
          time it gives the other side to spot it being executed and react.
          Every player has different reaction time, but as a baseline:
        </p>

        <ul className="mb-4 ml-4.5 list-disc">
          <li>
            Moves that have up to 10 frames start-up (1/6th of a second) are
            considered fast.
          </li>
          <li>Moves with start-up frames between 11 and 20 are borderline.</li>
          <li>
            Moves with more than 20 frames start-up (1/3rd of a second) give
            enough time for many players to react.
          </li>
        </ul>

        <p>
          The fastest attacks all characters have are their standing punches.
          They are usually 7 - 9 frames start-up. A 7 frame start-up is
          considered the fastest, which will come into play when discussing safe
          vs unsafe moves.
        </p>

        <p>
          Moves outside of punches vary a lot. A start-up of 13-17 frames can be
          slow for some players and fast for others. By contrast, a 28-frame
          start-up move (almost half a second) gives ample time to react.
        </p>

        <h3 id="safe-vs-unsafe">Safe vs unsafe</h3>

        <p>
          A move's safety is determined by its recovery when hitting, missing,
          or blocking. Recovery is often called advantage.
        </p>

        <p>
          The frames in the <em>Recovery</em> section are valid on miss. The
          opponent has these frames to hit you while you recover. Most attacks
          have slow recovery on miss, making <em>whiff baiting</em> a central
          tactic in <Link href={mkRoute('Neutral')}>Neutral</Link>.
        </p>

        <p>
          <em>Hit advantage</em> shows how much sooner the attacker can act if
          the attack hits. The additional frames after a hit are key for combos
          along with <Link href={mkRoute('Cancelling')}>Canceling</Link>. More
          frames mean more freedom.
        </p>

        <p>
          <em>Block advantage</em> compares recovery after blocking. The value
          can be negative, meaning the defender recovers sooner. Most moves have
          negative block advantage. Some are zero on block, making them neutral
          - both recover simultaneously. Few attacks are positive on block,
          giving the attacker more freedom when blocked. These are called{' '}
          <em>plus frames</em> and enable <em>frame traps and jails</em>.
        </p>

        <p>
          Player A throws an attack which Player B blocks. If A's attack is
          minus on block and B counter-attacks immediately, B's attack needs its
          start-up frames to activate. B's attack must have shorter start-up
          than A's block disadvantage to hit.
        </p>

        <Callout title="Actual disadvantage on block">
          <p>
            Continuing the above example: if A's attack is -10 on block, B can
            hit them if their counter-attack has less than 10 start-up frames.
            If that is a regular 7-frame start-up punch, they can punish A.{' '}
            <em>Provided they react within 2 frames of recovery</em>. If they
            take 4 frames to react, their attack won't hit.
          </p>

          <ul className="mb-4 ml-4.5 list-disc">
            <li>
              Blocking a -10 on block move then immediately counter-attacking
              with a 7-frame start-up move will hit with 3 frames to spare: -10
              + 7 = -3.
            </li>

            <li>
              Blocking the same attack and reacting 2 frames after recovery will
              hit with 1 frame to spare: -10 + 7 + 2 = -1.
            </li>

            <li>
              Reacting 4 frames later, however, will allow A to block: -10 + 7 +
              4 = 1.
            </li>

            <li>
              Blocking a -10 on block move then immediately counter with a 10
              start-up move will hit if your timing is perfect: -10 + 10 = 0.
            </li>

            <li>
              Blocking a -10 on block move then countering with a 12 start-up
              attack will never work: -10 + 12 = 2. That is unless the attacker
              does anything but block.
            </li>
          </ul>
        </Callout>

        <p>
          All of the above depends on range. Maybe A throws a projectile from
          across the screen. B has quick attacks to counter after block, but can
          they reach?
        </p>

        <p>So what makes an attack safe or unsafe?</p>

        <p className="font-bold">
          If most characters' fastest attack is 7 frames per second, anything
          with more than -6 Block Advantage is safe.
        </p>

        <p>
          A -7 on block move is unsafe if the counterattack is that fast. -7 and
          -8 on block moves provide little time to react, making them
          effectively safe.
        </p>

        <p>
          Most special moves and many longer-reaching or damaging moves are
          unsafe on block. Unsafe attacks produce better effects but should be
          used carefully - in a combo, for example.
        </p>

        <h3 id="punish">Punish and Counter</h3>

        <p className="font-bold">
          A Punish is a counterattack that hits an unsafe attack as it recovers.
        </p>

        <p>
          The attack must be fast enough and the opponent within reach. A Punish
          popup appears on screen. If your counterattack starts at the exact
          frame of recovery after blocking, a Reversal Punish popup appears.
        </p>

        <p>
          Evading an attack avoids block damage and leaves more time to react.
        </p>

        <p className="font-bold">
          A Counter is any attack that hits an opponent during their attack's
          start-up.
        </p>

        <h3 id="space-control">Space control</h3>

        <p>
          Start-ups and recoveries vary widely between moves. What about active
          frames? Most attacks have short active frames - 2 to 6 frames. But
          some moves and most projectiles remain active much longer.
        </p>

        <p className="font-bold">
          Moves with long active frames are good for controlling space.
        </p>

        <p>
          They eat space away from the opponent. They must respect their
          extended presence and trajectory. This involves staying put and
          blocking/ducking. Facing a space-controlling move, committing to hasty
          actions like jumping or dashing becomes risky.
        </p>
      </Section>

      <Section title="Beyond the move list" id="beyond-the-move-list">
        <Flavor>
          This section covers attack traits not listed in frame data.
        </Flavor>

        <p>Some attack characteristics aren't in the data sheets.</p>

        <h3 id="launch">Launch</h3>
        <h3 id="knockdown">Knockdown</h3>

        <p>
          Some attacks knock the opponent down, giving better advantage on hit.
        </p>
      </Section>

      <Section title="Other terms" id="other-terms">
        <Flavor>Community terms related to attacks.</Flavor>

        <h3 id="pokes">Pokes</h3>

        <p>
          A poke is any low-commitment attack - safe on block or from a
          distance. It's a check: Are they focused? Judging distance correctly?
          Poking scouts your opponent's habits and reactions.
        </p>

        <p>
          <strong>Mids are the best pokes</strong> as they can't be ducked.
          Range, speed, and safety are key considerations.
        </p>
      </Section>

      <Link className="flex gap-2 items-center" href={mkRoute('Cancelling')}>
        <MdChevronRight /> Next: Cancelling
      </Link>
    </>
  )
}
