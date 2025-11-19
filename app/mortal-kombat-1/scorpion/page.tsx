import Image from 'next/image'
import { FaForward } from 'react-icons/fa'
import { FaGraduationCap } from 'react-icons/fa6'
import {
  Gi3dStairs,
  GiArmorPunch,
  GiFalling,
  GiHighKick,
  GiJoint,
  GiSnail,
  GiSpearHook,
  GiThumbUp,
  GiWingfoot,
} from 'react-icons/gi'
import { LuShieldAlert, LuShieldCheck } from 'react-icons/lu'
import { MdBatteryChargingFull, MdOutlineSocialDistance } from 'react-icons/md'
import {
  PiArrowFatDownFill,
  PiArrowsCounterClockwiseBold,
} from 'react-icons/pi'
import { TbBoxMultiple2, TbRuler3, TbRulerMeasure } from 'react-icons/tb'
import { TiFlowChildren, TiFlowSwitch } from 'react-icons/ti'

import Scorpion from '@/app/assets/mk1/scorp_mk1.webp'
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
              <MdOutlineSocialDistance /> Good at all ranges
            </Badge>

            <Badge className="text-success border-success">
              <MdBatteryChargingFull /> Simple meterless combos
            </Badge>

            <Badge className="text-success border-success">
              <PiArrowsCounterClockwiseBold /> Good counterplay
            </Badge>

            <Badge className="text-warning border-warning">
              <TiFlowSwitch /> Good difficult tech
            </Badge>

            <Badge className="text-error border-error!">
              <GiArmorPunch /> Suboptimal offense w/o Kameos
            </Badge>
          </FlexWrapper>

          <p>
            Mortal Kombat 1’s version of Scorpion has a polarizing effect on the
            community, but he is still frequently played at high levels. Almost
            all his moves are safe but lack pressure potential without a proper
            Kameo pair. He has tools for playing both up close and against
            players who like to keep their distance. And as with previous
            titles, Scorpion’s lack of high technicality makes him great for new
            players. Keep in mind that at least in the beginning you will find
            him better suited for reacting to the opponent’s actions, punishing
            and interrupting, than proactively attacking himself.
          </p>
        </div>
      </div>

      <h2>Why play or skip Scorpion?</h2>
      <BulletList
        className="text-success"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>No safe spot for your foe</strong> - His Spear and B3
            control middle space, while Teleport and Hellfire control
            everywhere.
          </>,
          <>
            <strong>Novice Approved</strong> - He lacks any serious complexity
            (stances, forms, complex sequences) yet has a tool for every
            scenario a beginner would have to tackle. Most normal strings are
            safe on block. His Spear stuns and brings the opponent to you.
          </>,
          <>
            <strong>Easy to pick up combos</strong> - He has some relatively
            simple options that go into the 25% - 30% damage range, including an
            easy launch, repeat juggle and synergy with the spear.
          </>,
          <>
            <strong>Good interruptions and punishes</strong> - His dash, which
            is also armored on EX, along with his spear are good ways to
            intervene with the enemy advancing towards you. Also, the 2 and B3
            at a longer range can be used to punish misses.
          </>,
        ]}
      />

      <BulletList
        className="text-warning"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>No mix-up or frame traps on his own</strong> - Proactive
            offense is possible, but you will have to time it with good Kameo
            moves.
          </>,
          <>
            <strong>Considered predictable</strong> - People expect the spear,
            dash and teleport and often play well into Scorpion’s strenuous
            attack. That doesn’t make these tools weak, but rather they should
            be used with caution.
          </>,
        ]}
      />

      <BulletList
        className="text-error"
        icon="GiDeathSkull"
        items={[
          'Optimal combos are often difficult and resource hungry yet provide little on top of sampler, more consistent ones.',
        ]}
      />

      <h2>Key Normals</h2>

      <h3>2 / 21</h3>

      <FlexWrapper className="mt-2">
        <Badge className="text-success border-success">
          <LuShieldCheck /> Safe
        </Badge>

        <Badge className="text-success border-success">
          <GiWingfoot /> Fast
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
        Learn to measure the standing 2 first. It is marginally slower than
        standing 1 but reaches much further. The 21 will be your primary
        mid-to-close range advancing stagger for pressure or hit-confirm.
      </p>

      <h3>Back 3</h3>
      <FlexWrapper className="mt-2">
        <Badge>
          <TbBoxMultiple2 /> Multi-hit: Mid-Low
        </Badge>

        <Badge className="text-success border-success">
          <GiJoint /> Disjointed
        </Badge>

        <Badge className="text-success border-success">
          <TiFlowChildren /> First hit cancels
        </Badge>

        <Badge className="text-success border-success">
          <TbRulerMeasure /> Very long reach
        </Badge>

        <Badge className="text-success border-success">
          <GiFalling /> Knockdown
        </Badge>

        <Badge className="text-success border-success">
          <PiArrowFatDownFill /> Second hit low
        </Badge>

        <Badge className="text-error border-error!">
          <GiSnail /> Slow
        </Badge>

        <Badge className="text-error border-error!">
          <LuShieldAlert /> Unsafe
        </Badge>
      </FlexWrapper>

      <Image
        className="shadow-md"
        src={scorpb3}
        alt="Scorpion doing back 3 attack."
      />

      <p>The first hit can be cancelled into any special or Kameo move.</p>

      <Callout>
        <div className="text-base font-bold flex items-center gap-2">
          <GiSpearHook /> B3 Cancels
        </div>
        <p>
          <strong>B3 F1</strong> cancels into Spear.
        </p>
        <p>
          <strong>B3 F2</strong> cancels into Dash.
        </p>
        <p>
          <strong>B3 EX DB3</strong> cancels into Enhanced Teleport which out of
          the special moves is the most difficult yet safest option. It is a
          good way to force them into blocking, maybe even low blocking, being
          less prepared to counter the port.
        </p>

        <p>
          As mentioned, Scorpion has a poor mix-up without Kameos. The B3 is a
          good candidate for Kameo synergy. <em>Ferra</em> is a popular pair for
          him in this regard. You can do <strong>B3 K 3</strong> for a low mix
          or <strong>B3 K 2</strong> for an overhead mix.
        </p>
      </Callout>

      <h2>Baiting Whiffs</h2>

      <h3>Mid-to-long range punch whiff into spear</h3>
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

      <h3>Strings cut short into throw</h3>
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

      <h3>Ending corner combo with EX teleport jail</h3>
      <FlexWrapper className="mt-2">
        <Badge className="text-error border-error!">
          <Gi3dStairs /> Difficult
        </Badge>
      </FlexWrapper>
    </article>
  )
}
