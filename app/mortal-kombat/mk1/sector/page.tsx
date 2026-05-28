import Image from 'next/image'

import Sektor from '@/app/assets/mk1/sector.webp'
import { MK_TITLE } from '@/app/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 10

export const navTitle = 'Sektor'

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'A breakdown of Sektor in Mortal Kombat 1.',
)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

      <section>
        <Image
          className="mx-auto h-96 w-auto md:h-full md:max-w-1/2 md:float-right"
          src={Sektor}
          alt="Sektor in Mortal Kombat 1"
          loading="eager"
        />

        <section>
          <div>
            <div className="font-bold">Own the space.</div>
            <div>
              Her rockets can travel in many patterns, staying on the screen for
              a long time, allowing her to pressure or zone when necessary. She
              also has multiple good advancing normals.
            </div>
          </div>

          <div>
            <div className="font-bold">Accessible, versatile combos.</div>
            <div>
              Once you understand the main pattern of launching into teleport,
              from her air ground bounce, you can go for damage, screen carry,
              knockdown, or a safe jump.
            </div>
          </div>

          <div>
            <div className="font-bold">Unsafe mix-up.</div>
            <div>
              She has cancellable standing overhead and low options, but unsafe
              without Kameo support.
            </div>
          </div>

          <div>
            <div className="font-bold">Watch your resources.</div>
            <div>
              Execution is not as hard as choosing the correct route based on
              meter, Kameo availability, screen position, and whether you want
              damage, safety, zoning, or wake-up pressure afterward.
            </div>
          </div>
        </section>
      </section>

      <section>
        <h2 id="key-strings">Key strings</h2>

        <h3 id="normals">Normals</h3>

        <p>
          <span className="input">11</span> is the fastest (7 frames), safe (-1
          on block) <em>punisher</em> and <em>combo starter</em>. You can
          hit-confirm into a special, or stagger
          <span className="input">112</span> to test the opponent’s reactions.
        </p>

        <p>
          <span className="input">42</span> is a slower, safe (0 on block),
          <em>higher reward punish</em>, for when you know you have enough time.
          Not terrible in pressure either, because Sektor can follow up with a
          down poke or a fast jab. Can be cancelled into teleport, or you can
          buffer a Kameo attack from <span className="input">42 Grab</span>.
        </p>

        <p>
          <span className="input">F2</span> is a key <em>advancing mid</em>,
          controlling space, and checking crouchers. It leads into the
          hit-confirmable <span className="input">F21</span> that is safer to
          check before a full string, an EX teleport (the normal one won't
          work), or Kameo. <span className="input">F212</span> puts Sektor
          airborne and can be followed by air specials, but is unsafe.
        </p>

        <p>
          <span className="input">B2</span> is your unsafe, standing, overhead
          starter, that leads into the very unsafe{' '}
          <span className="input">B22</span> (-18 on block). Mix-up, yes, but
          difficult to convert out of unless covered by a Kameo assist.
        </p>

        <p>
          <span className="input">B3</span> is the safer, low part of your
          mix-up. It leads into <span className="input">B34</span> which is much
          safer than the overhead route and hits multiple times, which can help
          against armored attempts. It is a key part of Sektor’s close-range
          offense.
        </p>
      </section>
    </>
  )
}
