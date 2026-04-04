import Image from 'next/image'
import Link from 'next/link'

import wh40kTitle from '@/app/assets/wh40k/wh40k-battle.webp'
import { WH40K_TITLE } from '@/app/constants'
import { SourceLink } from '@/app/ui/SourceLink'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  WH40K_TITLE,
  'In the grim darkness of the far future, there is only war.',
)

export default async function Page() {
  return (
    <>
      <h1>{WH40K_TITLE}</h1>

      <section>
        <p>
          Warhammer 40,000 (WH40K) is more of a hobby, involving a game. The{' '}
          <Link
            href="https://assets.warhammer-community.com/warhammer40000_core&key_corerules_eng_24.09-5xfayxjekm.pdf"
            target="_blank"
          >
            Core Rulebook
          </Link>{' '}
          describes it as a tabletop wargame in which players command armies of
          miniatures in an attempt to win through a mixture of skill, tactics,
          and luck. It also involves collecting, assembling, and painting those
          miniatures, and the vast universe depicted in the books.
        </p>

        <Image
          src={wh40kTitle}
          alt="Space Marines doing battle with Chaos Space Marines"
          className="picture profile-img object-[0%_10%]"
        />

        <p>
          For the purpouse of this section, we'll focus on the rules and the
          armies of the latest edition (10th, 11th has been announced). Each
          edition changes the game in some way, so one should always refer to
          the rulebook and codexes first. Here, you'll find a concice scan of
          the more broadly used set of rules. It's accompanied by a compacted
          community analysis of when something is more likely to perform well.
        </p>
      </section>

      <section>
        <h2 id="our-sources">Our sources</h2>

        <div className="flex-list">
          <SourceLink
            href="https://www.warhammer.com/"
            text="Warhammer Official"
          />

          <SourceLink
            href="https://1d6chan.miraheze.org/wiki/Category:Warhammer_40,000"
            text="1d6chan"
          />

          <SourceLink href="https://wahapedia.ru/" text="Wahapedia" />

          <SourceLink
            href="https://www.youtube.com/@auspextactics"
            text="Auspex Tactics"
            type="youtube"
          />

          <SourceLink
            href="https://www.reddit.com/r/Warhammer40k/"
            text="r/Warhammer40k"
            type="reddit"
          />

          <SourceLink
            href="https://www.reddit.com/r/WarhammerCompetitive/"
            text="r/WarhammerCompetitive"
            type="reddit"
          />
        </div>
      </section>
    </>
  )
}
