import { WH40K_TITLE } from '@/app/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 13

export const navTitle = 'Astartes chapter units'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${navTitle}`,
  'An overview of the Space Marine chapter units.',
)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

      <p>text</p>
    </>
  )
}
