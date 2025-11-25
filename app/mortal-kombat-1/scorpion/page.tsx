import Image from 'next/image'
import { FaGraduationCap } from 'react-icons/fa6'
import {
  GiArmorPunch,
  GiBrokenShield,
  GiHighKick,
  GiJoint,
  GiKnockout,
  GiSnail,
  GiStairsGoal,
  GiThumbUp,
  GiThunderball,
} from 'react-icons/gi'
import { IoWarning } from 'react-icons/io5'
import { LuBetweenHorizontalEnd } from 'react-icons/lu'
import {
  MdAltRoute,
  MdOutlineSocialDistance,
  MdSocialDistance,
} from 'react-icons/md'
import { PiArrowsCounterClockwiseBold } from 'react-icons/pi'
import { RiBreadFill } from 'react-icons/ri'
import { TiArrowShuffle } from 'react-icons/ti'

import Scorpion from '@/app/assets/mk1/scorp_mk1.webp'
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
              <PiArrowsCounterClockwiseBold /> Good counterplay
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
            when enhanced), B3 and Spear are solid challenges with superb space
            control. His teleport and Hellfire can interrupt projectile spam. B2
            is a decent anti-air.
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

      <p>
        <strong>Forward 32</strong> is Scorpion’s{' '}
        <strong>top starter in terms of combo potential</strong>. It is a{' '}
        <strong className="text-success">safe</strong> (-6 on block),{' '}
        <strong>reasonably quick</strong> (12 frames start) mid-high string that{' '}
        <strong className="text-success">launches</strong> the opponent in the
        air. Naturally, due to gravity scaling, it is best utilized towards the
        beginning of the combo. Scorpion can juggle his foe up to three times in
        a row and still have enough height for a standing 4 kick into a spear.
        Or, he can juggle two times instead and transition into an aerial combo
        using J12 exJDB2 111.
      </p>

      <p>
        <strong>Standing 21</strong> is Scorpions’s{' '}
        <strong>primary mid-range challenge and hit-confirm</strong>. It is also
        his most consistent combo starter. It is a{' '}
        <strong className="text-success">fast</strong> (10 frames start),{' '}
        <strong className="text-success">safe</strong> (-2 on block),{' '}
        <strong className="text-success">disjointed</strong> high string that
        also has a <strong className="text-success">surprising reach</strong>.
        Practice, measuring it. It is second to F32 in combo potential because
        if you hit-confirm you can only cancel into a spear or a Kameo move,
        limiting your extension later on.
      </p>

      <p>
        <strong>Back 3</strong> is a very singular normal. Scorpion sweeps his
        Kunai for a <strong className="text-error">slow</strong> (21 frames
        start), <strong className="text-error">unsafe</strong> (-19 on block),
        but very <strong className="text-success">far reach</strong> (jump
        distance plus a dash){' '}
        <strong className="text-success">disjointed</strong> attack that makes
        two hits - a mid, followed by a low one. It is among the longest
        reaching normals in the game. Even as slow and predictable as it is, the
        threat of a low attack at such a distance pushes the opponent to
        constantly be ready to block low or jump over it.
      </p>

      <p className="font-bold">
        Also, B3’s first hit is cancelable into any special or Kameo move.
      </p>

      <p>
        <strong>Back 2</strong> is a{' '}
        <strong className="text-success">safe</strong> (0 on block),{' '}
        <strong className="text-success">fast</strong> (9 frames start) high
        attack with
        <strong className="text-success">good reach</strong> that is also a
        decent <strong className="text-success">anti-air</strong> defense. It
        also can be cancelled into any special or Kameo move on hit. You can
        bait a jump out of your foe with the B3 into a timed B2 interrupt into
        spear.
      </p>

      <Callout>
        <div className="text-base font-bold flex items-center gap-2">
          Back forward cancels
        </div>

        <p>
          Each of the back normals can be shortcut into a back-forward special.
          You don’t need to press back twice to execute them.
        </p>

        <p>
          <strong>B2 F1</strong> cancels into spear for a nice full combo out of
          anti-air.
        </p>
        <p>
          <strong>B2 F2</strong> cancels into dash which is chainable only with
          certain Kameo moves.
        </p>

        <p>
          <strong>B3 exF4</strong> cancels into enhanced Hellfire. The enhanced
          version is guaranteed damage even if they block. This is a moderately
          safe chip damage resource (if they block).
        </p>

        <p>
          <strong>B3 exDB3</strong> cancels into Enhanced Teleport. This is an
          excellent way to force them into blocking, giving your teleport more
          freedom. Be careful - it can still be interrupted but requires
          pinpoint accuracy. Try B3 exDB3 12 BF1 if they take the hit or B3
          exDB3 throw if they block.
        </p>

        <p>
          As mentioned, Scorpion has a poor mix-up without Kameos. The B3 cancel
          is a good candidate for Kameo synergy.
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

        <Badge className="text-success border-success">
          <GiJoint /> Disjointed
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

      <p>
        The Spear - Scorpion’s signature move - is a pretty unique special. He
        launches his Kunai as a forward high projectile. If it connects, it
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
        to first suggest two Kameo-agnostic routes for you to begin with - each
        with a meterless and single meter variation. Later we explore some
        additional combo considerations. Remember, landing a hit out of neutral
        is better than always trying for a full combo.
      </p>

      <h3>Spear Late</h3>

      <FlexWrapper className="mt-2">
        <Badge className="text-success border-success">
          <GiArmorPunch /> Best damage for difficulty
        </Badge>
      </FlexWrapper>

      <p>You can only profit if you learn to delay the spear.</p>

      <p className="font-bold text-lg">
        <GiArmorPunch className="mr-1 mb-1 inline" /> F32 F32 F32 4 BF1 33 DB2{' '}
        <span className="text-light">for 36.5% resourceless damage</span>
      </p>

      <p>
        This is easy damage. If you are having trouble, try skipping the last
        F32. Now let's extend it with one meter.
      </p>

      <p className="font-bold text-lg">
        <GiArmorPunch className="mr-1 mb-1 inline" /> F32 F32 J12 exJDB2{' '}
        <span className="text-light">small pause</span> J111 BF1 33 DB2{' '}
        <span className="text-light">for 40.7% damage 1 meter combo</span>
      </p>

      <p>
        Slightly more demanding. Ending it at J111 is good enough, but if you
        practice to time the three punches closer to the ground you will do
        significantly more damage.
      </p>

      <h3>Spear early</h3>
      <FlexWrapper className="mt-2">
        <Badge className="text-success border-success">
          <RiBreadFill /> Bread-n-butter
        </Badge>
      </FlexWrapper>

      <p>
        OK, you landed a spear without a launch. Now what? The 3x F32 is still
        there, but the combo ender must modify.
      </p>

      <p className="font-bold text-lg">
        <GiArmorPunch className="mr-1 mb-1 inline" /> 21 BF1 F32 F32 F32 F34 BF2{' '}
        <span className="text-light">for 34.2% meterless damage</span>
      </p>

      <p className="font-bold text-lg">
        <GiArmorPunch className="mr-1 mb-1 inline" /> 21 BF1 F32 F32 J12 EX DB2{' '}
        <span className="text-light">small pause</span> J111 JDB2{' '}
        <span className="text-light">for 37.7% one meter damage</span>
      </p>

      <h3>Amplified Air Teleport</h3>

      <FlexWrapper className="mt-2">
        <Badge className="text-error border-error!">
          <GiStairsGoal /> Difficult
        </Badge>
      </FlexWrapper>

      <p>
        Expanding punish trough teleport is much harder, yet not necessarily
        more damaging than using your other tools. But as most players expect a
        Scorpion to do a spear or a grounded teleport or a back 3, very few
        expect an enhanced air teleport from some distance. So, this is a
        surprise, albeit difficult resource you have in your pocket.
      </p>

      <p className="font-bold text-lg">
        <GiArmorPunch className="mr-1 mb-1 inline" /> exJDB3 J3 DB3 F32 F32 4
        BF1 33 DB2{' '}
        <span className="text-light">for 41.1% one meter damage</span>
      </p>

      <p className="font-bold text-lg">
        <GiArmorPunch className="mr-1 mb-1 inline" /> exJDB3 J3 DB3 4 BF1 F32
        J12 exJDB2 <span className="text-light">small pause</span> J111 JDB2{' '}
        <span className="text-light">for 44.9% two meter damage</span>
      </p>

      <h2 className="flex items-center gap-2">Corner combos</h2>

      <p>
        This is where you spike the damage best. Elsewhere, the standing 4 kick
        is not worth it. Here, where you can connect two in a row, it scales
        wonderfully.
      </p>

      <p className="font-bold text-lg">
        <GiArmorPunch className="mr-1 mb-1 inline" />
        F32 4 4 BF1 F32 J12 exJDB2{' '}
        <span className="text-light">small pause</span> J111 JDB2
        <span className="text-light"> for 44.6% one meter damage</span>
      </p>

      <p>
        The first standing 4 must be at the highest possible spot for the second
        one to connect. If this is too hard, a single 4 kick will also do.
      </p>

      <p>
        If you are about to win the round, and you feel confident, you can spice
        the above further with some tight timings.
      </p>

      <p className="font-bold text-lg">
        <GiArmorPunch className="mr-1 mb-1 inline" />
        F32 4 4 BF1 F32 J12 exJDB2{' '}
        <span className="text-light">small pause</span> J111{' '}
        <span className="text-light">land</span> B2 exBF4
        <span className="text-light">
          {' '}
          for a whooping 50.2% one meter damage
        </span>
      </p>

      <p>
        Yes, the enhanced Hellfire is guaranteed damage, but if they survive,
        they also get guaranteed a wakeup punish. You cannot recover in time.
      </p>

      <h2>Baiting Whiffs</h2>

      <h3>Punch whiff into spear</h3>
      <FlexWrapper className="mt-2">
        <Badge className="text-success border-success">
          <GiThumbUp /> Simple
        </Badge>

        <Badge className="text-warning border-warning">
          <IoWarning /> Use sparingly
        </Badge>
      </FlexWrapper>

      <p>
        A whiff from your side often motivates your opponent into action – dash,
        jump or attack. At medium distance you can deliberately throw a punch
        into empty air followed immediately by a spear. Even at higher ranks, if
        not abused, you will find that many opponents will dash forward into the
        spear.
      </p>

      <h3>String derail</h3>

      <FlexWrapper className="mt-2">
        <Badge className="text-success border-success">
          <GiThumbUp /> Simple
        </Badge>

        <Badge className="text-warning border-warning">
          <IoWarning /> Hit confirm
        </Badge>
      </FlexWrapper>

      <p>
        Standing 122 ends in an overhead that can be punished with an up block.
        Condition your foe with the full string then next time cut it short 12
        into a throw.
      </p>

      <p>
        Forward 34 is a nice mid-mid respect check, that chains into dash and
        many Kameo moves. If they block it consistently, you can try F3 into a
        throw.
      </p>

      <h3>Mind games with enhanced Teleport</h3>
      <FlexWrapper className="mt-2">
        <Badge className="text-warning border-warning">
          <GiHighKick /> Advanced
        </Badge>
      </FlexWrapper>

      <p>
        A teleport is useful out of a combo or at some distance to control the
        other fighter. Rarely will you see a Scorpion trying to teleport out of
        a blocked string, but this also has its uses. If you enhance teleport
        after the opponent blocked your attack you can prompt them to counter
        punch. Use that to micro-duck into 12/21.
      </p>

      <h3>Air DB2 whiff</h3>
      <FlexWrapper className="mt-2">
        <Badge className="text-warning border-warning">
          <IoWarning /> Use sparingly
        </Badge>

        <Badge className="text-warning border-warning">
          <LuBetweenHorizontalEnd /> Niche
        </Badge>
      </FlexWrapper>

      <p>
        The exJDB2 is an excellent aerial combo extender, but people who spend
        time with the frame data have seen that it also recovers very quickly.
        If you jump over them and do the move, the opponent will have to
        anti-air you very quickly. Otherwise, it is safe on block. This is
        mostly useful with some Kameos.
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
