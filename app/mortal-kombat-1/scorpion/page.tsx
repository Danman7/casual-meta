import Image from 'next/image'
import { FaForward, FaPlay } from 'react-icons/fa'
import { FaGraduationCap, FaPersonArrowUpFromLine } from 'react-icons/fa6'
import { FiCornerUpRight } from 'react-icons/fi'
import {
  GiAirplaneArrival,
  GiArmorPunch,
  GiBrokenShield,
  GiFalling,
  GiHighKick,
  GiJoint,
  GiKnockout,
  GiSnail,
  GiStairsGoal,
  GiThumbUp,
  GiThunderball,
  GiWingfoot,
} from 'react-icons/gi'
import { IoPeople } from 'react-icons/io5'
import {
  LuArrowRightFromLine,
  LuArrowRightToLine,
  LuShieldCheck,
} from 'react-icons/lu'
import {
  MdAltRoute,
  MdOutlineSocialDistance,
  MdSocialDistance,
} from 'react-icons/md'
import { PiArrowsCounterClockwiseBold, PiRulerThin } from 'react-icons/pi'
import {
  RiArrowRightDownLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
} from 'react-icons/ri'
import {
  TbArrowBounce,
  TbBounceRight,
  TbRuler3,
  TbRulerMeasure,
} from 'react-icons/tb'
import { TfiRulerAlt2 } from 'react-icons/tfi'
import { TiArrowShuffle } from 'react-icons/ti'

import scorpb2 from '@/app/assets/mk1/scorp_b2.webp'
import scorpf3 from '@/app/assets/mk1/scorp_f3.webp'
import scorpf32 from '@/app/assets/mk1/scorp_f32.webp'
import Scorpion from '@/app/assets/mk1/scorp_mk1.webp'
import spear from '@/app/assets/mk1/scorp_spear.webp'
import scorp2 from '@/app/assets/mk1/scorpion_2.webp'
import scorpb3 from '@/app/assets/mk1/scorpion_b3.webp'
import { MK1_TITLE } from '@/app/constants'
import { Badge } from '@/app/ui/Badge'
import { BulletList } from '@/app/ui/BulletList'
import { Callout } from '@/app/ui/Callout'
import { FlexWrapper } from '@/app/ui/FlexWrapper'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 8

export const navTitle = 'Scorpion'

export const metadata = generatePageMetadata(
  `${MK1_TITLE}: ${navTitle}`,
  'A breakdown of Scorpion in Mortal Kombat 1.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1>{navTitle}</h1>

      <div className="md:flex items-center gap-4">
        <Image
          className="max-h-72 object-cover object-[0%_0%]  md:w-1/2 md:max-h-full"
          src={Scorpion}
          alt="Scorpion in Mortal Kombat 1"
        />

        <div className="md:w-1/2">
          <FlexWrapper className="mt-4">
            <Badge className="text-success border-success">
              <FaGraduationCap /> Beginner-friendly
            </Badge>

            <Badge className="text-success border-success">
              <MdOutlineSocialDistance /> All ranges
            </Badge>

            <Badge className="text-success border-success">
              <TbBounceRight /> Throw combos
            </Badge>

            <Badge className="text-success border-success">
              <PiArrowsCounterClockwiseBold /> Good counterplay
            </Badge>

            <Badge className="text-success border-success">
              <TfiRulerAlt2 /> Space control
            </Badge>

            <Badge className="text-warning border-warning">
              <IoPeople /> Optimal w/ Kameo
            </Badge>

            <Badge className="text-error border-error!">
              <TiArrowShuffle /> Poor mix-up
            </Badge>

            <Badge className="text-error border-error!">
              <GiArmorPunch /> Technical offense
            </Badge>
          </FlexWrapper>

          <p>
            Mortal Kombat 1’s version of Scorpion has a polarizing effect on the
            community, being either praised or found flat/boring/weak.
            Nevertheless, he remains a straightforward character with mostly
            safe, easy-to-chain moves, frequently played at all levels. He has
            tools for fighting both up close and against zoning players who
            prefer distance. On his own, he tends to perform best when reacting
            to the opponent - punishing and interrupting. Optimal offense needs
            help from an appropriate Kameo partner.
          </p>
        </div>
      </div>

      <h2>Why play or skip Scorpion?</h2>
      <BulletList
        className="text-success"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>No safe spot for your foe</strong>. The Spear, Teleport and
            Hellfire pose a threat everywhere on the screen.
          </>,
          <>
            <strong>Novice approved</strong>. With no stances or forms, Scorpion
            offers a full toolkit for every basic scenario. His normals are
            largely safe on block, and the Spear remains a reliable stun that
            pulls enemies in. There are simple routes to 30-35% damage, with
            easy launchers, repeat juggles, and strong synergy with his Spear.
          </>,
          <>
            <strong>Good interruptions and punishes</strong>. His dash (armored
            on EX), B3 and Spear are solid challenges with superb space control.
            His teleport and Hellfire can interrupt projectile spam. B2 is a
            decent anti-air.
          </>,
          <>
            <strong>Kameo Synergy</strong>. His moves and cancelable throw
            animation make him accessible to a lot of Kameos. He can be paired
            with easy combo extensions, mix-ups, technical jails or chip damage
            in mind.
          </>,
        ]}
      />

      <BulletList
        className="text-warning"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>Needs a good Kameo for optimal offense</strong>. Scorpion
            has no true grounded mix-up or frame advantage on block. To catch up
            with a skilled opponent, he would need a suitable partner to fill in
            the gaps and do 50/50s.
          </>,
        ]}
      />

      <BulletList
        className="text-error"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>High damage is difficult</strong>. Reaching the 45-50%
            damage range requires tight timing and resources. Often simpler,
            more consistent combos are better when playing online.
          </>,
        ]}
      />

      <h2>Key Normals</h2>

      <h3>Raising Hell - F32</h3>
      <FlexWrapper className="mt-2">
        <Badge className="text-success border-success">
          <LuShieldCheck /> Safe (-6 on block)
        </Badge>

        <Badge className="text-success border-success">
          <FaPersonArrowUpFromLine /> Launch
        </Badge>

        <Badge className="text-success border-success">
          <TbArrowBounce /> Repeated juggle
        </Badge>

        <Badge>12f start</Badge>

        <Badge className="text-error border-error!">
          <PiRulerThin /> Short reach
        </Badge>
      </FlexWrapper>

      <div className="flex flex-col sm:flex-row">
        <Image
          src={scorpf3}
          alt="Scorpions forward 3 attack."
          className="sm:w-1/2 max-h-96 object-cover object-[0%_20%] shadow-md"
        />

        <Image
          src={scorpf32}
          alt="Scorpion's forward 32 launch."
          className="sm:w-1/2 max-h-96 object-cover object-[0%_20%] shadow-md"
        />
      </div>

      <p>
        This is Scorpion’s launching mid-high combo starter. It is reasonably
        fast, but even while advancing it has a short reach. It is best employed
        after a miss or an unsafe attack from your opponent. Connecting out of
        neutral without the help of the spear is preferable as you will find
        extending combos later easier.
      </p>

      <p>
        <strong>F32 can be repeated up to three times in a row</strong>,
        depending on gravity scaling. Naturally doing it towards the start of a
        combo will have better results.
      </p>

      <Callout>
        <div className="text-base font-bold flex items-center gap-2">
          <GiHighKick /> Practice
        </div>
        <p>
          You can start practicing three F32s in a row immediately. The last one
          will give you little height, but still enough to connect a standing 4.
          Try <strong>F32 F32 F32 4 BF1</strong>. Pressing standing 4 instead of
          forward 4 (which will not connect) will be the most difficult part but
          will greatly extend your combo potential.
        </p>

        <p>
          Alternatively, you can chain only two F32s into a common Scorpion one
          bar aerial extension: <strong>F32 F32 J12 exDB2 111</strong>. This is
          a bit more demanding, but if you take it just a step further and pause
          between the dxDB2 and 111 so you hit closer to the ground, you can
          even connect a spear afterwards.
        </p>
      </Callout>

      <h3>Standing 21</h3>

      <FlexWrapper className="mt-2">
        <Badge className="text-success border-success">
          <GiJoint /> Disjointed
        </Badge>

        <Badge className="text-success border-success">
          <LuShieldCheck /> Safe (-2 on block)
        </Badge>

        <Badge className="text-success border-success">
          <GiWingfoot /> Fast (10f start)
        </Badge>

        <Badge className="text-success border-success">
          <TbRuler3 /> Decent Reach
        </Badge>

        <Badge className="text-success border-success">
          <FaForward /> Advancing
        </Badge>

        <Badge>
          <FaPlay /> Combo starter
        </Badge>
      </FlexWrapper>

      <Image
        className="shadow-md max-h-80 object-cover object-[0%_20%]"
        src={scorp2}
        alt="Scorpion doing standing 2 attack."
      />

      <p>
        This is your <strong>primary challenge and hit-confirm</strong>. It has
        surprising reach making it a preferable combo starter over the 12,
        unless you are touching with the enemy and speed is of the essence.
      </p>

      <p>
        Initiating a combo with 21 is easier than F32, but you will have to
        cancel into spear right away unless your Kameo can extend.
      </p>

      <Callout>
        <div className="text-base font-bold flex items-center gap-2">
          <GiHighKick /> Practice
        </div>
        <p>
          21 BF1 can be your bread and butter. Extend it with 33 DB2 or 333 BF2
          after the spear.
        </p>
      </Callout>

      <h3>Sweeping Tail - B3</h3>
      <FlexWrapper className="mt-2">
        <Badge className="text-success border-success">
          <GiJoint /> Disjointed
        </Badge>

        <Badge className="text-success border-success">
          <TbRulerMeasure /> Very long reach
        </Badge>

        <Badge className="text-success border-success">
          <GiFalling /> Knockdown
        </Badge>

        <Badge className="text-success border-success">First hit cancels</Badge>

        <Badge className="text-success border-success">
          <RiArrowRightLine /> <RiArrowRightDownLine /> Mid-low
        </Badge>

        <Badge className="text-error border-error!">
          <GiSnail /> Slow (21f start)
        </Badge>

        <Badge className="text-error border-error!">
          <GiBrokenShield /> Unsafe (-19 on block)
        </Badge>
      </FlexWrapper>

      <Image
        className="shadow-md"
        src={scorpb3}
        alt="Scorpion doing back 3 attack."
      />

      <p>
        Scorpion’s Back 3 is distinctive. He uses his Kunai for a disjointed
        attack that makes two hits - a mid followed by a low one. It extends
        over at jump distance plus one dash, making it one of the furthest
        reaching normal in the game. Even as slow and predictable as it is, the
        threat of a low attack at such a distance conditions the other player to
        block low or jump over it.
      </p>

      <p>
        Also, importantly, the first mid hit of Back 3 cancels into any special
        or Kameo move, providing interesting pressure alternatives. Just don’t
        try it often at close range.
      </p>

      <Callout>
        <div className="text-base font-bold flex items-center gap-2">
          Back 3 Cancels
        </div>

        <p>
          Each of the back normals can be shortcut into a back-forward special.
          You don’t need to press back twice to execute them.
        </p>

        <p>
          <strong>B3 F1</strong> cancels into Spear.
        </p>
        <p>
          <strong>B3 F2</strong> cancels into Dash.
        </p>

        <p>
          <strong>B3 exF4</strong> cancels into enhanced Hellfire. The enhanced
          version is guaranteed damage even if they block. It is a safe chip
          resource.
        </p>

        <p>
          <strong>B3 exDB3</strong> cancels into Enhanced Teleport. This is an
          excellent way to force them into blocking, giving your teleport more
          freedom. Be careful - it can still be interrupted but requires
          pinpoint accuracy. Try B3 exDB3 12 BF1. Try recording the dummy to
          block at random intervals. With some practice you can learn when to
          try and connect the punch and when to throw.
        </p>

        <p>
          As mentioned, Scorpion has a poor mix-up without Kameos. The B3 cancel
          is a good candidate for Kameo synergy.
        </p>
      </Callout>

      <h3>Swiping Kunai - B2</h3>

      <FlexWrapper className="mt-2">
        <Badge className="text-success border-success">
          <LuShieldCheck /> Safe (0 on block)
        </Badge>

        <Badge className="text-success border-success">
          <GiWingfoot /> Fast (9f start)
        </Badge>

        <Badge className="text-success border-success">
          <GiAirplaneArrival /> Anti-air
        </Badge>

        <Badge className="text-success border-success">
          <TbRuler3 /> Decent Reach
        </Badge>
      </FlexWrapper>

      <Image
        className="shadow-md max-h-120 object-cover object-[0%_50%]"
        src={scorpb2}
        alt="Scorpion doing back 2 attack."
      />

      <p>
        Back 2 is a reachy high attack that is also a reasonable anti-air move.
        You can combine it with Back 3 - B3 baiting a jump into B2 punishing
        that jump if the opponent doesn’t time his attack properly. It is also
        cancelable into any of the special moves as B3, but because of its
        shorter range it is best used as a combo starter from a jumping-in
        opponent - B2 F1 for a full spear combo punish.
      </p>

      <Callout>
        <div className="text-base font-bold flex items-center gap-2">
          <GiHighKick /> Practice
        </div>
        <p>
          Set a jump-in practice dummy and try to hit them with B2. Then record
          the opponent jumping in with a kick attack. This will be harder to
          counter with B2, but should be practiced. Once you feel confident with
          the above, try connecting a spear - B2 F1 into whatever combo you
          prefer.
        </p>
      </Callout>

      <h2>Specials</h2>

      <h3>Spear - Back Forward 1</h3>

      <FlexWrapper className="mt-2">
        <Badge className="text-success border-success">
          <GiKnockout /> Stun
        </Badge>

        <Badge className="text-success border-success">
          <MdSocialDistance /> Full-screen
        </Badge>

        <Badge>
          <RiArrowRightUpLine /> High
        </Badge>

        <Badge>
          <GiThunderball /> Projectile
        </Badge>

        <Badge className="text-error border-error!">
          <GiSnail /> Slow (17f start)
        </Badge>

        <Badge className="text-error border-error!">
          <GiBrokenShield /> Unsafe (-28 on block)
        </Badge>
      </FlexWrapper>

      <Image
        className="shadow-md"
        src={spear}
        alt="Scorpion's spear special at fullscreen."
      />

      <p>
        The Spear - Scorpion’s signature move - is a pretty unique special. He
        launches his Kunai as a slow forward high projectile. If it connects, it
        stuns its target, brings them and restands them next to Scorpion. A{' '}
        <strong>second spear</strong> at this point{' '}
        <strong>will drop the opponent to the ground</strong> (to prevent stun
        abuse).
      </p>

      <p className="font-bold">
        The enhanced version hits mid, catching foes that like to duck under the
        spear off-guard.
      </p>

      <p>
        As expected, the lure of stunning the other fighter to start an easy
        combo, promotes new players to abuse the spear. It is the most
        anticipated move, but the threat of it is often more effective than its
        ill-measured use. Think of it as mid-screen space control. You can bait
        into it (discussed bellow). Apply it to catch far jump-ins, whiffs or
        dashes. Using your other tools to initiate a combo will help you extend
        it at a later stage.
      </p>

      <Callout>
        <div className="text-base font-bold flex items-center gap-2">
          <GiHighKick /> Practice
        </div>
        <p>
          B2, B3, 21, 12 and 33 all can connect with a spear out-of-the box. Try
          launching the opponent into the air via F32 - you can also go out of a
          J13 and any jump kick into a spear. A J111 close to the ground will
          also bounce the opponent enough for a spear to connect.
        </p>
      </Callout>

      <h2 className="flex items-center gap-2">
        <MdAltRoute /> Core Combos
      </h2>

      <p>
        As modular as Scorpion’s move set is, when playing online, consistency
        will defeat high damage and intricate sequences. In this regard we like
        to suggest two Kameo-agnostic routes for you to begin with - each with a
        meterless and single meter variation.
      </p>

      <Callout>
        <div className="text-base font-bold flex items-center gap-2">
          <LuArrowRightFromLine /> Starters
        </div>

        <p>
          <strong>F32</strong> repeated is top but can be difficult to connect.
          If you are not confident practice only F3 stagger into F32, or simply
          F32 stop.
        </p>

        <p>
          <strong>21/12/33 BF1</strong> - 21 is most consistent, 12 is the
          fastest.
        </p>

        <p>Jump kick into a spear is also available.</p>

        <p className="text-base font-bold flex items-center gap-2">
          <FiCornerUpRight /> Aerial extensions
        </p>

        <p>
          <strong>J12 air EX DB2 air 111</strong> is central to Scorpion’s air
          play. If you wait a bit between DB2 and 111 for both characters to
          fall closer to the ground, you can bounce them off it into a spear.
          Timing is tricky but not difficult.
        </p>

        <p>
          <strong>J13 BF1</strong> - the 13 bounces the opponent off the ground
          enough for a spear, provided gravity scaling has not advanced too
          much.
        </p>

        <p className="text-base font-bold flex items-center gap-2">
          <LuArrowRightToLine /> Enders
        </p>

        <p>
          <strong>33 DB2</strong> is the most scalable mid-screen ender after
          spear.
        </p>

        <p>
          <strong>333 BF2</strong> - the third kick knocks back so only a dahs
          can connect. This works well with Kameos that can chain off dash.
        </p>
      </Callout>

      <h3>Spear Late</h3>

      <p>
        You can only profit if you learn to delay the spear. Strive to start
        with the three F32 juggles. After the third one you will still have time
        for a Standing 4 (not Forward 4) into a spear and finish with one of the
        enders.
      </p>

      <Callout>
        <div className="flex gap-2 font-bold text-base">
          <GiArmorPunch className="mt-1" />{' '}
          <div>
            F32 F32 F32 4 BF1 33 DB2{' '}
            <span className="text-light">for 36.5% resourceless damage</span>
          </div>
        </div>

        <p>
          The last F32 juggle into 4 would be the hardest part. Gravity scaling
          will give you little height. Try to time it and not press Forward 4 by
          accident, which will not connect.{' '}
        </p>
      </Callout>

      <p>
        This is easy damage. If you are having trouble, try skipping the last
        F32.
      </p>

      <p>
        You can spend one meter adding the EX DB2 aerial extender to augment the
        above. Even better if you can slightly delay the 111 and do it closer to
        the ground - you will be able to bounce the opponent off it and connect
        a spear.
      </p>

      <Callout>
        <div className="font-bold text-base">
          F32 F32 J12 air EX JDB2{' '}
          <span className="text-light">small pause</span> air 111 BF1 33 DB2{' '}
          <span className="text-light">for 40.7% damage 1 meter combo</span>
        </div>
      </Callout>

      <h3>Spear early</h3>

      <p>
        If you land any other hit than the F32 you will have to use spear. OK,
        now what? The three juggles are still there, but you must modify the
        ender because spear reset is gone.
      </p>

      <Callout>
        <div className="font-bold text-base">
          21 BF1 F32 F32 F32 F34 BF2{' '}
          <span className="text-light">for 34.2% meterless damage</span>
        </div>
      </Callout>

      <p>
        This is less damage but still a consistent meterless combo out of spear.
        Spending a meter to extend damage can be done in a similar manner as
        above with the aerial extension.
      </p>

      <Callout>
        <div className="font-bold text-base">
          21 BF1 F32 F32 J12 EX DB2{' '}
          <span className="text-light">small pause</span> air 111 air DB2{' '}
          <span className="text-light">for 37.7% one meter damage</span>
        </div>

        <p>
          The last DB2 is not enhanced, but is necessary as any other special
          won't connect.
        </p>
      </Callout>

      <h3>Amplified Air Teleport</h3>

      <p>
        Expanding combos through air teleport is more demanding than using your
        other tools, but you can catch an opponent who is not expecting you to
        try pressure out of a distant jump.
      </p>

      <Callout>
        <div className="font-bold text-base">
          Air EX DB3 air 3 DB3 F32 F32 4 BF1 33 DB2{' '}
          <span className="text-light">for 41.1% one meter damage</span>
        </div>
        <p>The first enhanced teleport must be at the opponent's level.</p>
      </Callout>

      <p>
        This is a tough combo but is one worth the surprise and the damage over
        spear/juggle combos. Here is one that is going off F32 for comparison.
      </p>

      <Callout>
        <div className="font-bold text-base">
          F32 J12 EX DB3 J13 BF1 33 DB{' '}
          <span className="text-light">for 33.4% one meter damage</span>
        </div>
      </Callout>

      <p>
        You can achieve higher damage without the bar of meter and the demanding
        timing of the air teleport.
      </p>

      <h2>Optimal Combos</h2>

      <Callout>
        <div className="font-bold text-base">
          F32 J12 EX DB3 J13 BF1 33 DB{' '}
          <span className="text-light">for 33.4% one meter damage</span>
        </div>
      </Callout>

      <p>Here are a few grueling alternatives for the best damage. </p>

      <h2>Baiting Whiffs</h2>

      <h3>Punch whiff into spear</h3>
      <FlexWrapper className="mt-2">
        <Badge className="text-success border-success">
          <GiThumbUp /> Simple
        </Badge>
      </FlexWrapper>

      <p>
        As with any character, at mid-to-long range, deliberately throwing a
        punch into empty air can motivate the opponent into action - dashing
        forward, jumping, doing a special etc. As cheap as it may sound
        following such an intentional punch whiff with a spear catches foes
        dashing forward online quite often.
      </p>

      <p>
        This appears to be a beginner’s trap, but even in higher ranks it can be
        useful tech if not abused. The shorter the range to the opponent when
        attempted, the difficult it will be for them to properly react, but they
        may have an attack that can reach you.
      </p>

      <h3>Short string into throw</h3>

      <FlexWrapper className="mt-2">
        <Badge className="text-success border-success">
          <GiThumbUp /> Simple
        </Badge>
      </FlexWrapper>

      <p>
        This is valid tech for every character, but here are some options
        specifically for MK1 Scorpion.
      </p>

      <p>
        As we know, 122 ends with an overhead that can be punished with an up
        block. You can cut it short to 12 into a throw.
      </p>

      <p>
        The F34 chains nicely with the dash and many Kameo moves. You can do
        only the F3 into a throw.
      </p>

      <p>
        Both pay attention to how the opponent is reacting. Abusing them will
        result in a counterattack before the throw connects.
      </p>

      <h3>Mind games with EX Teleport</h3>
      <FlexWrapper className="mt-2">
        <Badge className="text-warning border-warning">
          <GiHighKick /> Advanced
        </Badge>
      </FlexWrapper>

      <p>
        The Enhanced Flame-Port is punishable, but the opponent’s timing must be
        spot-on, so most opponents either block or throw a quick 1 punch because
        it is the fastest. Micro-ducking into an attack or a throw are good ways
        to interrupt their anti-teleport game.
      </p>

      <h2>Other Tech</h2>

      <h3>EX teleport jail in corner</h3>
      <FlexWrapper className="mt-2">
        <Badge className="text-error border-error!">
          <GiStairsGoal /> Difficult
        </Badge>
      </FlexWrapper>
    </article>
  )
}
