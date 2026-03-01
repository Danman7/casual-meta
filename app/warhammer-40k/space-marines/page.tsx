import Image from 'next/image'

import chapters from '@/app/assets/wh40k/space-marine-chapter-banners.webp'
import wh40kTitle from '@/app/assets/wh40k/Ultramarines.webp'
import { WH40K_TITLE } from '@/app/constants'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { PlayOrSkip } from '@/app/ui/PlayOrSkip'
import { Section } from '@/app/ui/Section'
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
      <h1 className="page-title">{navTitle}</h1>

      <Section>
        <p>
          Space Marines take a central position in the fictional universe of
          WH40k. Weather on the cover of a novel, a magazine or an image online,
          a Space Marine model was the first thing many fans saw related to the
          hobby.
        </p>

        <Image
          src={wh40kTitle}
          alt="A small detachment of Space Marines"
          className="profile-img object-[center_55%]"
        />

        <p>
          <strong>Adeptus Astartes</strong> is the formal latin name for the
          Space Marines.
        </p>
      </Section>

      <PlayOrSkip
        pros={
          <>
            <div>
              <div className="font-bold">Beginner-friendly</div>
              <div className="flavor">
                Models are easy to find and paint. Clear rules. Start small,
                expand gradually, and remain competitive without mastering
                complex army mechanics
              </div>
            </div>

            <div>
              <div className="font-bold">Jacks-of-all-trades</div>
              <div className="flavor">
                Flexible detachments and leaders. Unit choices cover shooting,
                melee, durability, mobility, and support.
              </div>
            </div>

            <div>
              <div className="font-bold">Widely used</div>
              <div className="flavor">
                Early adoptions in new codexes. A lot of competative list
                examples.
              </div>
            </div>
          </>
        }
        cons={
          <>
            <div>
              <div className="font-bold">Roster bloat</div>
              <div className="flavor">
                Many units overlap, where some struggle to find a role.
              </div>
            </div>

            <div>
              <div className="font-bold">Frequent changes</div>
              <div className="flavor">
                They get many release, which means many updates. Strong
                combination get nerfed quickly.
              </div>
            </div>

            <div>
              <div className="font-bold">Low specialization</div>
              <div className="flavor">
                Marines win through combined arms and focus fire, not dominating
                a certain phase or aspect of the game.
              </div>
            </div>
          </>
        }
      />

      <Section title="Chapters" id="chapters">
        <ImageWithCaption
          src={chapters}
          alt="A collection of space marine chapter banners."
          className="profile-img object-[center_0%] max-h-59"
          caption="Space Marines chapter banners from starforged.com"
        />

        <p>
          Space Marines are segmented into <em>Chapters</em>. All units will
          have the Adeptus Astartes keyword on their datasheet, but some may
          include a second Faction keyword. That keyword defines its Chapter.
          Units without a chapter are called <em>core units</em>.
        </p>

        <ul>
          <li>A list can include core units and units from one chapter.</li>

          <li>
            <strong>Units from different chapters cannot mix together.</strong>
          </li>

          <li>
            Black Templars, Space Wolves and Deathwatch have limitations on what
            units they can take.
          </li>
        </ul>

        <p>
          These restrictions shape list-building more than battlefield tactics.
          Choosing a Chapter determines access, synergies, and detachment
          options before the game begins.
        </p>
      </Section>

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
    </>
  )
}
