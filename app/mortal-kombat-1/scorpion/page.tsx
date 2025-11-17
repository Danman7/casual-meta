import Image from 'next/image'
import { FaGraduationCap } from 'react-icons/fa6'
import { GiArmorPunch, GiHighKick } from 'react-icons/gi'
import { MdBatteryChargingFull, MdOutlineSocialDistance } from 'react-icons/md'
import {
  PiArrowsCounterClockwiseBold,
  PiBatteryWarningVerticalBold,
} from 'react-icons/pi'

import Scorpion from '@/app/assets/mk1/scorp_mk1.webp'
import { MK1_TITLE } from '@/app/constants'
import { Badge } from '@/app/ui/Badge'
import { BulletList } from '@/app/ui/BulletList'
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
          <div className="flex gap-2 mt-4 flex-wrap">
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

            <Badge className="text-error border-error!">
              <GiArmorPunch /> Suboptimal Offense w/o Kameos
            </Badge>

            <Badge className="text-error border-error!">
              <PiBatteryWarningVerticalBold /> Suboptimal damage w/o resources
            </Badge>
          </div>

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
    </article>
  )
}
