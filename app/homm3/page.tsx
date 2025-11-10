import { Metadata } from 'next'

import { PageTitle } from '@/app/ui/PageTitle'

export const metadata: Metadata = {
  title: 'Heroes of Might and Magic 3 | Casual Meta',
  description:
    'A repository of guides for Heroes of Might and Magic 3 and its expansions.',
}

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle title="Heroes of Might and Magic 3" />

      <p>
        “Heroes of Might and Magic 3” is easily among the most beloved
        turn-based strategy games of all time. It is a 1999 fantasy classic,
        revered among players and modders, still widely played today.
      </p>
    </article>
  )
}
