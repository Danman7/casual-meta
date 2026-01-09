import Image from 'next/image'
import Link from 'next/link'

import chameleon from '@/app/assets/mk1/chameleon.webp'
import ferra from '@/app/assets/mk1/ferra.webp'
import Movado from '@/app/assets/mk1/movado.webp'
import scorpAirDB2 from '@/app/assets/mk1/scorp_air_db2.webp'
import Scorpion from '@/app/assets/mk1/scorp_mk1.webp'
import spear from '@/app/assets/mk1/scorp_spear.webp'
import scorp2 from '@/app/assets/mk1/scorpion_2.webp'
import scorpb3 from '@/app/assets/mk1/scorpion_b3.webp'
import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { Callout } from '@/app/ui/Callout'
import { Flavor } from '@/app/ui/Flavor'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { PageTitle } from '@/app/ui/PageTitle'
import { Pill } from '@/app/ui/Pill'
import { ProsConsList } from '@/app/ui/ProsConsList'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 8

export const navTitle = 'Scorpion'

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'A breakdown of Scorpion in Mortal Kombat 1.',
)

export default async function Page() {
  return (
    <>
      <PageTitle title={navTitle} subtitle="Character overview & guide" />

      <Section className="md:flex items-center gap-4 mb-8">
        <Image
          className="max-h-72 object-cover object-[0%_0%]  md:w-1/2 md:max-h-full"
          src={Scorpion}
          alt="Scorpion in Mortal Kombat 1"
          loading="eager"
        />

        <div className="md:w-1/2">
          <p>
            Scorpion in Mortal Kombat 1 is beginner-friendly and frequently
            played at all levels. His major strength is interrupting unsafe
            actions from anywhere on the screen, converting them into simple
            adaptable combos. His toolbox includes both close and long-range
            options but lacks efficient offense. For that, he needs a proper
            Kameo. New players will find him easier when reacting rather than
            initiating pressure.
          </p>
        </div>
      </Section>

      <ProsConsList
        pros={[
          <>
            <p className="font-semibold">Beginner-friendly.</p>
            <Flavor>No stances or forms to manage. Easy combos.</Flavor>
          </>,
          <>
            <p className="font-semibold">Good utility.</p>
            <Flavor>
              The Spear controls space and sets up combos. Multiple specials
              cover the whole screen. Good interruptions, anti-zoning, and
              anti-air options.
            </Flavor>
          </>,
          <>
            <p className="font-semibold">Kameos synergy.</p>
            <Flavor>
              His moves combine well with many Kameos. Can combo out of throws.
            </Flavor>
          </>,
        ]}
        cons={[
          <>
            <p className="font-semibold">Struggles with offense.</p>
            <Flavor>
              Lacks mix-ups. No chainable standing overheads or lows. No frame
              traps. Cannot sustain pressure.
            </Flavor>
          </>,
        ]}
      />

      <Section title="Scouting the opponent" id="neutral">
        <Flavor>
          This section covers key moves and methods, helpful in{' '}
          <Link href={`${MK_BASE_URL}/neutral`}>Neutral</Link>.
        </Flavor>

        <p className="font-bold">
          Scorpion lacks mix-ups or frame advantage. He relies on
          straightforward moves for each distance and scenario.
        </p>

        <h3 id="standing-2">Mid-screen</h3>

        <p>
          Learn how far <Pill>Standing 2</Pill> stretches. This is{' '}
          <em>your primary poke</em> - safe, fast, disjointed high punch with
          good range. Aim to hit approaching foes at its maximum range. Once
          comfortable, start confirming hits with <Pill>21</Pill>. If they
          block: stop. On hit: continue into Spear - <Pill>21 BF1</Pill>
        </p>

        <ImageWithCaption
          src={scorp2}
          alt="Scorpion's Standing 2 attack."
          caption="Scorpion's Standing 2 reaches far for a regular punch. Half of its hitbox is disjointed, making it safe to most quick counter-pokes."
        />

        <p>
          If Standing 2 doesn't reach go for the <em>The Spear</em>{' '}
          <Pill>BF1</Pill>. It is Scorpion's signature space control high
          projectile - unsafe, somewhat slow, with infinite active frames.
          Although expected, it often interrupts opponents' dashes, catches them
          at jump ends, or during projectile casts.
        </p>

        <ImageWithCaption
          src={spear}
          alt="Scorpion's spear move."
          caption="The Spear can catch a foe at full screen distance. It will stun and bring him next to Scorpion for a free combo."
        />

        <p>
          They will block, jump, or teleport around your Spear. Because it's a{' '}
          <em>high</em> attack, some players will duck under it. If you spot
          this pattern, use <Pill>BF1ex</Pill> Enhanced Spear, which hits{' '}
          <em>mid</em>.
        </p>

        <p>
          <Pill>Back 2</Pill> is your best anti-air. It can be{' '}
          <em>shortcut cancelled</em> into any back-forward move.{' '}
          <Pill>B2 F1</Pill> cancels into Spear without pressing back twice.
          Learn this early to control air pressure.
        </p>

        <h3 id="up-close">Up close</h3>

        <p>
          <Pill>Forward 32</Pill> is your{' '}
          <em>optimal launcher and combo starter</em>. It can be{' '}
          <em>chained up to three times</em>, with multiple extensions. The
          first hit is an advancing <em>mid</em> and a decent check for
          crouching opponents. Start pressure with this string when{' '}
          <Pill>21</Pill> doesn't feel right.
        </p>

        <p>
          If you're touching and their pressure is too much, use <Pill>12</Pill>
          . It's your fastest hit confirm but has shorter reach, lower damage,
          and limited extensions.
        </p>

        <p>
          Blocking is always an option, but expect to get knocked down. If they
          sustain pressure on your wakeup, use{' '}
          <em>Armored Enhanced Blazing Charge</em> <Pill>BF2ex</Pill>. Unless
          they block, it suspends their offense and can be comboed out of with
          the right Kameos. The Charge is quicker than the Spear, but fails at
          controlling space due to short active frames.
        </p>

        <h3 id="far-away">Far away</h3>

        <p>
          The Charge won't reach and the Spear is too slow at full screen. For
          this distance, use <em>Flame Port</em> <Pill>DB3</Pill>. Scorpion
          dashes away from his foe, loops through the screen, and throws a punch
          from the other side. It's a multi-purpose teleport.
        </p>

        <p>
          You can interrupt heavy zoners. Record a dummy spamming projectiles
          (e.g., Liu Kang's BF1) and practice timing the Port with the spell. A
          few successful hits will discourage zoning.
        </p>

        <p>
          Experienced players can bait a projectile throw and block your Port,
          which is unsafe. Occasionally vary with the enhanced version{' '}
          <Pill>DB3ex</Pill>. It lands Scorpion on the other side, skipping the
          attack. Enhanced Port into Throw is the simplest route to disrupt
          their defense. You can also practice Enhanced Port into{' '}
          <Pill>Down 1</Pill> or micro-duck then <Pill>Standing 1</Pill>.
        </p>

        <p>
          <em>Devouring Flame</em> <Pill>DB4</Pill> works against players who
          stay away and block. It's a <em>low</em>-hitting special that spawns
          under the target's feet at any distance. The enhanced version does
          guaranteed damage over time if it connects. Keep in mind it's slow and
          unsafe and can be punished by mobile foes.
        </p>

        <h3 id="conditioning">Conditioning</h3>

        <p>
          Scorpion's <Pill>Back 3</Pill> is unique. He launches his Kunai for a
          disjointed two-hit mid-low attack. It's slow and unsafe but reaches
          far. The threat of a low hit at this distance conditions opponents to
          block low or jump forward. Don't forget your <Pill>B2</Pill>.
        </p>

        <ImageWithCaption
          src={scorpb3}
          alt="Scorpion's back 3 attack."
          className="max-h-80 object-cover object-[0%_50%]"
          caption="Back 3 reaches far but not full-screen. Can be punished with a well-timed projectile or jump attack."
        />

        <Callout title="Back 3 Cancels">
          <Flavor>
            The first mid hit of <Pill>B3</Pill> can be cancelled into any
            special or Kameo move.
          </Flavor>

          <p>
            <strong>B3 F1</strong> cancels into Spear. <strong>B3 F2</strong>{' '}
            cancels into Dash.
          </p>

          <p>
            <strong>B3 F4ex</strong> cancels into enhanced Devouring Flame -
            good chip damage but unsafe.
          </p>

          <p>
            <strong>B3 DB3ex</strong> cancels into Enhanced Teleport. Forces
            them to block, giving your teleport more freedom.
          </p>
        </Callout>

        <p>
          If neither commits to attacking, promptly tap <Pill>1</Pill> (quickest
          recovery) into <Pill>BF1</Pill>. Seeing a whiff may motivate opponents
          to dash forward or do an unsafe move. If this happens, the Spear
          connects. This is cheap but legit tech.
        </p>

        <p>
          Another approach is <em>derailing</em> your strings. <Pill>122</Pill>{' '}
          has a punishable gap between the second and third hit and is
          vulnerable to up block. Cut it short - <Pill>12</Pill> into throw. If
          your foe expects the full string, they get thrown.
        </p>

        <p>
          Same with any Forward 3 string - <Pill>F32</Pill> or <Pill>F34</Pill>.
          If they predict the full string, do only <Pill>F3</Pill> into throw.{' '}
          <Pill>F3</Pill> is also a good <em>shimmy</em>. If you delay Forward 3
          while walking up, they may duck expecting a throw. The mid hits them
          instead.
        </p>
      </Section>

      <Section title="Converting into damage" id="damage">
        <Flavor>
          This section covers how you can continue after landing a hit.
        </Flavor>

        <p className="font-bold">
          When playing online, consistent execution outweighs maximum damage.
        </p>

        <h3 id="bread-n-butter">Bread and butter combos</h3>

        <p>
          Follow up on what you know. Open with <Pill>12/21/B2</Pill> into
          Spear. The optimal ender is <Pill>33 DB2</Pill>. This maximizes damage
          but isn't always available.
        </p>

        <Callout>
          <div>
            <Pill>21 BF1 33 DB2</Pill>
          </div>
          <Flavor className="mt-2">
            Basic 210 damage starter. Use this for your first online matches.
            Once consistent, move on.
          </Flavor>
        </Callout>

        <p>
          To maximize damage, learn to juggle opponents with <Pill>F32</Pill>.
        </p>

        <Callout>
          <Pill>21 BF1 F32 F32 F32 F34 BF2</Pill>
          <Flavor className="mt-2">
            Meterless 342 damage. The height after the third F32 is low.
            Connecting F34 into Charge can be tight.
          </Flavor>
        </Callout>

        <p>
          Starting with <Pill>F32</Pill> and delaying the Spear lets you use the
          better ender for better results.
        </p>

        <Callout>
          <Pill>F32 F32 F32 4 BF1 33 DB2</Pill>
          <Flavor className="mt-2">
            Meterless 365 damage. Connecting Standing 4 after the last F32 is
            the trickiest part.
          </Flavor>
        </Callout>

        <p>
          The last two can be your bread and butter combos. You can spend meter
          to enhance damage, but it requires <em>enhanced air Kyo Snag</em>.
          This is a Spear-like special used mid-air to grab opponents.
        </p>

        <Callout>
          <ul className="space-y-6 my-0">
            <li>
              <Pill>
                21 BF1 F32 F32 J12 airDB2ex <Flavor>small pause</Flavor> 111
                airDB2
              </Pill>
              <Flavor className="mt-2">
                One bar 377 damage. The pause delays 111 until both fighters are
                lower to the ground, making the final airDB2 connect.
              </Flavor>
            </li>
            <li>
              <Pill>
                F32 F32 J12 airDB2ex <Flavor>small pause</Flavor> 111 BF1 33 DB2
              </Pill>{' '}
              <Flavor className="mt-2">
                One bar <strong>407</strong> damage. Same pause but this time,
                because you delayed the Spear, you can connect into the familiar
                ender.
              </Flavor>
            </li>
          </ul>
        </Callout>

        <ImageWithCaption
          src={scorpAirDB2}
          alt="Scorpion's air down back 2 special."
          caption="Scorpion's enhanced air Down Back 2 can be chained multiple times in a row, but costs meter each time and has diminishing returns compared to continuing with 111."
        />

        <h3 id="in-the-corner">In the corner</h3>

        <p>
          <Pill>Standing 4</Pill> keeps most of its damage through combo
          scaling. In the corner, knockback isn't a factor and you can chain two
          in a row to spike damage.
        </p>

        <Callout>
          <ul className="space-y-6 my-0">
            <li>
              <Pill>
                F32 4 4 BF1 F32 J12 airDB2ex <Flavor>small pause</Flavor> J111
                JDB2
              </Pill>
              <Flavor className="mt-2">
                One bar <strong>446</strong> damage. If chaining the second{' '}
                <Pill>4</Pill> is difficult, a single one still exceeds 400
                damage.
              </Flavor>
            </li>
            <li>
              <Pill>
                F32 4 4 BF1 F32 J12 airDB2ex <Flavor>small pause</Flavor> J111{' '}
                <Flavor>land</Flavor> B2 BF4ex
              </Pill>{' '}
              <Flavor className="mt-2">
                Attempt this two bar <strong>502</strong> damage monster if
                you're about to win the round. The enhanced Devouring Flame is
                guaranteed damage, but you can't recover in time to block. If
                they survive, they get a free wakeup punish.
              </Flavor>
            </li>
          </ul>
        </Callout>

        <h3 id="extending-via-flame-port">Extending via Flame Port</h3>

        <p>
          Scorpion's teleport can extend combos, but it's hard and not
          necessarily worth the effort.
        </p>

        <Callout>
          <ul className="space-y-6 my-0">
            <li>
              <Pill>
                J3 airDB3 <Flavor>land</Flavor> B2 F2
              </Pill>
              <Flavor className="mt-2">
                The jump kick and the teleport must be initiated very close to
                the ground.
              </Flavor>
            </li>

            <li>
              <Pill>
                F32 J12 airDB3ex J13 <Flavor>land</Flavor> BF1 33 DB3
              </Pill>{' '}
              <Flavor className="mt-2">
                One bar 334 damage. Only enhanced air port is fast enough to
                connect. Connecting <Pill>J13</Pill> is awkward. The Port often
                misses. There must be a short delay after J12.
              </Flavor>
            </li>
          </ul>
        </Callout>

        <p>
          Starting a combo out of enhanced air Port is usually best as it's less
          predictable. Players don't expect to get hit from a far jump.
        </p>

        <Callout>
          <ul className="space-y-6 my-0">
            <li>
              <Pill>
                airDB3ex J3 <Flavor>land</Flavor> BF1 F32 F32 F34 BF2
              </Pill>
              <Flavor className="mt-2">
                An easier version for one bar 308 damage.
              </Flavor>
            </li>

            <li>
              <Pill>
                airDB3ex J3 DB3 <Flavor>land</Flavor> F32 F32 4 BF1 33 DB2
              </Pill>{' '}
              <Flavor className="mt-2">
                A challenging double-port one bar 411 damage variant.
              </Flavor>
            </li>

            <li>
              <Pill>
                airDB3ex J3 DB3 <Flavor>land</Flavor> 4 BF1 F32 J12 airDB2ex
              </Pill>{' '}
              <Flavor className="mt-2">
                A fancy two meter <strong>449</strong> damage advanced combo.
              </Flavor>
            </li>
          </ul>
        </Callout>
      </Section>

      <Section title="Kameos" id="kameos">
        <Flavor>
          Pairing a character with a Kameo is a vast topic. In this section, we
          will only discuss a few choices.
        </Flavor>

        <p>
          Scorpion can handle most situations on his own, but discovering his
          offensive potential in MK1 begins with the right Kameo partner.
        </p>

        <h3 id="movado">Movado</h3>

        <Image
          className="max-w-24 float-left mb-0 mr-2"
          src={Movado}
          alt="A portrait of Movado."
        />

        <p>
          Movado is a good pick for beginners and advanced players. He opens
          many routes out of otherwise non-chainable moves. Thanks to{' '}
          <Pill>Forward K</Pill>, knockback strings like <Pill>214</Pill> and{' '}
          <Pill>F34</Pill> become starters. Nindrop <Pill>Up K</Pill> can combo
          out of the Charge (giving armored combos) and keep any{' '}
          <Pill>airDB2ex</Pill> extended combo meterless.
        </p>

        <p>
          After knocking opponents down, jump and press <Pill>Down K</Pill> at
          the same time as <Pill>Jump Kick</Pill>. They must block the low,
          allowing the overhead to connect, though timing requires practice.
        </p>

        <p>
          Trap Drop <Pill>K</Pill> throws a stun bomb next to the opponent that
          detonates after a second. If you time it when Scorpion jumps off his
          foe in the throw animation, you can combo out of it.
        </p>

        <Callout>
          <ul className="space-y-6 my-0">
            <li>
              <Pill>
                BF2ex UK <Flavor>switch sides</Flavor> dash F32 F32 4 BF1 33 DB2
              </Pill>
              <Flavor className="mt-2">
                Meterless armored combo for 259 damage.
              </Flavor>
            </li>

            <li>
              <Pill>
                F32 F32 J12 airDB2ex UK <Flavor>land</Flavor> BF1 33 DB2
              </Pill>{' '}
              <Flavor className="mt-2">
                Same juggle-to-air extension as before, but meterless for 375
                damage.
              </Flavor>
            </li>

            <li>
              <Pill>
                Throw <Flavor>time during animation</Flavor> K (trap) F32 F32 4
                BF1 33 DB2
              </Pill>{' '}
              <Flavor className="mt-2">
                220 damage out of a throw (normally 110).
              </Flavor>
            </li>

            <li>
              <Pill>F34 FK F32 4 BF1 33 DB2</Pill>
            </li>
          </ul>
        </Callout>

        <h3 id="ferra">Ferra </h3>

        <Image
          className="max-w-24 float-left mb-0 mr-2"
          src={ferra}
          alt="A portrait of Ferra."
        />

        <p>
          Ferra contributes to mix-ups more directly. She's slightly more
          technical than Movado. On pressing <Pill>K</Pill>, she goes into an
          "attached to your back" stance. From there, pressing a face button
          performs different attacks. Pressing <Pill>2</Pill> does an overhead,
          while <Pill>3</Pill> does a low. This works well with Scorpion's{' '}
          <Pill>B3</Pill> - <Pill>B3 K 2</Pill> or <Pill>B3 K 3</Pill>.
        </p>

        <h3 id="chameleon">Chameleon</h3>

        <Image
          className="max-w-24 float-left mb-0 mr-2"
          src={chameleon}
          alt="A portrait of Chameleon."
        />

        <p>
          Chameleon is an advanced Kameo. Managing her <em>stances</em> (Jade,
          Kitana, Mileena) is problematic for beginners, but she offers great
          utility. Jade's Glow gives projectile immunity, which helps with
          zoners and Spears in mirror matches. Like Movado, she enables armored
          and throw combos.
        </p>

        <Callout>
          <ul className="space-y-6 my-0">
            <li>
              <Pill>
                Throw <Flavor>time during animation</Flavor> K (fan toss) J2 F32
                F32 4 BF1 33 DB2
              </Pill>
              <Flavor className="mt-2">
                Must be in Kitana Form. 219 damage throw combo.
              </Flavor>
            </li>

            <li>
              <Pill>
                BF2 FK <Flavor>switch sides</Flavor> BF1 F32 F32 4 BF2
              </Pill>{' '}
              <Flavor className="mt-2">
                Kitana form. Meterles 234 damage armored combo.
              </Flavor>
            </li>
          </ul>
        </Callout>

        <p>
          Chameleon's fan toss enables resets where two otherwise non-chainable
          moves link into a combo.
        </p>
      </Section>

      <Section title="Advanced tech" id="advanced-tech">
        <Flavor className="mb-5">
          This section describes niche techniques that require more practice.
        </Flavor>

        <h3 id="enhanced-flame-port-jail">Enhanced Flame-Port jail</h3>

        <p>
          Ending a corner combo with enhanced air teleport into kick jails your
          opponent. If they press any button other than block during getup, they
          get hit. Do it correctly, and they spin around to face you as you come
          from the corner. You get a free hit and can break armor, though it's
          inconsistent.
        </p>

        <h3 id="air-kyo-snag-bait">Air Kyo Snag bait</h3>

        <p>
          Air DB2 has instant recovery - even the regular version. If you jump
          over your adversary, you can throw this move into empty air, and it
          stops and drops you down. They must be ready for a timely anti-air,
          otherwise you're safe. The idea is to bait a high attack while
          throwing a low Kameo move or Movado's Trap Drop. It's a niche tactic.
        </p>
      </Section>
    </>
  )
}
