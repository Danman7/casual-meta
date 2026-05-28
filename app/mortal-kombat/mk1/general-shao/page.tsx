import Image from 'next/image'
import Link from 'next/link'

import Shao from '@/app/assets/mk1/shao.webp'
import { MK_TITLE } from '@/app/constants'
import { mkRoute } from '@/app/mortal-kombat/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 10

export const navTitle = 'General Shao'

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'A breakdown of General Shao in Mortal Kombat 1.',
)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

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
            <Link href={mkRoute('Neutral')}>neutral</Link> game around his long{' '}
            <Link href={`${mkRoute('Anatomy of attacks')}#disjointed`}>
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
