import Link from 'next/link'

import { MK1_BASE_URL, MK1_TITLE } from '@/app/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 6

export const navTitle = 'Pressure'

export const metadata = generatePageMetadata(
  `${MK1_TITLE}: ${navTitle}`,
  'Mind games and conditioning in Mortal Kombat.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1>{navTitle}</h1>

      <p className="text-lg text-light">
        Every move any character can do can be countered successfully provided
        you can react in time. Too bad everything happens so quickly.
      </p>

      <p>
        In this page we will explain the many mind games and frame traps that go
        into converting a good{' '}
        <Link href={`${MK1_BASE_URL}/neutral`}>neutral</Link> position into
        actual damage. You should read the{' '}
        <Link href={`${MK1_BASE_URL}/anatomy-of-an-attack`}>
          Anatomy of an attack
        </Link>{' '}
        page first if you haven’t already.
      </p>

      <p>
        Mortal Kombat is about reading intentions. To manage with the fast pace
        of the game, players enter a state of flow. They scout and act according
        to how they predict their opponent will react. Here we will mention some
        approaches to throwing your opponent’s flow off balance.
      </p>

      <h2>Mix-up</h2>

      <p>
        As you know, the standing position gives fighters the best mobility.
        That is why most of the time blocking high and staying on the move is a
        good choice. The idea of a mix-up is to break this specific rhythm.
      </p>
    </article>
  )
}
