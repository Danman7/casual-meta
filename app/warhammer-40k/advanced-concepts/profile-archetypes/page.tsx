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

      <h2>Damage and Durability</h2>
      <p>
        With hundreds of units available in the current edition of WH40k, there
        are thousands of possible interactions between a weapon and a model. To
        reduce this complexity players have identified several common
        archetypes.
      </p>

      <p>
        <strong>Damage in WH40k is expressed via wounds</strong>. To understand
        how effective a weapon is against a model, we can remove factors like
        positioning, range, accuracy, speed, morale and objectives control.
      </p>

      <p>
        If we consider the weapon will hit its target then that leaves only{' '}
        <strong>Toughness, Save and Wounds</strong> for models, and{' '}
        <strong>Attacks, Strength, Armor Penetration and Damage</strong> for
        weapons.
      </p>

      <h3>The MEQ</h3>
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
      <p>
        Any model with T4|Sv3+|W2 on their data sheet is considered{' '}
        <em>Pure MEQ</em>. Examples are:{' '}
      </p>
      <ul role="list" className="list-disc list-inside space-y-2">
        <li>
          Space Marines in Power Armor like Intercessors, Tactical Marines,
          Bladeguard Veterans, Eliminators, Infernius Squad and many others;
        </li>
        <li>
          Chaos Space Marines, for example Legionaries, Rubric Marines and
          Khorne Berzerkers;
        </li>
        <li>Tau Stealth Battlesuits;</li>
        <li>Eldar Shining Spears.</li>
      </ul>
    </article>
  )
}
