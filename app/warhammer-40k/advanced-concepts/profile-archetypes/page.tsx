import { PageTitle } from '@/app/ui/PageTitle'
import { Metadata } from 'next'
import Link from 'next/link'
import { GiDeathSkull } from 'react-icons/gi'

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

      <h2>The MEQ - T4|Sv3+|W2</h2>

      <p>
        <em>Marine Equivalent</em> or <strong>MEQ</strong> refers to the common
        Space Marine infantry profile of <strong>T4|Sv3+|W2</strong>. Adeptus
        Astartes infantry in Power Armor, including{' '}
        <em>Intercessors, Tactical Marines, Sternguards, Eliminators</em> and
        many others, share this exact profile, hence the name. Such models are
        considered <strong>Pure MEQ</strong>.
      </p>

      <p>
        Alongside them there are many <strong>Soft MEQ</strong> units that come
        close to these characteristics. <em>Company Heroes</em> are MEQ with 4
        Wounds instead of 2. <em>Bladeguard Veterans</em> are MEQ with 3 Wounds
        and a 4+ Invulnerable Save.
      </p>
    </article>
  )
}
