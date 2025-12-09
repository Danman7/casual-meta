import { MK1_TITLE } from '@/app/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 3

export const navTitle = 'Anatomy of an attack'

export const metadata = generatePageMetadata(
  `${MK1_TITLE}: ${navTitle}`,
  'How moves work in Mortal Kombat.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1>{navTitle}</h1>
      <p className="text-lg text-light">
        If you must read only a single article in the MK section, let it be this
        one.
      </p>

      <p>
        In this page we will look at how moves work in detail. You can use this
        to better judge any character or situation. You can pause all game modes
        to bring up your chosen character's move list and follow along.
      </p>

      <h2>Block type</h2>

      <p>
        Underneath the frame data there is a basic rock-paper-scissors game
        based on stances. Next to every move in any fighter’s move list is a
        Block Type column (or section if you are in advanced view).
      </p>

      <p>
        A <strong>High</strong> attack hits any standing and a low blocking
        opponent. It will miss one who is ducking and not blocking.{' '}
      </p>
    </article>
  )
}
