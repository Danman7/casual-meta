import Image from 'next/image'

import castle from '@/app/assets/homm3/castle.webp'
import castleMap from '@/app/assets/homm3/castle_map.webp'
import { HOMM3_TITLE } from '@/app/constants'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 10

export const navTitle = 'Castle'

export const metadata = generatePageMetadata(
  `${HOMM3_TITLE}: ${navTitle}`,
  'An overview of the Castle faction in Heroes of Might and Magic 3.',
)

export default async function Page() {
  return (
    <>
      <h1 className="page-title">{navTitle}</h1>

      <Section className="md:flex items-center justify-center gap-4 my-12!">
        <div className="md:w-1/2 flex items-center justify-center">
          <Image
            src={castleMap}
            alt="A Castle town as it appears on the adventure map."
          />
        </div>

        <p className="md:w-1/2">
          Castle is powerful yet straightforward to play. Its steep build-up
          cost is offset by a well-balanced creature lineup; most units
          outperform their tier, and Angels lead as the strongest level 7
          adversary. Expect easy early creeping and dominant late-game armies.
        </p>
      </Section>

      <Section title="Town economics" id="economics">
        <ImageWithCaption
          src={castle}
          alt="A fully built Castle town."
          caption="When all buildings are present, a Castle town looks beautiful. But not all of them are always beneficial."
        />

        <p>
          As mentioned above, building up a Castle is costly. It requires more
          gold, mercury, sulfur, crystal, and gems than most other towns. Two of
          its dwellings, the Monastery (level 5) and the Portal of Glory (level
          7), demand several of every secondary resource. The Portal of Glory
          alone costs 20,000 gold for the base and upgraded structures.
          Recruiting Angels also consumes gems, with three more needed for the
          upgraded Archangels, making them the most resource-intensive tier 7
          creatures.
        </p>

        <p>
          Castles have no unique economic buildings. Their Resource Silo gives
          +1 wood and +1 ore daily, which is unfortunate because the town has
          moderate wood and one of the lowest ore consumptions in the game.
        </p>

        <p>
          The dwelling dependency tree is complex. The Portal of Glory requires
          a Monastery, which in turn needs the level 1 Mage Guild and the
          Barracks. Basically, you can skip the Archers, Griffins, and
          Cavaliers, but you wouldn't want to. Oddly, the level 3 Griffin Tower
          requires the level 4 Barracks.
        </p>
      </Section>
    </>
  )
}
