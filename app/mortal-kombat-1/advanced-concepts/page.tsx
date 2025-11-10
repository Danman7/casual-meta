import Link from 'next/link'

import { MK1_TITLE, WH40K_BASE_URL } from '@/app/constants'
import { PageTitle } from '@/app/ui/PageTitle'
import { generatePageMetadata } from '@/lib/metadata'
import { getRoutesFrom } from '@/lib/routes'

export const metadata = generatePageMetadata(
  `${MK1_TITLE}: Advanced Concepts`,
  'Explore advanced concepts in Warhammer 40k to deepen your understanding of the game.',
)

export const navOrder = 2

export default async function Page() {
  const items = getRoutesFrom(`${WH40K_BASE_URL}/advanced-concepts`)

  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle title="Advanced Concepts" />

      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </article>
  )
}
