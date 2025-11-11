import Image from 'next/image'

import { getRouteTreeForPath } from '@/app/actions/getRouteTree'
import castle from '@/app/assets/homm3/castle.webp'
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

      <Image src={castle} alt="A fully built Castle town." />

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
            enough; heroes are versatile.
          </>,
          <>
            <strong>First to take a turn in battle</strong> – Archangels have 18
            speed, second only after Phoenixes.
          </>,
          <>
            <strong>Good creature upgrades</strong> - especially Archers,
            Griffins, and Angels.
          </>,
          <>
            <strong>Morale Advantage</strong> - all Castle heroes either come
            with or have a good chance to develop Leadership..
          </>,
          'Stables provide a mobility bonus to armies.',
          'Most units are good for their tiers.',
        ]}
      />

      <BulletList
        className="text-error"
        icon="GiCastle"
        items={[
          <>
            <strong>Very expensive</strong> – The total cost to fully develop a
            Castle town is second only to Tower. This is mostly felt during the
            later stages of development and comes primarily from secondary
            resource requirements (Gems, Mercury etc.)
          </>,
          <>
            <strong>Mediocre Heroes and Magic</strong> – Because they are
            balanced, the heroes also don't excel in anything, often leading
            players to hire heroes from other factions. The Magic Guild reaches
            up to level 4 which means they must find and build up another magic
            guild to get a chance at level 5 spells.
          </>,
          <>
            <strong>Weak special buildings</strong> – The Brotherhood of the
            Sword and the Colossus (grail building) give morale which may be
            redundant. The Lighthouse and Shipyard are situational for water
            maps. The Resource Silo may serve a better purpose if it gave Gems.
          </>,
          <>
            <strong>High dwelling dependencies</strong> – You will have to build
            up pretty much everything to reach the high-tier dwellings.
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
