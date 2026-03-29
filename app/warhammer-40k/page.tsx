import Image from 'next/image'
import Link from 'next/link'

import dice from '@/app/assets/wh40k/dice.webp'
import wh40kTitle from '@/app/assets/wh40k/wh40k-battle.webp'
import { WH40K_TITLE } from '@/app/constants'
import { DiceRoll } from '@/app/ui/DiceRoll'
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
      <h1>{WH40K_TITLE}</h1>

      <Section>
        <p>
          The official{' '}
          <Link href="https://assets.warhammer-community.com/warhammer40000_core&key_corerules_eng_24.09-5xfayxjekm.pdf">
            Core Rulebook
          </Link>{' '}
          describes Warhammer 40,000 as a tabletop wargame in which players
          command armies of miniatures and attempt to defeat their opponents
          through a mixture of skill, tactics, and luck.
        </p>

        <Image
          src={wh40kTitle}
          alt="Space Marines doing battle with Chaos Space Marines"
          className="article-img"
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
          units. We do this by summarizing the knowledge from the sources listed
          above.
        </p>

        <p>
          We have chosen to sacrifice lore and rule edge cases for clarity and
          simplicity. Our focus is casual and competative play.
        </p>

        <h3 id="dice-rolls">Dice rolls</h3>

        <div className="sm:flex gap-4 items-start">
          <Image
            src={dice}
            alt="Space Marines doing battle with Chaos Space Marines"
            className="article-img mt-0 sm:w-1/2"
          />

          <div className="sm:w-1/2">
            <p className="mt-0">
              Warhammer 40,000 is a game of dice. This brings a degree of
              chance/randomness, making each battle unique, unpredictable and
              perhaps a bit annoying at times.
            </p>

            <p>
              <strong>A typical six-sided dice is called a D6</strong> - a
              common abbreviation from dice games (e.g. Dungeons and Dragons).
              Most throws use one or multiple D6s. If it's multiple the number
              will be added in front like 3D6.
            </p>
            <p>
              Some rules state that a <strong>three-sided dice (D3)</strong>{' '}
              must be rolled. In that case, split a regular D6 into three
              segments: <strong>1 or 2 = 1, 3 or 4 = 2, 5 or 6 = 3</strong>.
              Dice throws are described with a section like this one:
            </p>
          </div>
        </div>

        <DiceRoll
          title="Example dice roll"
          dice="2D6"
          effect="Which means roll two six-sided dice and compare the result to some value."
        />

        <p>
          In the case where a dice roll adds to <strong>movement inches</strong>{' '}
          (e.g. advancing during movement phase), it can be written as{' '}
          <strong>D6"</strong>, which means roll a six-sided dice and add the
          result as inches. Another particular case is then a dice roll
          determines the outcome of a <strong>datasheet attribute</strong>. For
          example <strong>A6d</strong> means roll a six-sided dice and the
          result is how many attacks the weapon makes.
        </p>

        <h3 id="re-rolls">Re-rolls</h3>

        <p>
          There are a great many rules that allow players to re-roll certain
          results. When this applies, they get to{' '}
          <strong>choose which dice to re-roll</strong>, but they can only do it{' '}
          <strong>only once</strong>. You must re-roll all dice if several need
          adding together (e.g. 2D6, 3D6).
        </p>
      </Section>
    </>
  )
}
