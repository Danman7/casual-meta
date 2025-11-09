import { Metadata } from 'next'
import Link from 'next/link'

import { getRouteTreeForPath } from '@/app/actions/getRouteTree'
import { PageTitle } from '@/app/ui/PageTitle'

export const metadata: Metadata = {
  title: 'Warhammer 40k: Factions | Casual Meta',
  description: 'An index of all factions of consequence in Warhammer 40k.',
}

export default async function Page() {
  const items = await getRouteTreeForPath('/warhammer-40k/factions')

  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle
        title="Factions"
        subtitle="To muster an army, one must first choose a faction."
      />

      <p>
        In this section we will look at every available faction for you to pick
        from.
      </p>

      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.title}
        </Link>
      ))}
    </article>
  )
}
