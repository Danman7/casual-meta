import { Metadata } from 'next'

import { PageTitle } from '@/app/ui/PageTitle'

export const metadata: Metadata = {
  title: 'Mortal Kombat 1: Neutral | Casual Meta',
  description:
    'Understanding the Neutral state in Mortal Kombat 1 and its significance in gameplay.',
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

      <p className="text-green-500">Screenshot of typical round start.</p>

      <p>
        All game rounds start in Neutral state. If it is the first round,
        fighters are positioned at the center of the arena with the default
        space between them. Subsequent rounds depend on where the previous one
        ended. In any case, both combatants are some distance apart.
      </p>

      <h2>Footsies</h2>
      <p>
        One or both players can choose to rush down and press the attack
        immediately. Alternatively, they can start to move forwards and
        backwards, in and out of range of their opponent’s anticipated attacks
        without committing an attack. This is often referred to as{' '}
        <strong>Footsies</strong>.
      </p>
    </article>
  )
}
