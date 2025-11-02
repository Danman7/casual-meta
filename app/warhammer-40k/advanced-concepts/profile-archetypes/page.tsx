import { Metadata } from 'next'
import Image from 'next/image'

import intercessors from '@/app/assets/wh40k/interfcessors.webp'
import { Callout } from '@/app/ui/Callout'
import { PageTitle } from '@/app/ui/PageTitle'

export const metadata: Metadata = {
  title: 'Warhammer 40k: Profile Archetypes | Casual Meta',
}

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle title="Profile Archetypes" />

      <p>
        With hundreds of models and weapons available to players in the current
        edition of Warhammer 40k, there are thousands of possible interactions
        between them. To reduce the complexity players have identified several
        common archetypes between infantry, vehicles, monsters, ranged and melee
        weapons.
      </p>

      <h2>The MEQ</h2>
      <Callout>
        <div className="text-lg text-center font-bold">T4|Sv3+|W2</div>
      </Callout>

      <p>
        <em>Marine Equivalent</em> or <strong>MEQ</strong> refers to any unit
        with a profile of{' '}
        <strong>4 Toughness, 3+ Armor Save and 2 Wounds</strong>. It is very
        common among Space Marines infantry, hence the name.
      </p>
      <Image
        src={intercessors}
        alt="Space Marines Intercessors"
        className="h-48 shadow-md object-cover object-[0%_65%]"
        preload
      />
    </article>
  )
}
