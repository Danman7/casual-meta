import { Metadata } from 'next'
import Image from 'next/image'
import { GiDeathSkull } from 'react-icons/gi'

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
        Models and weapons each have six numerical characteristics in their data
        sheets describing their potential performance. To be able to navigate
        the vast array of choices, we can recognize common profiles.
      </p>

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

      <h2>Movement</h2>

      <p>With movement things are much simpler.</p>

      <ul role="list" className="text-left space-y-2">
        <li className="flex items-center gap-4">
          <GiDeathSkull aria-hidden className="shrink-0 text-primary" />
          <span>
            Most <strong>models on foot</strong> will have <strong>M6"</strong>.
            Heavy infantry units may have M5", while Eldar battleline units tend
            to have M7".
          </span>
        </li>

        <li className="flex items-center gap-4">
          <GiDeathSkull aria-hidden className="shrink-0 text-primary" />
          <span>
            Most <strong>vehicles and infantry equipped with jump packs</strong>{' '}
            normally have <strong>M12"</strong>.
          </span>
        </li>

        <li className="flex items-center gap-4">
          <GiDeathSkull aria-hidden className="shrink-0 text-primary" />
          <span>
            Models <strong>hovering</strong> over the ground tend to have{' '}
            <strong>M14"</strong>, while <strong>flying units</strong> –{' '}
            <strong>M20"</strong>.
          </span>
        </li>
      </ul>
    </article>
  )
}
