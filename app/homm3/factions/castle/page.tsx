import { getRouteTreeForPath } from '@/app/actions/getRouteTree'
import { HOMM3_TITLE, WH40K_BASE_URL } from '@/app/constants'
import { BulletList } from '@/app/ui/BulletList'
import { PageTitle } from '@/app/ui/PageTitle'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  `${HOMM3_TITLE}: Castle`,
  'An overview of the Castle faction in Heroes of Might and Magic 3.',
)

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

      <BulletList
        className="text-success"
        icon="GiCastle"
        items={[
          <>
            <strong>Balanced army</strong> - two ranged shooters, two flyers,
            three capable brawlers.
          </>,
          <>
            <strong>Beginner friendly</strong> - the early game army is strong
            enough; has decent magic; heroes are balanced; can build stables and
            a shipyard.
          </>,
          <>
            <strong>First to take a turn in battle</strong> – Archangels have 18
            speed, second only after Phoenixes.
          </>,
        ]}
      />

      <BulletList
        className="text-error"
        icon="GiCastle"
        items={[
          <>
            <strong>Mediocre Heroes</strong> – because they are balanced, they
            also don't excel in anything, often leading players to hire heroes
            from other factions.
          </>,
        ]}
      />

      {items.map((item) => (
        <div key={item.href}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </article>
  )
}
