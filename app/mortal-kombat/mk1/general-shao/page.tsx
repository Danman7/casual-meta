import Image from 'next/image'
import Link from 'next/link'

import Shao from '@/app/assets/mk1/shao.webp'
import { mkHref, mkMetadata, mkPage } from '@/app/siteMap'

const page = mkPage('generalShao')

export const metadata = mkMetadata('generalShao')

export default async function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <section>
        <Image
          className="mx-auto h-96 w-auto md:h-full md:max-w-1/2 md:float-right"
          src={Shao}
          alt="General Shao in Mortal Kombat 1"
          loading="eager"
        />

        <section>
          <p>
            General Shao is a <em>stance-based</em> bruiser who shifts between{' '}
            <strong>mid-range control</strong> and{' '}
            <strong>explosive close-range pressure</strong>.
          </p>

          <p>
            Armed with his axe, he plays a strong{' '}
            <Link href={mkHref('neutral')}>neutral</Link> game around his long{' '}
            <Link href={mkHref('anatomyOfAttacks', 'disjointed')}>
              disjointed
            </Link>{' '}
            normals. His reach and speed help bait whiffs, while his height
            helps with anti-air. The tradeoff is that he relies on commitment to
            get his best pressure started.
          </p>
        </section>
      </section>

      <section>
        <h2 id="key-strings">Key strings</h2>

        <h3 id="normals">Normals</h3>
      </section>
    </>
  )
}
