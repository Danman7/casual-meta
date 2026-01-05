import Image from 'next/image'

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
import raidenMoveList from '@/app/assets/mk1/raiden_movelist.webp'
import { MK_TITLE } from '@/app/constants'
import { Flavor } from '@/app/ui/Flavor'
import { Graphic } from '@/app/ui/Graphic'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { PageTitle } from '@/app/ui/PageTitle'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 3

export const navTitle = 'Anatomy of an attack'

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
          This page explores in detail how attacks and blocking work in Mortal
          Kombat. It is a basis for evaluating moves and understanding the game
          in general.
        </Flavor>
      </Section>

      <Section title="Hit vs block vs miss" id="hit-vs-block-vs-miss">
        <p>
          Every attack takes some time to execute during which the attacker
          won’t be able to do anything else. Both characters can attack at the
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
          block (aka. chip) damage. The stun from blocking is much shorter than
          from taking a hit. The target may or may not have time to
          counterattack. This is the essence of safe vs. unsafe attacks.
        </p>

        <p>
          If an attack is thrown but the opponent is not within reach, it will
          miss. This is the best outcome for the target. While the attacker
          recovers, the opponent is free to act. The most common term for
          missing is a <em>whiff</em>.
        </p>

        <p>
          All scenarios involve damage and stun. Stun is the basis of{' '}
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
          Underneath all the mechanics there is a basic rock-paper-scissors game
          based on stances. Every move has a Block Type that determines how it
          must be blocked.
        </p>

        <p>
          A <strong>High</strong> attack{' '}
          <strong>must be blocked if standing</strong>, but it{' '}
          <strong>will miss if crouching</strong>. High attacks are common. Most
          are performed while standing, retaining the character's mobility.
        </p>

        <Graphic description="A high attack will still connect with a target that is both crouching and blocking. In order to completely avoid the stun, you must take a risk and duck without blocking.">
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
        </Graphic>

        <p>
          A <strong>Mid</strong> attack{' '}
          <strong>must be blocked both if standing or crouching.</strong> Mids
          are also common.
        </p>

        <Graphic description="Mids, especially advancing ones, are designed as block checks. Here, ducking under the attack won't work, forcing the opponent to block.">
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
        </Graphic>

        <p>
          A <strong>Low</strong> attack <strong>must be blocked low</strong>.
          Low moves are less common and usually involve crouching to perform and
          result in a knockdown. Standing low moves are even rarer as they are
          quick and retain mobility.
        </p>

        <Graphic
          description="A
        standing target will get hit by a low attack. Lows mix things up for opponents that like to keep blocking high."
        >
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
        </Graphic>

        <p>
          So far, blocking low counters every attack type. This is where
          overheads come in. An <strong>Overhead</strong> attack{' '}
          <strong>must be blocked standing</strong>. Like lows, overhead moves
          are less common. All jump-in attacks are overheads. Standing overheads
          are rare.
        </p>

        <Graphic description="Overheads force a defender to stand up and block. This prevents players from crouch blocking for a long time.">
          <div className="flex flex-col font-semibold items-center">
            <div>Hit</div>
            <Image src={jumpHitLow} alt="Jimp kick hits crouching opponent." />
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
        </Graphic>

        <p>
          Overheads are usually slower than mids and lows. If the defenders
          spots or predicts an overhead coming while crouch blocking, he can
          release the down button while still holding block. His character will
          stand up to block the overhead. After that they can press down again
          to meet any follow-up mids or lows. This is called{' '}
          <strong>fuzzy blocking</strong> (or fuzzing, block os, or block
          switching). Athough it sounds simple, it takes time to learn which
          attacks of which characters can be fuzzy blocked and when.
        </p>

        <p>
          Technically, it is possible for a player to block all attacks if they
          are really good at it. However,{' '}
          <strong>throws skip any blocking</strong>, be it standing or ducking.
          If the target is within reach they will get grabbed. Unless A: they
          duck under without blocking or B: tech press the correct button in
          time to break the throw. B is commonly known as{' '}
          <strong>teching the throw</strong>. Throws can go in two directions -
          forward or backwards.
        </p>

        <Graphic description="Throws mix things up for good blockers. Pressing 2/4 for forward and 1/3 for backward throws will tech them. Taking a risk and ducking will skip the grab.">
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
        </Graphic>

        <p>
          Some special mover are throws, while some strings end up with a throw.
          These are called <strong>command grabs</strong>. They can be avoided,
          but <strong>can't be teched</strong>. If the target is grabbed they
          are going for a ride no matter what they press.
        </p>

        <p>
          Some moves have <strong>Unblockable</strong> listed on their Block
          Type. If such a move connects with the target, they will take damage
          regardless of blocking.
        </p>

        <Graphic description="Unblockables are mostly special moves. They have a certain hitbox that must be avoided in order to skip damage.">
          <div className="flex flex-col font-semibold items-center">
            <div>Guaranteed damage on hit</div>

            <Image
              src={unblockable}
              alt="A representation of an unblockable attack."
            />
          </div>
        </Graphic>

        <p className="font-bold">
          Every block has the appropriate counter. If they keep blocking high,
          mix in a low attack. If they keep blocking low, throw in an overhead.
          If they keep guessing correctly, trick them with a throw.
        </p>
      </Section>

      <Section title="Frame data" id="frame-data">
        <p>
          Frame data looks intimidating, but understanding it helps you judge
          characters and situations without online guides. The in-game tutorial
          explains it visually.
        </p>

        <ImageWithCaption
          src={raidenMoveList}
          alt="Raiden's move list showing frame data."
          caption="Raiden's move list provides detailed frame data for each attack."
        />

        <p>
          MK runs at 60 frames per second using frame-based animations instead
          of time-based ones (like most fighting games). This gives accuracy—you
          know exactly how many frames each move takes.
        </p>

        <h3 id="move-phases">Move phases</h3>

        <p>
          Each move has three segments—startup, active, and recovery. When a
          player presses a button, the startup begins. This takes the number of
          frames listed next to startup. A 15f startup means the attack takes 15
          frames to become active. During startup, the attack is not yet active.
        </p>

        <h3 id="fast-vs-slow">Fast vs slow</h3>

        <p>
          If the opponent steps out of range during startup, the attack will
          miss. If they launch an attack with fewer startup frames, they can
          interrupt and hit first.
        </p>

        <h3 id="safe-vs-unsafe">Safe vs unsafe</h3>
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
      </Section>

      <Section title="Other terms" id="other-terms">
        <Flavor>
          This section clarifies community terms related to attacks.
        </Flavor>

        <h3 id="pokes">Pokes</h3>

        <p>
          A poke is any low-commitment attack—safe on block or from a distance.
          It's a check: Are they focused? Judging distance correctly? Poking
          scouts your opponent's habits and reactions.
        </p>

        <p>
          <strong>Mids are the best pokes</strong> as they can't be ducked.
          Range, speed, and safety are key considerations.
        </p>
      </Section>
    </>
  )
}
