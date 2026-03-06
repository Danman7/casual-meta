import Image from 'next/image'
import { GiLibertyWing } from 'react-icons/gi'
import { LuSwords } from 'react-icons/lu'
import { TbBow } from 'react-icons/tb'

import archer from '@/app/assets/homm3/archer.webp'
import bastion from '@/app/assets/homm3/bastion.webp'
import castle from '@/app/assets/homm3/castle.webp'
import castleMap from '@/app/assets/homm3/castle_map.webp'
import halberdier from '@/app/assets/homm3/halberdier.webp'
import marksman from '@/app/assets/homm3/marksman.webp'
import pikeman from '@/app/assets/homm3/pikeman.webp'
import stables from '@/app/assets/homm3/stables.webp'
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
          creature tiers work together, and a good late game because of the
          Champion and <strong>Archangels - best tier 7 creature</strong>. The
          trade-off is their <strong>high cost</strong> and{' '}
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
                The Archangel has great attack, defense, static damage,
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
                Second to only Tower in overall cost, primarily gold and gems.
                Needs at least a moderate amount of everything except ore.
              </div>
            </div>

            <div>
              <div className="font-bold">Mediocre heroes and magic</div>
              <div className="flavor">
                Castle hero classes aren't bad, but there are much better
                options in other factions. Magic Guild goes up only to level 4.
                In both cases, you will need to reach for another town for
                optimal development.
              </div>
            </div>
          </>
        }
      />

      <Section title="Buildings" id="buildings">
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

        <div className="md:float-left flex gap-4 mr-4">
          <Image
            src={bastion}
            alt="Castle Griffin Bastion."
            className="float-left mr-4"
          />

          <Image
            src={stables}
            alt="Castle stables."
            className="float-left mr-4"
          />
        </div>

        <p>
          Among the unique buildings, the <strong>Griffin Bastion</strong> (+3
          Griffins/week) is a priority. It elevates{' '}
          <strong>Griffins to the most populous tier 3 creature</strong> and
          your main mid-game brawler. Their numbers can snowball into the late
          game, which plays well with their special unlimited retaliation
          ability.
        </p>

        <p>
          <strong>Stables</strong> is your only "should have" bonus building in
          most cases. It's a <strong>mobility lever</strong>, add a big weekly
          movement boost, improving both main hero reach and scout efficiency.
        </p>
      </Section>

      <Section title="Creatures" id="creatures">
        <h3 id="pikeman-halberdier" className="flex-wrapper">
          Tier 1: Pikeman/Halberdier <LuSwords className="circle-icon" />
        </h3>

        <div className="float-left flex gap-4 mr-4">
          <Image src={pikeman} alt="Castle Pikeman" />
          <Image src={halberdier} alt="Castle Halberdier" />
        </div>

        <p>
          <em>Pikemen</em> are <strong>slow and sturdy</strong>. With top HP for
          a level 1 creature, next to Centaurs (Rampart), they serve the
          purpouse of <strong>protecting your Archers</strong> well.
        </p>

        <p>
          <strong>Halberdiers do better damage</strong> and gain a bit{' '}
          <strong>more speed</strong>. It's a{' '}
          <strong>good upgrade, but not a priority</strong>.
        </p>

        <h3 id="archer-marksman" className="flex-wrapper">
          Tier 2: Archer/Marksman <TbBow className="circle-icon" />
        </h3>

        <div className="float-left flex gap-4 mr-4">
          <Image src={archer} alt="Castle Archer" />
          <Image src={marksman} alt="Castle Marksman" />
        </div>

        <p>
          Castle opens by leveraging its early{' '}
          <strong>ranged superiority</strong>. Their level 2 shooters is the
          best ranged figher for that tier. You can take many early fights with
          minimal losses by shooting stacks down before they connect. You should{' '}
          <strong>upgrade Archers to Marksmen as early as possible</strong>.
        </p>

        <p>
          Marksmen have low defense, HP and damage per attack for tier 2, but
          they <strong>shoot twice</strong>. This puts them second only to Storm
          Elemental if they hit on max damage.{' '}
          <strong>They are your early game damage dealers</strong>, but they are
          not tough. Protect them with singles stacks as best you can.
        </p>

        <h3 id="griffin-royalgriffin" className="flex-wrapper">
          Tier 3: Griffin/Royal Griffin <LuSwords className="circle-icon" />{' '}
          <GiLibertyWing className="circle-icon" />
        </h3>

        <p>
          Griffins are <strong>fast, tough and plentiful</strong>. At a total of
          10/week, in 2 weeks you get almost 3 weeks worth of the population you
          would get with Elves, Orcs or Beholders. They also gain a bonus
          retaliation - helpful in tougher early fights where you need to push
          them forward to keep the foe away from your Marksmen.
        </p>

        <p>
          It is however when they <strong>upgrade to Royal Griffins</strong>{' '}
          when they truly shine. Only for 40 gold/griffin, they become{' '}
          <strong>second fastest tier 3 creature</strong>, after Dragon Flies.
          And they gain <strong>endless retaliations</strong>.
        </p>
      </Section>
    </>
  )
}
