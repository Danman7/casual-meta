import Link from 'next/link'

import { getRouteTreeForPath } from '@/app/actions/getRouteTree'
import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
import { PageTitle } from '@/app/ui/PageTitle'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: Factions`,
  'An index of all factions of consequence in Warhammer 40k.',
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
