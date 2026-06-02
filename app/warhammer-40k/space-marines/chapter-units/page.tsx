import { WH40K_TITLE } from '@/app/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 12

export const navTitle = 'Space Marine chapter units'

export const shortTitle = 'Chapter units'

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
