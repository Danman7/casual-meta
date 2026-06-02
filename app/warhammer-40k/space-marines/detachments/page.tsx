import { WH40K_TITLE } from '@/app/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 13

export const navTitle = 'Space Marine detachments'

export const shortTitle = 'Detachments'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${navTitle}`,
  'An overview of the Space Marine detachments.',
)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

      <section>
        <p>text</p>
      </section>
    </>
  )
}
