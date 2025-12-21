import Image from 'next/image'
import Link from 'next/link'
import { GiScales, GiSharpAxe } from 'react-icons/gi'

import Shao from '@/app/assets/mk1/shao.webp'
import shao2 from '@/app/assets/mk1/shao_2.webp'
import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { BulletList } from '@/app/ui/BulletList'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 10

export const navTitle = 'General Shao'

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'A breakdown of General Shao in Mortal Kombat 1.',
)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

      <div className="md:flex items-center gap-4">
        <Image
          className="max-h-72 object-cover object-[0%_0%]  md:w-1/2 md:max-h-full"
          src={Shao}
          alt="General Shao in Mortal Kombat 1"
        />

        <p className="md:w-1/2">
          General Shao is a close-to-mid range bruiser that excels at scouting
          and bullying his opponents in{' '}
          <Link href={`${MK_BASE_URL}/neutral`}>neutral</Link>. His stance-based
          style alternates between the axe with the famed far-reaching
          disjointed normals and unarmed where he is faster, safer with plus
          frames on block. He is tough (high HP), moves fast and hits hard. At
          the same time, his offense has gaps that can be abused at higher
          ranks. And he lacks sufficient long-range instruments. Both issues are
          fixed with the proper Kameo partner, of which he can choose between
          plenty of good options. But if you don’t have the right tools at the
          right time (wrong Kameo/stance) you will have a hard time reverting
          pressure.
        </p>
      </div>

      <h2 className="flex items-center gap-2">
        Why play or skip General Shao? <GiScales />
      </h2>

      <BulletList
        className="text-success"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>Durable</strong> - highest health in the game.
          </>,
          <>
            <strong>Long reach with axe</strong> - great disjointed mids and
            aerials.
          </>,

          <>
            <strong>Strong mixup in both stances</strong> - multiple overheads,
            lows and command grabs. Real 50/50s when unarmed.
          </>,
          <>
            <strong>Excellent air control</strong> - good anti-air options, even
            normals due to his height advantage.
          </>,
          <>
            <strong>Superb corner pressure</strong> - additional setups, armored
            plus frames and turn steals on top of his mix-up.
          </>,
        ]}
      />
      <BulletList
        className="text-warning"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>Armor</strong> - Multiple wakeup and launch options, but
            punishable.
          </>,
          <>
            <strong>Kameo versatility and dependency</strong> - Shao works well
            a lot of Kameos but is also very dependent on them to patch gaps and
            confirm mids.
          </>,
          <>
            <strong>Stances</strong> - The Axe gives you excellent space, while
            unarmed is devastating up close. At the same time playing outside a
            stance’s forte can be difficult.
          </>,
        ]}
      />
      <BulletList
        className="text-error"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>Unsafe pressure</strong> - safe moves have gaps; gapless
            ones are unsafe.
          </>,
          <>
            <strong>No projectiles or teleports</strong> - his only full screen
            reaching move is slow and as mentioned he requires a Kameo to cover
            the distance.
          </>,
        ]}
      />

      <h2 className="flex items-center gap-2">
        <GiSharpAxe />
        The Axe
      </h2>

      <p>
        The Axe gives Shao the disjointed normals with first-rate range that
        makes him a master of mid-range engagements. It lacks the good mids and
        mixup of the unarmed stance, but how you transition from axe to no axe
        makes or breaks Shao’s game.
      </p>

      <h3>A simple approach to mix-ups</h3>

      <p>
        Pressing 2 with the axe while holding no direction will execute a very
        fast, safe, disjointed attack with superb reach. It checks out all the
        essentials of a good attack and is among the best standing punches in
        the game.
      </p>

      <Image
        className="shadow-md max-h-96 object-cover object-[0%_50%]"
        src={shao2}
        alt="General Shao doing standing 2 attack."
      />

      <p>
        <strong>This is your bread and butter.</strong> Learn to measure its
        range and practice dashing into it. You will use it to whiff punish,
        interrupt advances, as a buffer attack and even as a frontal anti-air
        due to Shao’s height.
      </p>
    </>
  )
}
