import Link from 'next/link'

import { mkHref, mkMetadata, mkPage } from '@/app/siteMap'

const page = mkPage('momentum')

export const metadata = mkMetadata('momentum')

export default async function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <section>
        <h2 id="oki">Wake-up pressure (Okizeme)</h2>

        <p>
          When a character is knocked down, their defensive options are limited.
          The attacker can choose what attacks or mind games to use.
        </p>

        <p>
          Since wake-up pressure is a long term, it's often replaced by the
          common fighting game term <em>Okizeme</em> (oki for short), meaning
          "wake-up offense" in Japanese.
        </p>
      </section>

      <section>
        <h2 id="vortex">Vortex</h2>

        <p>
          A <em>vortex</em> is a looping situation where the attacker ends a
          combo in a way that forces the defender into{' '}
          <Link href={mkHref('pressure', '50/50s')}>guessing</Link> situation.
          They intentionally drop a combo early when they have a coming
          overhead/low mix-up. It's called vortex because if the defender
          guesses wrong, they get punished all over again.
        </p>
      </section>
    </>
  )
}
