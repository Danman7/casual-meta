import Link from 'next/link'

import wh40kTitle from '@/app/assets/wh40k/wh40k-battle.webp'
import { WH40K_TITLE } from '@/app/constants'
import { DiceRoll } from '@/app/ui/DiceRoll'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { Section } from '@/app/ui/Section'
import { SourceLink } from '@/app/ui/SourceLink'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  WH40K_TITLE,
  'In the grim darkness of the far future, there is only war.',
)

export default async function Page() {
  return (
    <>
      <h1 className="page-title">{WH40K_TITLE}</h1>

      <Section>
        <p>
          The official{' '}
          <Link href="https://assets.warhammer-community.com/warhammer40000_core&key_corerules_eng_24.09-5xfayxjekm.pdf">
            Core Rulebook
          </Link>{' '}
          describes Warhammer 40,000 as a tabletop wargame in which players
          command armies of Citadel miniatures and attempt to defeat their
          opponents through a mixture of skill, tactics, and luck.
        </p>

        <ImageWithCaption
          src={wh40kTitle}
          alt="Space Marines doing battle with Chaos Space Marines"
          caption="A battle is raging between Ultramarines and Chaos Space Marines. The two armies are led by legendary heroes like Roboute Guilliman, Marneus Calgar and Abaddon the Despoiler."
        />

        <p>
          That very rulebook, along with the various army codexes, should be the
          primary source of information regarding Warhammer 40,000 rules. They
          are updated periodically, and the physical nature of the game tends to
          create disputes about how situations should be resolved. Thus,
          everywhere there are rules, we see overly detailed explanations.
        </p>
      </Section>

      <Section title="Our sources" id="our-sources">
        <div className="flex-wrapper">
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
      </Section>

      <Section title="About this documentation" id="about-this-documentation">
        <p>
          Warhammer 40,000 is a complex and ever-changing game. Our goal is to
          explain the rules as briefly as reasonable, then provide meaningful
          examples and analysis of the vast variety of characters, weapons, and
          units.
        </p>

        <p>
          We have chosen to sacrifice lore and rule edge cases for clarity and
          simplicity.
        </p>

        <h3 id="dice-rolls">Dice rolls</h3>

        <p>
          Warhammer 40,000 is a game played with dice. This brings a degree of
          chance/randomness to the game, making each battle unique,
          unpredictable and perhaps a bit annoying at times.
        </p>

        <p>
          <strong>A typical six-sided dice is called a D6</strong> - a common
          abbreviation from dice games (e.g. Dungeons and Dragons). Most throws
          use one or multiple D6s, but some state that a three-sided dice (D3)
          must be rolled. In that case, split a regular D6 into three segments:
          1 or 2 = 1, 3 or 4 = 2, 5 or 6 = 3. Dice throws are described with a
          section like this one:
        </p>

        <DiceRoll
          title="Example dice roll"
          dice="2D6"
          effect="Which means roll two six-sided dice and compare the result to some value."
        />
      </Section>
    </>
  )
}
