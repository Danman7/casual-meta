import Link from 'next/link'

import { getRouteTreeForPath } from '@/app/actions/getRouteTree'
import { HOMM3_TITLE, WH40K_BASE_URL } from '@/app/constants'
import { PageTitle } from '@/app/ui/PageTitle'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  `${HOMM3_TITLE}: Factions | Casual Meta`,
  'An index of all factions in Heroes of Might and Magic 3.',
)

export default async function Page() {
  const items = await getRouteTreeForPath(`${WH40K_BASE_URL}/factions`)

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
