import { Metadata } from 'next'
import Link from 'next/link'

import { PageTitle } from '@/app/ui/PageTitle'
import { getRoutesFrom } from '@/lib/routes'

export const metadata: Metadata = {
  title: 'Warhammer 40k: Advanced Concepts | Casual Meta',
}

// Order after Getting Started
export const navOrder = 2

export default async function Page() {
  const items = getRoutesFrom('/warhammer-40k/advanced-concepts')

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
