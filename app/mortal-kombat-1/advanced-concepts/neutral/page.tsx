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
        To give you an idea of how this looks,{' '}
        <strong>all game rounds start in Neutral</strong> state. If it is the
        first round, fighters are positioned at the center of the arena with the
        default space between them. Subsequent rounds depend on where the
        previous one ended. In any case, both combatants start some distance
        apart.
      </p>

      <p>
        From here play can continue in any direction, but so far as no advantage
        is gained by either character, the state remains Neutral. Players can
        back away or come closer, dash, jump around or over each other, probe
        with safe attacks and this can go on for some time. Eventually one of
        them will take a risk trying and gain the upper hand.
      </p>

      <p className="text-lg font-bold">
        The goal of Neutral is to gain a lead in the fight.
      </p>

      <p>
        It can be done through baiting a mistake from your foe, pressuring them
        into one or patiently waiting for an opportunity. Timing and reaction
        play as much a role as understanding the characters. Here are some terms
        and tools that can clarify Neutral.
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
