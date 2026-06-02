import Image from 'next/image'
import Link from 'next/link'

import attackPhases from '@/app/assets/mk/attack_phases.webp'
import blockHigh from '@/app/assets/mk/block_high.webp'
import blockHighLow from '@/app/assets/mk/block_high_low.webp'
import disjointed from '@/app/assets/mk/disjointed.webp'
import duckUnderHigh from '@/app/assets/mk/duck_under_high.webp'
import duckUnderThrow from '@/app/assets/mk/duck_under_throw.webp'
import jumpHitLow from '@/app/assets/mk/jump_hit_low.webp'
import knockback from '@/app/assets/mk/knockback.webp'
import launch from '@/app/assets/mk/launch.webp'
import lowBlock from '@/app/assets/mk/low_block.webp'
import lowHit from '@/app/assets/mk/low_hit.webp'
import midBlockLow from '@/app/assets/mk/mid_block_low.webp'
import midHitLow from '@/app/assets/mk/mid_hit_low.webp'
import midHitStanding from '@/app/assets/mk/mid_hit_standing.webp'
import overheadBlock from '@/app/assets/mk/overhead_block.webp'
import overheadHit from '@/app/assets/mk/overhead_hit_low.webp'
import projectile from '@/app/assets/mk/projectile.webp'
import standingHit from '@/app/assets/mk/stand_hit.webp'
import throwGrab from '@/app/assets/mk/throw.webp'
import throwTech from '@/app/assets/mk/throw_tech.webp'
import trade1 from '@/app/assets/mk/trade1.webp'
import trade2 from '@/app/assets/mk/trade2.webp'
import liMeiAdvancedView from '@/app/assets/mk1/advanced_view.webp'
import raidenMoveList from '@/app/assets/mk1/raiden_movelist.webp'
import { mkHref, mkMetadata, mkPage, mkSection } from '@/app/siteMap'
import { Diagram } from '@/app/ui/Diagram'

const page = mkPage('anatomyOfAttacks')

export const metadata = mkMetadata('anatomyOfAttacks')

export default async function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <section>
        <p>
          Modern MK games expose frame data for each move, which shows how it
          behaves in detail. MKX, MK11, and MK1 include this feature. This
          information is critical to understanding how attacks work, but first,
          let's cover the basics.
        </p>
      </section>

      <section>
        <h2 id="hit-vs-block-vs-miss">Hit vs Block vs Miss</h2>

        <p>
          Pressing any{' '}
          <Link href={`${mkSection.rootUrl}#move-annotations`}>face</Link> or
          the throw button results in an attack. The player that initiates the
          attack is the <em>attacker</em>, while the other one is the{' '}
          <em>defender</em> or the <em>target</em>. Once an attack starts, the
          attacker cannot act until it ends. One of three outcomes can occur:
        </p>

        <ul className="space-y-2">
          <li>
            <strong>Hit:</strong> The defender is within range of the attack and
            not blocking. Then the defender takes damage and hit stun, while the
            attacker usually recovers first.
          </li>

          <li>
            <strong>Block:</strong> The defender is within range of the attack
            and blocking. Then the defender takes reduced damage and block stun.
            Who recovers first depends on frame data.
          </li>

          <li>
            <strong>Miss (a.k.a. whiff):</strong> The defender is not within
            range of the attack. The defender takes no damage or stun, but the
            attacker must still recover.
          </li>
        </ul>

        <p>
          Forcing whiffs is central to mind games as it gives the biggest
          advantage to the defender.
        </p>

        <div className="flex-list font-bold justify-center">
          <div className="flex-center flex-col w-full md:w-auto">
            <div>Hit</div>
            <div className="md:h-46 flex items-end">
              <Image
                src={standingHit}
                alt="A high punch hitting a standing opponent."
              />
            </div>
          </div>

          <div className="flex-center flex-col w-full md:w-auto">
            <div>Block</div>
            <div className="md:h-46 flex items-end">
              <Image src={blockHigh} alt="A high punch being blocked." />
            </div>
          </div>

          <div className="flex-center flex-col w-full md:w-auto">
            <div>Miss</div>
            <div className="md:h-46 flex items-end">
              <Image
                src={duckUnderHigh}
                alt="A high punch being ducked under."
              />
            </div>
          </div>
        </div>

        <p>
          Players can also hit each other at the same time. This is called a{' '}
          <em>trade</em>.
        </p>

        <div className="flex-list font-bold justify-center">
          <div className="flex-center flex-col w-full md:w-auto">
            <div>Punching at the same time</div>
            <div className="md:h-46 flex items-end">
              <Image
                src={trade1}
                alt="A high punch hitting a standing opponent."
              />
            </div>
          </div>

          <div className="flex-center flex-col w-full md:w-auto">
            <div>...results in a trade</div>
            <div className="md:h-46 flex items-end">
              <Image src={trade2} alt="A high punch being ducked under." />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 id="block-type">Block type</h2>

        <p>
          Each move has a block type that determines how it must be defended.
          It's a rock-paper-scissors game based on{' '}
          <Link href={mkHref('movement', 'stances')}>stances</Link>. A move can
          be either a normal attack or a special.
        </p>

        <Image
          src={raidenMoveList}
          alt="Raiden's MK1 move list in basic view."
          className="picture my-6 max-h-96 object-cover"
        />

        <h3 id="high">High</h3>

        <ul>
          <li>High attacks always hit a standing defender.</li>
          <li>Also hit a crouching one if they are blocking.</li>
          <li>Miss a crouching defender if they are not blocking.</li>
        </ul>

        <Diagram
          description="High attacks are fairly common. They are usually performed standing,
          offering the best mobility for the attacker."
        >
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

        <h3 id="mid">Mid</h3>
        <ul>
          <li>Mid attacks hit both standing and crouching defenders.</li>
          <li>
            If a defender is within reach, they must block a mid regardless of
            stance.
          </li>
        </ul>

        <Diagram description="Mids are also very common and also mostly performed standing. They make ducking under a high attack risky.">
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

        <h3 id="low">Low</h3>
        <ul>
          <li>Low attacks must be blocked low.</li>
          <li>They hit standing defenders regardless of blocking.</li>
          <li>Often knock down the opponent.</li>
        </ul>

        <Diagram description="Most low attacks are performed while crouching. Low attacks are less common. Standing lows - even more so. Still, every character has at least a few crouching low attacks.">
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

        <h3 id="overhead">Overhead</h3>
        <ul>
          <li>Overheads must be blocked high.</li>
          <li>They hit crouching defenders, even if they are blocking.</li>
          <li>All jump-ins are overhead.</li>
        </ul>

        <Diagram description="Standing overheads are rare. They make holding low block for extended periods dangerous.">
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

        <h3 id="throws">Throw</h3>

        <p>
          A throw is a unique attack where if the defender is grabbed, a short
          animation plays, then they are thrown either forward or backward. A
          back throw switches sides.
        </p>

        <ul>
          <li>Throws grab standing defenders, regardless of block.</li>
          <li>They grab crouch-blocking defenders, same as High attacks.</li>
          <li>
            They miss crouching defenders that aren't blocking, same as High
            attacks.
          </li>
        </ul>

        <p>
          Even if the throw grabs the defender, the latter still has a second to
          react and break the throw. Pressing <span className="badge">1</span>{' '}
          or <span className="badge">3</span> for forward or{' '}
          <span className="badge">2</span> or <span className="badge">4</span>{' '}
          for back throws causes them to fail. This is called <em>teching</em> a
          throw.
        </p>

        <Diagram description="Throws are designed for punishing players who are holding block.">
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

        <h3 id="command-grabs">Command grabs</h3>

        <p>
          Some special moves and strings end in throws. These are command grabs.
        </p>

        <ul>
          <li>
            They cannot be teched. If they grab, the defender takes damage.
          </li>

          <li>They are rare and high-impact.</li>
        </ul>

        <h3 id="mix-up">Mix-ups</h3>

        <ul>
          <li>
            Standing block stops highs, mids and overheads, but{' '}
            <strong>not low</strong> attacks.
          </li>
          <li>
            Crouching block stops highs, mids and lows, but{' '}
            <strong>not overhead</strong> attacks.
          </li>
          <li>No block stops a throw.</li>
        </ul>

        <p>
          One way to break a patient player's defense is to mix up the attack
          types. Making your opponent guess is the essence of <em>mix-ups</em>:
        </p>

        <ul>
          <li>Lows mess up opponents that keep blocking high.</li>
          <li>Overheads mess up opponents that keep blocking low.</li>
          <li>Throws mess up opponents that keep guessing correctly.</li>
        </ul>
      </section>

      <section>
        <h2 id="frame-data">Frame data</h2>

        <Image
          src={liMeiAdvancedView}
          alt="Li Mei's move list showing frame data."
          className="picture my-6"
        />
        <p>
          Frame data measures how long a move takes to execute and recover in
          frames. MK is capped at 60 frames per second.
        </p>
        <h3 id="move-phases">Move phases</h3>

        <p>Each attack has three phases in sequence:</p>

        <ul>
          <li>
            <strong>Start-up:</strong> Time from pressing the attack button
            until the attack becomes active.
          </li>
          <li>
            <strong>Active:</strong> Time the attack can hit.
          </li>
          <li>
            <strong>Recovery:</strong> Time before the attacker can act again.
          </li>
        </ul>

        <Diagram description="Start-up in blue, active in red, and recovery in green.">
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
          Speed is defined by start-up frames. Standing punches are usually the
          fastest moves at 7–9 frames start-up. What counts as fast is very
          subjective, but in general:
        </p>

        <ul>
          <li>Fast: 10 frames or less (1/6th of a second).</li>
          <li>Borderline: 11–20 frames.</li>
          <li>Slow: More than 20 frames (1/3rd of a second).</li>
        </ul>

        <h3 id="safe-vs-unsafe">Safe vs unsafe</h3>

        <p>Frame data shows:</p>

        <ul>
          <li>
            <strong>Recovery:</strong> Time before the attacker can act again.
          </li>

          <li>
            <strong>Hit advantage:</strong> Frames the attacker recovers before
            the defender on hit.
          </li>

          <li>
            <strong>Block advantage:</strong> Frames the attacker recovers
            before or after the defender on block.
          </li>
        </ul>
        <p>
          Safety depends on recovery after a block. Block advantage can be a
          positive or a negative number:
        </p>

        <ul>
          <li>Positive: Attacker recovers first.</li>

          <li>Negative: Defender recovers first.</li>

          <li>Zero: Both recover at the same time.</li>
        </ul>

        <p>
          Most moves are negative on block. That does not automatically make
          them unsafe. If the fastest attacks take 7 frames to start-up, then:
        </p>

        <ul>
          <li>
            <strong>-6 or better</strong>: Safe.
          </li>

          <li>
            <strong>-7 or worse:</strong> Punishable if the opponent has a fast
            enough option and proper range.
          </li>
        </ul>

        <div title="Deep dive: actual disadvantage on block">
          <p>
            Player X throws a -10 on block attack that player Y blocks. Player X
            will recover on the 11th frame and will be able to block. Can Y
            react in time?
          </p>

          <ul>
            <li>
              A 7-frame start-up attack will hit with 3 frames to spare: -10 + 7
              = -3. This means Y has to react within 3 frames of him recovering
              to punish X. If Y reacts on the 4th frame, his attack will become
              active on the 11th frame so X will be able to block.
            </li>

            <li>
              A 9-frame attack leaves only one frame to react: -10 + 9 = -1.
              This must be the same frame Y recovers from block stun.
            </li>

            <li>
              An attack with 10 or more start-up frames will not work: -10 + 10
              = 0. Both attack and block become active on the 11th frame. That
              is if X blocks immediately after recovery.
            </li>
          </ul>

          <p>
            Range also plays a role. A 7-frame start-up projectile might not
            reach the opponent within the 10 frames to hit them.
          </p>
        </div>
        <h3 id="punish">Punish and counter</h3>
        <ul>
          <li>
            <strong>Punish: </strong> Hitting an opponent during recovery to
            punish an unsafe move or a whiff.
          </li>
          <li>
            <strong>Counter:</strong> Hitting an opponent during start-up. This
            requires a good read and preemptive action.
          </li>
        </ul>
        <h3 id="space-control">Space control</h3>
        <p>
          Most moves have short active frames. Moves with long active frames
          control space better. These are usually special moves like
          projectiles. They force opponents to respect their extended presence
          by blocking, ducking, or hesitating. Jumping or dashing becomes risky.
        </p>
      </section>

      <section>
        <h2 id="beyond-the-move-list">Beyond the move list</h2>

        <p>
          Some move traits are not listed and must be learned through
          experience.
        </p>

        <h3 id="reach">Reach</h3>

        <p>
          An attack's reach is probably its most important trait that is not
          listed in the frame data. Every attack has an effective range. There
          is no measurement unit. Visual terms are used instead:
        </p>

        <ul>
          <li>
            Touching: Opponents are zero steps away from each other. Here speed
            wins over reach.
          </li>
          <li>
            Short: Most basic attacks cover a few steps away. How many separates
            good attacks from great attacks.
          </li>
          <li>
            Default, a.k.a. jump distance: This is the space characters are
            apart at duel start. A forward jump just about covers it.
          </li>
          <li>
            Long: Reaches more than a jump distance, but not the entire screen.
          </li>

          <li>
            Fullscreen: Covers the entire screen. Usually projectiles,
            teleports, and other specials.
          </li>
        </ul>

        <h3 id="disjointed">Disjointed</h3>

        <p>
          A <em>disjointed</em> attack is a move whose hitbox extends more than
          the character's hurtbox, without risk of the defender hitting the
          attacker back (at least close to max range). Such are attacks with
          some form of weapons, where the weapon reaches farther than the
          bearer's arms. These are space-controlling moves that are difficult to
          challenge directly.
        </p>

        <Image
          src={disjointed}
          alt="A disjointed attack with an axe."
          className="mx-auto"
        />

        <h3 id="projectile">Projectile</h3>

        <p>
          A <em>projectile</em> is an attack that creates a traveling hitbox
          separate from the character's body, like a fireball, a bullet, or a
          thrown weapon. Depending on the projectile, it may or may not cover
          the whole screen. Regardless, it's the ultimate space-controlling
          move.
        </p>

        <Image
          src={projectile}
          alt="Sub-Zero's ice ball."
          className="mx-auto"
        />

        <h3 id="advancing">Advancing</h3>

        <p>
          Some attacks recover to the same spot they were executed in. Others
          move the character forward, grabbing space. The range of advancing
          attacks is more difficult to judge.
        </p>

        <h3 id="knockdown">Knockdown and knockback</h3>

        <p>
          Knockdown puts the opponent on the ground near the attacker. Knockback
          pushes the opponent away, creating space.
        </p>

        <Diagram description="Knocking the opponent down near you is preferable. Knocking them back limits the ability to follow up with more attacks.">
          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Knockdown</div>
            <Image
              src={lowHit}
              alt="A low kick hitting a crouching opponent."
            />
          </div>
          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>Knockback</div>
            <Image src={knockback} alt="A high kick knocking opponent back." />
          </div>
        </Diagram>

        <h3 id="launch">Launch</h3>

        <p>
          A launching attack, a.k.a. a <em>launcher</em>, sends the opponent
          airborne. Many launchers allow for extended combos.
        </p>

        <Diagram description="">
          <div className="flex flex-col gap-2 font-semibold items-center">
            <div>
              <span className="badge">D2</span> launches the opponent
            </div>
            <Image
              src={launch}
              alt="A down 2 attack launching the opponent into the air."
            />
          </div>
        </Diagram>
      </section>

      <section>
        <h2 id="other-terms">Other terms</h2>
        <h3 id="pokes">Pokes</h3>

        <p>
          A poke is a low-commitment attack, designed to test the opponent's
          reactions, spacing, and habits. Advancing mids are usually the best
          pokes as they grab space and check crouch blocking. Quick recovery is
          essential in case of a whiff.
        </p>
      </section>
    </>
  )
}
