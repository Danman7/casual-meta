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
            General Shao is a <em>stance-based</em>, mid-range bruiser built
            around <strong>superb normals, oppressive pressure</strong>, and
            terrifying <strong>punish potential</strong>.
          </p>

          <p>
            The central idea of his fighting style are the{' '}
            <strong>two stances</strong> revolving around his axe. While armed
            (default stance), he is a{' '}
            <Link href={mkRoute('Neutral')}>neutral</Link> bully with reach that
            most characters can envy. Losing the axe alters his moveset, making
            him faster, with more aggressive rushdown.
          </p>

          <div>
            <div className="font-bold">Big boy.</div>
            <div>
              At 1100 HP, he's tied with Havik and Conan as the toughest
              characters in the game. He's tall too, making even his regular
              normals into anti-airs with some timing.
            </div>
          </div>

          <div>
            <div className="font-bold">Neutral beast.</div>
            <div>
              He's quite mobile for his size, having a good mix-up in both
              stances, and some of the best disjointed pokes in Axe stance.
            </div>
          </div>

          <div>
            <div className="font-bold">Gaps in the stances.</div>
            <div>
              While armed, the safer on block options have gaps, while the
              gapless ones are often unsafe. Also the Axe is weaker defensively
              at close pressure. And unarmed can feel awkward when played at the
              wrong range.
            </div>
          </div>

          <div>
            <div className="font-bold">Fighting zoners can get tricky.</div>
            <div>
              Shao does not have a fast, reliable solo anti-zoning tool. His
              only full-screen special, <span className="input">DB4</span>, is
              slow. He often needs Kameo support.
            </div>
          </div>
        </section>
      </section>

      <section>
        <h2 id="key-strings">Key strings</h2>

        <h3 id="normals">Normals</h3>
      </section>
    </>
  )
}
