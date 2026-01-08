import Link from 'next/link'

import wh40kTitle from '@/app/assets/wh40k/wh40k-battle.webp'
import { WH40K_TITLE } from '@/app/constants'
import { BulletList } from '@/app/ui/BulletList'
import { Flavor } from '@/app/ui/Flavor'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { PageTitle } from '@/app/ui/PageTitle'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  WH40K_TITLE,
  'In the grim darkness of the far future, there is only war.',
)

export default async function Page() {
  return (
    <>
      <PageTitle title={WH40K_TITLE} />

      <Section>
        <Flavor>
          This section is dedicated to the physical game of Warhammer 40,000
          (WH40K for short). In the vastness of the hobby, we will focus on the
          rules and armies of the latest edition.
        </Flavor>
      </Section>

      <Section id="what-is-wh40k" title="What is Warhammer 40K?">
        <p>
          The official{' '}
          <Link href="https://assets.warhammer-community.com/warhammer40000_core&key_corerules_eng_24.09-5xfayxjekm.pdf">
            Core Rulebook
          </Link>{' '}
          describes Warhammer 40,000 as a tabletop war game in which players
          command armies of Citadel miniatures and attempt to defeat their
          opponent through a mixture of skill, tactics and luck.
        </p>

        <ImageWithCaption
          src={wh40kTitle}
          alt="A small detachment of Space Marines"
          caption="On this image we see a battle between Ultramarines and Chaos Space Marines. The two armies are led by legendary heroes like Roboute Guilliman, Marneus Calgar and Abaddon the Despoiler."
        />

        <p>
          That very rulebook, along with the various army codexes, should be the
          primary source of information regarding WH40K rules. They are disposed
          to change periodically and the physical nature of the game tends to
          bring about disputes about how a situation is to be resolved. Thus
          everywhere there are rule we see overly-detailed explanations.
        </p>
      </Section>

      <div className="text-lg my-8 space-y-4">
        <p>We will try to:</p>
        <BulletList
          icon="GiDeathSkull"
          items={[
            'Shed the lore and painting.',
            'Simplify the rules.',
            'Introduce concepts that may not be in the rulebook.',
          ]}
        />
      </div>
    </>
  )
}
