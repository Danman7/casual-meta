import Link from 'next/link'

import { MK_TITLE } from '@/app/constants'
import { mkRoute } from '@/app/mortal-kombat/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 4

export const navTitle = 'Momentum'

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'How momentum and okizeme work in MK.',
)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

      <section>
        <h2 id="oki">Wake-up pressure (Okizeme)</h2>

        <p>
          When a character is knocked down, their defensive options are limited.
          The attacker can choose what attacks or mind games to use.
        </p>

        <p>
          Since wake-up pressure is too long, it's often replaced by the common
          fighting games term <em>Okizeme</em> (oki for short), meaning "wake up
          offense" in Japanese.
        </p>
      </section>

      <section>
        <h2 id="vortex">Vortex</h2>

        <p>
          A <em>vortex</em> is a looping situation where, the attacker ends a
          combo in a way that forces the defender into{' '}
          <Link href={`${mkRoute('Pressure')}#50/50s`}>guessing</Link>{' '}
          situation. They intentionally drop a combo early when they have a
          comming overhead/low mix. It's called vorgex because if the defender
          guesses wrong, they get punished all over again.
        </p>
      </section>
    </>
  )
}
