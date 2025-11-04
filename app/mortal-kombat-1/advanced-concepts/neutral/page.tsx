import { Metadata } from 'next'

import { PageTitle } from '@/app/ui/PageTitle'

export const metadata: Metadata = {
  title: 'Mortal Kombat 1: Neutral | Casual Meta',
}

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle title="Neutral" />

      <p>
        Neutral is a state of the round where{' '}
        <strong>neither fighter has advantage over the other</strong>. Both are
        free to move, attack or block as they please.
      </p>
    </article>
  )
}
