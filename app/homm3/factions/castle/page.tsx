import { Metadata } from 'next'
import { GiCastle } from 'react-icons/gi'

import { getRouteTreeForPath } from '@/app/actions/getRouteTree'
import { PageTitle } from '@/app/ui/PageTitle'
import { WH40K_BASE_URL } from '@/app/warhammer-40k/constants'

export const metadata: Metadata = {
  title: 'Heroes of Might and Magic 3: Castle | Casual Meta',
  description:
    'An overview of the Castle faction in Heroes of Might and Magic 3.',
}

export default async function Page() {
  const items = await getRouteTreeForPath(
    `${WH40K_BASE_URL}/factions/space-marines`,
  )

  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle
        title="Castle"
        subtitle="Castles are home to the Cleric and Knight hero classes. Their armies are  composed of human men-at-arms, with the aid of griffins and the protection of angels."
      />

      <p>
        With a solid mix of soldiers from low to high tiers and the most
        consistent level 7 creature in HoMM3, Castle is broadly considered among
        the strongest factions in the game. It is at the same time recognized as
        a beginner friendly town type. If you are new to the game, learning its
        multitude of mechanics, don’t hesitate to start with Castle.
      </p>

      <h2>Why play or skip Castle?</h2>

      <ul role="list">
        <li className="flex gap-2 text-success">
          <GiCastle aria-hidden className="shrink-0 mt-1" />
          <span>
            <strong>Balanced army</strong> - two ranged shooters, two flyers,
            three capable brawlers.
          </span>
        </li>

        <li className="flex gap-2 text-success">
          <GiCastle aria-hidden className="shrink-0 mt-1" />
          <span>
            <strong>Beginner friendly</strong> - the early game army is strong
            enough; has decent magic; heroes are balanced; can build stables and
            a shipyard.
          </span>
        </li>

        <li className="flex gap-2 text-success">
          <GiCastle aria-hidden className="shrink-0 mt-1" />
          <span>
            <strong>First to take a turn in battle</strong> – Archangels have 18
            speed, second only after Phoenixes.
          </span>
        </li>
      </ul>

      <ul role="list">
        <li className="flex gap-2 text-error">
          <GiCastle aria-hidden className="shrink-0 mt-1" />
          <span>
            <strong>Mediocre Heroes</strong> – because they are balanced, they
            also don’t excel in anything, often leading players to hire heroes
            from other factions.
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
