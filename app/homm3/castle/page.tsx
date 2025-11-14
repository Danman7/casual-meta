import Image from 'next/image'

import castle from '@/app/assets/homm3/castle.webp'
import castleMap from '@/app/assets/homm3/castle_map.webp'
import { HOMM3_TITLE } from '@/app/constants'
import { BulletList } from '@/app/ui/BulletList'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 10

export const navTitle = 'Castle'

export const metadata = generatePageMetadata(
  `${HOMM3_TITLE}: ${navTitle}`,
  'An overview of the Castle faction in Heroes of Might and Magic 3.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1>{navTitle}</h1>

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
            with or have a good chance to develop Leadership.
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

      <h2>Town Economics</h2>

      <Image
        className="float-left max-w-36 pr-4 pt-2"
        src={castleMap}
        alt="A fully built Castle town."
      />

      <p>
        As mentioned above, building up a Castle is costly. It requires more
        gold, mercury, sulfur, crystal and gems than most other towns. Two of
        its dwellings, the Monastery (level 5 unit) and the Portal of Glory
        (level 7 unit) require multiple of each secondary resource. The latter
        requires 20k gold for both the base and upgraded buildings. Gems are
        also required for recruiting Angels and three for the upgraded
        Archangels, making them the most resource costly tier 7 creatures.{' '}
      </p>

      <p>
        Castles have no unique economic buildings. Their Resource Silos give +1
        wood and +1 ore daily which is a shame as the town has moderate wood and
        one of the lowest ore consumptions in the game.
      </p>

      <p>
        The dwelling dependency tree is complex. The Portal of Glory requires a
        Monastery, which requires the level 1 Mage Guild and Barracks.
        Basically, you can skip the Archers, Griffins and Cavaliers, but you
        wouldn’t want to. A quirk of the flow is that the level 3 dwelling - the
        Griffin Tower, requires the level 4 dwelling - the Barracks.
      </p>
    </article>
  )
}
