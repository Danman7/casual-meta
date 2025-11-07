import { Metadata } from 'next'

import { PageTitle } from '@/app/ui/PageTitle'

export const metadata: Metadata = {
  title: 'Mortal Kombat 1: Getting Started | Casual Meta',
  description:
    'Introduction to Mortal Kombat 1 for new players, covering basics.',
}

export const navOrder = 1

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle title="Getting Started" />

      <p>
        The Getting Started section will help you understand the fundamentals of
        Mortal Kombat 1.
      </p>

      <p>
        The in-game tutorial describes concepts like stances, movement,
        attacking, blocking, special moves and damage and is interactive. You
        should go through its sections and pay attention to the written
        instructions. Many mechanics are explained there as good as can be.
        Still, in these articles we will add a fraction of community terms in
        with the fighting game basics, and you can use them as a reference if
        the game is not in front of you.
      </p>
    </article>
  )
}
