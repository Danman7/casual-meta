import Image from 'next/image'
import { FaForward, FaPlay } from 'react-icons/fa'
import { FaGraduationCap, FaPersonArrowUpFromLine } from 'react-icons/fa6'
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
import { LuShieldCheck } from 'react-icons/lu'
import { MdOutlineSocialDistance, MdSocialDistance } from 'react-icons/md'
import { PiArrowsCounterClockwiseBold } from 'react-icons/pi'
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
            community, but he remains frequently played at all levels. Nearly
            all of his normal moves are safe, though they lack pressure
            potential without the right Kameo partner. He has tools to fight
            effectively both up close and against zoning players who prefer
            distance. As in past titles, Scorpion’s low execution barrier makes
            him a good choice for newcomers. Keep in mind, however, that until
            you get into more difficult tech he tends to perform best when
            reacting to opponents - punishing and interrupting - rather than
            launching the offense himself.
          </p>
        </div>
      </div>

      <h2>Why play or skip Scorpion?</h2>
      <BulletList
        className="text-success"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>No safe spot for your foe</strong>. The Spear, Teleport, B3
            and Hellfire set of moves pose a threat everywhere on the screen.
          </>,
          <>
            <strong>Is novice approved</strong>. With no stances, forms, or
            necessity for complex sequences, Scorpion offers a full toolkit for
            every basic matchup scenario. His normals are generally safe on
            block, and the Spear remains a reliable stun that pulls enemies in.
          </>,
          <>
            <strong>Has simple combo options</strong>. Scorpion offers
            straightforward routes that reach the 25 - 30% damage range, with
            easy launchers, repeat juggles, and strong synergy with his Spear.
          </>,
          <>
            <strong>Good interruptions and punishes</strong>. His dash (armored
            on EX), standing 2 and Spear are solid tools to stop advancing
            enemies or even punish whiffs. His B3 is slow but reaches far and
            can catch opponents off-guard. B2 is a decent anti-air.
          </>,
          <>
            <strong>Kameo Synergy</strong>. His moves and long throw animation
            make him accessible to a lot of Kameo partners. One can pair him for
            easy combo extension, mix-ups, or more technical jails or chip
            damage.
          </>,
        ]}
      />

      <BulletList
        className="text-warning"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>Needs a good Kameo for optimal offense</strong>. The other
            side of the coin is that he has no true ground mix-up or frame
            advantage on block. To catch up with a skilled opponent, he would
            require an appropriate partner. The best ones are usually not the
            easiest to play.
          </>,
          <>
            <strong>Move abuse is predictable</strong>. Isn’t this true for
            every character? Well, when one sees Scorpion, their mind goes
            immediately to the signature Spear and Teleport. Variate your
            distanced attacks with the Hellfire and B3.
          </>,
        ]}
      />

      <BulletList
        className="text-error"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>High damage is difficult</strong>. There are routes to the
            45% - 50% damage range, but they require tight timing and resources.
            Often simpler, more consistent combos are better when playing
            online.
          </>,
        ]}
      />

      <h2>Key Normals</h2>

      <h3>Forward 32</h3>
      <FlexWrapper className="mt-2">
        <Badge>
          <RiArrowRightLine /> <RiArrowRightUpLine /> Mid - High
        </Badge>

        <Badge>12f start</Badge>

        <Badge className="text-success border-success">
          <LuShieldCheck /> Safe (-6 on block)
        </Badge>

        <Badge className="text-success border-success">
          <FaPersonArrowUpFromLine /> Launch
        </Badge>

        <Badge className="text-success border-success">
          <TbArrowBounce /> Repeated juggle
        </Badge>

        <Badge className="text-success border-success">
          <FaPlay /> Combo starter
        </Badge>
      </FlexWrapper>

      <div className="flex flex-col md:flex-row">
        <Image
          src={scorpf3}
          alt="Scorpions forward 3 attack."
          className="md:w-1/2 object-cover shadow-md"
        />

        <Image
          src={scorpf32}
          alt="Scorpion's forward 32 launch."
          className="md:w-1/2 object-cover shadow-md"
        />
      </div>

      <p>
        This is your main meterless combo starter. It is slower and has a
        shorter reach than standing 2, but it launches the opponent into the
        air. Practice this first. It is best employed out of neutral without the
        help of the spear, as you would find extending combos without the latter
        difficult later. If you are having trouble connecting, try a D1 into F32
        or a jump in punch J2 F32 to catch them off balance.
      </p>

      <p>
        <strong>
          F32 can be repeated up to three times in a row, depending on progress
          of the combo.
        </strong>{' '}
        Towards the beginning of a combo is best due to gravity scaling.
        Afterwards you can add a standing 4 into a spear, but if you wish to use
        some of Scorpion’s excellent areal moves you will have to chain only up
        to two F32s.
      </p>

      <h3>2 / 21</h3>

      <FlexWrapper className="mt-2">
        <Badge className="text-success border-success">
          <LuShieldCheck /> Safe (-2 on block)
        </Badge>

        <Badge className="text-success border-success">
          <GiWingfoot /> Fast (10f start)
        </Badge>

        <Badge className="text-success border-success">
          <FaPlay /> Combo starter
        </Badge>

        <Badge className="text-success border-success">
          <TbRuler3 /> Decent Reach
        </Badge>

        <Badge className="text-success border-success">
          <FaForward /> Advancing
        </Badge>
      </FlexWrapper>

      <Image
        className="shadow-md max-h-80 object-cover object-[0%_20%]"
        src={scorp2}
        alt="Scorpion doing standing 2 attack."
      />

      <p>
        F32 is best, but standing 2 is often more consistent. Learn to measure
        its reach. The 21 string will be your{' '}
        <strong>
          primary mid-to-close range pressure stagger and hit-confirm
        </strong>
        . Prefer this over the 12, unless you are touching the enemy and speed
        is of the essence.
      </p>

      <p>
        Initiating a combo with 21 is easier than F32, but you will have to
        cancel into spear right away unless paired with an appropriate Kameo
        extender. Then you can still chain three F32s with a different combo
        ender.
      </p>

      <h3>Back 3</h3>
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
        The B3 is important to understand. Scorpion uses his Kunai (making it
        disjointed) to make two attacks at very long range (about jump distance
        + back dash). The first one hits mid and is cancelable into any special
        or Kameo move. The second one is not, but hits low, which is the basis
        of conditioning with this move.
      </p>

      <p>
        B3 is slow, so most of the time the opponent has enough time to read it.
        The popular response is low block which does enough to limit their
        mobility and projectile spam. But sometimes the opponent will jump over
        it or teleport quite effectively. Don’t abuse this and be mindful of the
        distance you are at as this attack is not safe on block.
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
          <strong>B3 EX F4</strong> cancels into EX Hellfire. The enhanced
          version is guaranteed damage even if they block and is a safe chip
          resource.
        </p>

        <p>
          <strong>B3 EX DB3</strong> cancels into Enhanced Teleport. It is a
          good way to force them into blocking, maybe even low blocking, being
          less prepared to counter the port.
        </p>

        <p>
          As mentioned, Scorpion has a poor mix-up without Kameos. The B3 cancel
          is a good candidate for Kameo synergy.
        </p>
      </Callout>

      <h3>Back 2</h3>

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
        Back 2 is another cancelable back move that is also an OK jump-in
        defense. It can also be used on the ground, reaching slightly less than
        standing 2. All the cancels mentioned above with B3 are applicable here,
        but because of distance this move is effective at, probably the spear
        and dash are the best options.
      </p>

      <p>
        The conditioning to block low or jump over B3 can be used to your
        advantage. You can bait a jump with B3 then swat the jumper with B2 into
        a spear for a full combo.
      </p>

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
        The signature Scorpion spear is a unique special move. It launches a
        moderately slow high projectile. If it connects, it stuns and restands
        the target, then brings it next to you.{' '}
        <strong>
          Connecting a second spear within the same combo it will drop the
          opponent
        </strong>{' '}
        (as expected to prevent stun move abuse). So be mindful of your combo
        route.
      </p>

      <p className="font-bold">
        The enhanced version hits Mid instead of High, useful for catching foes
        that like to duck under the spear off-guard.
      </p>

      <p>
        The spear rules mid-screen neutral. Yes, it is anticipated, but you can
        fruitfully catch whiffs, jump-ins and projectile spam at some distance.
        The possibility of a spear itself conditions the opponent into careful
        approach even without encountering it.
      </p>

      <p>
        Next, naturally the spear is a superb combo extender, giving scorpion
        free choice of how to connect and continue a combo. It is worth noting
        that many unlikely air moves like jump-in kick, J13 or J111 (close to
        the ground) can connect with the spear.
      </p>

      <h2>Core Combos</h2>

      <p>
        Scorpion’s moves are very modular. Everything chains nicely, but for the
        most part you should favor stable, consistent combos over tight optimal
        ones. Initiating a combo online will be very different from practice
        mode. In this regard there are two main routes without a Kameo, that a
        Scorpion player should learn. We'll give you a meterless and a single
        meter version.
      </p>

      <h3>Spear Late</h3>

      <p>
        Beginners will find initiating a combo after a successful spear the
        easiest, but only the first one keeps the opponent standing. Conscious
        of this it is advisable to practice starting with three F32s instead and
        then connect with a spear afterwards.
      </p>

      <p>
        How do we connect the spear after the third F32? You will need to hit
        the falling foe with a standing 4 then do the BF1. Not a Forward 4 as
        that will drop the combo. After the spear connects, you only must end
        the combo and the optimal way to do that is 33 DB2. Put this all
        together
      </p>

      <Callout>
        <div className="flex gap-2 font-bold text-lg">
          <GiArmorPunch className="mt-1" />{' '}
          <div>
            F32 F32 F32 4 BF1 33 DB2{' '}
            <span className="text-light">for 36% resourceless damage</span>
          </div>
        </div>
      </Callout>

      <p>
        This doesn’t require aerials or tight timings. The third F32 launches
        low and the standing 4 kick without a direction must be timed well.
        Chances are new players will find this part the most difficult, but
        after a bit of practice you will see there are few easier options out
        there. If you are having trouble, you can skip the third F32, having
        much more height and time to work with after the second one.
      </p>

      <p>
        Once you get this one down to memory, you can try a bit trickier version
        of it, by spending only one bar. Try launching the enemy with only a
        single F32, then jump forward after them. You should be able to do a 12
        DB2 in the air. Now that doesn’t go anywhere but enhance the DB2 and you
        will bring the opponent back to you instead of dropping them. This is
        the only meter required.
      </p>

      <p>
        Now at this stage, both of you flying, you can easily press 1 three
        times for a nice ending of the combo. This would look like F32 F32 J12
        EX DB2 111. The interesting thing is that spear is not used yet. Well,
        if you can wait a little bit for both of you to come closer to the
        ground and then do the 111 BF1 you will be able to bounce the foe off
        the ground, and the spear should connect. This is the tricky part -
        learning to time the 111 into spear. After that you end it the same way
        as before - 33 DB2. It is more difficult, but if you learn it you are
        rewarded with 40+% 1 meter combo.
      </p>

      <Callout>
        <div className="flex gap-2 font-bold text-lg">
          <GiArmorPunch className="mt-1" />{' '}
          <div>
            F32 F32 J12 EX DB2 <span className="text-light">small pause</span>{' '}
            111 BF1 33 DB2{' '}
            <span className="text-light">for 40.4% damage 1 meter combo</span>
          </div>
        </div>
      </Callout>

      <p>
        This one would be as tight as you need to get mid-screen at least in the
        beginning.
      </p>

      <p>
        With both above, you may have an easier time connecting the F32 after a
        12 or 21 into a Kameo stun move.
      </p>

      <h3>Spear early</h3>

      <p>
        The late spear is optimal damage wise, but most of the time you will
        probably initiate a combo off 12 or 21 into spear, or straight spear. In
        that case much of the above remains the same, but since you no longer
        have the spear restanding, the ending is slightly different.
      </p>

      <p>After the third F32 you should aim for a F34 into a dash.</p>

      <Callout>
        <div className="flex gap-2 font-bold text-lg">
          <GiArmorPunch className="mt-1" />{' '}
          <div>
            21 BF1 F32 F32 F32 F34 BF2{' '}
            <span className="text-light">meterless damage</span>
          </div>
        </div>
      </Callout>

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
