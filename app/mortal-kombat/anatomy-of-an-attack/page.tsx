import Image from 'next/image'
import Link from 'next/link'

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
import unblockable from '@/app/assets/mk/unblockable.webp'
import liMeiAdvancedView from '@/app/assets/mk1/advanced_view.webp'
import raidenMoveList from '@/app/assets/mk1/raiden_movelist.webp'
import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { Callout } from '@/app/ui/Callout'
import { Diagram } from '@/app/ui/Diagram'
import { Flavor } from '@/app/ui/Flavor'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { PageTitle } from '@/app/ui/PageTitle'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 3

export const navTitle = 'Anatomy of attacks'

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'How moves work in Mortal Kombat.',
)

export default async function Page() {
  return (
    <>
      <PageTitle title={navTitle} subtitle="Core mechanics" />

      <Section>
        <Flavor>
          This page explores the details of attacking and blocking in Mortal
          Kombat. It is the basis for evaluating moves and understanding the
          game in general.
        </Flavor>

        <p>
          Modern MK games expose each move's <em>frame data</em>. It tells the
          story of how that move works in detail, but it looks more complex than
          it is. To give context and ease into it, we will first cover some very
          basic concepts about attacks.
        </p>
      </Section>

      <Section title="Hit vs block vs miss" id="hit-vs-block-vs-miss">
        <p>
          Every attack takes some time to execute during which the attacker
          won't be able to do anything else. Both characters can attack at the
          same time.
        </p>

        <p>
          If one happens to be within reach when an attack is active, it will
          register a hit, causing damage and hit stun. The one being hit cannot
          act for a period determined by the frame data, leaving time for the
          attacker to move or follow up.
        </p>

        <p>
          If both players are within reach of each other's attack while active,
          they will both take a hit. This is called a <strong>trade</strong>.
          Which one recovers quicker depends on the attack's frame data.
        </p>

        <p>
          If an attack connects but the target is blocking, it will only cause
          block (also known as chip) damage. The stun from blocking is much
          shorter than from taking a hit. The target may or may not have time to
          counterattack. This is the essence of safe vs. unsafe attacks.
        </p>

        <p>
          If an attack is thrown but the opponent is not within reach, it will
          miss. This is the best outcome for the target. While the attacker
          recovers, the opponent is free to act. The most common term for
          missing is a <em>whiff</em>.
        </p>

        <p>
          These scenarios involve damage and/or stun. Stun is the basis of{' '}
          <em>frame traps</em>. Whoever recovers first acts first. When you
          invest frames into a move, you may come out on top or it may backfire.
        </p>

        <p className="font-bold">
          Every attack is a commitment. A round is a sequence of commitments.
          Your goal is for the total sum of those to be positive for you.
        </p>
      </Section>

      <Section title="Block type" id="block-type">
        <p>
          Underneath all the mechanics, there is a basic rock-paper-scissors
          game based on stances. Every move has a Block Type that determines how
          it must be blocked.
        </p>

        <ImageWithCaption
          src={raidenMoveList}
          alt="Raiden's move list showing frame data."
          caption="Here we see a section of Raiden's move list, in simple view, listing damage and block type. This is from Mortal Kombat 1, but the other games also have similar move lists."
        />

        <p>
          A <strong>High</strong> attack{' '}
          <strong>must be blocked if standing</strong>, but it{' '}
          <strong>will miss if crouching</strong>. High attacks are common. Most
          are performed while standing, retaining the character's mobility.
        </p>

        <Diagram description="A high attack will still connect with a target that is both crouching and blocking. In order to completely avoid the stun, you must take a risk and duck without blocking.">
          <div className="flex flex-col font-semibold items-center">
            <div>Hit</div>
            <Image
              src={standingHit}
              alt="A high punch hitting a standing opponent."
            />
          </div>

          <div className="flex flex-col font-semibold items-center">
            <div>Block</div>
            <Image src={blockHigh} alt="A high punch being blocked." />
          </div>

          <div className="flex flex-col font-semibold items-center">
            <div>Block</div>
            <Image src={blockHighLow} alt="A high kick being low blocked." />
          </div>

          <div className="flex flex-col font-semibold items-center">
            <div>Miss</div>
            <Image src={duckUnderHigh} alt="A high punch being ducked under." />
          </div>
        </Diagram>

        <p>
          A <strong>Mid</strong> attack{' '}
          <strong>must be blocked whether standing or crouching.</strong> Mids
          are also common.
        </p>

        <Diagram description="Mids, especially advancing ones, are designed as block checks. Here, ducking under the attack won't work, forcing the opponent to block.">
          <div className="flex flex-col font-semibold items-center">
            <div>Hit</div>
            <Image
              src={midHitStanding}
              alt="A mid kick hitting a standing opponent."
            />
          </div>

          <div className="flex flex-col font-semibold items-center">
            <div>Hit</div>
            <Image
              src={midHitLow}
              alt="A mid kick hitting a crouching opponent."
            />
          </div>

          <div className="flex flex-col font-semibold items-center">
            <div>Block</div>
            <Image src={midBlockLow} alt="A mid kick being low blocked." />
          </div>
        </Diagram>

        <p>
          A <strong>Low</strong> attack <strong>must be blocked low</strong>.
          Low moves are less common and usually involve crouching to perform and
          result in a knockdown. Standing low moves are even rarer as they are
          quick and retain mobility.
        </p>

        <Diagram description="A standing target will get hit by a low attack. Lows mix things up for opponents that like to keep blocking high.">
          <div className="flex flex-col font-semibold items-center">
            <div>Hit</div>
            <Image
              src={lowHit}
              alt="A low kick hitting a crouching opponent."
            />
          </div>

          <div className="flex flex-col font-semibold items-center">
            <div>Block</div>
            <Image src={lowBlock} alt="A low kick being low blocked." />
          </div>
        </Diagram>

        <p>
          So far, blocking low counters every attack type. This is where
          overheads come in. An <strong>Overhead</strong> attack{' '}
          <strong>must be blocked standing</strong>. Like lows, overhead moves
          are less common. All jump-in attacks are overheads. Standing overheads
          are rare.
        </p>

        <Diagram description="Overheads force a defender to stand up and block. This prevents players from crouch blocking for a long time.">
          <div className="flex flex-col font-semibold items-center">
            <div>Hit</div>
            <Image
              src={jumpHitLow}
              alt="A jump kick hitting a crouching opponent."
            />
          </div>

          <div className="flex flex-col font-semibold items-center">
            <div>Hit</div>
            <Image
              src={overheadHit}
              alt="An overhead attack hitting a crouching opponent."
            />
          </div>

          <div className="flex flex-col font-semibold items-center">
            <div>Block</div>
            <Image
              src={overheadBlock}
              alt="An overhead attack being blocked."
            />
          </div>
        </Diagram>

        <p>
          Overheads are usually slower than mids and lows. If the defender spots
          or predicts an overhead coming while crouch-blocking, they can release
          the down button while still holding block. Their character will stand
          up to block the overhead. After that, they can press down again to
          meet any follow-up mids or lows. This is called{' '}
          <strong>fuzzy blocking</strong> (or fuzzing, block OS, or block
          switching). Although it sounds simple, it takes time to learn which
          attacks can be fuzzy blocked, and when.
        </p>

        <p>
          Technically, it is possible for a player to block all attacks if they
          are really good at it. However,{' '}
          <strong>throws skip any blocking</strong>, be it standing or ducking.
          If the target is within reach, they will get grabbed - unless (A) they
          duck without blocking or (B) they press the correct button in time to
          break the throw. (B) is commonly known as{' '}
          <strong>teching the throw</strong>. Throws can go in two directions -
          forward or backward.
        </p>

        <Diagram description="Throws mix things up for good blockers. Pressing 2/4 for forward and 1/3 for backward throws will tech them. Taking a risk and ducking will skip the grab.">
          <div className="flex flex-col font-semibold items-center">
            <div>Throw</div>
            <Image src={throwGrab} alt="Throw grabbing an opponent." />
          </div>

          <div className="flex flex-col font-semibold items-center">
            <div>Tech</div>
            <Image
              src={throwTech}
              alt="A throw being teched by the opponent."
            />
          </div>

          <div className="flex flex-col font-semibold items-center">
            <div>Miss</div>
            <Image src={duckUnderThrow} alt="A throw being ducked under." />
          </div>
        </Diagram>

        <p>
          Some special moves are throws, while some strings end with a throw.
          These are called <strong>command grabs</strong>. They can be avoided,
          but <strong>can't be teched</strong>. If the target is grabbed, they
          are going for a ride no matter what they press.
        </p>

        <p>
          Some moves have <strong>Unblockable</strong> listed on their Block
          Type. If such a move connects with the target, they will take damage
          regardless of blocking.
        </p>

        <Diagram description="Unblockables are mostly special moves. They have a certain hitbox that must be avoided in order to skip damage.">
          <div className="flex flex-col font-semibold items-center">
            <div>Guaranteed damage on hit</div>

            <Image
              src={unblockable}
              alt="A representation of an unblockable attack."
            />
          </div>
        </Diagram>

        <p className="font-bold">
          Every block has the appropriate counter. If they keep blocking high,
          mix in a low attack. If they keep blocking low, throw in an overhead.
          If they keep guessing correctly, trick them with a throw.
        </p>
      </Section>

      <Section title="Frame data" id="frame-data">
        <p>
          Pressing the advanced view button while highlighting a move in the
          move list opens up its frame data and notes.
        </p>

        <ImageWithCaption
          src={liMeiAdvancedView}
          alt="Li Mei's move list showing frame data."
          caption="Here we see a section of Li Mei's special moves list, in advanced view."
        />

        <p className="font-bold">
          Frame data measures how long it takes for a character to execute and
          recover from a move based on whether the move hit, missed, or was
          blocked.
        </p>

        <p>
          MK runs at 60 frames per second using frame-based animations (like
          most fighting games) instead of time-based ones. This provides an
          additional layer of accuracy - you know exactly how many frames each
          move takes. Understanding frame data is essential to learning the
          strengths and weaknesses of a move, hence its purpose.
        </p>

        <h3 id="move-phases">Move phases</h3>

        <p>
          Every attack can be broken down into a <em>beginning</em>,{' '}
          <em>middle</em>, and <em>end</em>. In the game, these are respectively
          called <em>start-up</em>, <em>active</em>, and <em>recovery</em>{' '}
          frames.
        </p>

        <p>
          The beginning is the start-up: the time from pressing the button until
          the attack becomes active. This is followed by the active frames - how
          long the attack can hit. Finally, recovery is the time it takes after
          hitting for the character to be free to act again.
        </p>

        <Diagram description="This is a representation of a regular punch broken down into its three phases.">
          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>
              <span className="text-blue-700">Start-up</span> &rarr;{' '}
              <span className="text-red-700">Active</span>
              &rarr; <span className="text-green-700">Recovery</span>
            </div>

            <Image
              src={attackPhases}
              alt="The three phases of an attack in blue, red and green."
            />
          </div>
        </Diagram>

        <h3 id="fast-vs-slow">Fast vs slow</h3>

        <p className="font-bold">
          The speed of a move is determined by its start-up frames.
        </p>

        <p>
          Whether a move feels fast or slow is entirely subjective to the
          players. Some people can consistently react within 10 frames, but most
          of us need more time. This is why we learn to read the opponent and
          plan ahead.
        </p>

        <p className="font-bold">
          For a baseline, we can consider 10 frames (1/6th of a second) and
          below to be quick, while 20 frames (1/3rd of a second) and above to be
          slow.
        </p>

        <p>
          In general, punches are quick, kicks and special moves are slower.
          Most punches have 7-8 frames start-up, so that is considered the
          standard for fastest attacks. This will come into play when discussing
          safe and unsafe moves.
        </p>

        <p>
          Moves outside of punches vary a lot. A start-up of 13-17 frames is in
          between fast and slow. By contrast, a 28-frame start-up gives ample
          time to react.
        </p>

        <h3 id="safe-vs-unsafe">Safe vs unsafe</h3>

        <p className="font-bold">
          The safety of a move is determined by its recovery in the context of
          hitting, missing or blocking. Recovery is often called advantage.
        </p>

        <p>
          The frames listed in the <em>Recovery</em> section of the frame data
          are valid only on miss. If that happens, the opponent will have this
          amount of frames to hit you while you recover. Most attacks have slow
          recovery on miss making <em>whiff (miss) baiting</em> a central tactic
          in <Link href={`${MK_BASE_URL}/neutral`}>Neutral</Link>.
        </p>

        <p>
          <em>Hit advantage</em> shows how much sooner the attacker will be able
          to act before the defender if the attack hits. The additional frames
          given after a hit are a key mechanic in combos along with{' '}
          <Link href={`${MK_BASE_URL}/cancelling`}>Canceling</Link>. The longer
          the frames the bigger the freedom, thus the advantage on hit.
        </p>

        <p>
          <em>Block advantage</em> compares the recovery of an attack after it
          is blocked. Here the value can be a negative number as well. This
          indicates that the defender will recover sooner than the attacker on
          block. In fact, most of the moves in the game have negative block
          advantage. Some are zero on block, which means they are neutral - both
          attacker and defender recover at the same time. Very few attacks are
          positive on block, which gives the attacker more freedom even if the
          move is blocked. These are called <em>plus frames</em> and are the
          basis for <em>frame traps and jails</em>.
        </p>

        <p>
          Player A throws an attack which Player B blocks. Even if A's attack is
          minus on block and B counter-attacks the moment they recover, B's
          attack will still take its start-up frames to activate. This means
          that B's attack must have shorter start-up than the block disadvantage
          of A's move in order to hit.
        </p>

        <Callout title="Actual disadvantage on block">
          <p>
            Continuing the above example: if A's attack is -10 on block, then B
            can hit them if their counter-attack has less than 10 start-up
            frames. If that is a regular 7-frame start-up punch, they can
            definitely punish A.{' '}
            <em>Provided they react within 2 frames of recovery</em>. If they
            take 4 frames to react, their attack won't hit.
          </p>

          <ul className="list-disc list-inside">
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
          All of the above also depends on range. Maybe A throws a projectile
          from across the screen. Sure, B has enough quick attacks to counter
          after block, but can they reach?
        </p>

        <p>So what makes an attack safe or unsafe?</p>

        <p className="font-bold">
          If most characters' fastest attack is 7 frames per second, then
          anything with more than -6 Block Advantage is completely safe.
        </p>

        <p>
          A -7 on block move is technically unsafe, of course, if the
          counterattack is that fast. Most of the time, -7 and -8 on block moves
          provide little enough time to react that they prove to be safe.
        </p>

        <p>
          Almost all special moves and many of the longer reaching or damaging
          moves are unsafe on block. Unsafe attacks may produce better effects,
          but needless to say should be used carefully - in a combo for example.
        </p>

        <h3 id="punish">Punish and Counter</h3>

        <p className="font-bold">
          A Punish is a counterattack that hits an unsafe attack as it recovers.
        </p>

        <p>
          That is if the attack is fast enough and the opponent is within reach.
          During play, it is indicated by a Punish popup on the side of the
          screen. If your counterattack starts at the exact frame of recovery
          after blocking, a Reversal Punish popup will appear.
        </p>

        <p>
          Evading an attack completely, not only avoids block damage, but also
          leaves more time to properly react.
        </p>

        <p className="font-bold">
          A Counter is any attack that hits an opponent during their attack's
          start-up.
        </p>

        <h3 id="space-control">Space control</h3>

        <p>
          We covered how important start-ups and recoveries are and how big is
          the frame difference from move to move. What about active frames?
          There is much less variety here, as the vast majority of attacks have
          short active frames - usually between 2 and 6 frames. But some moves
          and most projectiles remain active much longer.
        </p>

        <p className="font-bold">
          Moves with long active frames are good for controlling space.
        </p>

        <p>
          You can think of them as eating space away from the opponent. They
          must respect their extended presence and trajectory. Usually this
          involves staying put and blocking/ducking. Facing a space controlling
          move it becomes risky to commit hasty actions like jumping or dashing.
        </p>
      </Section>

      <Section title="Beyond the move list" id="beyond-the-move-list">
        <Flavor>
          This section covers attack traits that are not listed in the frame
          data.
        </Flavor>

        <p>
          There are some attack characteristics that are not mentioned in the
          data sheets.
        </p>

        <h3 id="launch">Launch</h3>
        <h3 id="knockdown">Knockdown</h3>

        <p>
          Some attacks knock the opponent down on the ground. This usually
          involves a much better advantage on hit.
        </p>
      </Section>

      <Section title="Other terms" id="other-terms">
        <Flavor>
          This section clarifies community terms related to attacks.
        </Flavor>

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
    </>
  )
}
