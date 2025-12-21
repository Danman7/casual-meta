import Image from 'next/image'

import chapters from '@/app/assets/wh40k/space-marine-chapter-banners.webp'
import wh40kTitle from '@/app/assets/wh40k/Ultramarines.webp'
import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
import { BulletList } from '@/app/ui/BulletList'
import { SubPageNav } from '@/app/ui/SubPageNav'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 10

export const navTitle = 'Space Marines'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${navTitle}`,
  'An overview of the Space Marines faction in Warhammer 40k.',
)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

      <p>
        Space Marines take a central position in the fictional universe of
        WH40k. Weather on the cover of a novel, a magazine or an online image,
        for many fans a Space Marine model was the first thing they saw related
        to the hobby.
      </p>

      <Image
        src={wh40kTitle}
        alt="A small detachment of Space Marines"
        className="shadow-md"
      />

      <p>
        You will often hear the Latin term <strong>Adeptus Astartes</strong>{' '}
        which is the formal name for the Space Marines.
      </p>

      <h2>Why play or skip Space Marines?</h2>

      <BulletList
        className="text-success"
        icon="GiDeathSkull"
        items={[
          'Widely considered one of the best armies for beginners.',
          'Jacks-of-all-trades – balanced units and weapons for every scenario.',
        ]}
      />

      <BulletList
        className="text-warning"
        icon="GiDeathSkull"
        items={[
          'A wide array of infantry, vehicles and characters available gives players choices, but also can become overwhelming and confusing.',
        ]}
      />

      <BulletList
        className="text-error"
        icon="GiDeathSkull"
        items={[
          'Tend to change frequently. Units are introduced then removed in subsequent codex editions.',
          'Units tend to overlap and outclass each other for a given role.',
        ]}
      />

      <h2>Faction Specifics</h2>

      <h3>Space Marine Chapters</h3>

      <Image
        src={chapters}
        alt="A collection of space marine chapter banners."
        className="shadow-md"
      />

      <p>
        The Space Marines are segmented into <em>Chapters</em>. All faction
        models will have the Adeptus Astartes faction keyword on their
        datasheet, but some may have an additional one like{' '}
        <em>Ultramarines, Blood Angels, Space Wolves</em> etc. The second
        faction keyword indicates the chapter they belong to.
      </p>

      <p>
        General Space Marine units can be taken into any army list, but{' '}
        <strong>
          units from one chapter cannot be mixed in with units from another
          chapter
        </strong>
        . There can also be additional rules depending on the chapter, but those
        are described in the chapter pages.
      </p>

      <h3>Oath of Moment</h3>

      <p>
        <em>Oath of Moment</em> is a faction wide ability that lets you mark one
        enemy unit per turn, granting all your units re-rolls to hit against it.
        As per the latest updates to the rules you can only make use of this
        using a Codex only detachment (one found in the Space Marine Codex) and
        you get +1 to wound rolls against the marked target if you’re running a
        pure Codex-compliant army list (meaning no chapter specific units,
        running only “vanilla” Marines). The additional rules have led players
        to run chapters without their unique units.
      </p>

      <p>
        The Oath is more powerful against fewer, tougher targets than swarms.
      </p>

      <h2>Further Reading</h2>

      <SubPageNav route={`${WH40K_BASE_URL}/space-marines`} />
    </>
  )
}
