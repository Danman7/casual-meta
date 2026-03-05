import Image from 'next/image'
import { TbBow } from 'react-icons/tb'

import archer from '@/app/assets/homm3/archer.webp'
import castle from '@/app/assets/homm3/castle.webp'
import castleMap from '@/app/assets/homm3/castle_map.webp'
import marksman from '@/app/assets/homm3/marksman.webp'
import { HOMM3_TITLE } from '@/app/constants'
import { PlayOrSkip } from '@/app/ui/PlayOrSkip'
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

      <Section>
        <Image
          src={castle}
          alt="A fully built Castle town."
          className="profile-img"
        />

        <p>
          Castle is a{' '}
          <strong>balanced, beginner-friendly, yet competitive</strong> town
          built around its all-around powerful army. They usually have a{' '}
          <strong>strong early game</strong> because of how their first 3
          creature tiers work together, and a good late game because of the{' '}
          <strong>Archangels - best tier 7 creature</strong>. The trade-off is
          their <strong>high cost</strong> and{' '}
          <strong>unimpressive heroes and magic</strong>.
        </p>
      </Section>

      <PlayOrSkip
        pros={
          <>
            <div>
              <div className="font-bold">Beginner-friendly</div>
              <div className="flavor">
                You will have the right creatures for both early and late game
                along with naturally high moral for extra turns. Special
                buildings are bad for tournamets, but provide the basics for
                every game scenario.
              </div>
            </div>

            <div>
              <div className="font-bold">Strong balanced army</div>
              <div className="flavor">
                2 ranged shooters, 2 flying units, and 3 melee. Every unit,
                except Monks (level 5), is at lest good for their tier.
              </div>
            </div>

            <div>
              <div className="font-bold">Top-tier creature</div>
              <div className="flavor">
                The Archangel has great attack and defense, static damage,
                ressurect ability and is second fastest after the Phoenix, so
                you will often act first in combat.
              </div>
            </div>
          </>
        }
        cons={
          <>
            <div>
              <div className="font-bold">Very expensive</div>
              <div className="flavor">
                Second to Tower only in overall cost, primarily gold and gems.
                Needs a moderate amount of everything except ore.
              </div>
            </div>

            <div>
              <div className="font-bold">Mediocre heroes and magic</div>
              <div className="flavor">
                Castle hero classes aren't bad, there are just much better
                options from other factions. Magic Guild goes up only to level
                4. In both cases, you will need to reach for another town for
                optimal development.
              </div>
            </div>
          </>
        }
      />

      <Section title="Town economics" id="economics">
        <Image
          src={castleMap}
          alt="A Castle town as it appears on the adventure map."
          className="float-left mr-4"
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
      </Section>

      <Section title="Creatures" id="creatures">
        <h3 id="archer-marksman" className="flex-wrapper">
          Tier 2: Archer/Marksman <TbBow className="circle-icon" />
        </h3>

        <div className="float-left flex gap-4 mr-4">
          <Image src={archer} alt="Castle Archer" />
          <Image src={marksman} alt="Castle Marksman" />
        </div>

        <p>
          Castle opens by leveraging its early{' '}
          <strong>ranged superiority</strong>. Their best for level 2 shooters
          let you take many early fights with minimal losses by shooting stacks
          down before they connect. You should{' '}
          <strong>upgrade Archers to Marksmen as early as possible</strong>{' '}
          without damaging your economy too much. This should be your first
          upgrade.
        </p>

        <p>
          Marksmen have low defense, HP and damage per attack for tier 2. But
          they <strong>shoot twice</strong>. This puts them second only to Storm
          Elemental if they hit on max damage.{' '}
          <strong>They are your early game damage dealers.</strong> If it wasn't
          for them the Pikemen would not make it far on their own.
        </p>
      </Section>
    </>
  )
}
