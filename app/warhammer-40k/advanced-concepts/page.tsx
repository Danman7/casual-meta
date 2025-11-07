import { Metadata } from 'next'
import Link from 'next/link'

import { PageTitle } from '@/app/ui/PageTitle'
import { WH40K_BASE_URL } from '@/app/warhammer-40k/constants'
import { getRoutesFrom } from '@/lib/routes'

export const metadata: Metadata = {
  title: 'Warhammer 40k: Advanced Concepts | Casual Meta',
  description:
    'Explore advanced concepts in Warhammer 40k to deepen your understanding of the game.',
}

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
