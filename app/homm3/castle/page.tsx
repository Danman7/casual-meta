import Image from 'next/image'
import { GiLibertyWing } from 'react-icons/gi'
import { LuSword } from 'react-icons/lu'
import { TbBow } from 'react-icons/tb'

import archer from '@/app/assets/homm3/archer.webp'
import bastion from '@/app/assets/homm3/bastion.webp'
import castle from '@/app/assets/homm3/castle.webp'
import griffin from '@/app/assets/homm3/griffin.webp'
import conservatory from '@/app/assets/homm3/griffin_conservatory.webp'
import halberdier from '@/app/assets/homm3/halberdier.webp'
import marksman from '@/app/assets/homm3/marksman.webp'
import pikeman from '@/app/assets/homm3/pikeman.webp'
import royal_griffin from '@/app/assets/homm3/royal_griffin.webp'
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
      <h1>{navTitle}</h1>

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
          Champion and <strong>Archangels - the best tier 7 creature</strong>.
          The trade-off is their <strong>high cost</strong> and{' '}
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
                along with naturally high morale for extra turns. Special
                buildings are not great for tournaments, but they provide the
                basics for most game scenarios.
              </div>
            </div>

            <div>
              <div className="font-bold">Strong balanced army</div>
              <div className="flavor">
                2 ranged shooters, 2 flying units, and 3 melee units. Every
                unit, except Monks (level 5), is at least good for its tier.
              </div>
            </div>

            <div>
              <div className="font-bold">Top-tier creature</div>
              <div className="flavor">
                The Archangel has great attack, defense, fixed damage, a
                resurrect ability, and is second fastest after the Phoenix, so
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
                Second only to Tower in overall cost, primarily gold and gems.
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
          most cases. It's a <strong>mobility lever</strong>, adding a big
          weekly movement boost, improving both main hero reach and scout
          efficiency.
        </p>
      </Section>

      <Section title="Creatures" id="creatures">
        <h3 id="pikeman-halberdier" className="flex-wrapper">
          Tier 1: Pikeman/Halberdier{' '}
          <span className="circle-icon">
            <LuSword />
          </span>
        </h3>

        <div className="float-left flex gap-4 mr-4">
          <Image src={pikeman} alt="Castle Pikeman" />
          <Image src={halberdier} alt="Castle Halberdier" />
        </div>

        <p>
          <em>Pikemen</em> are <strong>slow and sturdy</strong>. With top HP for
          a level 1 creature, next to Centaurs (Rampart), they serve the purpose
          of <strong>protecting your Archers</strong> well.
        </p>

        <p>
          <strong>Halberdiers do better damage</strong> and gain a bit{' '}
          <strong>more speed</strong>. It's a{' '}
          <strong>good upgrade, but not a priority</strong>.
        </p>

        <h3 id="archer-marksman" className="flex-wrapper">
          Tier 2: Archer/Marksman{' '}
          <span className="circle-icon">
            <TbBow />
          </span>
        </h3>

        <div className="float-left flex gap-4 mr-4">
          <Image src={archer} alt="Castle Archer" />
          <Image src={marksman} alt="Castle Marksman" />
        </div>

        <p>
          The best ranged fighter for level 2. You can take many early fights
          with minimal losses by shooting stacks down before they connect. You
          should{' '}
          <strong>upgrade Archers to Marksmen as early as possible</strong>.
        </p>

        <p>
          Marksmen have low defense, HP and damage per attack for tier 2, but
          they <strong>shoot twice</strong>. This puts them second only to Storm
          Elemental if they hit on max damage.{' '}
          <strong>They are your early game damage dealers</strong>, but they are
          not tough. Protect them with single stacks as best you can.
        </p>

        <h3 id="griffin-royalgriffin" className="flex-wrapper">
          Tier 3: Griffin/Royal Griffin{' '}
          <span className="circle-icon">
            <LuSword />
          </span>{' '}
          <span className="circle-icon">
            <GiLibertyWing />
          </span>
        </h3>

        <div className="float-left flex gap-4 mr-4">
          <Image src={griffin} alt="Castle Griffin" />
          <Image src={royal_griffin} alt="Castle Royal Griffin" />
        </div>

        <p>
          Griffins are <strong>fast, tough and plentiful</strong>. At 10/week,
          in 2 weeks you get almost 3 weeks worth of the population you would
          get with Elves, Orcs or Beholders. They also gain a bonus retaliation
          - helpful in tougher early fights where you need to push forward to
          keep the foe away from your Marksmen.
        </p>

        <p>
          However, they truly shine when they{' '}
          <strong>upgrade to Royal Griffins</strong>. For only 40 gold per
          Griffin more, they become <strong>much faster</strong> (second fastest
          tier 3 creature after Dragon Flies) and gain{' '}
          <strong>endless retaliations</strong>. Now,{' '}
          <strong>
            attacking stronger, even ranged stacks on the map becomes viable
          </strong>
          . Especially if you have the Haste spell, Griffins (who often play
          before most low-tier shooters) can reach the other side of the
          battlefield on the first turn. They can stick in the middle of the
          enemy to soak and punish all attacks, which should be done within
          measure. Try not to lose too many, unless your plan is to spike Angels
          in the end game (see the Game plan section below).
        </p>

        <p>
          This upgrade is important, but not a priority. Delay it until your
          Pikemen and regular Griffins can't cope with guarding your Archers
          without losing too many creatures.
        </p>
      </Section>

      <Section title="Game plan" id="game-plan">
        <p>
          Castle leans on its <strong>ranged superiority</strong> at the very
          beginning of the game. Once you clear the immediate surroundings of
          your town, there are two major paths to take.
        </p>

        <p>
          You can go for a <strong>quick expansion</strong> where you keep up
          the tempo and try to{' '}
          <strong>find the neutral towns and opponent(s) earlier</strong>. Just
          keep fighting around your Marksmen,{' '}
          <strong>picking safe fights</strong>, adding support as you unlock it.
          Don't go for expensive upgrades (skip Crusaders for now) unless the
          fight requires them, and incorporate Monks into the mix at some point.
        </p>

        <p>
          This is what we see most players go for. It's simple and helps{' '}
          <strong>break out into the middle of the map sooner</strong>, where
          you can switch to heavy tech and collect resources and artifacts.
        </p>

        <Image
          src={conservatory}
          alt="A griffin conservatory as it appears on the map."
          className="article-img my-0 float-left mr-4"
        />

        <p>
          Castle players can also go for a <strong>slower map play</strong>.
          Because of <strong>Griffin Conservatories</strong> (not Towers or
          Bastions), <strong>late game Angel numbers can explode</strong>. You
          can sacrifice some early tempo and creatures to gather up resources
          and dwellings closer to you. The idea is to get Angels as early as
          possible and lean on them to clear the map later.
        </p>

        <p>
          The <strong>risk</strong> here is that if your opponent(s) break out
          early, they can collect the priority locations and artifacts before
          you. This means you may have to{' '}
          <strong>fight behind on stats and key spells</strong>. Furthermore,
          this strategy is very <strong>map-dependent</strong>.
        </p>

        <h3 id="battles">Neutral battles</h3>

        <p>
          Marksmen and Zealots deal the damage while Halberdiers and Crusader
          soak up hits and keep threats off them. Champions and the flyers look
          for opportunities to strike. Wear down neutrals with your shooters,
          tie up any of theirs with Griffins and Angels.
        </p>

        <p>
          When you get a critical mass of Griffins and Crusaders, you can leave
          Halberdiers behind. Then Marksmen with 6 speed will be the slowest,
          and you can move a bit faster on the map. At some point you will have
          8-10 Angels, which will be enough on their own to quickly harvest
          everything up to Dragon Utopias. You can even split them in two stacks
          to resurrect each other.
        </p>

        <p>
          <strong>Don't take Marksmen into banks and utopias.</strong> They will
          get targeted and destroyed by the CPU.
        </p>
      </Section>
    </>
  )
}
