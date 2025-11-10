import { Metadata } from 'next'
import Image from 'next/image'
import { GiDeathSkull } from 'react-icons/gi'

import { getRouteTreeForPath } from '@/app/actions/getRouteTree'
import wh40kTitle from '@/app/assets/wh40k/wh40k-title.webp'
import { PageTitle } from '@/app/ui/PageTitle'
import { WH40K_BASE_URL } from '@/app/warhammer-40k/constants'

export const metadata: Metadata = {
  title: 'Warhammer 40k: Space Marines | Casual Meta',
  description: 'An overview of the Space Marines faction in Warhammer 40k.',
}

export default async function Page() {
  const items = await getRouteTreeForPath(
    `${WH40K_BASE_URL}/factions/space-marines`,
  )

  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle
        title="Space Marines"
        subtitle="What is your fate? My duty is my fate. What is your fear? My fear is to fail. What is your craft? My craft is death."
      />

      <p>
        Space Marines take a central position in the fictional universe of
        WH40k. Weather on the cover of a novel, a magazine or an online image,
        for many fans a Space Marine model was the first thing they saw related
        to the hobby.
      </p>

      <Image src={wh40kTitle} alt="A small detachment of Space Marines" />

      <p>
        You will often hear the Latin term <strong>Adeptus Astartes</strong>{' '}
        which is the formal name for the Space Marines.
      </p>

      <h2>Why play or skip Space Marines?</h2>

      <ul role="list">
        <li className="flex gap-2 text-success">
          <GiDeathSkull aria-hidden className="shrink-0 mt-1" />
          <span>Widely considered one of the best armies for beginners.</span>
        </li>

        <li className="flex gap-2 text-success">
          <GiDeathSkull aria-hidden className="shrink-0 mt-1" />
          <span>
            Jacks-of-all-trades – balanced units and weapons for every scenario.
          </span>
        </li>

        <li className="flex gap-2 text-success">
          <GiDeathSkull aria-hidden className="shrink-0 mt-1" />
          <span>
            Wide array of infantry, vehicles and characters to choose from.
          </span>
        </li>
      </ul>

      <ul role="list">
        <li className="flex gap-2 text-error">
          <GiDeathSkull aria-hidden className="shrink-0 mt-1" />
          <span>
            Tend to change frequently. Units are introduced then removed in
            subsequent codex editions.
          </span>
        </li>

        <li className="flex gap-2 text-error">
          <GiDeathSkull aria-hidden className="shrink-0 mt-1" />
          <span>
            Units tend to overlap and outclass each other for a given role.
          </span>
        </li>
      </ul>

      {items.map((item) => (
        <div key={item.href}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </article>
  )
}
