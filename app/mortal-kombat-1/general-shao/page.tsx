import Image from 'next/image'
import Link from 'next/link'

import Shao from '@/app/assets/mk1/shao.webp'
import { MK1_BASE_URL, MK1_TITLE } from '@/app/constants'
import { BulletList } from '@/app/ui/BulletList'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 10

export const navTitle = 'General Shao'

export const metadata = generatePageMetadata(
  `${MK1_TITLE}: ${navTitle}`,
  'A breakdown of General Shao in Mortal Kombat 1.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1>{navTitle}</h1>

      <div className="md:flex items-center text-lg text-light gap-4">
        <Image
          className="max-h-72 object-cover object-[0%_0%]  md:w-1/2 md:max-h-full"
          src={Shao}
          alt="General Shao in Mortal Kombat 1"
        />

        <p className="md:w-1/2">
          Born weak but forged through brutal training, General Shao became
          Outworld’s strongest warrior and a tactical genius. Though sworn to
          serve Sindel, his true loyalty lies with Outworld itself.
        </p>
      </div>

      <p>
        General Shao is a mid-range brawler with a heavy emphasis on disjointed
        normals with good reach. He is a stance-based fighter, alternating
        between Axe and No Axe stances, each providing a different move set. He
        excels at the <Link href={`${MK1_BASE_URL}/neutral`}>Neutral</Link> game
        with good speed and a mix of both standing overheads and lows. If
        players spend some time practicing even his low difficulty combos, they
        will also find him a damaging character.
      </p>

      <h2>Why play or skip General Shao?</h2>
      <BulletList
        className="text-success"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>Durable</strong> - highest health in the game.
          </>,
          <>
            <strong>Long reach</strong> - disjointed mids and aerials dominate
            neutral.
          </>,

          <>
            <strong>Strong mixup</strong> - multiple overheads, lows, and
            command grabs.
          </>,
          <>
            <strong>Excellent air control</strong> - good anti-air options, even
            normals due to his height advantage.
          </>,
          'Shao is a good step away from pure beginner characters into more technical ones - managing the stances without demanding complexity.',
        ]}
      />
      <BulletList
        className="text-warning"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>Armor</strong> - Multiple armored options, including wakeups
            and launches, but some are very punishable.
          </>,
          <>
            <strong>Kameo versatility and dependency</strong> - Shao works well
            a lot of Kameos but is also very dependent on them to patch gaps and
            confirm mids.
          </>,
          <>
            <strong>Stances</strong> - The Axe gives you superb space, while
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

      <h2>Normals with Axe</h2>

      <p>
        The Axe gives Shao the disjointed normals with superb range that makes
        him a master of mid-range engagements. It lacks the good mids and mixup
        of the unarmed stance, but how you transition from axe to no axe makes
        or breaks Shao’s game.
      </p>

      <h3>Standing 2 with Axe</h3>

      <p>
        Pressing 2 with the axe while holding no direction will execute a very
        fast, safe, disjointed attack with superb reach. It checks out all the
        essentials of a good attack and is among the best standing punches in
        the game.
      </p>

      <p>
        <strong>This is your bread and butter.</strong> Learn to measure its
        range and practice dashing into it. You will use it to whiff punish,
        interrupt advances, as a buffer attack and even as a frontal anti-air
        due to Shao’s height.
      </p>
    </article>
  )
}
