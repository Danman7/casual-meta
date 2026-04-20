import Image from 'next/image'
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
  TbPlaystationCircle,
  TbPlaystationSquare,
  TbPlaystationTriangle,
  TbPlaystationX,
  TbXboxA,
  TbXboxB,
  TbXboxX,
  TbXboxY,
} from 'react-icons/tb'

import mkLogo from '@/app/assets/mk/mk_logo.webp'
import monk from '@/app/assets/mk/monk.webp'
import { MK_TITLE } from '@/app/constants'
import { SourceLink } from '@/app/ui/SourceLink'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  MK_TITLE,
  'Mortal Kombat 1 (MK1) is the latest chapter in the long-running, celebrated fighting game series.',
)

export default async function Page() {
  return (
    <>
      <h1>{MK_TITLE}</h1>

      <section>
        <Image
          src={mkLogo}
          alt="The Mortal Kombat logo, a dragon in a circle."
          className="float-left pr-4 mb-0 max-w-32"
        />

        <p>
          The dragon logo marks a duel of skill that often ends in virtual
          death, ever since the first Mortal Kombat (MK) was released by Midway
          Games in 1992. Thenceforth, the series has expanded in characters,
          timelines, mechanics, and popularity.
        </p>

        <p>
          In 2009, the development team was acquired by Warner Bros. and
          re-established as NetherRealm Studios. This led to the creation of
          Mortal Kombat (MK9), Mortal Kombat X, Mortal Kombat 11, and Mortal
          Kombat 1. These titles form what is known as the <em>modern MK</em> or{' '}
          <em>NRS</em> era, which will be the focus of this section.
        </p>
      </section>

      <section>
        <h2 id="our-sources">Our sources</h2>

        <div className="flex-list">
          <SourceLink
            href="https://wiki.supercombo.gg/w/Main_Page"
            text="SuperCombo Wiki"
          />

          <SourceLink
            href="https://www.youtube.com/@PNDKM"
            text="PNDK&M"
            type="youtube"
          />

          <SourceLink
            href="https://www.youtube.com/@Diff"
            text="Diff"
            type="youtube"
          />

          <SourceLink
            href="https://www.youtube.com/@rooflemonger"
            text="rooflemonger"
            type="youtube"
          />

          <SourceLink
            href="https://www.reddit.com/r/MortalKombat/"
            text="r/MortalKombat"
            type="reddit"
          />

          <SourceLink
            href="https://www.reddit.com/r/MortalKombatGameplay/"
            text="r/MortalKombatGameplay"
            type="reddit"
          />
        </div>

        <Image
          src={monk}
          alt="A Shadow Priest from the classical Evil Tower stage."
          className="mx-auto max-w-96 w-full"
        />
      </section>

      <section>
        <h2 id="move-annotations">Move annotations</h2>

        <p>
          MK is primarily played with a gamepad or controller. Because the games
          run on multiple platforms, using different controllers, the community
          has agreed on a simplified notation using numbers instead. It is
          imperative to be able to read these to understand the moves.
        </p>

        <p>
          Most controllers have four buttons somewhere on the right side. These
          are called <em>face buttons</em>. For Xbox they are A, B, X, and Y.
          For PlayStation they are Cross, Circle, Square, and Triangle. However,
          most guides use 1, 2, 3, and 4.
        </p>

        <div className="flex-list justify-around text-4xl">
          <div className="flex-center flex-col">
            <p className="lead">Xbox</p>
            <div className="w-20 h-20 grid grid-cols-3 grid-rows-3">
              <div></div>
              <TbXboxY />
              <div></div>
              <TbXboxX />
              <div></div>
              <TbXboxB />
              <div></div>
              <TbXboxA />
            </div>
          </div>

          <div className="flex-center flex-col">
            <p className="lead">PlayStation</p>
            <div className="w-20 h-20 grid grid-cols-3 grid-rows-3">
              <div></div>
              <TbPlaystationTriangle />
              <div></div>
              <TbPlaystationSquare />
              <div></div>
              <TbPlaystationCircle />
              <div></div>
              <TbPlaystationX />
            </div>
          </div>

          <div className="flex-center flex-col">
            <p className="lead">Numbers</p>
            <div className="w-20 h-20 grid grid-cols-3 grid-rows-3">
              <div></div>
              <TbCircleNumber2 />
              <div></div>
              <TbCircleNumber1 />
              <div></div>
              <TbCircleNumber4 />
              <div></div>
              <TbCircleNumber3 />
            </div>
          </div>
        </div>

        <p>The buttons are mapped like so:</p>

        <ul>
          <li>1 - Front Punch (X / Square)</li>
          <li>2 - Back Punch (Y / Triangle)</li>
          <li>3 - Front Kick (A / Cross)</li>
          <li>4 - Back Kick (B / Circle)</li>
        </ul>

        <p>
          The D-Pad on a gamepad is universal. Directions are described in
          relation to the position of the enemy like so:
        </p>

        <ul>
          <li>F - Forward / Towards your foe</li>
          <li>B - Backward / Away from your foe</li>
          <li>D - Down / Crouch</li>
          <li>J - Jump / Up, usually followed by a string</li>
        </ul>

        <p>
          And finally we have whatever special commands are assigned to the
          rear/paddle buttons like block, grab, etc. described as they are.
        </p>

        <p>
          So if you see <div className="badge">1</div> that means press Front
          Punch / X / Square button without any direction. If you see{' '}
          <div className="badge">F3</div> that means press Forward and Front
          Kick / A / Cross. <div className="badge">DB2</div> means press Down
          then Back then Rear Punch / Y / Triangle.
        </p>

        <p>
          If you are playing on a PC with a keyboard, or are using another type
          of device, refer to the in-game button mapping.
        </p>
      </section>
    </>
  )
}
