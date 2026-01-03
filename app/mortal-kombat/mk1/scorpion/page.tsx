import Image from 'next/image'
import Link from 'next/link'
import { GiSpearHook } from 'react-icons/gi'
import { IoIosThumbsDown, IoIosThumbsUp } from 'react-icons/io'

import chameleon from '@/app/assets/mk1/chameleon.webp'
import ferra from '@/app/assets/mk1/ferra.webp'
import Movado from '@/app/assets/mk1/movado.webp'
import scorpAirDB2 from '@/app/assets/mk1/scorp_air_db2.webp'
import Scorpion from '@/app/assets/mk1/scorp_mk1.webp'
import spear from '@/app/assets/mk1/scorp_spear.webp'
import scorp2 from '@/app/assets/mk1/scorpion_2.webp'
import scorpb3 from '@/app/assets/mk1/scorpion_b3.webp'
import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { Badge } from '@/app/ui/Badge'
import { Callout } from '@/app/ui/Callout'
import { Emphasis } from '@/app/ui/Emphasis'
import { Flavor } from '@/app/ui/Flavor'
import { FlexWrapper } from '@/app/ui/FlexWrapper'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { PageTitle } from '@/app/ui/PageTitle'
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

      <div className="md:flex items-center gap-4">
        <Image
          className="max-h-72 object-cover object-[0%_0%]  md:w-1/2 md:max-h-full"
          src={Scorpion}
          alt="Scorpion in Mortal Kombat 1"
        />

        <div className="md:w-1/2">
          <p>
            Scorpion is a beginner-friendly character, frequently played at all
            levels. His major strength is reliably interrupting unsafe actions
            from anywhere on the screen. He can then convert them into one of
            his simple modular combos. His toolbox includes both close and long
            range instruments, but lacks an efficient offense. In that regard,
            new players will find him easier when reacting rather than
            initiating pressure. For the latter, he needs a proper Kameo.
          </p>
        </div>
      </div>

      <Callout className="space-y-4">
        <h2 id="play-or-skip" className="pt-0! mt-0! border-t-0">
          Play or skip?
        </h2>

        <div className="md:flex gap-4">
          <div className="md:w-1/2">
            <FlexWrapper className="font-bold text-success">
              <IoIosThumbsUp /> Maybe, yes
            </FlexWrapper>

            <ul className="divide-y space-y-4 *:pb-2 *:last:pb-0 md:mb-0! mb-8">
              <li>Scorpion is uncomplicated in general.</li>

              <li>He has no stances or forms to manage.</li>

              <li>
                The Spear <GiSpearHook className="inline" /> is superb at
                controlling space and setting up combos.
              </li>

              <li>He has multiple specials that cover the whole screen.</li>

              <li>Good interruption - anti-zoning and anti-air options.</li>

              <li>Can combo out of his throw with the right Kameo.</li>

              <li>Extending combos is not difficult.</li>
            </ul>
          </div>

          <div className="md:w-1/2">
            <FlexWrapper className="font-bold text-error">
              <IoIosThumbsDown /> Maybe, no
            </FlexWrapper>

            <ul className="divide-y space-y-4 *:pb-2 *:last:pb-0 mb-0!">
              <li>
                Scorpion can struggle with breaking up the defense of a skilled
                foe.
              </li>

              <li>
                He lacks a good mix-up - no chainable standing overheads or
                lows.
              </li>

              <li>No frame traps. Cannot press the attack for long.</li>
            </ul>
          </div>
        </div>
      </Callout>

      <h2 id="neutral">Scouting the opponent</h2>

      <Flavor>
        This section covers key moves and methods, helpful in{' '}
        <Link href={`${MK_BASE_URL}/neutral`}>Neutral</Link>.
      </Flavor>

      <Emphasis>
        Scorpion lacks a true mix-up or frame advantage. Instead, he relies on
        straightforward moves for each distance and scenario.
      </Emphasis>

      <h3 id="standing-2">Mid-screen</h3>

      <p>
        A good starting point is to learn how far <Badge>Standing 2</Badge>{' '}
        stretches. That is <em>your primary poke</em> - safe, fast, disjointed
        high punch with a good span. Aim to hit them at the attack's maximum
        range. Once you get a feel for it, start confirming hits with{' '}
        <Badge>21</Badge>. If they block: stop. On hit: continue into Spear -{' '}
        <Badge>21 BF1</Badge>
      </p>

      <ImageWithCaption
        src={scorp2}
        alt="Scorpion's Standing 2 attack."
        caption="Scorpion's Standing 2 often surprises foes trying to get in close."
      />

      <p>
        <em>The Spear</em> <Badge>BF1</Badge> is an{' '}
        <em>excellent mid-range check</em>. Think of it as a Standing 2 with
        longer reach. It is slower and is unsafe, but players often get so
        comfortable that a Spear interrupts their dashes, or catches them at the
        end of their jumps, or during casting projectiles.
      </p>

      <ImageWithCaption
        src={spear}
        alt="Scorpion's spear move."
        className="shadow-md"
        caption="On top of reaching full-screen and stunning
        your foe, the Spear brings them next to you for you to
        proceed in any manner. This leads beginners to abuse it, making them predictable."
      />

      <p>
        You can expect opponents to block, jump, or teleport around your Spear.
        But because it is a <em>high</em> projectile, some players will also try
        to duck under it. If you spot this pattern in your foe, do a{' '}
        <Badge>BF1ex</Badge> Enhanced Spear which hits <em>mid</em> to surprise
        them.
      </p>

      <p>
        <Badge>Back 2</Badge> is your best anti-air. It can be{' '}
        <em>shortcut cancelled</em> into any back-forward move. For example{' '}
        <Badge>B2 F1</Badge> cancels into Spear without having to press back
        twice. Get the hang of this early to control air pressure.
      </p>

      <h3 id="up-close">Up close</h3>

      <p>
        <Badge>Forward 32</Badge> is your{' '}
        <em>optimal launcher and combo starter</em>. It can be{' '}
        <em>chained up to three times</em>, with multiple ways to extend
        further. The first hit is an advancing <em>mid</em> which is also a
        decent check for crouching opponents. Strive to start your pressure with
        this string whenever <Badge>21</Badge> doesn't feel right.
      </p>

      <p>
        In case you are touching and their pressure is too much, you can go for{' '}
        <Badge>12</Badge>. It is your fastest hit confirm, but has a shorter
        reach, lower damage and limited extensions.
      </p>

      <p>
        Simply blocking is also always an option, but be prepared to get knocked
        down eventually. Provided they sustain the pressure on your wakeup,
        execute an <em>Armored Enhanced Charge</em> <Badge>BF2ex</Badge>. Unless
        they block, it will suspend their offense and can even be comboed out of
        with the proper Kameos.
      </p>

      <h3 id="far-away">Far away</h3>

      <p>
        The Charge won't reach and the Spear is too slow at full screen. For
        that distance you have the <em>Flame Port</em> <Badge>DB3</Badge>.
        Scorpion dashes away from his foe, loops through the screen and throws a
        punch from the other side. It is a multi-purpose teleport move.
      </p>

      <p>
        For one, you can reliably interrupt heavy zoners. Record a dummy
        spamming projectiles (e.g., Liu Kang's BF1) and exercise timing the Port
        with the spell being thrown. A few successful hits will discourage your
        opponent from zoning.
      </p>

      <p>
        An experienced player however can bait throwing a projectile and instead
        block your Port which is very unsafe. A good practice is to occasionally
        vary with the enhanced version <Badge>DB3ex</Badge>. It estands Scorpion
        on the other side of the target, skipping the attack. Enhanced Port into
        a Throw is the simplest route to mess up their defense. You can also
        practive Enhanced Port into <Badge>Down 1</Badge> or into micro-duck
        then <Badge>Standing 1</Badge>.
      </p>

      <p>
        Finally, you have the <em>Devouring Flame</em> <Badge>DB4</Badge> for
        any play who like to just stay away and block. It is a <em>low</em>
        -hitting special that spawns under the target's feet at any distance.
        The enhanced version does guaranteed damage over time if it connects.
        Just keep in mind that it is slow and unsafe and can be punished by a
        rather mobile foe.
      </p>

      <h3 id="conditioning">Conditioning</h3>

      <p>
        Scorpion's <Badge>Back 3</Badge> is a unique move. He launches his Kunai
        for a disjointed two-hit mid-low attack. It is slow and unsafe, but
        reaches very far. The threat of a low hit at this distance conditions
        your opponent to preemptively block low or jump forward. Don't forget
        about your <Badge>B2</Badge>.
      </p>

      <ImageWithCaption
        src={scorpb3}
        alt="Scorpion's back 3 attack."
        className="shadow-md max-h-80 object-cover object-[0%_50%]"
        caption="Back 3 reaches quite far, but not the entire screen. It can be punished with a well-timed projectile or jump attack."
      />

      <Callout className="mt-4">
        <Emphasis className="mt-0">Back 3 cancels</Emphasis>

        <Flavor>
          The first mid hit of <Badge>B3</Badge> can be cancelled into any
          special or Kameo move.
        </Flavor>

        <p>
          <strong>B3 F1</strong> cancels into Spear. <strong>B3 F2</strong>{' '}
          cancels into Dash.
        </p>

        <p>
          <strong>B3 F4ex</strong> cancels into enhanced Devouring Flame - which
          is good chip damage, but unsafe.
        </p>

        <p>
          <strong>B3 DB3ex</strong> cancels into Enhanced Teleport. This is a
          fine way to force them into blocking, giving your teleport more
          freedom.
        </p>
      </Callout>

      <p>
        If neither of you commits to attacking, try promptly tapping{' '}
        <Badge>1</Badge> (quickest recovery) into <Badge>BF1</Badge>. Seeing a
        whiff into empty air may motivate your opponent to dash forward or do an
        unsafe move. If this happens, the Spear will connect. This is cheap but
        legit tech.
      </p>

      <p>
        Another approach is to <em>derail</em> one of your strings.{' '}
        <Badge>122</Badge> has a punishable gap between the second and third
        hit. It is also vulnerable to up block. Cut it short - <Badge>12</Badge>{' '}
        into a throw. If your foe expects the full string, they will be thrown.
      </p>

      <p>
        Same thing with any Forward 3 string - <Badge>F32</Badge> or{' '}
        <Badge>F34</Badge>. If they keep predicting the full string, do only{' '}
        <Badge>F3</Badge> into a throw. <Badge>F3</Badge> is also a good{' '}
        <em>shimmy</em>. If you delay pressing Forward 3 while walking up, they
        may duck expecting a throw. The mid will hit them instead.
      </p>

      <h2 id="damage">Converting into damage</h2>

      <Flavor>
        This section covers how you can continue after landing a hit.
      </Flavor>

      <Emphasis>
        As modular as Scorpion's move set is, when playing online, consistent
        execution will outweigh maximum damage.
      </Emphasis>

      <h3 id="bread-n-butter">Bread and butter combos</h3>

      <p>
        Start by following up on what you already know. Open with{' '}
        <Badge>12/21/B2</Badge> into Spear. An optimal ender is{' '}
        <Badge>33 DB2</Badge>. That is how you squeeze the most damage. but is
        not always available.
      </p>

      <Callout>
        <div>
          <Badge>21 BF1 33 DB2</Badge>
        </div>
        <Flavor className="mt-2">
          A basic 210 damage starter combo. Go into your first online matches
          with this. Once you get consistent, move on.
        </Flavor>
      </Callout>

      <p>
        To maximize effect you must learn to juggle the opponent with{' '}
        <Badge>F32</Badge>.
      </p>

      <Callout>
        <Badge>21 BF1 F32 F32 F32 F34 BF2</Badge>
        <Flavor className="mt-2">
          Meterless 342 damage. The height after the third F32 is low.
          Connecting with the F34 into Charge can be a bit tight.
        </Flavor>
      </Callout>

      <p>
        Starting with <Badge>F32</Badge> instead and delaying the Spear will
        allow you to use the better ender and give better results.
      </p>

      <Callout>
        <Badge>F32 F32 F32 4 BF1 33 DB2</Badge>
        <Flavor className="mt-2">
          Meterless 365 damage. Connecting the Standing 4 after the last F32
          will be the trickiest part.
        </Flavor>
      </Callout>

      <p>
        The last two can be your bread and butter combos. Of course, you can
        spend meter to further enhance the damage, but it will require the use
        of the <em>enhanced air Kyo Snag</em>. It is a Spear-like special used
        mid-air to grab the opponent.
      </p>

      <Callout>
        <ul className="space-y-6 my-0">
          <li>
            <Badge>
              21 BF1 F32 F32 J12 airDB2ex <Flavor>small pause</Flavor> 111
              airDB2
            </Badge>
            <Flavor className="mt-2">
              One bar 377 damage. The idea of the pause is to delay the 111
              until both fighters are lower to the ground. This makes connecting
              the final airDB2 possible.
            </Flavor>
          </li>
          <li>
            <Badge>
              F32 F32 J12 airDB2ex <Flavor>small pause</Flavor> 111 BF1 33 DB2
            </Badge>{' '}
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
        <Badge>Standing 4</Badge> keeps most of its damage through combo
        scaling. In the corner its knockback is not a factor and you can chain
        two of these in a row to spike up your damage.
      </p>

      <Callout>
        <ul className="space-y-6 my-0">
          <li>
            <Badge>
              F32 4 4 BF1 F32 J12 airDB2ex <Flavor>small pause</Flavor> J111
              JDB2
            </Badge>
            <Flavor className="mt-2">
              One bar <strong>446</strong> damage. If you find chaining the
              second <Badge>4</Badge> difficult, even a single one will still
              get over 400 damage.
            </Flavor>
          </li>
          <li>
            <Badge>
              F32 4 4 BF1 F32 J12 airDB2ex <Flavor>small pause</Flavor> J111{' '}
              <Flavor>land</Flavor> B2 BF4ex
            </Badge>{' '}
            <Flavor className="mt-2">
              Attempt this two bar <strong>502</strong> damage monster if you
              are about to win the round. The enhanced Devouring Flame is
              guaranteed damage, but you cannot recover in time to block. If
              they survive, they will get a free wakeup punish.
            </Flavor>
          </li>
        </ul>
      </Callout>

      <h3 id="extending-via-flame-port">Extending via Flame Port</h3>

      <p>
        Scorpion's teleport can be used to extend combos, however, it is hard
        and isn't necessarily worth the effort.
      </p>

      <Callout>
        <ul className="space-y-6 my-0">
          <li>
            <Badge>
              J3 airDB3 <Flavor>land</Flavor> B2 F2
            </Badge>
            <Flavor className="mt-2">
              The jump kick and the teleport must be initiated very close to the
              ground.
            </Flavor>
          </li>

          <li>
            <Badge>
              F32 J12 airDB3ex J13 <Flavor>land</Flavor> BF1 33 DB3
            </Badge>{' '}
            <Flavor className="mt-2">
              One bar 334 damage. Only an enhanced air port will be fast enough
              to connect. Connecting the <Badge>J13</Badge> is awkward. Often
              the Port will miss. There must be a very short delay after the
              J12.
            </Flavor>
          </li>
        </ul>
      </Callout>

      <p>
        Starting a combo out of enhanced air Port is usually best as it's less
        predictable. Players just don't expect to get hit out of a far away
        jump.
      </p>

      <Callout>
        <ul className="space-y-6 my-0">
          <li>
            <Badge>
              airDB3ex J3 <Flavor>land</Flavor> BF1 F32 F32 F34 BF2
            </Badge>
            <Flavor className="mt-2">
              An easier version for one bar 308 damage.
            </Flavor>
          </li>

          <li>
            <Badge>
              airDB3ex J3 DB3 <Flavor>land</Flavor> F32 F32 4 BF1 33 DB2
            </Badge>{' '}
            <Flavor className="mt-2">
              A challenging double-port one bar 411 damage variant.
            </Flavor>
          </li>

          <li>
            <Badge>
              airDB3ex J3 DB3 <Flavor>land</Flavor> 4 BF1 F32 J12 airDB2ex
            </Badge>{' '}
            <Flavor className="mt-2">
              A fancy two meter <strong>449</strong> damage advanced combo.
            </Flavor>
          </li>
        </ul>
      </Callout>

      <h2 id="kameos">Kameos</h2>

      <Flavor>
        Pairing a character with a Kameo is a vast topic. In this section, we
        will only discuss a few choices.
      </Flavor>

      <p>
        Scorpion can deal with most situations on his own, but discovering his
        true offensive potential in MK1 begins with the right Kameo partner.
      </p>

      <h3 id="movado">Movado</h3>

      <Image
        className="max-w-24 float-left mb-0 mr-2"
        src={Movado}
        alt="A portrait of Movado."
      />

      <p>
        Movado is a good pick for beginners and advanced players alike. He opens
        up a lot of new routes out of otherwise non-chainable moves. Thanks to{' '}
        <Badge>Forward K</Badge>, knockback strings like <Badge>214</Badge> and{' '}
        <Badge>F34</Badge> become starters. Nindrop <Badge>Up K</Badge> can
        combo out of the Charge (giving armored combos) and keep the any{' '}
        <Badge>airDB2ex</Badge> extended combo meterless.
      </p>

      <p>
        After knocking your opponent down you can jump and press{' '}
        <Badge>Down K</Badge> at the same time as <Badge>Jump Kick</Badge>. They
        must block the low, allowing the overhead to connect, though the timing
        requires practice.
      </p>

      <p>
        The Trap Drop <Badge>K</Badge> throws a stun bomb on the ground next to
        the opponent that takes a second to detonate. If you time it with the
        moment in Scorpion's throw animation where he jumps off his foe, you can
        combo out of it.
      </p>

      <Callout>
        <ul className="space-y-6 my-0">
          <li>
            <Badge>
              BF2ex UK <Flavor>switch sides</Flavor> dash F32 F32 4 BF1 33 DB2
            </Badge>
            <Flavor className="mt-2">
              Meterless armored combo for 259 damage.
            </Flavor>
          </li>

          <li>
            <Badge>
              F32 F32 J12 airDB2ex UK <Flavor>land</Flavor> BF1 33 DB2
            </Badge>{' '}
            <Flavor className="mt-2">
              The same juggle to air extension combo as before, but meterless
              for 375 damage.
            </Flavor>
          </li>

          <li>
            <Badge>
              Throw <Flavor>time during animation</Flavor> K (trap) F32 F32 4
              BF1 33 DB2
            </Badge>{' '}
            <Flavor className="mt-2">
              220 damage out of a throw (normally 110).
            </Flavor>
          </li>

          <li>
            <Badge>F34 FK F32 4 BF1 33 DB2</Badge>
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
        Ferra contributes to the mix-up more directly. She's slightly more
        technical than Movado. On pressing <Badge>K</Badge> she goes into a
        "attached to your back" stance. From there, pressing a face button
        performs different attacks. For example, pressing <Badge>2</Badge> does
        an overhead, while <Badge>3</Badge> does a low. This plays nicely with
        Scorpion's <Badge>B3</Badge> - <Badge>B3 K 2</Badge> or{' '}
        <Badge>B3 K 3</Badge>.
      </p>

      <h3 id="chameleon">Chameleon</h3>

      <Image
        className="max-w-24 float-left mb-0 mr-2"
        src={chameleon}
        alt="A portrait of Chameleon."
      />

      <p>
        Chameleon is an advanced Kameo. Managing her <em>stances</em> (Jade,
        Kitana, Mileena) is problematic for beginners, but she offers tremendous
        utility. Jade's Glow gives projectile immunity, which helps with zoners
        and Spears in mirror matches. Like Movado, she also enables armored and
        throw combos.
      </p>

      <Callout>
        <ul className="space-y-6 my-0">
          <li>
            <Badge>
              Throw <Flavor>time during animation</Flavor> K (fan toss) J2 F32
              F32 4 BF1 33 DB2
            </Badge>
            <Flavor className="mt-2">
              Must be in Kitana Form. 219 damage throw combo.
            </Flavor>
          </li>

          <li>
            <Badge>
              BF2 FK <Flavor>switch sides</Flavor> BF1 F32 F32 4 BF2
            </Badge>{' '}
            <Flavor className="mt-2">
              Kitana form. Meterles 234 damage armored combo.
            </Flavor>
          </li>
        </ul>
      </Callout>

      <p>
        Chameleon's fan toss also enables resets where two otherwise
        non-chainable moves can be linked into a combo.
      </p>

      <h2 id="advanced-tech">Advanced Tech</h2>

      <Flavor className="mb-5">
        This section describes niche techniques that require more practice.
      </Flavor>

      <h3 id="enhanced-flame-port-jail">Enhanced Flame-Port jail</h3>

      <p>
        Ending a corner combo with an enhanced air teleport into a kick will
        jail your opponent. If they press any button other than block during
        getup, they will get hit. Do it correctly, and they will spin around to
        face you as you come from the corner. You will get a free hit and can
        even break armor, though it's inconsistent.
      </p>

      <h3 id="air-kyo-snag-bait">Air Kyo Snag bait</h3>

      <p>
        Air DB2 has instant recovery - even the regular version. Assuming you
        jump over your adversary, you can throw this move into empty air, and it
        will stop and drop you down. They must be ready for a timely anti-air,
        otherwise, you are safe. The idea is to bait a high attack from them
        while throwing a low Kameo move or Movado's Trap Drop. It's a niche
        tactic.
      </p>
    </>
  )
}
