import { PageTitle } from '@/app/ui/PageTitle'
import { WARHAMMER_40K_ADVANCED_CONCEPTS_ITEMS } from '@/app/warhammer-40k/advanced-concepts/constants'
import { Metadata } from 'next'
import Link from 'next/link'
import { GiDeathSkull } from 'react-icons/gi'

export const metadata: Metadata = {
  title: 'Warhammer 40k: Advanced Concepts | Casual Meta',
}

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle title="Advanced Concepts" />

      <ul>
        {WARHAMMER_40K_ADVANCED_CONCEPTS_ITEMS.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </article>
  )
}
