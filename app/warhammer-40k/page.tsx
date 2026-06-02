import Image from 'next/image'
import Link from 'next/link'

import wh40kTitle from '@/app/assets/wh40k/wh40k-battle.webp'
import { wh40kMetadata, wh40kSection } from '@/app/siteMap'
import { SourceLink } from '@/app/ui/SourceLink'

export const metadata = wh40kMetadata()

export default async function Page() {
  return (
    <>
      <h1>{wh40kSection.title}</h1>

      <section>
        <Image
          src={wh40kTitle}
          alt="Space Marines doing battle with Chaos Space Marines"
          className="picture profile-img object-[0%_10%]"
        />

        <p>
          The{' '}
          <Link
            href="https://assets.warhammer-community.com/warhammer40000_core&key_corerules_eng_24.09-5xfayxjekm.pdf"
            target="_blank"
          >
            Core Rulebook
          </Link>{' '}
          describes Warhammer 40,000 (WH40k) as a{' '}
          <em>
            tabletop wargame in which players command armies of miniatures in an
            attempt to win through a mixture of skill, tactics, and luck
          </em>
          . This sums up the game pretty well, but it doesn't capture the hobby.
        </p>

        <p>
          For the purpose of this section, we'll focus on the rules and the
          armies of the latest edition (10th, 11th has been announced). Each
          edition changes the game in some way, so one should always refer to
          the rulebook and codexes first. Here, you'll find a concise scan of
          the more broadly used set of rules. It's accompanied by a compact
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
